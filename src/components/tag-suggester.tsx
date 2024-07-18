import type { FC, MouseEventHandler, Dispatch, SetStateAction } from "react"
import { useEffect, useRef } from "react"
import { useDebounce } from "use-debounce"
import { Tag } from "~/types"
import { searchTags } from "~/actions/tags"
import { cn } from "~/lib/utils"

interface Props {
	searchTerm: string
	suggestedTags: Tag[]
	setSuggestedTags: Dispatch<SetStateAction<Tag[]>>
	suggestedTagIdx: number | null
	onSelect: (tagName: Tag) => void
}

const DEBOUNCE_TIME = 250

export const TagSuggester: FC<Props> = ({
	searchTerm,
	suggestedTags,
	setSuggestedTags,
	suggestedTagIdx,
	onSelect,
}) => {
	const [debouncedSearchTerm] = useDebounce(searchTerm, DEBOUNCE_TIME)
	const listboxRef = useRef<HTMLUListElement>(null)

	useEffect(() => {
		if (!debouncedSearchTerm) return setSuggestedTags([])

		const getTags = async () => {
			const suggestedTags = await searchTags(debouncedSearchTerm.toLowerCase())
			if (!suggestedTags) return setSuggestedTags([])
			setSuggestedTags(suggestedTags)
		}

		getTags()
	}, [debouncedSearchTerm, setSuggestedTags])

	const handleOnClick: MouseEventHandler<HTMLLIElement> = (e) => {
		const idx = Number(e.currentTarget.dataset.idx)
		onSelect(suggestedTags[idx])
	}

	return (
		<ul
			ref={listboxRef}
			id="tags-popup"
			role="listbox"
			className={cn(
				"absolute inset-x-0 top-full z-30 hidden cursor-pointer overflow-hidden rounded-lg border border-stroke bg-stroke",
				{ "flex flex-col gap-y-px": suggestedTags.length }
			)}
		>
			{suggestedTags.map((tag, idx) => (
				<li
					role="option"
					aria-selected={suggestedTagIdx === idx}
					data-idx={idx}
					key={tag.id}
					className="bg-secondary-surface px-4 py-1 font-semibold hover:bg-text hover:text-surface aria-selected:bg-text aria-selected:text-surface"
					onClick={handleOnClick}
				>
					{tag.name}
				</li>
			))}
		</ul>
	)
}
