import { LinkCard } from "./link-card"

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
		<section className="mb-40 mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:md:grid-cols-4">
			{LINKS.map((link) => (
				<LinkCard key={link.url} {...link} />
			))}
		</section>
	)
}
