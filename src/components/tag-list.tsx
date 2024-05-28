import type { Filters } from "~/types"
import { getTags } from "~/actions/tags"
import { TagListPill } from "~/components/tag-list-pill"

interface Props {
	filters: Filters
}

export const TagList: React.FC<Props> = async ({ filters }) => {
	const { tagFilter = "Todo", titleFilter } = filters
	const tags = await getTags()

	return (
		<div className="hover-none:no-scrollbar -mx-5 flex items-start gap-x-4 overflow-x-auto px-5 py-2">
			<TagListPill name="Todo" isSelected={tagFilter === "Todo" && !titleFilter} />
			{tags.map(({ id, name }) => (
				<TagListPill key={id} name={name} isSelected={name === tagFilter} />
			))}
		</div>
	)
}
