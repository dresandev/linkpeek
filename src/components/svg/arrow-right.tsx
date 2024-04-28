import { SVGProps } from "react"

export const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={20}
		height={20}
		viewBox="0 0 20 20"
		fill="none"
		{...props}
	>
		<path
			fill="currentColor"
			d="m17.538 10.663-5.625 5.625a.94.94 0 1 1-1.328-1.328l4.024-4.023H3.125a.938.938 0 0 1 0-1.874h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.329l5.625 5.625a.935.935 0 0 1-.002 1.33Z"
		/>
	</svg>
)
