import { ArrowRight } from "./svg"

export const LuckyLink = () => {
	return (
		<a
			className="img-pixelated flex h-12 cursor-pointer items-center justify-center gap-x-3 border-b-[1px] border-[#252525] bg-[hsl(240_6%_10%)] bg-sparkles-pattern font-semibold opacity-75 transition-[column-gap,opacity] duration-300 hover:gap-x-5 hover:opacity-100"
			href="https://dresan.is-a.dev"
			target="_blank"
		>
			<p>
				Dale un vistazo al más <span className="text-light-sky-blue">Umbroso</span>
			</p>
			<ArrowRight />
		</a>
	)
}
