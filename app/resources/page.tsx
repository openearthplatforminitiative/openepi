import { Box, Typography } from "@mui/material";
import { ResourcesLogo } from "@/app/icons/ResourcesLogo";
import ResourceCard from "@/app/components/ResourceCard";
import { fetchRootDocuments } from "@/sanity/api";

const Home = async () => {
	const documents = await fetchRootDocuments();
	return (
		<Box className={"w-full"}>
			<Box className={"flex justify-center bg-secondary-90"}>
				<Box
					className={
						"flex flex-col px-8 xs:mx-32 md:flex-row items-baseline md:items-center lg:max-w-7xl xl:mx-72 py-20 gap-16"
					}
				>
					<Typography
						variant={"h1"}
						className={"leading-[48px] xs:leading-[64px] text-4xl xs:text-6xl"}
					>
						Project documents and specifications
					</Typography>
					<Box className={"flex w-full justify-center"}>
						<ResourcesLogo />
					</Box>
				</Box>
			</Box>
			<Box className={"flex w-full justify-center"}>
				<Box
					className={
						"flex flex-wrap gap-6 w-full h-full lg:max-w-7xl p-6 lg:my-44 my-20"
					}
				>
					{documents.map((document) => (
						<ResourceCard
							key={document._id}
							externalLink={false}
							text={document.title}
							href={`/resources/${document.slug.current}`}
						/>
					))}
					<ResourceCard
						externalLink={true}
						text={"OpenAPI specification"}
						href={"https://swagger.io/specification/"}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
