"use server"

import type { ProviderId } from "next-auth/providers"
import { signIn } from "@/auth"
import { signOut } from "@/auth"

interface AuthOptions {
	redirectTo?: string
	redirect?: true
}

export const socialLogin = async (
	provider?: ProviderId,
	options?: AuthOptions
) => {
	await signIn(provider, options)
}

export const logout = async () => {
	await signOut({ redirectTo: "/" })
}
