import { Box, Typography } from "@mui/material";
import { ResourcesLogo } from "@/app/icons/ResourcesLogo";
import ResourceCard from "@/app/components/ResourceCard";
import { fetchDocuments } from "@/sanity/api";

const Home = async () => {
	const documents = await fetchDocuments();
	return (
		<Box className={"w-full"}>
			<Box className={"flex justify-center bg-secondary-90"}>
				<Box
					className={
						"flex flex-col-reverse px-8  md:flex-row items-baseline md:items-center lg:max-w-7xl  py-20 gap-16"
					}
				>
					<Typography
						variant={"h1"}
						className={"leading-[48px] xs:leading-[64px] text-4xl xs:text-6xl"}
					>
						Project documents and specifications
					</Typography>
					<Box>
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
					{documents.map(
						(document) =>
							document.slug !== "metadata-specification" && (
								<ResourceCard
									key={document._id}
									externalLink={false}
									text={document.title}
									href={`/resources/${document.slug}`}
								/>
							),
					)}
					<ResourceCard
						externalLink={false}
						text={"Our metadata specification"}
						href={`/resources/metadata`}
					/>
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
