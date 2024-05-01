import { ArrowRight } from "~/components/svg"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"

export const SecretKeyForm = () => {
	return (
		<form className="mx-auto max-w-[640px]">
			<label htmlFor="secret-key" className="mb-3 block text-sm font-medium">
				Clave secreta
			</label>
			<div className="flex flex-wrap gap-5">
				<div className="flex-grow basis-[310px] rounded-lg bg-[hsl(240,5%,34%)] p-2">
					<Input
						id="secret-key"
						className="w-full"
						type="text"
						placeholder="Digite su increible clave secreta"
						required
					/>
				</div>
				<div className="flex-grow basis-[310px] rounded-lg bg-funny-gradient p-2">
					<Button className="flex h-full w-full items-center" type="submit">
						<span className="flex-grow-[1]">Obtener SU</span>
						<ArrowRight className="size-3.5" />
					</Button>
				</div>
			</div>
		</form>
	)
}
