import {
	Article,
	fetchArticleBySlug,
	fetchArticles,
	fetchNewestArticlesBySlug,
	sanityClient,
} from "@/sanity/api"
import { Box, Tooltip, Typography } from "@mui/material"
import { BackIcon } from "@/icons/BackIcon"
import Link from "next/link"
import imageUrlBuilder from "@sanity/image-url"
import ArticleCard from "@/components/ArticleCard"
import PortableTextStyled from "@/components/PortableTextStyled/PortableTextStyled"
import { notFound } from "next/navigation"
import { CameraAltOutlined } from "@mui/icons-material"
import Image from "next/image"
import { getImageDimensions } from "@sanity/asset-utils"
import { TableOfContents } from "@/components/PortableTextStyled/TableOfContents"
import { TableOfContentsMenu } from "@/components/PortableTextStyled/TableOfContentsMenu"
import { getContentHeadings } from "@/lib/ContentHeadings"
import { Metadata } from "next"

type Props = {
	params: Promise<{ slug: string }>
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
	const data = await fetchArticles()
	return data.articles.map((article) => ({
		slug: article.slug,
	}))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params

	const article = await fetchArticleBySlug(slug)
	if (!article) {
		return {}
	}

	return {
		title: article.title,
		description: article.description,
	}
}

export default async function PostPage({ params }: Props) {
	const { slug } = await params
	const article = await fetchArticleBySlug(slug)
	if (!article) return notFound()
	const articles: Article[] = await fetchNewestArticlesBySlug(slug)
	const { width, height } = getImageDimensions(article.mainImage)
	const headings = getContentHeadings(article.body)
	const publishedAt = new Date(article.publishedAt)

	const builder = imageUrlBuilder(sanityClient)
	return (
		<article className="w-full h-full lg:max-w-7xl px-8 mx-auto lg:my-44 my-20">
			<Link
				href="/articles"
				className="flex flex-row items-center text-primary-main underline hover:no-underline gap-1"
			>
				<BackIcon />
				<Typography className="text-base">Back to articles</Typography>
			</Link>

			<div id="top" className="flex flex-col gap-8 mt-14">
				<h1 className="leading-[48px] xs:leading-[64px] text-4xl xs:text-6xl">
					{article.title}
				</h1>
				{publishedAt && (
					<Typography variant="subtitle1">
						Published:{" "}
						{publishedAt.toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</Typography>
				)}
				<div className="relative">
					<Image
						src={
							article.mainImage.asset?._ref
								? builder.image(article.mainImage.asset._ref).toString()
								: ""
						}
						alt={article.mainImage.alt ?? ""}
						loading="lazy"
						height={height}
						width={width}
						className="rounded-xl w-full object-cover aspect-video"
					/>
					{article.mainImage && article.mainImage?.caption && (
						<Tooltip
							placement="left-end"
							title={article.mainImage.caption}
							arrow
						>
							<div className="flex justify-center items-center h-fit aspect-square rounded-full bg-secondary-90 text-secondary-main hover:bg-secondary-80 absolute text-[12px] bottom-0 right-0 p-2 m-2">
								<CameraAltOutlined fontSize="inherit" />
							</div>
						</Tooltip>
					)}
				</div>
				{headings && headings.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-[16rem_minmax(0,1fr)] gap-8 max-w-full">
						<aside className="md:sticky top-6 self-start w-full">
							<TableOfContents headings={headings} />
						</aside>
						<div className="w-full max-w-full">
							<PortableTextStyled value={article.body} />
						</div>
					</div>
				) : (
					<div className="w-full max-w-full">
						<PortableTextStyled value={article.body} />
					</div>
				)}
				{headings && headings.length > 0 && (
					<aside className="sticky self-end bottom-8 right-0 md:hidden">
						<TableOfContentsMenu value={article.body} />
					</aside>
				)}
				<hr />
				{publishedAt && (
					<Typography variant="subtitle1">
						Published:{" "}
						{publishedAt.toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</Typography>
				)}
				{articles.length > 0 && (
					<Box className="flex flex-col mt-20 md:mt-28 gap-12 md:justify-end">
						<Typography variant="h2" className="text-4xl sm:text-5xl">
							More articles
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
					</Box>
				)}
			</div>
		</article>
	)
}
