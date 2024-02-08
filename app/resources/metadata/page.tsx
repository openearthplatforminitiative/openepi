import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { BackIcon } from "@/app/icons/BackIcon";

const Home = () => {
	return (
		<Box
			className={
				"flex flex-col flex-wrap gap-6 w-full h-full lg:max-w-7xl p-6 lg:my-44 my-20"
			}
		>
			<Link
				href="/resources"
				className={
					"flex flex-row items-center text-primary-main underline hover:no-underline -mt-20 gap-1 mb-14 w-fit"
				}
			>
				<BackIcon />
				<Typography className={"text-base"}> Back to resources </Typography>
			</Link>
		</Box>
	);
};

export default Home;
