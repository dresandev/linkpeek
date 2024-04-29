import { LuckyLink } from "~/components/lucky-link"
import { Header } from "~/components/header"
import { TagList } from "~/components/tag-list"
import { LinkGrid } from "~/components/link-grid"
import { Footer } from "~/components/footer"

export default function Home() {
	return (
		<>
			<LuckyLink />
			<Header />
			<main className="mx-auto max-w-[1472px]">
				<TagList />
				<LinkGrid />
			</main>
			<Footer />
		</>
	)
}
