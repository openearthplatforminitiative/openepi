import { createClient } from "next-sanity";

export interface FeaturedPost {
	_id: string;
	title: string;
	url: string;
	description: string;
}

export interface Post {
	_id: string;
	_createAt: string;
	title: string;
	body: object[];
	slug: string;
	mainImage: string;
	description: string;
}

interface Partner {
	_id: string;
	title: string;
	url: string;
	description: string;
}

const config = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	useCdn: true,
	apiVersion: "2021-10-21",
};

const sanityClient = createClient(config);

export async function fetchFeaturedPosts(): Promise<FeaturedPost[]> {
	const query = `*[_type == "featured"]{_id, title, url, description}`;
	return sanityClient.fetch(query);
}

export async function fetchPost(slug: string): Promise<Post> {
	const query = `*[_type == "post" && slug.current == $slug][0]{_id, title, slug, mainImage, description, body}`;
	return sanityClient.fetch(query, { slug });
}

export async function fetchPartners(): Promise<Partner[]> {
	const query = `*[_type == "partner"] | order(_createdAt asc) {_id, title, url, description}`;
	return sanityClient.fetch(query);
}
