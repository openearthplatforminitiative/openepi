"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import { Background } from "@/public/icons/Background";

export function HeroSection() {
	return (
		<section className="flex flex-row pt-[128px] pb-[192px] px-8 bg-[#FBFDF8] justify-center">
			<div className="flex lg:flex-row flex-col justify-center items-center">
				<div className="lg:w-[40%] pl-5">
					<Typography variant="h1" color="black" className="text-[45px]">
						Open Earth Platform Initiative
					</Typography>
					<Typography className="mt-6 mb-10 text-black/80 md:pr-16 text-[36px] font-[400]">
						An open, global digital innovation platform for climate and nature.
					</Typography>
				</div>
				<div className="lg:flex hidden">
					<Background />
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
