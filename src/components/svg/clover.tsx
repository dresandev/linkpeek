import { SVGProps } from "react"

export const Clover = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={70}
		height={70}
		viewBox="0 0 70 70"
		fill="none"
		{...props}
	>
		<g clipPath="url(#a)">
			<path
				fill="currentColor"
				d="M35 5.833a14.584 14.584 0 0 0-13.09 8.158l-.3.657a14.578 14.578 0 0 0-.975 8.274l.08.408a14.584 14.584 0 0 0-9.016 26.277l.577.408a14.577 14.577 0 0 0 12.892 1.692l.507-.193-2.254 9.027a2.918 2.918 0 0 0 2.829 3.626h17.5l.33-.018a2.916 2.916 0 0 0 2.5-3.608l-2.258-9.027.507.19a14.583 14.583 0 1 0 4.454-28.37l.082-.409A14.576 14.576 0 0 0 35 5.833Z"
			/>
		</g>
		<defs>
			<clipPath id="a">
				<path fill="#fff" d="M0 0h70v70H0z" />
			</clipPath>
		</defs>
	</svg>
)
