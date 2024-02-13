import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";
import { InternalLinkIcon } from "@/app/icons/InternalLinkIcon";

interface ResourceCardProps {
	header: string;
	href: string;
	imageUrl: string;
	alt: string;
}
const ResourceCard = ({ header, imageUrl, href, alt }: ResourceCardProps) => {
	return (
		<Link
			href={href}
			className={
				"flex flex-1 md:min-w-[350px] 2xs:min-w-[250px] 2xs:max-w-[calc(100%-0.5rem)] xs:max-w-[calc(50%-0.75rem)] lg:max-w-[calc(33%-0.75rem)]"
			}
		>
			<Card
				className={"group rounded-xl bg-[#F2F4EF] hover:bg-secondary-90 w-full"}
			>
				<Image
					src={imageUrl}
					alt={alt}
					width={320}
					height={320}
					className={"h-[240px] w-full object-cover"}
				/>
				<Box className={"flex flex-col p-6"}>
					<Box className={"flex flex-row justify-between items-start"}>
						<Typography className={"leading-6 text-xl"}>
							{header}
						</Typography>
						<Box className="transform transition-transform duration-300 group-hover:translate-x-2">
							<InternalLinkIcon />
						</Box>
					</Box>
				</Box>
			</Card>
		</Link>
	);
};

export default ResourceCard;
