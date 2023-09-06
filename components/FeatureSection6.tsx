"use client";
import React from "react";
import { fetchFeaturedPosts } from "@/sanity/api";
import { Card, CardBody, Typography } from "@material-tailwind/react";

interface FeatureCardPropsType {
	title: string;
	children: React.ReactNode;
}

function FeatureCard({ title, children }: FeatureCardPropsType) {
	return (
		<Card color="white" shadow={false}>
			<CardBody className="grid justify-start">
				<Typography variant="h5" color="blue-gray" className="mb-2">
					{title}
				</Typography>
				<Typography className="font-normal !text-gray-500">
					{children}
				</Typography>
			</CardBody>
		</Card>
	);
}

export async function FeatureSection6() {
	const featuredPosts = await fetchFeaturedPosts();

	return (
		<section className="py-28 px-4">
			<div className="container mx-auto mb-20 text-center">
				<Typography color="blue-gray" className="mb-2 font-bold uppercase">
					Our mission
				</Typography>
				<Typography variant="h1" color="blue-gray" className="mb-4">
					Local Tech Innovation
				</Typography>
				<Typography
					variant="lead"
					className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
				>
					The OpenEPI project mission is to support local innovation that is
					fuelled by a global platform of open data, technology and AI.
				</Typography>
			</div>
			<div className="container mx-auto grid max-w-6xl grid-cols-1 gap-3 gap-y-12 md:grid-cols-2">
				{featuredPosts.map(({ _id, title, description }) => (
					<FeatureCard key={_id} title={title}>
						{description}
					</FeatureCard>
				))}
			</div>
		</section>
	);
}

export default FeatureSection6;
