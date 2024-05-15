import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { LuckyLink } from "~/components/lucky-link"
import { Toaster } from "~/components/ui/sooner"
import "~/styles/globals.css"

const plus_jakarta_sans = Plus_Jakarta_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
	title: "Dresan - links personales",
	description: "App personal para gestionar tus links ",
	authors: [{ name: "Dresan", url: "dresan.is-a.dev" }],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="es">
			<body className={plus_jakarta_sans.className}>
				<LuckyLink />
				{children}
				<Toaster />
			</body>
		</html>
	)
}
