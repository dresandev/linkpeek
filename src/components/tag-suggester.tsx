import type { FC, MouseEventHandler, Dispatch, SetStateAction } from "react"
import { useEffect, useRef } from "react"
import { useDebounce } from "@uidotdev/usehooks"
import { searchTags } from "~/actions/tags"
import { cn } from "~/lib/utils"

interface Props {
	searchTerm: string
	suggestedTags: string[]
	setSuggestedTags: Dispatch<SetStateAction<string[]>>
	suggestedTagIdx: number | null
	onSelect: (tag: string) => void
}

const DEBOUNCE_TIME = 250

export const TagSuggester: FC<Props> = ({
	searchTerm,
	suggestedTags,
	setSuggestedTags,
	suggestedTagIdx,
	onSelect,
}) => {
	const debouncedSearchTerm = useDebounce(searchTerm, DEBOUNCE_TIME)
	const listboxRef = useRef<HTMLUListElement>(null)

	useEffect(() => {
		const getTags = async () => {
			const suggestedTags = await searchTags(debouncedSearchTerm.toLowerCase())
			if (!suggestedTags) return setSuggestedTags([])
			const tagsNames = suggestedTags.map((tag) => tag.name)
			setSuggestedTags(tagsNames)
		}

		getTags()
	}, [debouncedSearchTerm, setSuggestedTags])

	useEffect(() => {
		if (!listboxRef.current) return

		Array.from(listboxRef.current.children).forEach((tagElement, currentIdx) => {
			tagElement.setAttribute("aria-selected", "false")

			if (suggestedTagIdx === currentIdx) {
				tagElement.setAttribute("aria-selected", "true")
			}
		})
	}, [suggestedTagIdx])

	const handleOnClick: MouseEventHandler<HTMLLIElement> = (e) => {
		const idx = Number(e.currentTarget.dataset.idx)
		onSelect(suggestedTags[idx])
		setSuggestedTags([])
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
					aria-selected={false}
					data-idx={idx}
					key={tag}
					className="bg-secondary-surface px-4 py-1 font-semibold hover:bg-text hover:text-surface aria-selected:bg-text aria-selected:text-surface"
					onClick={handleOnClick}
				>
					{tag}
				</li>
			))}
		</ul>
	)
}
