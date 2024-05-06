"use client"

import { FormEvent, useTransition } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { addLink } from "~/actions/links"
import { getPageMetadata } from "~/actions/metadata"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"

interface Props {
	afterSubmit: () => void
}

export const AddLinkForm: React.FC<Props> = ({ afterSubmit }) => {
	const [isPending, startTransition] = useTransition()
	const router = useRouter()

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		const form = e.currentTarget
		form.checkValidity()
		e.preventDefault()

		startTransition(async () => {
			const { url } = Object.fromEntries(new FormData(form)) as { url: string }

			const metadata = await getPageMetadata(url)

			if (!metadata) {
				toast("La URL no es válida.")
				return
			}

			const { ogImage, title, description } = metadata

			const ogImageUrl = !ogImage ? null : ogImage.includes("https") ? ogImage : `${url}${ogImage}`

			await addLink({ url, ogImageUrl, title, description })
			router.refresh()
			afterSubmit()
		})
	}

	return (
		<form onSubmit={handleSubmit}>
			<fieldset className="flex flex-col gap-y-4 text-sm" disabled={isPending}>
				<div>
					<label className="inline-block pb-2 font-medium" htmlFor="link-url">
						URL
					</label>
					<Input
						id="link-url"
						name="url"
						className="w-full"
						variant="outlined"
						type="url"
						required
					/>
				</div>

				<Button variant="contained" type="submit">
					Agregar
				</Button>
			</fieldset>
		</form>
	)
}
