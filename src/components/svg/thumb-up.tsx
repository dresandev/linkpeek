import { SVGProps } from "react"

export const ThumbUp = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={70} height={70} fill="none" {...props}>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={4}
			d="M20.417 32.083v23.334a2.917 2.917 0 0 1-2.917 2.916h-5.833a2.917 2.917 0 0 1-2.917-2.916V35a2.917 2.917 0 0 1 2.917-2.917h8.75Zm0 0a11.666 11.666 0 0 0 11.666-11.666V17.5a5.833 5.833 0 0 1 11.667 0v14.583h8.75a5.833 5.833 0 0 1 5.833 5.834L55.417 52.5c-.42 1.79-1.215 3.326-2.268 4.378-1.052 1.052-2.303 1.563-3.566 1.455H29.167a8.75 8.75 0 0 1-8.75-8.75"
		/>
	</svg>
)
