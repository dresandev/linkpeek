import { TagPill } from "./tag-pill"

const TAGS = [
	{ label: "Todo", isSelected: true },
	{ label: "Javascript" },
	{ label: "Typescript" },
	{ label: "CSS" },
	{ label: "HTML" },
]

export const TagList = () => {
	return (
		<div className="-mx-5 flex gap-x-4 overflow-x-auto px-5 pb-2">
			{TAGS.map((tag) => (
				<TagPill key={tag.label} {...tag} />
			))}
		</div>
	)
}
