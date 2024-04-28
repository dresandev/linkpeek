import { ArrowRight } from "./svg"

interface Props {
	url: string
	ogImage: string
	title: string
	description: string
}

export const LinkCard: React.FC<Props> = ({ url, ogImage, title, description }) => {
	return (
		<a href={url} target="_blank">
			<figure className="bg-secondary-surface overflow-hidden rounded-lg border border-stroke">
				<img src={ogImage} alt="" />
				<div className="px-5 py-4">
					<h3 className="flex items-center gap-x-1 pb-2 text-lg font-semibold">
						{title} <ArrowRight />
					</h3>
					<p>{description}</p>
				</div>
			</figure>
		</a>
	)
}
