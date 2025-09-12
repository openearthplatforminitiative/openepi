import { fetchArticleBySlug, fetchArticles, sanityClient } from "@/sanity/api"
import { ImageResponse } from "next/og"
import imageUrlBuilder from "@sanity/image-url"

export async function generateStaticParams(): Promise<{ slug: string }[]> {
	const data = await fetchArticles()
	return data.articles.map((article) => ({
		slug: article.slug,
	}))
}

export const size = {
	width: 1200,
	height: 630,
}

export const contentType = "image/jpeg"

export default async function ArticleImage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params
	const article = await fetchArticleBySlug(slug)
	if (!article) {
		return new ImageResponse(
			(
				<div
					style={{
						fontSize: 64,
						background: "white",
						width: "100%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						color: "black",
					}}
				>
					Article not found
				</div>
			),
			{
				...size,
			}
		)
	}

	const builder = imageUrlBuilder(sanityClient)
	const imageUrl = article.mainImage?.asset?._ref
		? builder.image(article.mainImage.asset._ref).width(1200).height(630).url()
		: null

	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					background: "linear-gradient(45deg, #f0f9ff, #e0f2fe)",
					position: "relative",
				}}
			>
				{imageUrl && (
					<img
						src={imageUrl}
						alt={article.mainImage.alt ?? ""}
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
							position: "absolute",
							top: 0,
							left: 0,
						}}
					/>
				)}
			</div>
		),
		{
			...size,
		}
	)
}
