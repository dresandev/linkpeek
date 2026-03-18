import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db"
import authConfig from "./auth.config"

export const {
  auth,
  handlers,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  pages: {
    error: "/",
  },
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
