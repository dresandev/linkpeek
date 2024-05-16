"use client"

import { useEffect, useRef } from "react"
import { toast } from "sonner"

interface Props {
	errorType?: string
}

export const AccessDeniedToast: React.FC<Props> = ({ errorType }) => {
	const hasShown = useRef(false)

	useEffect(() => {
		if (errorType === "AccessDenied" && !hasShown.current) {
			toast.error("Acceso denegado, solo el dueño de la App puede iniciar sesión.")
			hasShown.current = true
		}
	}, [])

	return null
}
