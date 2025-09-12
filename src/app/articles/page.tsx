import { Box, Typography } from "@mui/material"
import { fetchArticles, sanityClient } from "@/sanity/api"
import ArticleCard from "@/components/ArticleCard"
import imageUrlBuilder from "@sanity/image-url"

export default async function ArticlesPage() {
	const { articles } = await fetchArticles().catch(() => {
		return { articles: [] }
	})

	const builder = imageUrlBuilder(sanityClient)

	return (
		<Box className="flex justify-center px-6 md:px-20 py-16 xs:py-28">
			<Box className="flex flex-1 flex-col max-w-6xl">
				<Typography variant="h2" className="text-4xl xs:text-5xl mb-16">
					Latest updates
				</Typography>

				<Box className="flex flex-row flex-wrap gap-6">
					{articles.map((post) => (
						<ArticleCard
							key={post._id}
							header={post.title}
							href={`/articles/${post.slug}`}
							imageUrl={
								post.mainImage !== null
									? builder.image(post.mainImage).toString()
									: "/article-placeholder.png"
							}
							alt="Link to content of article"
						/>
					))}
				</Box>
			</Box>
		</Box>
	)
}
