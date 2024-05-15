"use client"

import { useState } from "react"
import { Link } from "~/types"
import { PencilIcon } from "~/components/svg"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "~/components/ui/dialog"
import { UpdateLinkForm } from "~/components/forms/update-link-form"

interface Props {
	link: Link
	afterUpdate: () => void
}

export const UpdateLinkDialog: React.FC<Props> = ({ link, afterUpdate }) => {
	const [open, setOpen] = useState(false)

	const afterSubmit = () => {
		setOpen(false)
		afterUpdate()
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<button className="relative z-10 flex w-full items-center gap-x-2 rounded-sm px-2 py-1.5 hover:bg-[hsl(0_0%_70%/0.1)]">
					<PencilIcon className="size-4" /> Editar
				</button>
			</DialogTrigger>
			<DialogContent>
				<DialogTitle>Editar Link</DialogTitle>
				<UpdateLinkForm link={link} afterSubmit={afterSubmit} />
			</DialogContent>
		</Dialog>
	)
}
