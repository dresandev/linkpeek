import { getLinks } from "~/actions/links"
import { LinkCard } from "~/components/link-card"
import { NoItems } from "~/components/svg"

export const LinkGrid = async () => {
	const links = await getLinks()

	if (!links.length) {
		return (
			<>
				<NoItems className="mx-auto mb-4 mt-36 w-full" />
				<p className="mb-36 text-center text-xl">No tienes links guardados</p>
			</>
		)
	}

	return (
		<section className="mb-40 mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4">
			{links.map((link) => (
				<LinkCard key={link.id} {...link} />
			))}
		</section>
	)
}
