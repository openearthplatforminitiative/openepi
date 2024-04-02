"use client";

import { Box, Button, Typography } from "@mui/material";
import { fetchArticles, Article, sanityClient } from "@/sanity/api";
import ArticleCard from "@/app/components/ArticleCard";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { PlusIcon } from "@/app/icons/PlusIcon";

const Home = () => {
	const [articles, setArticles] = useState<Article[]>([]);
	const [totalArticles, setTotalArticles] = useState<number>(0);
	const [startIndex, setStartIndex] = useState<number>(0); // State to track the starting index

	const currentPath = usePathname();
	const builder = imageUrlBuilder(sanityClient);

	const loadMoreArticles = () => {
		const newStartIndex = articles.length;
		fetchArticles(newStartIndex, 2)
			.then((data) => {
				if (data.articles.length > 0) {
					setArticles([...articles, ...data.articles]);
					setStartIndex(newStartIndex);
				}
			})
			.catch((error) => {
				console.error("Failed to fetch articles:", error);
			});
	};

	useEffect(() => {
		fetchArticles(0, 5)
			.then((data) => {
				setArticles(data.articles);
				setTotalArticles(data.total);
			})
			.catch((error) => {
				console.error("Failed to fetch articles:", error);
			});
	}, []);

	return (
		<Box className={"flex justify-center px-6 md:px-20 py-16 xs:py-28"}>
			<Box className={"flex flex-1 flex-col max-w-6xl"}>
				<Typography variant={"h2"} className={"text-4xl xs:text-5xl mb-16"}>
					Latest updates
				</Typography>

				<Box className={"flex flex-row flex-wrap gap-6"}>
					{articles.map((post) => (
						<ArticleCard
							key={post._id}
							header={post.title}
							href={currentPath + "/" + post.slug}
							imageUrl={
								post.mainImage !== null
									? builder.image(post.mainImage).toString()
									: "/article-placeholder.png"
							}
							alt={"Link to content of article"}
						/>
					))}
				</Box>
				{articles.length > 5 && (
					<Box className={"flex w-full justify-end mt-8"}>
						<Button
							variant={"outlined"}
							className={
								totalArticles !== articles.length
									? "text-primary-main sm:w-fit rounded-full border-neutralVariant-50 normal-case lg:text-sm text-lg h-10"
									: "sm:w-fit rounded-full normal-case lg:text-sm text-lg h-10"
							}
							startIcon={
								<PlusIcon
									color={
										totalArticles !== articles.length ? "#006D41" : "gray"
									}
								/>
							}
							disabled={totalArticles === articles.length}
							onClick={loadMoreArticles}
						>
							More articles
						</Button>
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default Home;
