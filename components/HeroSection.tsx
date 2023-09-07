"use client";

import React from "react";
import Link from "next/link";
import { Navbar, Button, Typography } from "@material-tailwind/react";

export function HeroSection() {
	return (
		<>
			<Navbar
				fullWidth
				shadow={false}
				color="transparent"
				className="absolute z-50 border-0"
			>
				<div className="container mx-auto flex items-center justify-between">
					<Typography variant="h6">OpenEPI.io</Typography>
				</div>
			</Navbar>
			<div className="relative min-h-screen w-full bg-[url('/img/bg-hero-4.jpg')] bg-cover bg-no-repeat bg-black">
				<div className="absolute inset-0 h-full w-full bg-black/50" />
				<div className="grid min-h-screen px-8">
					<div className="container relative z-10 my-auto mx-auto md:pl-10">
						<Typography variant="h1" color="white">
							Open Earth Platform Initiative
						</Typography>
						<Typography
							variant="lead"
							className="mt-6 mb-10 w-full text-white/80 md:max-w-full md:pr-16  lg:max-w-2xl xl:pr-28"
						>
							An open, global digital innovation platform for climate and
							nature.
						</Typography>
						<div className="mt-8 mb-4 flex gap-2">
							<Link href="/post/about-project">
								<Button
									color="white"
									aria-label="Read more button"
									variant="gradient"
								>
									Read more
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default HeroSection;
