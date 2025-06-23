import { Box, Card, Typography } from "@mui/material"
import ResourcesLogo from "@/app/icons/resources-logo.svg"
import ResourceCard from "@/app/components/ResourceCard"
import { fetchRootDocuments } from "@/sanity/api"
import Link from "next/link"
import { DownloadOutlined } from "@mui/icons-material"

const Home = async () => {
	const documents = await fetchRootDocuments()
	return (
		<>
			<Box className="flex justify-center bg-secondary-90 px-6 sm:px-20 py-16 sm:py-28">
				<Box className="flex flex-col gap-x-6 gap-y-8 max-w-6xl sm:flex-row-reverse sm:items-center">
					<ResourcesLogo className="w-40 h-40 sm:w-72 sm:h-72 lg:w-96 lg:h-96 flex-shrink-0" />
					<Typography variant="h1" className="text-4xl md:text-6xl">
						Project documents and specifications
					</Typography>
				</Box>
			</Box>
			<Box className="flex justify-center px-6 md:px-20 py-16 xs:py-28">
				<Box className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl flex-1 justify-items-stretch">
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
						text="OpenAPI specification"
						href="https://swagger.io/specification/"
					/>
					<Link
						href="reports/OpenEPI-feasibility-study.pdf"
						target="_blank"
						download
						className="flex"
					>
						<Card className="group shadow-none rounded-xl bg-card p-6 gap-3 flex justify-between items-baseline hover:bg-secondary-90 h-full w-full">
							<Box className="text-xl xs:text-2xl">Feasibility study</Box>
							<Box className="transform transition-transform duration-300 group-hover:translate-y-2">
								<DownloadOutlined />
							</Box>
						</Card>
					</Link>
				</Box>
			</Box>
		</>
	)
}

export default Home
