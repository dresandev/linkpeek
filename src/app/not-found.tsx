import Link from "next/link"
import { NotFoundIllustration } from "~/components/svg"

export default function NotFound() {
	return (
		<div className="-mt-12 grid h-dvh content-center justify-center gap-y-3 px-4">
			<NotFoundIllustration className="h-auto w-full max-w-[500px]" />
			<h1 className="text-center text-xl font-medium">No se encontró la página buscada</h1>
			<Link
				className="mx-auto inline-block w-max rounded-md bg-text px-5 py-2 font-medium text-surface transition-opacity hover:opacity-75"
				href="/"
			>
				Volver al inicio
			</Link>
		</div>
	)
}
