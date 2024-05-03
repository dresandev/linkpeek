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
				<div className="mx-auto max-w-[350px] rounded-lg bg-funny-gradient p-2">
					<Button className="w-full">Agregar link</Button>
				</div>
			</DialogTrigger>
			<DialogContent>
				<DialogTitle>Agregar Link</DialogTitle>
				<AddLinkForm afterSubmit={() => setOpen(false)} />
			</DialogContent>
		</Dialog>
	)
}
