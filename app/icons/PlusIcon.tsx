interface IconColorProps {
	color: string
}

export const PlusIcon = ({ color }: IconColorProps) => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 18 18"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M15 9.75H9.75V15H8.25V9.75H3V8.25H8.25V3H9.75V8.25H15V9.75Z"
			fill={color}
		/>
	</svg>
)
