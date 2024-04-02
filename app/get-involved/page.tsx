import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { DiscordIcon } from "@/app/icons/DiscordIcon";
import Link from "next/link";
import { ExternalLinkIcon } from "@/app/icons/ExternalLinkIcon";
import GetInvolved from "@/app/icons/get-involved.svg";

const Home = () => {
	return (
		<>
			<Box className={"flex justify-center bg-secondary-90 px-6 sm:px-20 py-16 sm:py-28"}>
				<Box className={"flex flex-col gap-x-6 gap-y-8 max-w-6xl sm:flex-row-reverse sm:items-center"}>
					<GetInvolved className={"w-40 h-40 sm:w-72 sm:h-72 lg:w-96 lg:h-96 flex-shrink-0"} />
					<Typography
						variant={"h1"}
						className={"text-4xl md:text-6xl"}
					>
						Contribute and get engaged in the project
					</Typography>
				</Box>
			</Box>
			<Box className={"flex justify-center px-6 md:px-20 py-16 xs:py-28"}>
				<Box className={"flex flex-col max-w-6xl"}>
					<Box className={"flex flex-col sm:flex-row gap-x-24 lg:gap-x-32 gap-y-12"}>
						<Box className={"flex-1"}>
							<Typography variant={"h2"} className={"text-2xl xs:text-3xl "}>
								Developer portal
							</Typography>
							<Typography className={"mt-8 mb-10 text-base"}>
								Are you a developer wanting to explore the data? Get started on
								our platform.
							</Typography>
							<Link
								href={"https://developer-test.openepi.io/"}
								target={"_blank"}
							>
								<Button
									variant={"contained"}
									className={
										"bg-primary-main rounded-full border-neutralVariant-50 normal-case shadow-none text-xl px-8 py-4"
									}
									startIcon={<ExternalLinkIcon color={"white"} />}
								>
									To the developer portal
								</Button>
							</Link>
						</Box>
						<Box className={"flex-1"}>
							<Typography variant={"h2"} className={"text-2xl xs:text-3xl"}>
								Discord server
							</Typography>
							<Typography className={"mt-8 mb-10 text-base"}>
								See what’s going on, get help or start a conversation on our
								open Discord server.
							</Typography>
							<Link href={"https://discord.gg/R4ASSWRe7c"} target={"_blank"}>
								<Button
									variant={"contained"}
									className={
										"bg-primary-main rounded-full border-neutralVariant-50 normal-case shadow-none text-xl px-8 py-4"
									}
									startIcon={<DiscordIcon />}
								>
									Join on Discord
								</Button>
							</Link>
						</Box>
					</Box>
					<Divider className={"my-16 sm:my-24"} />
					<Box className={"flex sm:flex-row flex-col gap-28"}>
						<Box className={"sm:w-1/2"}>
							<Typography variant={"h2"} className={"text-xl xs:text-2xl mb-8"}>
								Send us a line
							</Typography>
							<Typography className={"text-lg"}>
								You may also contact us directly through email:
							</Typography>
							<a
								href="mailto:contact@openepi.io"
								className={
									"flex sm:text-base text-xl text-primary-main underline hover:no-underline mt-4"
								}
							>
								contact@openepi.io
							</a>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Home;
