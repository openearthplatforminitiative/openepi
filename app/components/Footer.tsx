"use client";

import { Partner } from "@/sanity/api";
import { Typography } from "@mui/material";
import Link from "next/link";

const currentYear = new Date().getFullYear();

interface FooterProps {
	partners: Partner[];
}

export default function Footer({ partners }: FooterProps) {
	return (
		<footer className="px-8 pt-[112px]">
			<div className="container mx-auto">
				<div className="flex flex-wrap gap-8">
					<div className="text-left w-full">
						<Typography variant="h2" className="mb-[32px] text-[24px]">
							The OpenEPI Project Partners
						</Typography>
						<ul className="flex flex-col items-left justify-center md:justify-start">
							{partners.map((partner) => (
								<li key={partner.url}>
									<Link href={partner.url} className={"w-fit"}>
										<Typography className="py-1 p-1 text-[22px] font-400 transition-colors underline w-fit hover:no-underline">
											{partner.title}
										</Typography>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="mt-[72px] mb-2 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-[#C0C9C0] pb-[64px] pt-[32px] md:justify-between ">
					<Typography className="text-center font-normal opacity-75 text-sm">
						{currentYear} - Except where otherwise noted, content on this site
						is licensed under a Creative Commons Attribution 4.0 International
						license.
					</Typography>
				</div>
			</div>
		</footer>
	);
}
