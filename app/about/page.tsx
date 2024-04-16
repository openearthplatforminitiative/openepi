import { Box, Typography } from "@mui/material";
import AboutLogo from "@/app/icons/about-logo.svg";
import { fetchPartners, fetchTwoNewestArticles } from "@/sanity/api";
import PartnerCard from "@/app/components/PartnerCard";
import Image from "next/image";

import LatestUpdates from "@/app/components/LatestUpdates";

const Home = async () => {
	const partners = await fetchPartners();
	const articles = await fetchTwoNewestArticles();

	return (
		<>
			<Box className="flex justify-center bg-secondary-90 px-6 sm:px-20 py-16 sm:py-28">
				<Box className="flex flex-col gap-x-6 gap-y-8 max-w-6xl sm:flex-row-reverse sm:items-center">
					<AboutLogo className="w-40 h-40 sm:w-72 sm:h-72 lg:w-96 lg:h-96 flex-shrink-0" />
					<Typography variant="h1" className="text-4xl md:text-6xl">
						An initiative to drive local innovation globally
					</Typography>
				</Box>
			</Box>
			<Box className="flex justify-center px-6 md:px-20 py-16 xs:py-28">
				<Box className="flex flex-col max-w-6xl">
					<Box className="flex flex-col xs:flex-row gap-x-24 lg:gap-x-32 mb-16 sm:mb-24 lg:mb-28">
						<Box>
							<Typography variant="h2" className="text-4xl xs:text-5xl mb-6">
								About
							</Typography>
							<Typography className="text-xl">
								Open data, AI, and digital technologies will be crucial
								catalysts for collaboration, innovation, and informed
								decision-making in addressing climate change – building
								resilience and preparing for climate mitigation in agriculture
								and fisheries.
							</Typography>
						</Box>
						<Box>
							<Typography variant="h2" className="text-4xl xs:text-5xl mb-6">
								Objective
							</Typography>
							<Typography className="text-xl">
								The objective of OpenEPI is to support local innovation that is
								fuelled by a global platform of open data, technology and AI.
							</Typography>
						</Box>
					</Box>
					<Box className="mb-24 lg:mb-40">
						<Typography
							variant="h2"
							className="text-4xl xs:text-5xl mb-5 xs:mb-6"
						>
							Partners
						</Typography>
						<Typography className="text-xl mb-16 lg:mb-20">
							The project is possible through the cooperation of our partners.
						</Typography>
						<Box className="flex flex-col gap-14">
							{partners.map((partner) => (
								<PartnerCard
									key={partner._id}
									image={partner.partnerLogo}
									name={partner.title}
									description={partner.description}
									href={partner.url}
									sanityImg={true}
								/>
							))}
						</Box>
						<Typography
							variant="h3"
							className="text-2xl xs:text-3xl mt-20 sm:mt-24 lg:mt-28 mb-12"
						>
							Funded by
						</Typography>
						<PartnerCard
							name="Norad"
							description={`Norad is the Norwegian agency for development cooperation. They work for the world to achieve the UN's sustainability goals.`}
							href="https://norad.no"
							sanityImg={false}
							image="/norad.png"
						/>
					</Box>
					<Box className="flex flex-col sm:flex-row gap-y-12 gap-x-24 md:gap-x-28 justify-between xs:items-center mb-10 sm:mb-28 lg:mb-32">
						<Image
							src="/why-openepi.png"
							width={360}
							height={452}
							alt="Picture of farmers in a flood-ridden area"
							className="w-full sm:w-[273px] lg:w-[360px]"
						/>
						<Box>
							<Typography variant="h2" className="text-4xl sm:text-5xl mb-8">
								Why OpenEPI
							</Typography>
							<Typography className="text-xl">
								There is a need for a robust and accessible digital
								infrastructure for open data and algorithms on weather, water,
								earth, and vegetation, across projects, sectors, and contexts –
								providing a base for the necessary local technology innovation.
								The Open Earth Platform (OpenEPI) is an initiative to prepare
								for such an infrastructure.
							</Typography>
						</Box>
					</Box>
					<Box className="flex flex-col sm:flex-row-reverse gap-y-12 gap-x-24 md:gap-x-28 justify-between xs:items-center mb-10 sm:mb-28 lg:mb-32">
						<Image
							src="/pre-project.png"
							width={360}
							height={452}
							alt="Picture of farmers in a flood ridden area"
							className="w-full sm:w-[273px] lg:w-[360px]"
						/>
						<Box>
							<Typography variant="h2" className="text-4xl sm:text-5xl mb-8">
								Pre-project and pilot phase
							</Typography>
							<Typography className="text-xl">
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
					</Box>
					{articles.length > 0 && <LatestUpdates articles={articles} />}
				</Box>
			</Box>
		</>
	);
};

export default Home;
