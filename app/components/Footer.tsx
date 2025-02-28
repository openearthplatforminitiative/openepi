import { Partner } from "@/sanity/api"
import { Box, Divider, Typography } from "@mui/material"
import Link from "next/link"
import { OpenEPILogoSmall } from "@/app/icons/OpenEPILogoSmall"
import ExternalLinkIconSmall from "@/app/icons/external-link-icon-small.svg"

interface FooterProps {
	partners: Partner[]
}

export default function Footer({ partners }: FooterProps) {
	return (
		<footer className="flex justify-center w-full pt-20 pb-28 px-6 md:px-20">
			<Box className="flex flex-col max-w-6xl w-full">
				<OpenEPILogoSmall />
				<Box className="flex flex-col sm:flex-row flex-wrap text-base w-full my-12 gap-y-12">
					<ul className="flex flex-1 flex-col gap-4">
						<li>
							<Link className="underline hover:no-underline" href="/about">
								About OpenEPI
							</Link>
						</li>
						<li>
							<Link
								className="underline hover:no-underline"
								href="/get-involved"
							>
								Get involved
							</Link>
						</li>
						<li>
							<Link className="underline hover:no-underline" href="/resources">
								Resources
							</Link>
						</li>
						<li>
							<Link
								target="_blank"
								className="flex gap-1 w-fit underline hover:no-underline items-center"
								href="https://developer.openepi.io/"
							>
								For developers <ExternalLinkIconSmall />
							</Link>
						</li>
					</ul>
					<ul className="flex flex-1 flex-col gap-4">
						<li className="text-secondary-main">
							The OpenEPI project partners
						</li>
						{partners.map((partner) => (
							<li key={partner.url}>
								<Link
									href={partner.url}
									target="_blank"
									className="flex gap-1 w-fit underline hover:no-underline items-center"
								>
									{partner.title}
									<ExternalLinkIconSmall />
								</Link>
							</li>
						))}
					</ul>
				</Box>
				<Divider />
				<Typography className="mt-6">
					2025 - Except where otherwise noted, content on this site is licensed
					under a Creative Commons Attribution 4.0 International license.
				</Typography>
			</Box>
		</footer>
	)
}
