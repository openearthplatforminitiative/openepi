import {
	fetchDocumentBySlug,
	fetchDocuments,
} from "@/sanity/api";
import PortableTextStyled from "@/app/components/PortableTextStyled";
import { Box, Typography } from "@mui/material";
import { BackIcon } from "@/app/icons/BackIcon";
import Link from "next/link";
import CodeBlock from "@/app/components/CodeBlock";

export default async function DocumentPage({
	params,
}: {
	params: { slug: string };
}) {
	const document = await fetchDocumentBySlug(params.slug);
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
				<PortableTextStyled
					content={document.body}
					internalLinkPrefix={"/resources"}
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
