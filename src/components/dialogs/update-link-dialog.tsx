"use client"

import { useState } from "react"
import { PencilIcon } from "~/components/svg"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "~/components/ui/dialog"
import { UpdateLinkForm } from "~/components/forms/update-link-form"

interface Props {
	id: string
	url: string
}

export const UpdateLinkDialog: React.FC<Props> = ({ id, url }) => {
	const [open, setOpen] = useState(false)

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<button className="relative z-10 flex w-full items-center gap-x-2 rounded-sm px-2 py-1.5 hover:bg-[hsl(0_0%_70%/0.1)]">
					<PencilIcon className="size-4" /> Editar
				</button>
			</DialogTrigger>
			<DialogContent>
				<DialogTitle>Editar Link</DialogTitle>
				<UpdateLinkForm id={id} url={url} afterSubmit={() => setOpen(false)} />
			</DialogContent>
		</Dialog>
	)
}
