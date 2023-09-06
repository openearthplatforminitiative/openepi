import { fetchPostBySlug, fetchPosts } from "@/sanity/api";
import PortableText from "react-portable-text";
import Header from "@/components/Header";
import Footer3 from "@/components/Footer3";

async function Post({ params }: { params: { slug: string } }) {
	const { body } = await fetchPostBySlug(params.slug);
	return (
		<div className="mx-auto">
			<Header />
			<div className="p-3 max-w-5xl mx-auto">
				<PortableText
					className="mt-10"
					dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
					projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
					content={body}
					serializers={{
						h1: (props: any) => (
							<h1
								className="text-4xl font-sans my-3 text-gray-700"
								{...props}
							/>
						),
						h2: (props: any) => (
							<h2
								className="text-2xl font-sans my-3 text-gray-700"
								{...props}
							/>
						),
						h3: (props: any) => (
							<h3 className="text-xl font-sans my-3 text-gray-700" {...props} />
						),
						normal: (props: any) => (
							<p className="text-l font-sans my-4 text-gray-700" {...props} />
						),
						li: ({ children }: any) => (
							<li className="ml-4 list-disc">{children}</li>
						),
						link: ({ href, children }: any) => (
							<a href={href} className="text-blue hover:underline">
								{children}
							</a>
						),
					}}
				/>
			</div>
			<Footer3 />
		</div>
	);
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
	const posts = await fetchPosts();
	return posts.map(({ slug }) => ({ slug }));
}

export default Post;
