"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Tag } from "~/types"
import { createLink } from "~/actions/links"
import { useOnLinkFormSubmit } from "~/hooks/use-on-link-form-submit"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { CircleLoader } from "~/components/loaders/circle-loader"
import { TagsInput } from "~/components/tags-input"

interface Props {
	afterSubmit: () => void
}

export const AddLinkForm: React.FC<Props> = ({ afterSubmit }) => {
	const [tags, setTags] = useState<Tag[]>([])
	const { handleSubmit, isPending } = useOnLinkFormSubmit({
		action: async (formData) => {
			const response = await createLink({ ...formData, tags })

			if (response?.error) {
				toast.error(response.error)
			}
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
					autoComplete="off"
					variant="outlined"
				/>
				<label className="inline-block pb-2 font-medium" htmlFor="tags-input">
					Tags <span className="text-[hsl(240_5%_71%)]">(Separa con espacio)</span>
				</label>
				<TagsInput id="tags-input" className="mb-4" tags={tags} setTags={setTags} />

				<Button className="relative w-full" variant="contained" type="submit">
					{isPending && <CircleLoader className="absolute inset-y-0 left-4 my-auto" />}
					Agregar
				</Button>
			</fieldset>
		</form>
	)
}
