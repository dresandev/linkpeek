export const LuckyLink = () => {
	return (
		<a
			className="img-pixelated flex h-12 cursor-pointer items-center justify-center border-b border-[hsl(0_0%_15%)] bg-[hsl(240_6%_10%)] bg-[url(/assets/sparkles.png)]	 font-semibold opacity-75 transition-opacity duration-300 hover:opacity-100 focus:-outline-offset-1 will-change-transform"
			href="https://dresan.dev"
			target="_blank"
		>
			Otros proyectos de &nbsp;
			<span className="text-light-sky-blue">Dresan</span>
		</a>
	)
}
