import { Box, Button, Divider, List, Typography } from "@mui/material";
import { AboutLogo } from "@/app/icons/AboutLogo";
import { fetchPartners } from "@/sanity/api";
import PartnerCard from "@/app/components/PartnerCard";
import Image from "next/image";
import ArticleCard from "@/app/components/ArticleCard";
import Link from "next/link";

const Home = async () => {
	const partners = await fetchPartners();

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
						className={"leading-[48px] xs:leading-[64px] text-4xl xs:text-6xl"}
					>
						An initiative to drive local innovation globally
					</Typography>
					<Box>
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
					<Box className={"flex flex-row mb-44"}>
						<Box className={"flex flex-col gap-6 w-2/3 mr-28"}>
							<Typography variant={"h2"} className={"text-5xl"}>
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
						<Box className={"flex flex-col gap-6 w-1/3"}>
							<Typography variant={"h2"} className={"text-5xl"}>
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
							<Typography variant={"h2"} className={"text-5xl"}>
								Partners
							</Typography>
							<Typography className={"text-xl"}>
								The project is possible through the cooperation of our partners.
							</Typography>
						</Box>
						<List>
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
						</List>
					</Box>
					<Box className={"flex flex-col mt-16"}>
						<Typography variant={"h2"} className={"text-3xl mb-12"}>
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
							"flex flex-row flex-wrap-reverse gap-10 mt-40 justify-between"
						}
					>
						<Image
							src="/why-openepi.png"
							width={360}
							height={452}
							alt={"Picture of farmers in a flood ridden area"}
						/>

						<Box className={"flex flex-col gap-12 justify-center flex-1"}>
							<Typography variant={"h2"} className={"text-5xl"}>
								Why OpenEPI
							</Typography>
							<Typography className={"text-xl min-w-[380px] max-w-[647px]"}>
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
						className={"flex flex-row flex-wrap gap-10 mt-32 justify-between"}
					>
						<Box className={"flex flex-col gap-12 justify-end flex-1"}>
							<Typography variant={"h2"} className={"text-5xl"}>
								Pre-project and pilot phase
							</Typography>
							<Typography className={"text-xl min-w-[380px] max-w-[647px]"}>
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

						<Image
							src="/pre-project.png"
							width={360}
							height={452}
							alt={"Picture of farmers in a flood ridden area"}
						/>
					</Box>
					<Box className={"flex flex-col mt-28 gap-12 justify-end"}>
						<Typography variant={"h2"} className={"text-5xl"}>
							Latest updates
						</Typography>
						<Box className={"flex flex-wrap gap-12 "}>
							<ArticleCard
								header={
									"Revitalizing Local Solutions through Global Data and AI Innovation"
								}
								href={"/"}
								imageUrl={"/article_1.png"}
								alt={"Article 1 alt text"}
							/>
							<ArticleCard
								header={
									"Empowering Local Change with Unleashed Global Tech for Innovation"
								}
								href={"/"}
								imageUrl={"/article_2.png"}
								alt={"Article 2 alt text"}
							/>
							<ArticleCard
								header={"Sample article"}
								href={"/"}
								imageUrl={"/article_2.png"}
								alt={"Article 2 alt text"}
							/>
						</Box>
						<Box className={"flex flex-row justify-end"}>
							<Link href={"/"} className={"lg:w-fit w-full"}>
								<Button
									variant={"outlined"}
									className={
										"text-primary-main sm:w-fit rounded-full border-neutralVariant-50 normal-case lg:text-sm text-lg w-full h-10"
									}
								>
									More articles
								</Button>
							</Link>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
