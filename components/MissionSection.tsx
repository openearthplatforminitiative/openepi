"use client";

import { Typography } from "@material-tailwind/react";
import React from "react";
import { MissionLogo } from "@/public/icons/MissionLogo";

export default function MissionSection() {
	return (
		<section className="py-28 px-8 bg-[#D1E8D5]">
			<div className="flex flex-row justify-center items-center">
				<MissionLogo />
				<div className=" ml-[49px] lg:w-[42%]">
					<Typography
						color="black"
						className="mb-[16px] text-[16px] font-[400] text-[#0C1F14] w-fit"
					>
						Our mission
					</Typography>
					<Typography
						variant="h1"
						color="blue-gray"
						className="mb-[16px] text-[32px] text-[#0C1F14] font-[600] w-fit"
					>
						Local Tech Innovation
					</Typography>
					<Typography
						variant="lead"
						className="text-[#0C1F14] lg:w-[62%]"
					>
						The OpenEPI project mission is to support local innovation that is
						fuelled by a global platform of open data, technology and AI.
					</Typography>
				</div>
			</div>
		</section>
	);
}
