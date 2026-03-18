import type { Link } from "@/types"
import type { ImageProps } from "next/image"
import { cn } from "@/lib/utils"
import { LinkOptionsPopover } from "@/components/link-options-popover"
import { LinkCardImage } from "@/components/link-card-image"

interface Props {
	index: number
	link: Link
}

export const LinkCard: React.FC<Props> = ({ index, link }) => {
	const loadingProps: {
		loading: ImageProps["loading"]
		decoding: ImageProps["decoding"]
	} = index > 12
			? ({
				loading: "lazy",
				decoding: "async"
			})
			: ({
				loading: "eager",
				decoding: "sync"
			})

	return (
		<div className="relative isolate overflow-hidden rounded-lg bg-secondary-surface">
			<a
				className={cn(
					"absolute inset-0 z-10 text-transparent focus-visible:rounded-md focus-visible:-outline-offset-2 [&:hover~div_h3]:underline [&:hover~div_h3]:decoration-2 [&:hover~div_h3]:underline-offset-4",
					{
						"[&:hover~picture>img]:scale-105": link.ogImageUrl,
					}
				)}
				href={link.url}
				target="_blank"
				rel="noopener"
			>
				{link.title}
			</a>
			<LinkCardImage
				className="aspect-video w-full object-cover object-center transition-transform duration-300"
				src={link.ogImageUrl || undefined}
				{...loadingProps}
			/>
			<div className="p-5 pt-3">
				<div className="flex items-start justify-between pb-2">
					<h3 className="leading-tigh line-clamp-2 text-lg font-medium">
						{link.title}
					</h3>
					<LinkOptionsPopover link={link} />
				</div>
				<p className="line-clamp-3 text-sm">{link.description}</p>
			</div>
		</div>
	)
}
