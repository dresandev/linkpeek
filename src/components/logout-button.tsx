"use client"

import { useTransition } from "react"
import { Button } from "~/components/ui/button"
import { LogoutIcon } from "~/components/svg/logout-icon"
import { signOut } from "next-auth/react"

export const LogoutButton = () => {
	const [isPending, startTransition] = useTransition()

	const handleOnClick = async () => {
		startTransition(async () => {
			await signOut()
		})
	}

	return (
		<Button
			className="relative -top-16 mx-auto flex items-center gap-x-2 border border-[hsl(0,0%,32%)] bg-[hsl(240,5%,26%)] text-text hover:bg-[hsla(240,5%,26%,.5)]"
			onClick={handleOnClick}
			disabled={isPending}
		>
			Cerrar sesión <LogoutIcon className="size-5" />
		</Button>
	)
}
