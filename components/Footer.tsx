"use client";

import { Button, Typography } from "@material-tailwind/react";
import { Partner } from "@/sanity/api";
import { AiOutlineMail } from "react-icons/ai";

const currentYear = new Date().getFullYear();

interface FooterProps {
	partners: Partner[];
}

export default function Footer({ partners }: FooterProps) {
	return (
		<footer className=" bg-[#006D41] px-8 pt-12">
			<div className="container mx-auto">
				<div className="flex flex-wrap gap-8">
					<div className="text-center md:text-left w-full">
						<Typography
							variant="h2"
							color="white"
							className="mb-[32px] text-[24px]"
						>
							The OpenEPI Project Partners
						</Typography>
						<ul className="flex flex-col items-left justify-center md:justify-start">
							{partners.map((partner) => (
								<li key={partner.url}>
									<Typography
										as="a"
										href={partner.url}
										color="white"
										className="py-1 p-1 text-[22px] font-400 transition-colors underline w-fit"
									>
										{partner.title}
									</Typography>
								</li>
							))}
						</ul>
						<div className="flex lg:flex-row flex-col justify-between mt-[40px] items-center ">
							<Typography
								variant="paragraph"
								color="white"
								className="text-[22px] font-400"
							>
								Funded by the{" "}
								<a
									href="https://www.norad.no/en/front/"
									className="text-white underline font-400 text-[22px]"
								>
									Norwegian Agency For Development Cooperation
								</a>
							</Typography>
							<a href="mailto:contact@openepi.io">
								<Button
									size="sm"
									color="white"
									className="rounded-full flex gap-2 items-center h-[40px] font-[500] text-[#006D41] lowercase text-[14px] mt-[22px] lg:mt-[0]"
								>
									<AiOutlineMail size={18} />
									contact@openepi.io
								</Button>
							</a>
						</div>
					</div>
				</div>

				<div className="mt-[72px] mb-2 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-[#C0C9C0] py-7 md:justify-between ">
					<Typography
						color="white"
						className="text-center font-normal opacity-75 text-sm"
					>
						{currentYear} - Except where otherwise noted, content on this site
						is licensed under a Creative Commons Attribution 4.0 International
						license.
					</Typography>
				</div>
			</div>
		</footer>
	);
}
