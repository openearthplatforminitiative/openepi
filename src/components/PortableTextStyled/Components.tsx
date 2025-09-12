import { getImageDimensions } from "@sanity/asset-utils"
import { CameraAltOutlined } from "@mui/icons-material"
import { Tooltip } from "@mui/material"
import imageUrlBuilder from "@sanity/image-url"
import { PortableTextReactComponents } from "next-sanity"
import Link from "next/link"
import CodeBlock from "../CodeBlock"
import { sanityClient, SanityImage } from "@/sanity/api"
import Image from "next/image"
import { createIdFromString } from "@/lib/ContentHeadings"

type Row = {
	_key: string
	cells: string[]
}

export const PortableTextStyledComponents = () => {
	const builder = imageUrlBuilder(sanityClient)

	const Components: Partial<PortableTextReactComponents> = {
		block: {
			h2: ({ children }: any) => (
				<h2 id={createIdFromString(children.toString())}>{children}</h2>
			),
			blockquote: ({ children }: any) => (
				<blockquote className="ml-4 text-base italic">{children}</blockquote>
			),
			link: ({ href, children }: any) => (
				<Link
					href={href}
					className="text-primary-main underline hover:no-underline"
				>
					{children}
				</Link>
			),
		},
		listItem: {
			bullet: ({ children }: any) => (
				<li className="text-base list-disc">{children}</li>
			),
			number: ({ children }: any) => (
				<ol className="list-decimal">{children}</ol>
			),
		},
		types: {
			code: ({ value }: { value: { code: string; language?: string } }) => {
				const code = value?.code ?? ""
				const language = value?.language ?? "plaintext"

				return (
					<div className="not-prose flex flex-col relative w-full h-fit">
						<div className="px-6 pb-2 pt-1 bg-primary-10 text-primary-80 font-mono font-medium w-fit rounded-t-xl -mb-3">
							{language.toUpperCase()}
						</div>
						<CodeBlock codeString={code} language={language} />
					</div>
				)
			},
			table: ({ value }: { value: { rows: Row[] } }) => {
				const { rows } = value
				if (!rows) {
					return null
				}
				const [headerRow, ...bodyRows] = rows
				return (
					<div className="w-full overflow-x-auto max-w-full">
						<table className="prose w-full max-w-full my-4">
							<thead className="border-b border-neutral-80 font-bold">
								<tr>
									{headerRow.cells.map((cell, cellIndex) => {
										const cellStyle = "xs:p-4 p-0 border-neutral-80"

										return (
											<th
												className={
													cellIndex > 0 &&
													cellIndex < headerRow.cells.length - 1
														? cellStyle + " text-center"
														: cellStyle + " text-left"
												}
												key={cellIndex}
											>
												{cell}
											</th>
										)
									})}
								</tr>
							</thead>
							<tbody>
								{bodyRows.map((row) => {
									const cellStyle = "xs:p-4 p-0 border-neutral-80"
									return (
										<tr className="border-b border-neutral-80" key={row._key}>
											{row.cells.map((cell, cellIndex) => (
												<td
													className={
														cellIndex > 0 && cellIndex < row.cells.length - 1
															? cellStyle + " text-center"
															: cellStyle
													}
													key={cellIndex}
												>
													{cell}
												</td>
											))}
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
				)
			},
			image: ({ value }: { value: SanityImage }) => {
				const { width, height } = getImageDimensions(value)
				return (
					<div className="relative w-fit">
						<Image
							src={
								value && value?.asset?._ref
									? builder.image(value.asset._ref).toString()
									: "/article-placeholder.png"
							}
							alt={value && value?.alt ? value.alt : ""}
							loading="lazy"
							height={height}
							width={width}
							className="rounded-xl object-cover"
						/>
						{value && value?.caption && (
							<Tooltip placement="left-end" title={value.caption} arrow>
								<div className="flex justify-center items-center h-fit aspect-square rounded-full bg-secondary-90 text-secondary-main hover:bg-secondary-80 absolute text-[12px] bottom-0 right-0 p-2 m-2">
									<CameraAltOutlined fontSize="inherit" />
								</div>
							</Tooltip>
						)}
					</div>
				)
			},
		},
		marks: {
			code: (props) => {
				return (
					<code className="not-prose bg-neutral-90 px-1 py-1 rounded text-sm font-mono font-normal">
						{props.text}
					</code>
				)
			},
			externalLink: ({ children, value }) => {
				const { href, openInNewTab } = value
				return openInNewTab ? (
					<Link
						className="text-primary-main underline hover:no-underline"
						href={href}
						target="_blank "
						rel="noopener noreferrer"
					>
						{children}
					</Link>
				) : (
					<Link
						className="text-primary-main underline hover:no-underline"
						href={href}
					>
						{children}
					</Link>
				)
			},
			emailLink: ({ children, value }) => {
				const { href } = value
				return (
					<Link
						className="text-primary-main underline hover:no-underline"
						href={`mailto:${href}`}
					>
						{children}
					</Link>
				)
			},
		},
	}
	return Components
}
