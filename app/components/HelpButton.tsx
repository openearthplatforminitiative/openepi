"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { MessageIcon } from "@/app/icons/MessageIcon";
import Link from "next/link";
import Button from "@mui/material/Button";
import { GithubIconWhite } from "@/app/icons/GithubIconWhite";
import Divider from "@mui/material/Divider";
import { DiscordIcon } from "@/app/icons/DiscordIcon";

const HelpButton = () => {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	return (
		<Box className={"fixed bottom-20 right-4 xs:right-20 z-10"}>
			<Fab
				className={"w-fit rounded-2xl mt-2"}
				aria-label="add"
				onClick={handleClick}
			>
				<Box className={"flex flex-row gap-3 p-4"}>
					<MessageIcon />
					<Typography className={"text-primary-main text-sm normal-case"}>
						Need help?
					</Typography>
				</Box>
			</Fab>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				disableScrollLock={true}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				className={"-mt-4 "}
			>
				<Box className={"flex flex-col p-6 w-64 "}>
					<Box className={"flex flex-col gap-2"}>
						<Typography className={"text-sm"}>
							For technical issues or requests:
						</Typography>
						<Link
							href={"https://github.com/openearthplatforminitiative"}
							target={"_blank"}
						>
							<Button
								variant={"contained"}
								className={
									"bg-primary-main rounded-full w-fit pr-6 pl-4 py-2.5 normal-case text-sm mt-2"
								}
								startIcon={<GithubIconWhite />}
							>
								To the Github project
							</Button>
						</Link>
					</Box>
					<Divider className={"my-6"} />
					<Box className={"flex flex-col gap-2"}>
						<Typography className={"text-sm"}>
							To join the community:
						</Typography>
						<Link href={"https://discord.gg/HatbmfCY"} target={"_blank"}>
							<Button
								variant={"contained"}
								className={
									"bg-primary-main rounded-full w-fit pr-6 pl-4 py-2.5 normal-case text-sm"
								}
								startIcon={<DiscordIcon />}
							>
								Join on Discord
							</Button>
						</Link>
					</Box>
					<Divider className={"my-6"} />
					<Box className={"flex flex-col gap-2 w-4/5"}>
						<Typography>For general enquiries use the contact form:</Typography>
						<Link
							href={"/get-involved"}
							className={
								"text-base text-primary-main underline hover:no-underline"
							}
						>
							Get involved page
						</Link>
					</Box>
				</Box>
			</Popover>
		</Box>
	);
};

export default HelpButton;
