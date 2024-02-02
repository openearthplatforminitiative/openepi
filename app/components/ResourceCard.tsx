import Link from "next/link";
import { Box, Card, Typography } from "@mui/material";
import { InternalLinkIcon } from "@/app/icons/InternalLinkIcon";
import { ExternalLinkIcon } from "@/app/icons/ExternalLinkIcon";

interface ResourceCardProps {
	href: string;
	text: string;
	externalLink: boolean;
}

const ResourceCard = ({ href, text, externalLink }: ResourceCardProps) => {
	return (
		<Link
			href={href}
			target={externalLink ? "_blank" : ""}
			className={
				"flex flex-1 lg:min-w-[400px] md:min-w-[340px] 2xs:min-w-[270px] 2xs:max-w-[calc(100%-0.75rem)] xs:max-w-[calc(50%-0.75rem)] xl:max-w-[calc(40%-0.75rem)]"
			}
		>
			<Card className={"group hover:bg-secondary-90 h-full w-full"}>
				<Box className={"flex flex-col p-6 gap-3"}>
					<Box className={"flex flex-row justify-between items-baseline"}>
						<Typography variant="h5" className={"text-xl xs:text-2xl"}>
							{text}
						</Typography>
						<Box className="transform transition-transform duration-300 group-hover:translate-x-2">
							{externalLink ? (
								<ExternalLinkIcon color={"black"} />
							) : (
								<InternalLinkIcon />
							)}
						</Box>
					</Box>
				</Box>
			</Card>
		</Link>
	);
};

export default ResourceCard;
