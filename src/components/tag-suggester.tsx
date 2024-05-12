import { type Tag } from "~/types"
import type { FC, MouseEventHandler, KeyboardEventHandler } from "react"
import { useEffect, useState } from "react"
import { useDebounce } from "@uidotdev/usehooks"
import { searchTags } from "~/actions/tags"
import { cn } from "~/lib/utils"

interface Props {
	searchTerm: string
	onSelect: (tag: Tag) => void
}

const DEBOUNCE_TIME = 300

export const TagSuggester: FC<Props> = ({ searchTerm, onSelect }) => {
	const [selectedTagIdx, setSelectedTagIdx] = useState<Number | null>(null)
	const [tags, setTags] = useState<Tag[]>([])
	const debouncedSearchTerm = useDebounce(searchTerm, DEBOUNCE_TIME)

	useEffect(() => {
		const getTags = async () => {
			const tags = await searchTags(debouncedSearchTerm.toLowerCase())
			if (!tags) return setTags([])
			setTags(tags)
		}

		getTags()
	}, [debouncedSearchTerm])

	useEffect(() => {
		const handleKeydown = (e: KeyboardEvent) => {
			if (e.code === "ArrowUp") {
			}

			if (e.code === "ArrowDown") {
			}
		}

		window.addEventListener("keydown", handleKeydown)

		return () => {
			window.removeEventListener("keydown", handleKeydown)
		}
	}, [selectedTagIdx, tags.length])

	const handleOnClick: MouseEventHandler<HTMLLIElement> = (e) => {
		const idx = Number(e.currentTarget.dataset.idx)
		onSelect(tags[idx])
		setTags([])
	}

	return (
		<ul
			id="tags-popup"
			role="listbox"
			className={cn(
				"absolute inset-x-0 top-full z-30 hidden cursor-pointer overflow-hidden rounded-lg border border-stroke bg-stroke",
				{ "flex flex-col gap-y-px": tags.length }
			)}
		>
			{tags.map((tag, idx) => (
				<li
					role="option"
					aria-selected={false}
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
