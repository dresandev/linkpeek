import type { Filters } from "~/types"
import { Header } from "~/components/header"
import { SearchBar } from "~/components/search-bar"
import { TagList } from "~/components/tag-list"
import { LinkGrid } from "~/components/link-grid"
import { Footer } from "~/components/footer"
import { AccessDeniedToast } from "~/components/access-denied-toast"

interface Props {
	searchParams: {
		[key: string]: string | undefined
	}
}

export default function Home({ searchParams }: Props) {
	const tag = searchParams?.tag
	const phrase = searchParams?.phrase
	const errorType = searchParams?.error

	const filters: Filters = {
		tagFilter: tag,
		titleFilter: phrase,
	}

	return (
		<>
			<Header />
			<main className="mx-auto max-w-[1472px] px-5">
				<SearchBar />
				<TagList filters={filters} />
				<LinkGrid filters={filters} />
			</main>
			<Footer />
			<AccessDeniedToast errorType={errorType} />
		</>
	)
}
