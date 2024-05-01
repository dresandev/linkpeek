import { SearchIcon } from "~/components/svg"
import { Input } from "~/components/ui/input"

export const SearchBar = () => {
	return (
		<div className="relative mx-auto max-w-[650px]">
			<SearchIcon className="absolute inset-y-0 left-4 my-auto size-5 text-[hsl(219_8%_60%)]" />
			<Input className="mb-5 block w-full pl-11" placeholder="Buscar link" />
		</div>
	)
}
