import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { DiscordIcon } from "@/app/icons/DiscordIcon";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { ExternalLinkIcon } from "@/app/icons/ExternalLinkIcon";

const Home = () => {
	return (
		<Box className={"w-full h-full lg:max-w-7xl p-6 lg:my-44 my-20"}>
			<Typography
				variant={"h1"}
				className={
					"leading-[48px] xs:leading-[64px] text-4xl xs:text-6xl mb-20"
				}
			>
				Need help or want to get involved
			</Typography>
			<Box className={"flex sm:flex-row-reverse flex-col gap-28"}>
				<Box className={"flex flex-col sm:w-1/2"}>
					<Typography variant={"h2"} className={"text-2xl xs:text-3xl "}>
						Developer portal
					</Typography>
					<Typography className={"mt-8 mb-10 text-base"}>
						Are you a developer wanting to explore the data? Get started on our
						platform.
					</Typography>
					<Link href={"https://developer-test.openepi.io/"} target={"_blank"}>
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
						Join the community and join the discussion
					</Typography>
					<Typography className={"mt-8 mb-10 text-base"}>
						See what’s going on, get help or start a conversation on our open
						Discord server.
					</Typography>
					<Link href={"https://discord.gg/HatbmfCY"} target={"_blank"}>
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
					<Typography variant={"h2"} className={"text-xl xs:text-2xl mb-10"}>
						General enquiry about the project
					</Typography>
					<Box className={"flex flex-col w-full gap-3.5"}>
						<TextField
							className={"w-full"}
							variant={"filled"}
							placeholder={"Name"}
							label={"Name"}
							sx={{
								"& .MuiFilledInput-underline:after": {
									borderBottomColor: "#006D41",
								},
								"& label.Mui-focused": {
									color: "#006D41",
								},
							}}
						/>
						<TextField
							className={"w-full "}
							variant={"filled"}
							placeholder={"Email"}
							label={"Email"}
							sx={{
								"& .MuiFilledInput-underline:after": {
									borderBottomColor: "#006D41",
								},
								"& label.Mui-focused": {
									color: "#006D41",
								},
							}}
						/>
						<TextField
							className={"w-full h-36"}
							variant={"filled"}
							rows={5}
							placeholder={"Message"}
							label={"Message"}
							multiline={true}
							sx={{
								"& .MuiFilledInput-underline:after": {
									borderBottomColor: "#006D41",
								},
								"& label.Mui-focused": {
									color: "#006D41",
								},
							}}
						/>
					</Box>
					<Box className={"flex flex-col"}>
						<Box className={"flex flex-row items-center my-6"}>
							<Checkbox />
							<Typography className={"text-base"}>I agree to&nbsp;</Typography>
							<Typography className={"text-base text-primary-main underline"}>
								these terms
							</Typography>
						</Box>
						<Button
							variant={"contained"}
							className={
								"bg-primary-main rounded-full sm:w-fit mt-8 px-6 py-2.5 normal-case sm:text-sm text-lg w-full h-10"
							}
						>
							Send message
						</Button>
					</Box>
				</Box>
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
	);
};

export default Home;
