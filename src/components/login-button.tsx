"use client"

import { useTransition } from "react"
import { signIn } from "next-auth/react"
import { GitHubLogo } from "~/components/svg"

export const LoginButton = () => {
	const [isPending, startTransition] = useTransition()

	const handleOnClick = () => {
		startTransition(async () => {
			await signIn("github", { redirect: false })
		})
	}

	return (
		<button
			className="mx-auto flex max-h-[57px] w-full max-w-[340px] items-center rounded-md bg-[hsl(0_0%_100%)] px-4 py-2 font-medium text-black transition-[opacity] hover:opacity-75 disabled:pointer-events-none disabled:opacity-75"
			type="button"
			onClick={handleOnClick}
			disabled={isPending}
		>
			<GitHubLogo className="size-7" />
			<span className="flex-grow">Continuar con GitHub</span>
		</button>
	)
}
