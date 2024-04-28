import { TagPill } from "./tag-pill"

const TAGS = ["Todo", "Javascript", "Typescript", "CSS", "HTML"]

export const Tags = () => {
	return (
		<div className="flex gap-x-4">
			{TAGS.map((tag) => (
				<TagPill key={tag} label={tag} />
			))}
		</div>
	)
}
