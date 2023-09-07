"use client";

import { Typography } from "@material-tailwind/react";
import { Partner } from "@/sanity/api";
import { AiOutlineMail } from "react-icons/ai";

const currentYear = new Date().getFullYear();

interface FooterProps {
	partners: Partner[];
}

export default function Footer({ partners }: FooterProps) {
	return (
		<footer className="mt-10 bg-gradient-to-tr from-gray-900 to-gray-800 px-8 pt-12">
			<div className="container mx-auto">
				<div className="flex flex-wrap justify-center gap-8 md:justify-between">
					<div className="text-center md:text-left">
						<Typography variant="h5" color="white" className="mb-4">
							The OpenEPI Project Partners
						</Typography>
						<ul className="flex flex-col items-left justify-center md:justify-start">
							{partners.map((partner) => (
								<li key={partner.url}>
									<Typography
										as="a"
										href={partner.url}
										color="white"
										className="py-1 p-1 font-medium transition-colors"
									>
										{partner.title}
									</Typography>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
					<Typography
						color="white"
						className="text-center font-normal opacity-75"
					>
						{currentYear} - Except where otherwise noted, content on this site
						is licensed under a Creative Commons Attribution 4.0 International
						license.
					</Typography>

					<div className="flex gap-2 text-white">
						contact@openepi.io
						<AiOutlineMail size={24} />
					</div>
				</div>
			</div>
		</footer>
	);
}
