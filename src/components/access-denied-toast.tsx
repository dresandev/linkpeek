"use client"

import { useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { toast } from "sonner"

export const AccessDeniedToast = () => {
	const searchParams = useSearchParams()
	const error = searchParams.get("error")
	const hasShown = useRef(false)

	useEffect(() => {
		if (error === "AccessDenied" && !hasShown.current) {
			toast.error("Acceso denegado")
			hasShown.current = true
		}
	}, [])

	return null
}
