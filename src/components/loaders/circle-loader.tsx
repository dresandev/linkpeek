import { cn } from "~/lib/utils"

interface Props {
	className?: string
}

export const CircleLoader: React.FC<Props> = ({ className }) => {
	return (
		<span
			className={cn(
				"inline-block size-4 animate-spin rounded-[50%] border-2 border-[hsl(240_5%_65%)] border-b-white",
				className
			)}
		></span>
	)
}
