import { Box, Typography } from "@mui/material";
import { WelcomeLogo } from "@/app/icons/WelcomeLogo";
import Button from "@mui/material/Button";
import { AboutLogo } from "@/app/icons/AboutLogo";
import LatestUpdates from "@/app/components/LatestUpdates";
import { fetchTwoNewestArticles } from "@/sanity/api";
import { GetInvolvedLogo } from "@/app/icons/GetInvolvedLogo";
import Link from "next/link";
const Home = async () => {
	const articles = await fetchTwoNewestArticles();

	return (
		<Box className={"w-full"}>
			<Box className={"flex flex-row relative w-screen"}>
				<Box
					className={
						"flex flex-col lg:mx-auto lg:pr-64 lg:max-w-7xl my-16 lg:my-56 gap-6 p-6"
					}
				>
					<Typography className={"text-3xl xs:text-4xl font-semibold"}>
						Open Earth Platform Initiative
					</Typography>
					<Typography variant={"h1"} className={"text-5xl xs:text-6xl"}>
						An open, global digital innovation platform for climate and nature.
					</Typography>
				</Box>
				{/*<Box className={"flex absolute h-max right-0 top-0 z-0"}>
					<Image
						src="/welcome.jpeg"
						quality={100}
						width={660}
						height={794}
						alt={"Picture of rainforest"}
						className={"flex-1 h-max w-full object-cover"}
					/>
				</Box>*/}
			</Box>
			<Box className={"flex justify-center bg-secondary-90 z-10"}>
				<Box
					className={
						"flex flex-col xs:flex-row px-8 items-baseline xs:items-center lg:max-w-7xl py-20 gap-6 lg:gap-16"
					}
				>
					<Box className={"flex w-fit "}>
						<WelcomeLogo />
					</Box>
					<Typography variant={"h2"} className={"text-4xl xs:text-5xl "}>
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
					<Box className={"flex xs:flex-row flex-col-reverse gap-14 w-full "}>
						<Box className={"flex flex-col gap-10 xs:w-2/3"}>
							<Typography variant={"h4"} className={"text-xl xs:text-2xl"}>
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
										"bg-primary-main rounded-full sm:w-fit pr-6 pl-4 py-2.5 normal-case sm:text-sm text-base w-full h-10"
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
						"flex flex-col px-8 md:flex-row items-baseline md:items-center lg:max-w-7xl py-20 gap-10 lg:gap-28"
					}
				>
					<Box className={"w-fit h-fit"}>
						<GetInvolvedLogo />
					</Box>
					<Box className={"flex flex-col gap-12"}>
						<Typography
							variant={"h1"}
							className={
								"leading-[48px] xs:leading-[64px] text-4xl xs:text-5xl"
							}
						>
							Contribute and get engaged in the project
						</Typography>
						<Link href={"/get-involved"}>
							<Button
								variant={"contained"}
								className={
									"bg-primary-main sm:w-fit rounded-full border-neutralVariant-50 normal-case lg:text-sm text-base h-10"
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
