import { type Tag } from "~/types"
import { useEffect, useState } from "react"
import { searchTags } from "~/actions/tags"
import { cn } from "~/lib/utils"

interface Props {
	q: string
	onSelect: (tag: Tag) => void
}

export const TagSuggester: React.FC<Props> = ({ q, onSelect }) => {
	const [tags, setTags] = useState<Tag[]>([])

	useEffect(() => {
		const getTags = async () => {
			const tags = await searchTags(q)
			if (!tags) return setTags([])
			setTags(tags)
		}

		getTags()
	}, [q])

	const handleOnClick: React.MouseEventHandler<HTMLLIElement> = (e) => {
		onSelect({ name: e.currentTarget.textContent! })
	}

	const handleKeyDown: React.KeyboardEventHandler<HTMLUListElement> = (e) => {}

	return (
		<ul
			id="tags-popup"
			role="listbox"
			className={cn(
				"absolute inset-x-0 top-full z-30 hidden cursor-pointer overflow-hidden rounded-lg border border-stroke bg-stroke",
				{ "flex flex-col gap-y-px": tags.length }
			)}
			onKeyDown={handleKeyDown}
		>
			{tags.map((tag) => (
				<li
					role="option"
					aria-selected={false}
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
