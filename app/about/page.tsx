import { Box, Divider, Typography } from "@mui/material";
import { AboutLogo } from "@/app/icons/AboutLogo";
import { fetchPartners, fetchTwoNewestArticles } from "@/sanity/api";
import PartnerCard from "@/app/components/PartnerCard";
import Image from "next/image";

import LatestUpdates from "@/app/components/LatestUpdates";

const Home = async () => {
	const partners = await fetchPartners();
	const articles = await fetchTwoNewestArticles();

	return (
		<Box className={"w-full"}>
			<Box className={"flex justify-center bg-secondary-90"}>
				<Box
					className={
						"flex flex-col-reverse px-8 md:flex-row items-baseline md:items-center lg:max-w-7xl py-20 gap-16"
					}
				>
					<Typography
						variant={"h1"}
						className={"leading-[48px] xs:leading-[64px] text-5xl xs:text-6xl"}
					>
						An initiative to drive local innovation globally
					</Typography>
					<Box className={"flex w-full justify-center"}>
						<AboutLogo />
					</Box>
				</Box>
			</Box>
			<Box className={"flex w-full justify-center"}>
				<Box
					className={
						"flex flex-col flex-wrap gap-6 w-full h-full lg:max-w-7xl p-6 lg:my-44 my-20"
					}
				>
					<Box className={"flex flex-row flex-wrap mb-44 w-fit"}>
						<Box
							className={
								"flex flex-col gap-6 2xs:flex-1 mt-12 md:-2/3 xs:mr-28 2xs:min-w-[280px] w-fit"
							}
						>
							<Typography variant={"h2"} className={"text-4xl xs:text-5xl"}>
								About
							</Typography>
							<Typography className={"text-xl"}>
								Open data, AI, and digital technologies will be crucial
								catalysts for collaboration, innovation, and informed
								decision-making in addressing climate change – building
								resilience and preparing for climate mitigation in agriculture
								and fisheries.
							</Typography>
						</Box>
						<Box
							className={
								"flex flex-col gap-6 mt-12 2xs:flex-1  md:w-1/3 2xs:min-w-[250px] w-fit"
							}
						>
							<Typography variant={"h2"} className={"text-4xl xs:text-5xl"}>
								Objective
							</Typography>
							<Typography className={"text-xl"}>
								The objective of OpenEPI is to support local innovation that is
								fuelled by a global platform of open data, technology and AI.
							</Typography>
						</Box>
					</Box>
					<Box>
						<Box className={"flex flex-col mb-20 gap-6"}>
							<Typography variant={"h2"} className={"text-4xl xs:text-5xl"}>
								Partners
							</Typography>
							<Typography className={"text-xl"}>
								The project is possible through the cooperation of our partners.
							</Typography>
						</Box>
						{partners.map((partner) => (
							<Box key={partner._id} className={"flex flex-col"}>
								<PartnerCard
									image={partner.partnerLogo}
									name={partner.title}
									description={partner.description}
									href={partner.url}
									sanityImg={true}
								/>
								<Divider className={"my-12"} />
							</Box>
						))}
					</Box>
					<Box className={"flex flex-col mt-16"}>
						<Typography variant={"h2"} className={"text-2xl xs:text-3xl mb-12"}>
							Funded by
						</Typography>
						<PartnerCard
							name={"Norad"}
							description={`Norad is the Norwegian agency for development cooperation. We work for
					the world to achieve the UN's sustainability goals. They are
					responsible for X and Y in the project.`}
							href={"https://norad.no"}
							sanityImg={false}
							image={"/norad.png"}
						/>
					</Box>
					<Box
						className={
							"flex flex-row flex-wrap-reverse md:gap-32 gap-10 mt-40 justify-between"
						}
					>
						<Box className={"min-w-250px w-[273px] h-[342px]"}>
							<Image
								src="/why-openepi.png"
								width={273}
								height={342}
								alt={"Picture of farmers in a flood ridden area"}
								className={"w-full h-full"}
							/>
						</Box>

						<Box className={"flex flex-col gap-12 justify-center flex-1"}>
							<Typography
								variant={"h2"}
								className={"text-4xl sm:text-5xl w-fit"}
							>
								Why OpenEPI
							</Typography>
							<Typography className={"text-xl min-w-[250px] md:min-w-[380px] "}>
								There is a need for a robust and accessible digital
								infrastructure for open data and algorithms on weather, water,
								earth, and vegetation, across projects, sectors, and contexts –
								providing a base for the necessary local technology innovation.
								The Open Earth Platform (OpenEPI) is an initiative to prepare
								for such an infrastructure.
							</Typography>
						</Box>
					</Box>
					<Box
						className={
							"flex flex-row flex-wrap md:gap-32 gap-10 mt-32 justify-between"
						}
					>
						<Box className={"flex flex-col gap-12 justify-end flex-1"}>
							<Typography variant={"h2"} className={"text-4xl sm:text-5xl"}>
								Pre-project and pilot phase
							</Typography>
							<Typography className={"text-xl min-w-[250px] md:min-w-[380px] "}>
								In 2023-2024, OpenEPI will be run as a feasibility study, where
								we will explore and develop the infrastructural concept and the
								blueprint for the platform architecture, the conceptual set-up
								for local innovation, and demonstrate actual solutions based on
								open data and algorithms, addressing specific use cases in
								sub-Saharan Africa. OpenEPI will be designed around open
								principles for data and software, building on the work by
								Norwegian Norad – regarding Digital Public Goods (DGP).
							</Typography>
						</Box>
						<Box className={"min-w-250px w-[273px] h-[342px]"}>
							<Image
								src="/pre-project.png"
								width={273}
								height={342}
								alt={"Picture of farmers in a flood ridden area"}
								className={"w-full h-full"}
							/>
						</Box>
					</Box>
					{articles.length > 0 && <LatestUpdates articles={articles} />}
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
