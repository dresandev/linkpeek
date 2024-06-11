import Link from "next/link"
import { cn } from "~/lib/utils"

interface Props {
	name: string
	isSelected: boolean
}

export const TagListPill: React.FC<Props> = ({ name, isSelected }) => {
	const href = name !== "Todo" ? `/?tag=${name}` : "?"

	return (
		<Link
			href={href}
			className={cn(
				"relative min-w-max select-none px-5 py-2 text-[14px] font-medium focus-visible:outline-none",
				{
					"text-surface": isSelected,
					"[&:hover>div]:bg-[hsl(240_4%_39%/0.6)] [&:is(:hover,:focus-visible)>div]:scale-[1.05]":
						!isSelected,
				}
			)}
			type="button"
			scroll={false}
			draggable={false}
		>
			<div
				className={cn("absolute inset-0 -z-10 rounded-lg bg-[hsl(240_4%_39%/0.33)]", {
					"bg-white": isSelected,
					"scale-[0.95] transition-[transform,background-color] duration-150": !isSelected,
				})}
			></div>
			{name}
		</Link>
	)
}
