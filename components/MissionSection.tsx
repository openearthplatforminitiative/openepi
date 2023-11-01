"use client";


import { Typography } from "@material-tailwind/react";
import React from "react";

export default function MissionSection() {
	return (
		<section className="py-28 px-4 bg-mission-background">
			<div className="container mx-auto mb-20 text-center">
				<Typography color="black" className="mb-2 font-bold uppercase">
					Our mission
				</Typography>
				<Typography variant="h1" color="blue-gray" className="mb-4">
					Local Tech Innovation
				</Typography>
				<Typography
					variant="lead"
					className="mx-auto w-full px-4 !text-gray-700 lg:w-11/12 lg:px-8 "
				>
					The OpenEPI project mission is to support local innovation that is
					fuelled by a global platform of open data, technology and AI.
				</Typography>
			</div>
		</section>
	);
}
