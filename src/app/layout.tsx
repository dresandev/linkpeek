import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import '~/styles/reset.css'
import '~/styles/globals.css'

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dresan - links personales',
  description: 'App personal para gestionar tus links ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={plus_jakarta_sans.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
