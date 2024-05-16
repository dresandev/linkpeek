import { SVGProps } from "react"

export const LogoutIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={2}
		className="icon icon-tabler icons-tabler-outline icon-tabler-logout"
		{...props}
	>
		<path stroke="none" d="M0 0h24v24H0z" />
		<path d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2" />
		<path d="M9 12h12l-3-3M18 15l3-3" />
	</svg>
)
