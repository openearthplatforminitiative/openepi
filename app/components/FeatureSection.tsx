"use client";

import { Featured } from "@/sanity/api";
import FeatureCard from "./FeatureCard";

interface FeatureSectionProps {
	featured: Featured[];
}

export default function FeatureSection({ featured }: FeatureSectionProps) {
	return (
		<section className="py-28 px-4 w-full">
			<div className="max-w-6xl mx-auto lg:columns-2 columns-1 gap-[24px]">
				{featured
					.sort((a) => (a.promoted ? -1 : 1))
					.map(({ _id, title, description, buttons, promoted }) => (
						<FeatureCard
							key={_id}
							title={title}
							buttons={buttons}
							promoted={promoted}
						>
							{description}
						</FeatureCard>
					))}
			</div>
		</section>
	);
}
