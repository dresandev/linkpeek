import { cn } from "~/utils"

interface Props {
	label: string
	isSelected?: boolean
}

export const TagPill: React.FC<Props> = ({ label, isSelected }) => {
	return (
		<button
			className={cn("relative cursor-pointer select-none px-5 py-2 text-[14px] font-medium", {
				"text-surface": isSelected,
				"[&:hover>div]:scale-[1] [&:hover>div]:bg-[hsl(240_4%_39%/0.6)]": !isSelected,
			})}
			type="button"
		>
			<div
				className={cn(
					"absolute inset-0 -z-10 scale-[0.9] rounded-lg bg-[hsl(240_4%_39%/0.33)] transition-[transform,background-color] duration-150",
					{
						"bg-white": isSelected,
					}
				)}
			></div>
			{label}
		</button>
	)
}
