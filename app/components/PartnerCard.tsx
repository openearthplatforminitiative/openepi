import { Box, Typography } from "@mui/material";
import Link from "next/link";
import ExternalLinkIconSmall from "@/app/icons/external-link-icon-small.svg";
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
	name,
	description,
	href,
	sanityImg,
	image,
}: PartnerCardProps) => {
	const builder = imageUrlBuilder(sanityClient);
	return (
		<Box className="flex flex-col sm:flex-row gap-y-8 gap-x-16 justify-between sm:items-center">
			<Box className="flex flex-shrink-0 bg-white justify-center items-center h-28 sm:w-72 lg:w-96 lg:h-32 px-12 py-6">
				<Image
					src={sanityImg ? builder.image(image).url() : image}
					alt={`${name} logo`}
					width={360}
					height={142}
					className="object-contain w-full h-full"
				/>
			</Box>
			<Box>
				<Typography className="text-base mb-6">{description}</Typography>
				<Link
					href={href}
					target="_blank"
					className="flex items-center underline hover:no-underline text-base gap-1"
				>
					{href} <ExternalLinkIconSmall />
				</Link>
			</Box>
		</Box>
	);
};

export default PartnerCard;
