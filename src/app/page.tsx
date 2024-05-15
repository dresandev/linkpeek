import { Header } from "~/components/header"
import { TagList } from "~/components/tag-list"
import { LinkGrid } from "~/components/link-grid"
import { Footer } from "~/components/footer"
import { SearchBar } from "~/components/search-bar"

interface Props {
	searchParams: {
		[key: string]: string | undefined
	}
}

export default function Home({ searchParams }: Props) {
	const tag = searchParams.tag
	const phrase = searchParams.phrase

	return (
		<>
			<Header />
			<main className="mx-auto max-w-[1472px] px-5">
				<SearchBar />
				<TagList tagFilter={tag} titleFilter={phrase} />
				<LinkGrid tagFilter={tag} titleFilter={phrase} />
			</main>
			<Footer />
		</>
	)
}
