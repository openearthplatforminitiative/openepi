"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import { Background } from "@/public/icons/Background";

export function HeroSection() {
	return (
		<section className="flex flex-row pt-[258px] pb-[299px] px-8 bg-[#FBFDF8]">
			<div className="flex flex-row container justify-center">
				<div>
					<Typography variant="h1" color="black">
						Open Earth Platform Initiative
					</Typography>
					<Typography
						variant="lead"
						className="mt-6 mb-10 w-full text-black/80 md:max-w-full md:pr-16  lg:max-w-2xl xl:pr-28"
					>
						An open, global digital innovation platform for climate and nature.
					</Typography>
				</div>
				<Background />
			</div>
		</section>
	);
}

export default HeroSection;
