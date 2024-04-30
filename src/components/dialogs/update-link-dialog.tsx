"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { DotsVertical, X } from "~/components/svg"

export const UpdateLinkDialog = () => {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<button className="relative z-10 rounded-md p-1.5 hover:bg-[hsl(0_0%_70%/0.1)]">
					<DotsVertical className="size-4" />
				</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-[hsl(0_0%_12%/0.8)] backdrop-blur-sm data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in" />
				<Dialog.Content className="fixed inset-0 m-auto h-max max-h-[85vh] w-[90vw] max-w-[450px] rounded-[6px] bg-secondary-surface p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=closed]:animate-hide-dialog data-[state=open]:animate-enter-dialog">
					<Dialog.Title className="pb-8 text-lg font-medium">Editar Link</Dialog.Title>
					<form className="flex flex-col gap-y-4 text-sm">
						<div>
							<label className="block pb-2 font-medium" htmlFor="link-title">
								Título
							</label>
							<input
								className="w-full rounded-[4px] border border-stroke bg-transparent px-3 py-2 focus:border-[hsl(0_0%_44%)] focus:outline-none"
								id="link-title"
								type="text"
							/>
						</div>
						<div>
							<label className="block pb-2 font-medium" htmlFor="link-url">
								URL
							</label>
							<input
								className="w-full rounded-[4px] border border-stroke bg-transparent px-3 py-2 focus:border-[hsl(0_0%_44%)] focus:outline-none"
								id="link-url"
								type="text"
							/>
						</div>
						<div>
							<label className="block pb-2 font-medium" htmlFor="link-description">
								Descripción
							</label>
							<textarea
								className="h-28 w-full resize-none rounded-[4px] border border-stroke bg-transparent px-3 py-2 focus:border-[hsl(0_0%_44%)] focus:outline-none"
								name=""
								id="link-description"
							></textarea>
						</div>
						<button>Actualizar</button>
					</form>

					<Dialog.Close asChild>
						<button className="absolute right-[10px] top-[10px]" aria-label="Close">
							<X className="size-4" />
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
