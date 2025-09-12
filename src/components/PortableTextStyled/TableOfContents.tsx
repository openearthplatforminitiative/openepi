"use client"

import { getContentHeadings, TOCItem } from "@/lib/ContentHeadings"
import { PortableTextProps } from "next-sanity"
import { useEffect, useMemo, useState } from "react"

type TableOfContentsProps = {
	headings: TOCItem[]
}

export const TableOfContents = ({ headings }: TableOfContentsProps) => {
	const [currentHeading, setCurrentHeading] = useState<null | string>(null)

	useEffect(() => {
		if (!headings || headings.length === 0) return

		const handleScroll = () => {
			const viewportHeight = window.innerHeight
			for (const heading of headings) {
				const element = document.getElementById(heading.id)
				if (
					element &&
					element.getBoundingClientRect().top >= 0 &&
					element.getBoundingClientRect().bottom <= viewportHeight / 2
				) {
					setCurrentHeading(heading.id)
					break
				}
			}
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [headings])

	const OFFSET = 100

	const handleHeadingClick = (
		event: React.MouseEvent<HTMLAnchorElement>,
		id: string
	) => {
		event.preventDefault()
		const element = document.getElementById(id)
		if (element) {
			const offsetPosition =
				element.getBoundingClientRect().top + window.pageYOffset - OFFSET
			window.scrollTo({ behavior: "smooth", top: offsetPosition })
		}
	}

	if (!headings || headings.length === 0) {
		return null
	}

	return (
		<nav aria-label="Table of contents">
			<p className="pt-2 mb-4 font-medium">Table of Contents</p>
			<ol className="pl-2 overflow-y-auto">
				{headings.map((heading) => (
					<li key={heading.id}>
						<a
							className={`py-1 block text-sm transition-colors mb-2
                ${
									currentHeading === heading.id
										? "text-black font-medium"
										: "text-gray-600"
								}`}
							href={`#${heading.id}`}
							onClick={(event) => handleHeadingClick(event, heading.id)}
						>
							{heading.text}
						</a>
					</li>
				))}
			</ol>
		</nav>
	)
}
