import { LinkOptionsPopover } from "~/components/link-options-popover"
import { ArrowRight } from "~/components/svg"
import { cn } from "~/utils"

interface Props {
	id: string
	url: string
	ogImageUrl: string | null
	title: string | null
	description: string | null
}

export const LinkCard: React.FC<Props> = ({ url, ogImageUrl, title, description }) => {
	return (
		<div className="relative isolate overflow-hidden rounded-lg bg-secondary-surface">
			<a
				className={cn(
					"absolute inset-0 z-10 text-[0] focus-visible:rounded-md focus-visible:-outline-offset-2 [&:hover~div_svg]:opacity-100",
					{
						"[&:hover~picture>img]:scale-105": ogImageUrl,
					}
				)}
				href={url}
				target="_blank"
			>
				{title}
			</a>
			{ogImageUrl ? (
				<picture className="block overflow-hidden">
					<img
						className="w-full transition-transform duration-300"
						src={ogImageUrl}
						alt=""
						width={358}
						height={183}
					/>
				</picture>
			) : (
				<div className="aspect-video bg-[hsl(0,2%,89%)]"></div>
			)}
			<div className="p-5 pt-3">
				<div className="flex justify-between pb-2">
					<h3 className="flex w-fit items-center gap-x-1 text-lg font-medium leading-tight">
						{title}
						<ArrowRight className="size-4 flex-shrink-0 opacity-0 transition-opacity duration-300" />
					</h3>
					<LinkOptionsPopover />
				</div>
				<p className="text-[14px]">{description}</p>
			</div>
		</div>
	)
}
