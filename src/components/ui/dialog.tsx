"use client"

import { forwardRef } from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { cn } from "~/lib/utils"
import { X } from "~/components/svg"

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogPortal = DialogPrimitive.Portal
export const DialogClose = DialogPrimitive.Close

export const DialogOverlay = forwardRef<
	React.ElementRef<typeof DialogPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Overlay
		ref={ref}
		className={cn(
			"fixed inset-0 bg-[hsl(0_0%_12%/0.8)] backdrop-blur-sm data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in",
			className
		)}
		{...props}
	/>
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

export const DialogContent = forwardRef<
	React.ElementRef<typeof DialogPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<DialogPortal>
		<DialogOverlay />
		<DialogPrimitive.Content
			ref={ref}
			aria-describedby=""
			className={cn(
				"fixed inset-0 m-auto h-max max-h-[85vh] w-[90vw] max-w-[450px] overflow-y-auto rounded-[6px] bg-secondary-surface p-[25px] focus:outline-none data-[state=closed]:animate-hide-dialog data-[state=open]:animate-enter-dialog",
				className
			)}
			{...props}
		>
			{children}
			<DialogClose
				aria-label="Cerrar"
				className="absolute right-[10px] top-[10px] text-[hsl(0_0%_90%/.5)] transition-[color] hover:text-text"
			>
				<X className="size-4" />
			</DialogClose>
		</DialogPrimitive.Content>
	</DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

export const DialogTitle = forwardRef<
	React.ElementRef<typeof DialogPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Title
		ref={ref}
		className={cn("pb-8 text-lg font-medium", className)}
		{...props}
	/>
))
DialogTitle.displayName = DialogPrimitive.Title.displayName
