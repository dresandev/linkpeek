"use client"

import { PencilIcon } from "~/components/svg"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "~/components/ui/dialog"

interface Props {
	url: string
}

export const UpdateLinkDialog: React.FC<Props> = ({ url }) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<button className="relative z-10 flex w-full items-center gap-x-2 rounded-sm px-2 py-1.5 hover:bg-[hsl(0_0%_70%/0.1)]">
					<PencilIcon className="size-4" /> Editar
				</button>
			</DialogTrigger>
			<DialogContent>
				<DialogTitle>Editar Link</DialogTitle>
				<form className="flex flex-col gap-y-4 text-sm">
					<div>
						<label className="inline-block pb-2 font-medium" htmlFor="link-url">
							URL
						</label>
						<Input
							id="link-url"
							name="link-url"
							type="text"
							required
							defaultValue={url}
							variant="outlined"
							className="w-full"
						/>
					</div>

					<Button variant="contained" type="submit">
						Actualizar
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	)
}
