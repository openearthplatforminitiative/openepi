import { Box, List, Typography } from "@mui/material";
import { AboutLogo } from "@/app/icons/AboutLogo";
import { fetchPartners } from "@/sanity/api";
import PartnerCard from "@/app/components/PartnerCard";
import Image from "next/image";

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
						<Typography variant={"h2"} className={"text-5xl"}>
							Partners
						</Typography>
						<List>
							{partners.map((partner) => (
								<PartnerCard
									key={partner._id}
									name={partner.title}
									description={partner.description}
									href={partner.url}
								/>
							))}
						</List>
					</Box>
					<Box className={"flex flex-col mt-28"}>
						<Typography variant={"h2"} className={"text-3xl"}>
							Funded by
						</Typography>
						<PartnerCard
							name={"Norad"}
							description={`Norad is the Norwegian agency for development cooperation. We work for
					the world to achieve the UN's sustainability goals. They are
					responsible for X and Y in the project.`}
							href={"https://norad.no"}
						/>
					</Box>
					<Box className={"flex flex-row gap-10 mt-40"}>
						<Box>
							<Image
								src="/why-openepi.png"
								width={360}
								height={452}
								alt={"Picture of farmers in a flood ridden area"}
							/>
						</Box>
						<Box className={"flex flex-col gap-12 ml-32 justify-center"}>
							<Typography variant={"h2"} className={"text-5xl"}>
								Why OpenEPI
							</Typography>
							<Typography className={"text-xl max-w-[647px]"}>
								There is a need for a robust and accessible digital
								infrastructure for open data and algorithms on weather, water,
								earth, and vegetation, across projects, sectors, and contexts –
								providing a base for the necessary local technology innovation.
								The Open Earth Platform (OpenEPI) is an initiative to prepare
								for such an infrastructure.
							</Typography>
						</Box>
					</Box>
					<Box className={"flex flex-row gap-10 mt-32"}>
						<Box className={"flex flex-col gap-12 mr-32 justify-end"}>
							<Typography variant={"h2"} className={"text-5xl"}>
								Pre-project and pilot phase{" "}
							</Typography>
							<Typography className={"text-xl max-w-[647px]"}>
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
						<Box>
							<Image
								src="/pre-project.png"
								width={360}
								height={452}
								alt={"Picture of farmers in a flood ridden area"}
							/>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
