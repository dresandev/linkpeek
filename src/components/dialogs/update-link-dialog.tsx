"use client"

import { PencilIcon } from "~/components/svg"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "~/components/ui/dialog"

export const UpdateLinkDialog = () => {
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
						<label className="inline-block pb-2 font-medium after:content-['*']" htmlFor="link-url">
							URL
						</label>
						<Input
							id="link-url"
							variant="outlined"
							className="w-full"
							type="text"
							required
							value="https://dresan.is-a.dev"
							name="link-url"
						/>
					</div>
					<div>
						<label className="inline-block pb-2 font-medium" htmlFor="link-title">
							Título
						</label>
						<Input
							id="link-title"
							variant="outlined"
							className="w-full"
							type="text"
							name="link-title"
						/>
					</div>
					<div>
						<label className="inline-block pb-2 font-medium" htmlFor="link-description">
							Descripción
						</label>
						<textarea
							id="link-description"
							className="h-28 w-full resize-none rounded-[4px] border border-stroke bg-transparent px-3 py-2 focus:border-[hsl(0_0%_44%)] focus:outline-none"
							name="link-description"
						></textarea>
					</div>

					<Button variant="contained" type="submit">
						Actualizar
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	)
}