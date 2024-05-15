"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Link, Tag } from "~/types"
import { updateLink } from "~/actions/links"
import { useOnLinkFormSubmit } from "~/hooks/use-on-link-form-submit"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { TagsInput } from "~/components/tags-input"
import { CircleLoader } from "~/components/loaders/circle-loader"

interface Props {
	link: Link
	afterSubmit: () => void
}

export const UpdateLinkForm: React.FC<Props> = ({ link, afterSubmit }) => {
	const [tags, setTags] = useState<Tag[]>(link.tags)
	const { handleSubmit, isPending } = useOnLinkFormSubmit({
		action: async (formData) => {
			const response = await updateLink({ id: link.id, ...formData, tags })

			if (response?.error) {
				toast.error("No estas autorizado para realizar esta acción")
				return
			}

			toast.success("Link actualizado correctamente")
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
					defaultValue={link.url}
					autoComplete="off"
					variant="outlined"
				/>

				<label className="inline-block pb-2 font-medium" htmlFor="tags-input">
					Tags <span className="text-[hsl(240_5%_71%)]">(Separa con espacio)</span>
				</label>
				<TagsInput id="tags-input" className="mb-4" tags={tags} setTags={setTags} />

				<Button className="relative w-full" variant="contained" type="submit">
					{isPending && <CircleLoader className="absolute inset-y-0 left-4 my-auto" />}
					Actualizar
				</Button>
			</fieldset>
		</form>
	)
}
