import { UpdateLinkDialog } from "./dialogs/update-link-dialog"
import { ArrowRight } from "~/components/svg"

interface Props {
	url: string
	ogImage: string
	title: string
	description: string
}

export const LinkCard: React.FC<Props> = ({ url, ogImage, title, description }) => {
	return (
		<div className="relative isolate overflow-hidden rounded-lg bg-secondary-surface">
			<a
				className="absolute inset-0 z-10 text-[0] focus-visible:rounded-md focus-visible:-outline-offset-2 [&:hover~div_svg]:opacity-100 [&:hover~picture>img]:scale-105"
				href={url}
				target="_blank"
			>
				{title}
			</a>
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
				<div className="flex justify-between pb-2">
					<h3 className="flex w-fit items-center gap-x-1 text-lg font-medium leading-tight">
						{title}{" "}
						<ArrowRight className="size-4 flex-shrink-0 opacity-0 transition-opacity duration-300" />
					</h3>
					<UpdateLinkDialog />
				</div>
				<p className="text-[14px]">{description}</p>
			</div>
		</div>
	)
}
