"use client";

import React from "react";
import { Featured } from "@/sanity/api";
import FeatureCard from "./FeatureCard";

interface FeatureSectionProps {
	featured: Featured[];
}

export default function FeatureSection({ featured }: FeatureSectionProps) {
	return (
		<section className="py-28 px-4 w-full bg-[#FBFDF8]">
			<div className="container mx-auto grid max-w-6xl grid-cols-1 gap-[24px] md:grid-cols-2 ">
				{featured.map(({ _id, title, description }) => (
					<FeatureCard key={_id} title={title}>
						{description}
					</FeatureCard>
				))}
			</div>
		</section>
	);
}
