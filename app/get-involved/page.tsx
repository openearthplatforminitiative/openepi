import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { DiscordIcon } from "@/app/icons/DiscordIcon";
import Link from "next/link";
import { ExternalLinkIcon } from "@/app/icons/ExternalLinkIcon";
import { GetInvolvedLogo } from "@/app/icons/GetInvolvedLogo";

const Home = () => {
	return (
		<Box className={"w-full"}>
			<Box className={"flex justify-center bg-secondary-90"}>
				<Box
					className={
						"flex flex-col px-8 xs:mx-32 md:flex-row items-baseline md:items-center lg:max-w-7xl xl:mx-72 py-20 gap-16"
					}
				>
					<Typography
						variant={"h1"}
						className={"leading-[48px] xs:leading-[64px] text-4xl xs:text-6xl"}
					>
						Contribute and get engaged in the project
					</Typography>
					<Box className={"flex w-full justify-center"}>
						<GetInvolvedLogo />
					</Box>
				</Box>
			</Box>
			<Box className={"flex w-full justify-center"}>
				<Box className={"w-full h-full lg:max-w-7xl p-6 lg:my-44 my-20"}>
					<Box className={"flex sm:flex-row-reverse flex-col gap-28"}>
						<Box className={"flex flex-col sm:w-1/2"}>
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
										"bg-primary-main rounded-full sm:w-fit pr-6 pl-4 py-2.5 normal-case sm:text-sm text-lg w-full h-10"
									}
									startIcon={<ExternalLinkIcon color={"white"} />}
								>
									To the developer portal
								</Button>
							</Link>
						</Box>
						<Box className={"flex flex-col gap-30 sm:w-1/2"}>
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
										"bg-primary-main rounded-full sm:w-fit pr-6 pl-4 py-2.5 normal-case sm:text-sm text-lg w-full h-10"
									}
									startIcon={<DiscordIcon />}
								>
									Join on Discord
								</Button>
							</Link>
						</Box>
					</Box>
					<Divider className={"my-16"} />
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
		</Box>
	);
};

export default Home;
