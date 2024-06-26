import { SVGProps } from "react"

export const DotsVertical = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		{...props}
	>
		<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
			<path d="M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM11 19a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM11 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z" />
		</g>
	</svg>
)
