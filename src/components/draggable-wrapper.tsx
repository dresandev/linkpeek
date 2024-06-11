"use client"

import { HTMLAttributes, useRef } from "react"
import { useDraggable } from "react-use-draggable-scroll"

interface Props extends HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
}

export const DraggableWrapper: React.FC<Props> = ({ children, ...delegated }) => {
	const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>
	const { events } = useDraggable(ref)

	return (
		<div {...events} ref={ref} {...delegated}>
			{children}
		</div>
	)
}
