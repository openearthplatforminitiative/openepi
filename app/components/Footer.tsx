"use client";

import { Partner } from "@/sanity/api";
import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import { OpenEPILogoSmall } from "@/app/icons/OpenEPILogoSmall";
import { ExternalLinkIcon } from "@/app/icons/ExternalLinkIcon";

const currentYear = new Date().getFullYear();

interface FooterProps {
	partners: Partner[];
}

export default function Footer({ partners }: FooterProps) {
	return (
		<footer className={"bg-neutralVariant-90 w-full"}>
			<Box className={"flex w-full flex-col "}>
				<Box className={"flex flex-col items-baseline lg:mx-auto sm:mt-20"}>
					<Box className={"mb-10"}>
						<OpenEPILogoSmall />
					</Box>
					<Box
						className={
							"flex flex-wrap justify-between lg:text-base text-lg w-full"
						}
					>
						<Box>
							<List className={"gap-4"}>
								<ListItem>
									<Link
										className={"underline hover:no-underline"}
										href={"/about"}
									>
										About OpenEPI
									</Link>
								</ListItem>
								<ListItem>
									<Link
										className={"underline hover:no-underline"}
										href={"/get-involved"}
									>
										Get involved
									</Link>
								</ListItem>
								<ListItem>
									<Link
										className={"underline hover:no-underline"}
										href={"/resources"}
									>
										Resources
									</Link>
								</ListItem>
								<ListItem>
									<a
										target={"_blank"}
										className={
											"flex flex-row gap-1 items-center underline hover:no-underline"
										}
										href={"https://developer-test.openepi.io/"}
									>
										For developers <ExternalLinkIcon />
									</a>
								</ListItem>
							</List>
						</Box>
						<Box>
							<List className={"gap-4 "}>
								<ListItem className={"text-secondary-main"}>
									The OpenEPI project partners
								</ListItem>
								{partners.map((partner) => (
									<ListItem key={partner.url}>
										<Link
											href={partner.url}
											target={"_blank"}
											className={
												"flex flex-row gap-1 underline hover:no-underline items-center w-fit"
											}
										>
											<Typography className="py-1 p-1 text-base font-400 transition-colors underline w-fit hover:no-underline">
												{partner.title}
											</Typography>
											<ExternalLinkIcon />
										</Link>
									</ListItem>
								))}
							</List>
						</Box>
					</Box>
					<Box className={"flex flex-col gap-6 pt-14 pb-20"}>
						<Divider />
						<Typography>
							{currentYear} - Except where otherwise noted, content on this site
							is licensed under a Creative Commons Attribution 4.0 International
							license.
						</Typography>
					</Box>
				</Box>
			</Box>
		</footer>
	);
}
