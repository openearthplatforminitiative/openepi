import { NextRequest } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
	const revalidateSecret = process.env.SANITY_REVALIDATE_SECRET;
	try {
		const { body, isValidSignature } = await parseBody(req, revalidateSecret);

		if (!isValidSignature) {
			const errorMessage = "Invalid signature";
			console.log(errorMessage);
			return new Response(errorMessage, { status: 401 });
		}

		if (!body?._type || !["post", "featured", "partner"].includes(body._type)) {
			const errorMessage = "Invalid _type";
			console.error(errorMessage, { body });
			return new Response(errorMessage, { status: 400 });
		}

		const staleRoutes = [];

		switch (body._type) {
			case "featured":
				staleRoutes.push("/");
				break;
			case "post":
				// revalidatePath does not acccept literal paths yet e.g. "/posts/${body.slug}", see https://github.com/vercel/next.js/discussions/53154
				staleRoutes.push("/posts/[slug]");
				break;
			case "partner":
				staleRoutes.push("/", "/posts/[slug]");
				break;
			default:
				break;
		}

        for (const route of staleRoutes) {
            await revalidatePath(route);
        }

		const message = `Updated routes: ${staleRoutes.join(", ")}`;
		console.log(message);
		return new Response(message);
	} catch (error) {
		let errorMessage = "Unknown error";
		if (error instanceof Error) errorMessage = error.message;
		console.error(error);
		return new Response(errorMessage, { status: 500 });
	}
}
