"use client";

import React from "react";
import { Featured } from "@/sanity/api";
import { Typography } from "@material-tailwind/react";
import FeatureCard from "./FeaturedCard";

interface FeatureSectionProps {
	featured: Featured[];
}

export default function FeatureSection6({ featured }: FeatureSectionProps) {
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
				{featured.map(({ _id, title, description }) => (
					<FeatureCard key={_id} title={title}>
						{description}
					</FeatureCard>
				))}
			</div>
		</section>
	);
}
