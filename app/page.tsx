import { Box, Button, Typography } from "@mui/material";
import AboutLogo from "@/app/icons/about-logo.svg";
import WelcomeLogo from "@/app/icons/welcome-logo.svg";
import GetInvolved from "@/app/icons/get-involved.svg";
import LatestUpdates from "@/app/components/LatestUpdates";
import { fetchTwoNewestArticles } from "@/sanity/api";
import Link from "next/link";
import Image from "next/image";

const Home = async () => {
	const articles = await fetchTwoNewestArticles();

	return (
		<>
			<Box className={"flex flex-col relative"}>
				<Box
					className={
						"pr-6 my-16 lg:my-56 gap-6 ml-[max(50%-36rem,1.5rem)] md:ml-[max(50%-36rem,5rem)] md:w-[min(60%-5rem,36rem+10%)]"
					}
				>
					<h1>
						<div className={"text-3xl md:text-4xl font-semibold mb-6"}>
							Open Earth Platform Initiative
						</div>
						<div className={"text-5xl md:text-6xl"}>
							An open, global digital innovation platform for climate and
							nature.
						</div>
					</h1>
				</Box>
				<Image
					src="/welcome.jpeg"
					width={1160}
					height={1298}
					className={
						"object-cover w-full md:w-2/5 md:-top-[160px] md:right-0 md:h-[calc(100%+160px)] md:-z-10 md:absolute"
					}
					priority={true}
					alt={"Picture of rainforest"}
				/>
			</Box>
			<Box
				className={"flex justify-center bg-secondary-90 px-6 md:px-20 py-20"}
			>
				<Box
					className={
						"flex flex-1 flex-col max-w-6xl sm:flex-row sm:items-center sm:gap-x-24 lg:gap-x-28"
					}
				>
					<WelcomeLogo
						className={"w-40 h-40 xs:w-48 xs:h-48 lg:w-64 lg:h-64"}
					/>
					<Typography variant={"h2"} className={"flex-1 text-4xl md:text-5xl"}>
						Our mission is local tech innovation
					</Typography>
				</Box>
			</Box>
			<Box
				className={"flex flex-col items-center px-6 md:px-20 my-20 lg:my-28"}
			>
				<Box className={"flex flex-col max-w-6xl"}>
					<Box
						className={
							"flex flex-col-reverse gap-14 mb-20 sm:mb-32 sm:flex-row"
						}
					>
						<Box className={"flex flex-1 flex-col gap-10"}>
							<Typography className={"text-2xl sm:text-3xl"}>
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
										"bg-primary-main rounded-full border-neutralVariant-50 normal-case shadow-none text-xl px-8 py-4"
									}
								>
									Learn more about the project
								</Button>
							</Link>
						</Box>
						<AboutLogo
							className={"w-40 h-40 xs:w-48 xs:h-48 lg:w-64 lg:h-64"}
						/>
					</Box>
					{articles.length > 0 && <LatestUpdates articles={articles} />}
				</Box>
			</Box>
			<Box
				className={
					"flex justify-center bg-secondary-90 px-6 md:px-20 py-20 lg:py-34"
				}
			>
				<Box
					className={
						"flex flex-col md:flex-row items-baseline md:items-center max-w-6xl gap-10 lg:gap-28"
					}
				>
					<GetInvolved
						className={
							"w-40 h-40 xs:w-48 xs:h-48 lg:w-64 lg:h-64 flex-shrink-0"
						}
					/>
					<Box className={"flex flex-col gap-y-10 xs:gap-y-12"}>
						<Typography variant={"h2"} className={"text-4xl md:text-5xl"}>
							Contribute and get engaged in the project
						</Typography>
						<Link href={"/get-involved"}>
							<Button
								variant={"contained"}
								className={
									"bg-primary-main rounded-full border-neutralVariant-50 normal-case shadow-none text-xl px-8 py-4"
								}
							>
								Get involved
							</Button>
						</Link>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Home;
