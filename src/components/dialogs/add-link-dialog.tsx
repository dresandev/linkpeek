"use client"

import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "~/components/ui/dialog"
import { AddLinkForm } from "~/components/forms/add-link-form"

export const AddLinkDialog = () => {
	const [open, setOpen] = useState(false)

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button className="relative mx-auto block w-full max-w-[350px] before:absolute before:inset-[-10px] before:-z-10 before:rounded-lg before:bg-funny-gradient">
					Agregar link
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogTitle>Agregar Link</DialogTitle>
				<AddLinkForm afterSubmit={() => setOpen(false)} />
			</DialogContent>
		</Dialog>
	)
}
