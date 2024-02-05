"use client";

import { Box, Typography } from "@mui/material";
import { fetchPosts, Post, sanityClient } from "@/sanity/api";
import ArticleCard from "@/app/components/ArticleCard";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";

const Home = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const currentPath = usePathname();
	const builder = imageUrlBuilder(sanityClient);
	const urlFor = (source: string) => builder.image(source);

	useEffect(() => {
		fetchPosts()
			.then((fetchedPosts) => {
				console.log("Posts: ", fetchedPosts);
				setPosts(fetchedPosts);
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

					<Box className={"flex flex-row flex-wrap gap-6 "}>
						{posts.map((post) => (
							<ArticleCard
								key={post._id}
								header={post.title}
								href={currentPath + "/" + post.slug}
								imageUrl={
									post.mainImage !== null
										? urlFor(post.mainImage).toString()
										: ""
								}
								alt={"Link to content of article"}
							/>
						))}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
