import { SVGProps } from "react"

export const InfoCircle = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={20}
		height={20}
		viewBox="0 0 20 20"
		fill="none"
		{...props}
	>
		<g
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			clipPath="url(#a)"
		>
			<path d="M2.5 10a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0ZM10 7.5h.008" />
			<path d="M9.167 10H10v3.333h.833" />
		</g>
	</svg>
)
