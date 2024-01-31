import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { ExternalLinkIconSmall } from "@/app/icons/ExternalLinkIconSmall";

interface PartnerCardProps {
	name: string;
	description: string;
	href: string;
}

const PartnerCard = ({ name, description, href }: PartnerCardProps) => {
	return (
		<Box className={"flex flex-row justify-between mt-12"}>
			<Box
				className={
					"flex justify-center items-center border-2 border-black rounded-2xl w-96 h-36"
				}
			>
				{name}
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
