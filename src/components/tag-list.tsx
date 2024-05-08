import { getTags } from "~/actions/tags"
import { TagListPill } from "~/components/tag-list-pill"

export const TagList = async () => {
	const tags = await getTags()

	return (
		<div className="no-scrollbar -mx-5 flex gap-x-4 overflow-x-auto px-5 py-2">
			<TagListPill name="Todo" isSelected />

			{tags.map((tag) => (
				<TagListPill key={tag.id} {...tag} />
			))}
		</div>
	)
}
