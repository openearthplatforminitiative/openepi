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
	const [startIndex, setStartIndex] = useState<number>(0); // State to track the starting index

	const currentPath = usePathname();
	const builder = imageUrlBuilder(sanityClient);
	const urlFor = (source: string) => builder.image(source);

	const loadMoreArticles = () => {
		const newStartIndex = articles.length;
		fetchArticles(newStartIndex, 2)
			.then((fetchedArticles) => {
				if (fetchedArticles.length > 0) {
					setArticles([...articles, ...fetchedArticles]);
					setStartIndex(newStartIndex);
				}
			})
			.catch((error) => {
				console.error("Failed to fetch articles:", error);
			});
	};

	useEffect(() => {
		fetchArticles(0, 5)
			.then((fetchedPosts) => {
				setArticles(fetchedPosts);
			})
			.catch((error) => {
				console.error("Failed to fetch articles:", error);
			});
	}, []);

	return (
		<Box className={"w-full"}>
			<Box className={"flex w-full justify-center"}>
				<Box
					className={
						"flex flex-col flex-wrap gap-6 w-full h-full lg:max-w-7xl p-6 lg:my-44 my-20"
					}
				>
					<Typography variant={"h2"} className={"text-4xl xs:text-5xl mb-16"}>
						Latest updates
					</Typography>

					<Box className={"flex flex-row flex-wrap gap-6"}>
						{articles
							.sort(
								(a, b) =>
									new Date(b.publishedAt).getTime() -
									new Date(a.publishedAt).getTime(),
							)
							.map((post) => (
								<ArticleCard
									key={post._id}
									header={post.title}
									href={currentPath + "/" + post.slug}
									imageUrl={
										post.mainImage !== null
											? urlFor(post.mainImage).toString()
											: "/article_1.png"
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
									"text-primary-main sm:w-fit rounded-full border-neutralVariant-50 normal-case lg:text-sm text-lg h-10"
								}
								startIcon={<PlusIcon />}
								onClick={loadMoreArticles}
							>
								More articles
							</Button>
						</Box>
					)}
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
