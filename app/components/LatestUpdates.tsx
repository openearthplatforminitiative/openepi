import { Box, Button, Typography } from "@mui/material";
import ArticleCard from "@/app/components/ArticleCard";
import Link from "next/link";
import { Article, sanityClient } from "@/sanity/api";
import imageUrlBuilder from "@sanity/image-url";

interface LatestUpdatesProps {
	articles: Article[];
}
const LatestUpdates = ({ articles }: LatestUpdatesProps) => {
	const builder = imageUrlBuilder(sanityClient);
	return (
		<Box className="flex flex-col gap-12 md:justify-end">
			<Typography variant="h2" className="text-4xl sm:text-5xl">
				Latest updates
			</Typography>
			<Box className="flex flex-wrap gap-12">
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
						alt="Link to content of article"
					/>
				))}
			</Box>
			<Box className="flex flex-row justify-end w-fit">
				<Link href="/articles" className="lg:w-fit w-full">
					<Button
						variant="outlined"
						className="text-primary-main rounded-full border-neutralVariant-50 normal-case shadow-none text-xl px-8 py-4"
					>
						More articles
					</Button>
				</Link>
			</Box>
		</Box>
	);
};

export default LatestUpdates;
