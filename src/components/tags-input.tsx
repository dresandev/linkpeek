"use client"

import { useRef, useState } from "react"
import { cn } from "~/lib/utils"
import { X } from "~/components/svg"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TagsInput: React.FC<Props> = ({ className, ...props }) => {
	const [tags, setTags] = useState<string[]>([])
	const inputRef = useRef<HTMLInputElement>(null)

	const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.code !== "Space") return
		const currentValue = e.currentTarget.value
		if (!currentValue.trim()) return
		setTags([...tags, currentValue])
		e.currentTarget.value = ""
	}

	const handleRemoveTag = (idx: number) => {
		const filteredTags = tags.filter((_, i) => i !== idx)
		setTags(filteredTags)
	}

	const handleFocusInput = () => {
		inputRef.current?.focus()
	}

	return (
		<div
			className={cn(
				"flex min-h-9 flex-wrap gap-1 rounded-[4px] border border-stroke px-3 py-1",
				className
			)}
			onClick={handleFocusInput}
		>
			<ul className="flex gap-1">
				{tags.map((tag, idx) => (
					<li
						key={tag}
						className="inline-flex h-[26px] items-center gap-1 rounded-full bg-text px-2 text-sm font-medium text-surface"
					>
						{tag}
						<button
							className="text-surface opacity-75 transition-opacity hover:opacity-100"
							onClick={() => handleRemoveTag(idx)}
						>
							<X className="size-4" />
						</button>
					</li>
				))}
			</ul>
			<input
				ref={inputRef}
				className="min-h-[26px] w-full max-w-56 rounded-[4px] bg-transparent focus:border focus:border-[hsl(0_0%_44%)] focus:outline-none"
				type="text"
				onKeyDown={handleKeyDown}
				{...props}
			/>
		</div>
	)
}
