"use client"

import { FormEvent, useTransition } from "react"
import { addLink } from "~/actions/links"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"

interface Props {
	afterSubmit: () => void
}

export const AddLinkForm: React.FC<Props> = ({ afterSubmit }) => {
	const [isPending, startTransition] = useTransition()

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		const form = e.currentTarget
		form.checkValidity()
		e.preventDefault()

		startTransition(async () => {
			const formData = Object.fromEntries(new FormData(form))

			await addLink(formData as { url: string })
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
					<Input id="link-url" name="url" className="w-full" variant="outlined" type="text" />
				</div>

				<Button variant="contained" type="submit">
					Agregar
				</Button>
			</fieldset>
		</form>
	)
}
