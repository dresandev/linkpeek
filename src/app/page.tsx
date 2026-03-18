import type { Filters } from "@/types"
import { Header } from "@/components/header"
import { SearchBar } from "@/components/search-bar"
import { TagList } from "@/components/tag-list"
import { LinkGrid } from "@/components/link-grid"
import { Footer } from "@/components/footer"
import { AccessDeniedToast } from "@/components/access-denied-toast"

interface Props {
	searchParams: Promise<{ [key: string]: string | undefined }>
}

export default async function Home({ searchParams }: Props) {
	const { tag, phrase, error: errorType } = await searchParams

	const filters: Filters = {
		tagFilter: tag,
		titleFilter: phrase,
	}

	return (
		<>
			<Header />
			<main className="mx-auto max-w-368 px-5">
				<SearchBar />
				<TagList filters={filters} />
				<LinkGrid filters={filters} />
			</main>
			<Footer />
			<AccessDeniedToast errorType={errorType} />
		</>
	)
}
