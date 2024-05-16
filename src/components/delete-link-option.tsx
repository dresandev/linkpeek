"use client"

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { deleteLink } from "~/actions/links"
import { DeleteIcon } from "~/components/svg"
import { toast } from "sonner"

interface Props {
	id: string
	afterDelete: () => void
}

export const DeleteLinkOption: React.FC<Props> = ({ id, afterDelete }) => {
	const router = useRouter()
	const [isPending, startTransition] = useTransition()

	const handleDelete = async () => {
		startTransition(async () => {
			const response = await deleteLink(id)

			if (response?.error) {
				toast.error(response.error)
			} else {
				router.refresh()
			}

			afterDelete()
		})
	}

	return (
		<button
			className="flex w-full items-center gap-x-2 rounded-sm px-2 py-1.5 text-red-400 hover:bg-[hsl(0_0%_70%/0.1)] disabled:pointer-events-none disabled:opacity-75"
			onClick={handleDelete}
			disabled={isPending}
		>
			<DeleteIcon className="size-4" /> Eliminar
		</button>
	)
}
