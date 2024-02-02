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
	const urlFor = (source: string) => builder.image(source);

	return (
		<Box className={"flex flex-row justify-between items-center"}>
			<Box className={"flex justify-center items-center w-[250px] h-fit"}>
				<Image
					src={
						sanityImg ? (image !== null ? urlFor(image).toString() : "") : image
					}
					alt={"partner logo"}
					width={100}
					height={100}
					className={"h-full w-full max-w-[200px] max-h-[100px]"}
				/>
			</Box>

			<Box>
				<Typography className={"max-w-[648px] text-base"}>
					{description}
				</Typography>
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
