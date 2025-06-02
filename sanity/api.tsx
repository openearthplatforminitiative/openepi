import { createClient } from "@sanity/client"

export type CustomButton = {
	text: string
	url: string
}

export interface Featured {
	_id: string
	title: string
	description: string
	buttons: CustomButton[]
	promoted: boolean
}

export interface Article {
	_id: string
	_createAt: string
	title: string
	body: object[]
	slug: string
	mainImage: string
	description: string
	publishedAt: string
}

export interface ArticleObject {
	articles: Article[]
	total: number
}

interface CodeBlock {
	code: string
	language: string
}

export interface Document {
	_id: string
	title: string
	slug: { current: string }
	parentSlug?: { current: string }
	parentTitle?: string
	body: object[]
	code_examples: CodeBlock[]
}

export interface Partner {
	_id: string
	title: string
	url: string
	description: string
	partnerLogo: string
}

const config = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	useCdn: false,
	apiVersion: "2025-06-02",
}

export const sanityClient = createClient(config)

export async function fetchFeatured(): Promise<Featured[]> {
	const query = `*[_type == "featured"]{_id, title, description, buttons, promoted}`
	return sanityClient.fetch(query)
}

export async function fetchArticleBySlug(slug: string): Promise<Article> {
	const query = `*[_type == "article" && slug.current == $slug][0]{_id, title, "slug": slug.current, mainImage, description, body}`
	return sanityClient.fetch(query, { slug })
}

export async function fetchAllArticleSlugs(): Promise<{ slug: string }[]> {
	const query = `*[_type == "article" && defined(slug.current)]{ "slug": slug.current }`
	return sanityClient.fetch(query)
}

export async function fetchArticles(
	start = 0,
	limit = 5
): Promise<ArticleObject> {
	const query = `{
    "articles": *[_type == "article" && defined(slug.current)] | order(dateTime(publishedAt) desc) {
      _id, title, "slug": slug.current, mainImage, description, body, publishedAt
    }[${start}..${start + limit}],
    "total": count(*[_type == "article" && defined(slug.current)])
  }`
	return sanityClient.fetch(query)
}

export async function fetchTwoNewestArticles(): Promise<Article[]> {
	const query = `*[_type == "article" && defined(slug.current)] | order(dateTime(publishedAt) desc) [0...2]{
    _id, title, "slug": slug.current, mainImage, description, body, publishedAt
  }`
	return sanityClient.fetch(query)
}

export async function fetchTwoNewestArticlesBySlug(
	slug: string
): Promise<Article[]> {
	const query = `*[_type == "article" && defined(slug.current) && slug.current != $slug] | order(dateTime(publishedAt) desc) [0...2]{
    _id, title, "slug": slug.current, mainImage, description, body, publishedAt
  }`
	return sanityClient.fetch(query, { slug })
}

export async function fetchPartners(): Promise<Partner[]> {
	const query = `*[_type == "partner"] | order(_createdAt asc) {_id, title, url, description, partnerLogo}`
	return sanityClient.fetch(query)
}

export async function fetchDocumentBySlug(slug: string): Promise<Document> {
	const query = `*[_type == "documents" && slug.current == $slug][0]{..., "parentSlug": parentDocument.reference->slug, "parentTitle": parentDocument.reference->title, body[]{..., markDefs[]{..., _type == "internalLink" => {"slug": @.reference->slug, "type": @.reference->_type}}}}`
	return sanityClient.fetch(query, { slug })
}

export async function fetchDocuments(): Promise<Document[]> {
	const query = '*[_type == "documents"]{...}'
	return sanityClient.fetch(query)
}

export async function fetchRootDocuments(): Promise<Document[]> {
	const query = '*[_type == "documents" && parentDocument == null]{...}'
	return sanityClient.fetch(query)
}
