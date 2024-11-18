import type { Filters } from "~/types"
import { getLinks } from "~/actions/links"
import { LinkCard } from "~/components/link-card"
import { NoItemsIllustration } from "~/components/svg"

interface Props {
	filters: Filters
}

export const LinkGrid: React.FC<Props> = async ({ filters }) => {
	const links = await getLinks({ filters })

	if (!links.length) {
		return (
			<>
				<NoItemsIllustration className="mx-auto mb-6 mt-24 h-auto w-full max-w-96" />
				<p className="mb-24 text-center text-xl">No se encontraron Links guardados.</p>
			</>
		)
	}

	return (
		<section className="mb-40 mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4">
			<h2 className="sr-only">Tarjetas de links</h2>
			{links.map((link, i) => (
				<LinkCard
					key={link.id}
					index={i}
					link={link}
				/>
			))}
		</section>
	)
}
