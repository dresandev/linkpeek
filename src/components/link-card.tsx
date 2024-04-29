import { ArrowRight } from "./svg"

interface Props {
	url: string
	ogImage: string
	title: string
	description: string
}

export const LinkCard: React.FC<Props> = ({ url, ogImage, title, description }) => {
	return (
		<a
			className="overflow-hidden rounded-lg bg-secondary-surface [&:hover_img]:scale-105 [&:hover_svg]:opacity-100"
			href={url}
			target="_blank"
		>
			<picture className="block overflow-hidden">
				<img
					className="w-full transition-transform duration-300"
					src={ogImage}
					alt=""
					width={358}
					height={183}
				/>
			</picture>
			<div className="p-5 pt-3">
				<h3 className="relative flex w-fit items-center gap-x-1 pb-2 text-lg font-medium leading-tight before:absolute before:bottom-1 before:h-[1px] before:w-full before:origin-right before:scale-0 before:bg-[currentColor] before:transition-transform before:duration-300 before:ease-[cubic-bezier(.25,.46,.45,.94)] hover:before:origin-left hover:before:scale-100">
					{title}{" "}
					<ArrowRight className="hidden md:block md:size-4 md:flex-shrink-0 md:opacity-0 md:transition-opacity md:duration-300" />
				</h3>
				<p className="text-[14px]">{description}</p>
			</div>
		</a>
	)
}
