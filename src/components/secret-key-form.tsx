import { ArrowRight } from "./svg"

export const SecretKeyForm = () => {
	return (
		<form className="mx-auto mt-10 max-w-[640px]">
			<label htmlFor="secret-key" className="mb-3 block text-sm font-medium">
				Clave secreta
			</label>
			<div className="flex flex-wrap gap-5">
				<div className="flex-grow basis-[310px] rounded-lg bg-[hsl(240,5%,34%)] p-2">
					<input
						id="secret-key"
						className="w-full rounded-md border-2 border-[hsl(240,4%,39%)] bg-secondary-surface px-4 py-2 text-base placeholder:text-[hsl(219_8%_60%)] focus:border-[hsl(240,4%,46%)] focus:outline-none"
						type="text"
						placeholder="Digite su increible clave secreta"
						required
					/>
				</div>
				<div className="flex-grow basis-[310px] rounded-lg bg-funny-gradient p-2">
					<button
						className="flex h-full w-full items-center rounded-md border-2 border-[hsl(240_4%_81%)] bg-[hsl(0_0%_97%)] px-4 py-2 text-[14px] font-medium text-surface transition-[background-color] hover:bg-[hsl(0_0%_97%/0.9)]"
						type="submit"
					>
						<span className="flex-1">Obtener SU</span> <ArrowRight className="size-[14px]" />
					</button>
				</div>
			</div>
		</form>
	)
}
