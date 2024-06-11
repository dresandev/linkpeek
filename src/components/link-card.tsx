import type { Link } from "~/types"
import { cn } from "~/lib/utils"
import { LinkOptionsPopover } from "~/components/link-options-popover"

interface Props {
	link: Link
}

export const LinkCard: React.FC<Props> = ({ link }) => {
	return (
		<div className="relative isolate overflow-hidden rounded-lg bg-secondary-surface">
			<a
				className={cn(
					"absolute inset-0 z-10 text-[0] focus-visible:rounded-md focus-visible:-outline-offset-2 [&:hover~div_h3]:underline [&:hover~div_h3]:decoration-2 [&:hover~div_h3]:underline-offset-4",
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
			{link.ogImageUrl ? (
				<picture className="block overflow-hidden">
					<img
						className="aspect-video w-full bg-[hsl(0_2%_89%)] object-cover object-center transition-transform duration-300"
						src={link.ogImageUrl}
						alt=""
						loading="lazy"
						decoding="async"
						width={358}
						height={183}
					/>
				</picture>
			) : (
				<div className="aspect-video bg-[hsl(0_2%_89%)]"></div>
			)}
			<div className="p-5 pt-3">
				<div className="flex items-start justify-between pb-2">
					<h3 className="leading-tigh line-clamp-2 text-lg font-medium">{link.title}</h3>
					<LinkOptionsPopover link={link} />
				</div>
				<p className="line-clamp-3 text-sm">{link.description}</p>
			</div>
		</div>
	)
}
