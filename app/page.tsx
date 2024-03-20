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
			<Box className={"flex flex-col xs:flex-row justify-between"}>
				<Box
					className={
						"flex flex-col sm:ml-16 xl:ml-64 lg:max-w-7xl my-16 lg:my-56 gap-6 p-6 relative z-10 justify-center"
					}
				>
					<Typography className={"text-3xl xs:text-4xl font-semibold"}>
						Open Earth Platform Initiative
					</Typography>
					<Typography variant={"h1"} className={"text-5xl xs:text-6xl"}>
						An open, global digital innovation platform for climate and nature.
					</Typography>
				</Box>
				<Image
					src="/welcome.jpeg"
					width={1160}
					height={1298}
					className={
						"object-cover relative xs:-mb-[160px] xs:w-2/5 w-full xs:-top-[160px]"
					}
					priority={true}
					quality={100}
					alt={"Picture of rainforest"}
				/>
			</Box>
			<Box className={"flex justify-center bg-secondary-90"}>
				<Box
					className={
						"flex flex-col lg:px-0 px-8 md:flex-row items-baseline md:items-center lg:max-w-7xl py-20 gap-10 lg:gap-28"
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
							<Typography className={"text-xl xs:text-[2rem]/10"}>
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
					{articles.length > 0 && <LatestUpdates articles={articles} />}
				</Box>
			</Box>
			<Box className={"flex justify-center bg-secondary-90"}>
				<Box
					className={
						"flex flex-col lg:px-0 px-8 md:flex-row items-baseline md:items-center lg:max-w-7xl py-20 gap-10 lg:gap-28"
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
