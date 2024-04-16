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
		<Box className={"flex justify-center px-6 md:px-20 py-16 xs:py-28"}>
			<Box className={"flex flex-col max-w-6xl"}>
				<Link
					href="/articles"
					className={
						"flex flex-row items-center text-primary-main underline hover:no-underline gap-1"
					}
				>
					<BackIcon />
					<Typography className={"text-base"}>Back to articles</Typography>
				</Link>
				{article.body !== null ? (
					<PortableTextStyled content={article.body} />
				) : (
					<Typography>No content published yet</Typography>
				)}
				{articles.length > 0 && (
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
				)}
			</Box>
		</Box>
	);
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
	const data = await fetchArticles();
	return data.articles.map(({ slug }) => ({ slug }));
}
