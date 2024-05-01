"use client"

import { DeleteIcon, DotsVertical } from "~/components/svg"
import { UpdateLinkDialog } from "~/components/dialogs/update-link-dialog"
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover"

export const LinkOptionsPopover = () => (
	<Popover modal>
		<PopoverTrigger asChild>
			<button className="relative z-10 rounded-md p-1.5 transition-[background-color] hover:bg-[hsl(0_0%_70%/0.1)]">
				<DotsVertical className="size-4" />
			</button>
		</PopoverTrigger>
		<PopoverContent>
			<div className="mb-1 border-b border-b-stroke px-2 py-1.5 font-semibold">
				Opciones del link
			</div>

			<UpdateLinkDialog />
			<button className="flex w-full items-center gap-x-2 rounded-sm px-2 py-1.5 hover:bg-[hsl(0_0%_70%/0.1)]">
				<DeleteIcon className="size-4" /> Eliminar
			</button>
		</PopoverContent>
	</Popover>
)
