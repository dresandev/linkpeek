"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { SearchIcon } from "~/components/svg"
import { Input } from "~/components/ui/input"

export const SearchBar = () => {
	const router = useRouter()
	const searchParams = useSearchParams()
	const phrase = searchParams.get("phrase") || ""

	const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const { phrase } = Object.fromEntries(new FormData(e.currentTarget)) as {
			phrase: string
		}
		const searchParams = new URLSearchParams({ phrase }).toString()
		const href = phrase ? `?${searchParams}` : "?"

		router.replace(href, { scroll: false })
	}

	return (
		<form
			className="relative mx-auto mb-5 max-w-[700px] rounded-lg bg-[hsl(240,5%,34%)] p-2"
			onSubmit={handleOnSubmit}
		>
			<SearchIcon className="pointer-events-none absolute inset-y-0 left-5 my-auto size-5 text-[hsl(219_8%_60%)]" />
			<Input
				className="block w-full pl-11"
				placeholder="Ingresa palabra clave"
				name="phrase"
				autoComplete="off"
				autoCapitalize="none"
				autoCorrect="off"
				spellCheck={false}
				defaultValue={phrase}
			/>
		</form>
	)
}
