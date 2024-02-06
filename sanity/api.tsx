import { createClient } from "next-sanity";

export type CustomButton = {
	text: string;
	url: string;
};

export interface Featured {
	_id: string;
	title: string;
	description: string;
	buttons: CustomButton[];
	promoted: boolean;
}

export interface Article {
	_id: string;
	_createAt: string;
	title: string;
	body: object[];
	slug: string;
	mainImage: string;
	description: string;
	publishedAt: string;
}

export interface ArticleObject {
	articles: Article[];
	total: number;
}

export interface Partner {
	_id: string;
	title: string;
	url: string;
	description: string;
	partnerLogo: string;
}

const config = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	useCdn: false,
	apiVersion: "2021-10-21",
};

export const sanityClient = createClient(config);

export async function fetchFeatured(): Promise<Featured[]> {
	const query = `*[_type == "featured"]{_id, title, description, buttons, promoted}`;
	return sanityClient.fetch(query);
}

export async function fetchArticleBySlug(slug: string): Promise<Article> {
	const query = `*[_type == "article" && slug.current == $slug][0]{_id, title, "slug": slug.current, mainImage, description, body}`;
	return sanityClient.fetch(query, { slug });
}

export async function fetchArticles(
	start = 0,
	limit = 5,
): Promise<ArticleObject> {
	const query = `{
    "articles": *[_type == "article" && defined(slug.current)] | order(dateTime(publishedAt) desc) {
      _id, title, "slug": slug.current, mainImage, description, body, publishedAt
    }[${start}..${start + limit}],
    "total": count(*[_type == "article" && defined(slug.current)])
  }`;
	return sanityClient.fetch(query);
}

export async function fetchTwoNewestArticles(): Promise<Article[]> {
	const query = `*[_type == "article" && defined(slug.current)] | order(dateTime(publishedAt) desc) [0...2]{
    _id, title, "slug": slug.current, mainImage, description, body, publishedAt
  }`;
	return sanityClient.fetch(query);
}

export async function fetchTwoNewestArticlesBySlug(
	slug: string,
): Promise<Article[]> {
	const query = `*[_type == "article" && defined(slug.current) && slug.current != $slug] | order(dateTime(publishedAt) desc) [0...2]{
    _id, title, "slug": slug.current, mainImage, description, body, publishedAt
  }`;
	return sanityClient.fetch(query, { slug });
}

export async function fetchPartners(): Promise<Partner[]> {
	const query = `*[_type == "partner"] | order(_createdAt asc) {_id, title, url, description, partnerLogo}`;
	return sanityClient.fetch(query);
}
