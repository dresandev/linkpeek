import { LuckyLink } from "~/components/lucky-link"
import { Header } from "~/components/header"
import { TagList } from "~/components/tag-list"
import { LinkGrid } from "~/components/link-grid"
import { Footer } from "~/components/footer"
import { SearchBar } from "~/components/search-bar"

export default async function Home() {
	return (
		<>
			<LuckyLink />
			<Header />
			<main className="mx-auto max-w-[1472px] px-5">
				<SearchBar />
				<TagList />
				<LinkGrid />
			</main>
			<Footer />
		</>
	)
}
