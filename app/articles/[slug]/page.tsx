import {
	Article,
	fetchArticleBySlug,
	fetchArticles,
	fetchTwoNewestArticlesBySlug,
	sanityClient,
} from "@/sanity/api";
import PortableText from "react-portable-text";
import { Box, Typography } from "@mui/material";
import { BackIcon } from "@/app/icons/BackIcon";
import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import ArticleCard from "@/app/components/ArticleCard";

export default async function PostPage({
	params,
}: {
	params: { slug: string };
}) {
	const article = await fetchArticleBySlug(params.slug);
	const articles: Article[] = await fetchTwoNewestArticlesBySlug(params.slug);

	const builder = imageUrlBuilder(sanityClient);
	const urlFor = (source: string) => builder.image(source);
	return (
		<Box
			className={
				"flex flex-col flex-wrap gap-6 w-full h-full lg:max-w-7xl p-6 lg:my-44 my-20"
			}
		>
			<Link
				href="/articles"
				className={
					"flex flex-row items-center text-primary-main underline hover:no-underline -mt-20 gap-1 mb-14 w-fit"
				}
			>
				<BackIcon />
				<Typography className={"text-base"}> Back to articles </Typography>
			</Link>
			{article.body !== null ? (
				<PortableText
					dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
					projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
					content={article.body}
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
									src={value !== null ? urlFor(value).toString() : ""}
									alt={""}
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
			<Box className={"flex flex-col mt-20 md:mt-28 gap-12 md:justify-end"}>
				<Typography variant={"h2"} className={"text-4xl sm:text-5xl"}>
					More articles
				</Typography>
				<Box className={"flex flex-wrap gap-12"}>
					{articles.map((article) => (
						<ArticleCard
							key={article._id}
							header={article.title}
							href={"/articles/" + article.slug}
							imageUrl={
								article.mainImage !== null
									? urlFor(article.mainImage).toString()
									: "/article_1.png"
							}
							alt={"Link to content of article"}
						/>
					))}
				</Box>
			</Box>
		</Box>
	);
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
	const data = await fetchArticles();
	return data.articles.map(({ slug }) => ({ slug }));
}
