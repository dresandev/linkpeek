import { GitHubLogo } from "~/components/svg"

export const LoginButton = () => {
	return (
		<button className="mx-auto flex max-h-[57px] w-full max-w-[340px] items-center rounded-md bg-[hsl(0_0%_100%)] px-4 py-2 font-medium text-black transition-[opacity] hover:opacity-75">
			<GitHubLogo className="size-7" />
			<span className="flex-grow-[1]">Continuar con GitHub</span>
		</button>
	)
}
