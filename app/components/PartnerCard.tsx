"use client";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { ExternalLinkIconSmall } from "@/app/icons/ExternalLinkIconSmall";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "@/sanity/api";
import Image from "next/image";

interface PartnerCardProps {
	name: string;
	description: string;
	href: string;
	sanityImg: boolean;
	image: string;
}

const PartnerCard = ({
	image,
	description,
	href,
	sanityImg,
}: PartnerCardProps) => {
	const builder = imageUrlBuilder(sanityClient);

	return (
		<Box
			className={
				"flex flex-col gap-16 sm:gap-0 sm:flex-row justify-between items-center"
			}
		>
			<Box className={"flex justify-center items-center min-w-[250px] h-fit"}>
				<Image
					src={
						sanityImg
							? image !== null
								? builder.image(image).toString()
								: ""
							: image
					}
					alt={"partner logo"}
					width={100}
					height={100}
					className={"h-full w-full max-w-[200px] max-h-[100px]"}
				/>
			</Box>

			<Box className={"flex flex-col flex-1 w-fit min-w-[250px] max-w-[648px]"}>
				<Typography className={" text-base"}>{description}</Typography>
				<Link
					href={href}
					target={"_blank"}
					className={
						"flex flex-row items-center underline hover:no-underline mt-6 text-base gap-1"
					}
				>
					{href} <ExternalLinkIconSmall />
				</Link>
			</Box>
		</Box>
	);
};

export default PartnerCard;
