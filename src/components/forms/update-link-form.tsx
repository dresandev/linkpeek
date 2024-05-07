"use client"

import { toast } from "sonner"
import { updateLink } from "~/actions/links"
import { useOnLinkFormSubmit } from "~/hooks/use-on-link-form-submit"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { CircleLoader } from "~/components/loaders/circle-loader"

interface Props {
	id: string
	url: string
	afterSubmit: () => void
}

export const UpdateLinkForm: React.FC<Props> = ({ id, url, afterSubmit }) => {
	const { handleSubmit, isPending } = useOnLinkFormSubmit({
		action: async (link) => {
			await updateLink(id, link)
			toast("Link actualizado correctamente")
		},
		afterSubmit,
	})

	return (
		<form className="text-sm" onSubmit={handleSubmit}>
			<fieldset disabled={isPending}>
				<label className="inline-block pb-2 font-medium" htmlFor="link-url">
					URL
				</label>
				<Input
					className="mb-4 w-full"
					id="link-url"
					name="url"
					type="url"
					required
					defaultValue={url}
					autoComplete="off"
					variant="outlined"
				/>

				<Button className="relative w-full" variant="contained" type="submit">
					{isPending && <CircleLoader className="absolute inset-y-0 left-4 my-auto" />}
					Actualizar
				</Button>
			</fieldset>
		</form>
	)
}
