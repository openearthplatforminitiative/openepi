"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import { Background } from "@/public/icons/Background";

export function HeroSection() {
	return (
		<section className="flex flex-row pt-[258px] pb-[299px] px-8 bg-[#FBFDF8] justify-center">
			<div className="flex flex-row justify-center items-center">
				<div className="w-[38%]">
					<Typography variant="h1" color="black" className="text-[45px]">
						Open Earth Platform Initiative
					</Typography>
					<Typography
						className="mt-6 mb-10 text-black/80 md:pr-16 text-[36px] font-[400]"
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
