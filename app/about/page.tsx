import { Box, List, Typography } from "@mui/material";
import { AboutLogo } from "@/app/icons/AboutLogo";
import { fetchPartners } from "@/sanity/api";
import PartnerCard from "@/app/components/PartnerCard";

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
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
