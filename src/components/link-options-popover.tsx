"use client"

import { useState } from "react"
import type { Link } from "~/types"
import { DotsVertical } from "~/components/svg"
import { UpdateLinkDialog } from "~/components/dialogs/update-link-dialog"
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover"
import { DeleteLinkOption } from "~/components/delete-link-option"

interface Props {
	link: Link
}

export const LinkOptionsPopover: React.FC<Props> = ({ link }) => {
	const [open, setOpen] = useState(false)

	const closePopover = () => setOpen(false)

	return (
		<Popover modal open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<button
					aria-label="Abrir opciones"
					className="relative z-10 rounded-md p-1.5 transition-[background-color] hover:bg-[hsl(0_0%_70%/0.1)]"
				>
					<DotsVertical className="size-4" />
				</button>
			</PopoverTrigger>
			<PopoverContent>
				<div className="mb-1 border-b border-b-stroke px-2 py-1.5 font-semibold">
					Opciones del link
				</div>
				<UpdateLinkDialog link={link} afterUpdate={closePopover} />
				<DeleteLinkOption id={link.id!} afterDelete={closePopover} />
			</PopoverContent>
		</Popover>
	)
}
