import {
	fetchDocumentBySlug,
	fetchDocuments,
	sanityClient,
} from "@/sanity/api";
import PortableText from "react-portable-text";
import { Box, Table, Typography } from "@mui/material";
import { BackIcon } from "@/app/icons/BackIcon";
import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import CodeBlock from "@/app/components/CodeBlock";

export default async function DocumentPage({
	params,
}: {
	params: { slug: string };
}) {
	const document = await fetchDocumentBySlug(params.slug);
	const builder = imageUrlBuilder(sanityClient);

	return (
		<Box
			className={
				"flex flex-col flex-wrap gap-6 w-full h-full lg:max-w-7xl p-6 lg:my-44 my-20"
			}
		>
			<Link
				href="/resources"
				className={
					"flex flex-row items-center text-primary-main underline hover:no-underline -mt-20 gap-1 mb-14 w-fit"
				}
			>
				<BackIcon />
				<Typography className={"text-base"}> Back to resources </Typography>
			</Link>
			{document.body !== null && document.body !== undefined ? (
				<PortableText
					dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
					projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
					content={document.body ?? []}
					serializers={{
						h1: (props: any) => (
							<h1 className="text-5xl xs:text-6xl mb-12" {...props} />
						),
						h2: (props: any) => (
							<h2 className="text-4xl xs:text-5xl mb-6" {...props} />
						),
						h3: (props: any) => (
							<h3 className="text-3xl xs:text-4xl mb-6" {...props} />
						),
						h4: (props: any) => (
							<h4 className="text-2xl xs:text-3xl mb-6" {...props} />
						),
						normal: (props: any) => (
							<p className="text-base mb-10" {...props} />
						),
						table: (props: any) => <Table {...props} />,
						li: ({ children }: any) => (
							<li className="ml-4 text-base list-disc">{children}</li>
						),
						ul: ({ children }: any) => (
							<ul className={"ml-4 mb-6"}>{children}</ul>
						),
						blockquote: ({ children }: any) => (
							<blockquote className={"ml-4 text-base italic"}>
								{children}
							</blockquote>
						),
						link: ({ href, children }: any) => (
							<a
								href={href}
								className="text-primary-main underline hover:no-underline"
							>
								{children}
							</a>
						),
						image: (value: any, props: any) => {
							const { width, height } = getImageDimensions(value);

							return (
								<Image
									src={value !== null ? builder.image(value).toString() : ""}
									alt={"Article photo"}
									loading={"lazy"}
									height={height}
									width={width}
									className={"w-auto h-auto my-20"}
									{...props}
								/>
							);
						},
					}}
				/>
			) : (
				<Typography>No content published yet</Typography>
			)}

			{document.code_examples && document.code_examples.length > 0 && (
				<Typography>Examples</Typography>
			)}
			{document.code_examples &&
				document.code_examples.map((codeBlock, index) => (
					<Box key={index}>
						<Typography>{codeBlock.language.toUpperCase()}</Typography>
						<CodeBlock
							codeString={codeBlock.code}
							language={codeBlock.language}
						/>
					</Box>
				))}
		</Box>
	);
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
	const data = await fetchDocuments();
	return data.map(({ slug }) => ({ slug }));
}
