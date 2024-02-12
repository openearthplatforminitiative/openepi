import {
	Article,
	fetchArticleBySlug,
	fetchArticles,
	fetchTwoNewestArticlesBySlug,
	sanityClient,
} from "@/sanity/api";
import { Box, Typography } from "@mui/material";
import { BackIcon } from "@/app/icons/BackIcon";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import ArticleCard from "@/app/components/ArticleCard";
import PortableTextStyled from "@/app/components/PortableTextStyled";

export default async function PostPage({
	params,
}: {
	params: { slug: string };
}) {
	const article = await fetchArticleBySlug(params.slug);
	const articles: Article[] = await fetchTwoNewestArticlesBySlug(params.slug);

	const builder = imageUrlBuilder(sanityClient);
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
				<PortableTextStyled content={article.body} />
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
									? builder.image(article.mainImage).toString()
									: "/article-placeholder.png"
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
