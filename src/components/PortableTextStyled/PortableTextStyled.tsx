import { PortableText, PortableTextProps } from "@portabletext/react"
import { PortableTextStyledComponents } from "./Components"

export default function PortableTextStyled({ value }: PortableTextProps) {
	const valueGroups = !Array.isArray(value)
		? []
		: value.reduce(
				(acc: any, item: any) => {
					const lastIdx = acc.length - 1
					if (
						acc[lastIdx].length === 0 ||
						acc[lastIdx][0]._type === item._type
					) {
						acc[lastIdx].push(item)
					} else {
						acc.push([item])
					}
					return acc
				},
				[[]]
			)

	if (!valueGroups?.length) return null

	return (
		<div className="prose max-w-none">
			{valueGroups.map((group: any, index: number) =>
				group[0]._type === "block" ? (
					<div
						key={group[0]._key}
						className={`break-words max-w-3xl ${index == 0 ? "[&>*]:first:mt-0!" : ""}`}
					>
						<PortableText
							value={group}
							components={PortableTextStyledComponents()}
						/>
					</div>
				) : (
					<PortableText
						key={group[0]._key}
						value={group}
						components={PortableTextStyledComponents()}
					/>
				)
			)}
		</div>
	)
}
