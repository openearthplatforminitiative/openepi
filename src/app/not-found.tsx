import { ArrowForward } from "@mui/icons-material"
import { Box, Button, Typography } from "@mui/material"
import Link from "next/link"

const NotFound = () => (
	<Box className="w-full h-full lg:max-w-7xl px-8 lg:my-44 my-20 mx-auto">
		<Box className="flex flex-col gap-8 mb-20">
			<Typography
				variant="h1"
				className="leading-[48px] xs:leading-[64px] text-4xl xs:text-6xl"
			>
				Page does not exist
			</Typography>
			<Typography className="text-xl xs:text-2xl">
				We could not find the page you were looking for
			</Typography>
			<Link href="/">
				<Button
					variant="contained"
					className="self-start gap-2 bg-primary-40 hover:bg-primary-30 normal-case shadow-none rounded-full"
					endIcon={<ArrowForward />}
				>
					Back to home
				</Button>
			</Link>
		</Box>
	</Box>
)

export default NotFound
