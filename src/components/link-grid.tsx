import { LinkCard } from "~/components/link-card"

const LINKS = [
	{
		url: "https://dresan.is-a.dev",
		title: "Dresan Portfolio",
		description: "Gestiona tus links de manera rapida, simple, sencilla, amigable.",
		ogImage: "/assets/link-og-image.png",
	},
	{
		url: "https://dresan.is-a.dev",
		title: "Dresan Portfolio",
		description: "Gestiona tus links de manera rapida, simple, sencilla, amigable.",
		ogImage: "/assets/link-og-image.png",
	},
	{
		url: "https://dresan.is-a.dev",
		title: "Dresan Portfolio",
		description: "Gestiona tus links de manera rapida, simple, sencilla, amigable.",
		ogImage: "/assets/link-og-image.png",
	},
	{
		url: "https://dresan.is-a.dev",
		title: "Dresan Portfolio",
		description: "Gestiona tus links de manera rapida, simple, sencilla, amigable.",
		ogImage: "/assets/link-og-image.png",
	},
	{
		url: "https://dresan.is-a.dev",
		title: "Dresan Portfolio",
		description: "Gestiona tus links de manera rapida, simple, sencilla, amigable.",
		ogImage: "/assets/link-og-image.png",
	},
	{
		url: "https://dresan.is-a.dev",
		title: "Dresan Portfolio",
		description: "Gestiona tus links de manera rapida, simple, sencilla, amigable.",
		ogImage: "/assets/link-og-image.png",
	},
	{
		url: "https://dresan.is-a.dev",
		title: "Dresan Portfolio",
		description: "Gestiona tus links de manera rapida, simple, sencilla, amigable.",
		ogImage: "/assets/link-og-image.png",
	},
	{
		url: "https://dresan.is-a.dev",
		title: "Dresan Portfolio",
		description: "Gestiona tus links de manera rapida, simple, sencilla, amigable.",
		ogImage: "/assets/link-og-image.png",
	},
]

export const LinkGrid = () => {
	return (
		<section className="mb-40 mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4 lg:gap-6">
			{LINKS.map((link) => (
				<LinkCard key={link.url} {...link} />
			))}
		</section>
	)
}
