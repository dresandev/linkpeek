import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { LuckyLink } from "@/components/lucky-link"
import { Toaster } from "@/components/ui/sooner"
import "@/styles/globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
	title: "Dresan - links personales",
	description: "Links personales de Dresan, desarrollador web y entusiasta de la tecnología.",
	authors: [{ name: "Dresan", url: "dresan.dev" }],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="es">
			<body className={plusJakartaSans.className}>
				<Toaster />
				<LuckyLink />
				{children}
			</body>
		</html>
	)
}
