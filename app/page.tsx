import { Box, Typography } from "@mui/material";
import { WelcomeLogo } from "@/app/icons/WelcomeLogo";
import Button from "@mui/material/Button";
import { AboutLogo } from "@/app/icons/AboutLogo";
import LatestUpdates from "@/app/components/LatestUpdates";
import { fetchTwoNewestArticles } from "@/sanity/api";
import { GetInvolvedLogo } from "@/app/icons/GetInvolvedLogo";
import Link from "next/link";
import Image from "next/image";
const Home = async () => {
	const articles = await fetchTwoNewestArticles();

	return (
		<Box className={"w-full"}>
			<Box className={"flex flex-row w-screen justify-center"}>
				<Box className={"lg:max-w-7xl my-56 relative"}>
					<Typography className={"text-3xl xs:text-4xl text-600"}>
						Open Earth Platform Initiative
					</Typography>
					<Typography variant={"h1"} className={"text-5xl xs:text-6xl"}>
						An open, global digital innovation platform for climate and nature.
					</Typography>
				</Box>
				<Box className={"w-fit h-screen absolute right-0 top-0 z-0"}>
					<Image
						src="/welcome.jpeg"
						width={660}
						height={794}
						alt={"Picture of farmers in a flood ridden area"}
						className={"w-fit h-fit"}
					/>
				</Box>
			</Box>
			<Box className={"flex justify-center bg-secondary-90"}>
				<Box
					className={
						"flex flex-col-reverse px-8 md:flex-row items-baseline md:items-center lg:max-w-7xl py-20 gap-16"
					}
				>
					<Box className={"flex w-fit "}>
						<WelcomeLogo />
					</Box>
					<Typography variant={"h2"} className={"text-4xl xs:text-5xl"}>
						Our mission is local tech innovation
					</Typography>
				</Box>
			</Box>
			<Box className={"flex w-full justify-center"}>
				<Box
					className={
						"flex flex-col flex-wrap gap-6 w-full h-full lg:max-w-7xl p-6 lg:my-36 my-20"
					}
				>
					<Box className={"flex flex-row justify-between"}>
						<Box className={"flex flex-col gap-14 w-2/3"}>
							<Typography variant={"h4"}>
								Open data, AI, and digital technologies will be crucial
								catalysts for collaboration, innovation, and informed
								decision-making in addressing climate change – building
								resilience and preparing for climate mitigation in agriculture
								and fisheries.
							</Typography>
							<Link href={"/about"}>
								<Button
									variant={"contained"}
									className={
										"bg-primary-main rounded-full sm:w-fit pr-6 pl-4 py-2.5 normal-case sm:text-sm text-lg w-full h-10"
									}
								>
									Learn more about the project
								</Button>
							</Link>
						</Box>
						<AboutLogo />
					</Box>
					<LatestUpdates articles={articles} />
				</Box>
			</Box>
			<Box className={"flex justify-center bg-secondary-90"}>
				<Box
					className={
						"flex flex-col px-8 xs:mx-32 md:flex-row items-baseline md:items-center lg:max-w-7xl xl:mx-72 py-20 gap-28"
					}
				>
					<Box className={"sm:w-80 sm:h-80 w-64 h64"}>
						<GetInvolvedLogo />
					</Box>
					<Box className={"flex flex-col gap-12"}>
						<Typography
							variant={"h1"}
							className={
								"leading-[48px] xs:leading-[64px] text-4xl xs:text-6xl"
							}
						>
							Contribute and get engaged in the project
						</Typography>
						<Link href={"/get-involved"}>
							<Button
								variant={"contained"}
								className={
									"bg-primary-main rounded-full sm:w-fit pr-6 pl-4 py-2.5 normal-case sm:text-sm text-lg w-full h-10"
								}
							>
								Get involved
							</Button>
						</Link>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
export default Home;
