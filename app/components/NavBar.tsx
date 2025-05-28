"use client"

import Link from "next/link"
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material"
import { usePathname } from "next/navigation"
import { ExternalLinkIcon } from "@/app/icons/ExternalLinkIcon"
import { OpenEPILogo } from "@/app/icons/OpenEPILogo"
import { useState } from "react"
import { BurgerMenu } from "@/app/icons/BurgerMenu"

const NavBar = () => {
	const baseStyle: string = "px-6 py-2 rounded-full"
	const currentRoute = usePathname()
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const handleClose = () => {
		setIsOpen(false)
	}
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
		setIsOpen(true)
	}

	const linkClassName = (path: string) =>
		currentRoute.startsWith(path)
			? baseStyle + " bg-secondary-90"
			: baseStyle + " hover:bg-[#1d1b2014]"
	return (
		<nav className="flex flex-row items-center sm:p-14 p-8 justify-between">
			<Link href="/">
				<OpenEPILogo />
			</Link>
			<Box className="xl:flex xl:flex-row xl:text-2xl xl:rounded-full xl:bg-[#FBFDF8] hidden">
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
					href="https://developer.openepi.io/"
					target="_blank"
					className={
						baseStyle +
						" flex flex-row items-center gap-1.5 hover:bg-[#1d1b2014]"
					}
				>
					For developers <ExternalLinkIcon color="black" />
				</Link>
			</Box>
			<Box className="xl:hidden">
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					onClick={handleClick}
				>
					<BurgerMenu />
				</IconButton>
				<Menu
					open={isOpen}
					onClose={handleClose}
					disableScrollLock={true}
					anchorEl={anchorEl}
				>
					<MenuItem onClick={handleClose}>
						<Link href="/about" className="p-2">
							<Typography className="text-lg">About</Typography>
						</Link>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<Link href="/get-involved" className="p-2">
							<Typography className="text-lg">Get involved </Typography>
						</Link>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<Link href="/resources" className="p-2">
							<Typography className="text-lg">Resources</Typography>
						</Link>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<Link
							href="https://developer.openepi.io/"
							target="_blank"
							className="flex flex-row items-center gap-1.5 p-2 hover:bg-[#1d1b2014]"
						>
							<Typography className="text-lg">For developers</Typography>{" "}
							<ExternalLinkIcon color="black" />
						</Link>
					</MenuItem>
				</Menu>
			</Box>
		</nav>
	)
}

export default NavBar
