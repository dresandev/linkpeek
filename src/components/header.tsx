import { Cash, Flower, ThumbUp } from "./svg"
import { SecretKeyForm } from "./secret-key-form"

export const Header = () => {
	return (
		<header className="relative pb-8 pt-40">
			<div className="bg-grid absolute inset-0 -bottom-24 -z-10"></div>
			<h1 className="mx-auto mb-4 max-w-[760px] text-center text-[60px] font-bold leading-tight">
				<span className="relative rounded-full text-buttery-yellow hover:bg-[hsl(48_97%_77%/0.1)]">
					<ThumbUp className="absolute inset-x-0 -top-14 mx-auto" /> Bueno
				</span>
				,{" "}
				<span className="relative rounded-full text-soft-teal hover:bg-[hsl(151_24%_61%/0.1)]">
					<Flower className="absolute inset-x-0 -top-14 mx-auto" />
					Bonito
				</span>{" "}
				y{" "}
				<span className="relative rounded-full text-warm-coral hover:bg-[hsl(0_91%_71%/0.1)]">
					<Cash className="absolute inset-x-0 -top-14 mx-auto" />
					Barato
				</span>
				, más facil que la tabla del 0
			</h1>
			<p className="mx-auto max-w-[760px] text-center text-xl">
				Gestiona tus links de manera rapida, simple, sencilla, amigable, honesta, correcta,
				apasionada, creible, fiable, responsable y sobre todo divergente
			</p>

			<SecretKeyForm />
		</header>
	)
}
