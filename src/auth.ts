import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "~/auth.config"
import { db } from "~/lib/db"

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	pages: {
		error: "/",
	},
	adapter: PrismaAdapter(db),
	session: { strategy: "jwt" },
	events: {
		linkAccount: async ({ user }) => {
			await db.user.update({
				data: { emailVerified: new Date() },
				where: { id: user.id },
			})
		},
	},
	callbacks: {
		signIn: ({ user }) => {
			return process.env.AUTHORIZED_USER_GITHUB_EMAIL === user.email
		},
		session: async ({ token, session }) => {
			if (token.sub) {
				session.user.id = token.sub
			}

			return session
		},
	},
	...authConfig,
})
