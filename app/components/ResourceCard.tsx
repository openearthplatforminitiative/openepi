import Link from "next/link";
import { Box, Card } from "@mui/material";
import { InternalLinkIcon } from "@/app/icons/InternalLinkIcon";
import { ExternalLinkIcon } from "@/app/icons/ExternalLinkIcon";

interface ResourceCardProps {
	href: string;
	text: string;
	externalLink: boolean;
}

const ResourceCard = ({ href, text, externalLink }: ResourceCardProps) => {
	return (
		<Link href={href} target={externalLink ? "_blank" : ""} className="flex">
			<Card className="group shadow-none rounded-xl bg-card p-6 gap-3 flex justify-between items-baseline hover:bg-secondary-90 h-full w-full">
				<Box className="text-xl xs:text-2xl">{text}</Box>
				<Box className="transform transition-transform duration-300 group-hover:translate-x-2">
					{externalLink ? (
						<ExternalLinkIcon color="black" />
					) : (
						<InternalLinkIcon />
					)}
				</Box>
			</Card>
		</Link>
	);
};

export default ResourceCard;
