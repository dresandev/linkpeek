"use client"

import { InfoCircle } from "~/components/svg"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "~/components/ui/dialog"

export const AddLinkDialog = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className="mx-auto max-w-[350px] rounded-lg bg-funny-gradient p-2">
					<Button className="w-full">Agregar link</Button>
				</div>
			</DialogTrigger>
			<DialogContent>
				<DialogTitle>Agregar Link</DialogTitle>
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
							name="link-url"
						/>
					</div>
					<div>
						<label className="inline-block pb-2 font-medium" htmlFor="link-title">
							Título
						</label>
						<Input
							variant="outlined"
							id="link-title"
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

					<div className="flex gap-x-2">
						<InfoCircle className="flex-shrink-0" />
						<p className="text-sm">
							Si no se provee titulo o descripción se usara la información de la página.
						</p>
					</div>
					<Button variant="contained" type="submit">
						Actualizar
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	)
}
