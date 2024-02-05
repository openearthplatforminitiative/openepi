"use client";

import Link from "next/link";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import { ExternalLinkIcon } from "@/app/icons/ExternalLinkIcon";
import { OpenEPILogo } from "@/app/icons/OpenEPILogo";

const NavBar = () => {
	const baseStyle: string = "px-6 py-2 rounded-full";
	const currentRoute = usePathname();

	const linkClassName = (path: string) =>
		currentRoute.startsWith(path)
			? baseStyle + " bg-secondary-90"
			: baseStyle + " hover:bg-[#1d1b2014]";
	return (
		<nav className="bg-[#FBFDF8] flex flex-row items-center sm:p-12 p-6 justify-between">
			<Link href={"/"}>
				<OpenEPILogo />
			</Link>
			<Box className="xl:flex xl:flex-row xl:text-2xl hidden">
				<Link href="/about" className={linkClassName("/about")}>
					About OpenEPI
				</Link>
				<Link href="/get-involved" className={linkClassName("/get-involved")}>
					Get involved
				</Link>
				<Link href="/resources" className={linkClassName("/resources")}>
					Resources
				</Link>
				<Link
					href={"https://developer-test.openepi.io/"}
					target={"_blank"}
					className={
						baseStyle +
						" flex flex-row items-center gap-1.5 hover:bg-[#1d1b2014]"
					}
				>
					For developers <ExternalLinkIcon color={"black"} />
				</Link>
			</Box>
		</nav>
	);
};

export default NavBar;
