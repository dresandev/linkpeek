import { SearchIcon } from "~/components/svg"
import { Input } from "~/components/ui/input"

export const SearchBar = () => {
	return (
		<div className="relative mx-auto mb-5 max-w-[700px] rounded-lg bg-[hsl(240,5%,34%)] p-2">
			<SearchIcon className="pointer-events-none absolute inset-y-0 left-6 my-auto size-5 text-[hsl(219_8%_60%)]" />
			<Input className="block w-full pl-11" placeholder="Buscar link" />
		</div>
	)
}
