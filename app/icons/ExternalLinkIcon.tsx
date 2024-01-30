interface IconColorProps {
	color: string;
}

export const ExternalLinkIcon = ({ color }: IconColorProps) => (
	<svg
		width="14"
		height="14"
		viewBox="0 0 14 14"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M1.5 0.5V2.5H10.09L0.5 12.09L1.91 13.5L11.5 3.91V12.5H13.5V0.5H1.5Z"
			fill={color}
		/>
	</svg>
);
