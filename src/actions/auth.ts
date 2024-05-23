"use server"

import type { BuiltInProviderType } from "next-auth/providers"
import type { LiteralUnion } from "next-auth/react"
import { signIn } from "~/auth"
import { signOut } from "~/auth"

interface AuthOptions {
	redirectTo?: string
	redirect?: true
}

export const socialLogin = async (
	provider?: LiteralUnion<BuiltInProviderType>,
	options?: AuthOptions
) => {
	await signIn(provider, options)
}

export const logout = async () => {
	await signOut({ redirectTo: "/" })
}
