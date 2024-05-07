import { cn } from "~/lib/utils"
import { LinkOptionsPopover } from "~/components/link-options-popover"

interface Props {
	id: string
	url: string
	title: string
	ogImageUrl: string | null
	description: string | null
}

export const LinkCard: React.FC<Props> = ({ id, url, ogImageUrl, title, description }) => {
	return (
		<div className="relative isolate animate-fade-in overflow-hidden rounded-lg bg-secondary-surface">
			<a
				className={cn(
					"absolute inset-0 z-10 text-[0] focus-visible:rounded-md focus-visible:-outline-offset-2 [&:hover~div_h3]:underline",
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
						className="aspect-video w-full object-cover object-center transition-transform duration-300"
						src={ogImageUrl}
						alt=""
						width={358}
						height={183}
					/>
				</picture>
			) : (
				<div className="aspect-video bg-[hsl(0_2%_89%)]"></div>
			)}
			<div className="p-5 pt-3">
				<div className="flex items-start justify-between pb-2">
					<h3 className="text-lg font-medium leading-tight">{title}</h3>
					<LinkOptionsPopover id={id} url={url} />
				</div>
				<p className="line-clamp-3 text-sm">{description}</p>
			</div>
		</div>
	)
}
