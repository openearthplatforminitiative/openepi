import { PortableTextProps } from "next-sanity"

export function getHeadingText(children: Array<any>): string {
	if (!Array.isArray(children)) return ""
	return children
		.map((child) => (typeof child === "string" ? child : child.text || ""))
		.join("")
}

export type TOCItem = {
	id: string
	text: string
}

export function getContentHeadings(
	value: PortableTextProps["value"]
): TOCItem[] | null {
	if (!Array.isArray(value)) return null
	return value.reduce((headings: TOCItem[], node) => {
		if (node.style === "h2") {
			const headingText = getHeadingText(node.children)
			headings.push({
				id: createIdFromString(headingText),
				text: headingText,
			})
		}
		return headings
	}, [])
}

export const createIdFromString = (str: string): string => {
	if (typeof str !== "string") return ""
	return str
		.replace(/\s+/g, "-") // Replace spaces with dashes
		.toLowerCase() // Convert to lowercase
		.replace(/[^a-z0-9-]/g, "") // Remove special characters except dashes
}
