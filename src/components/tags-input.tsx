"use client"

import { useRef } from "react"
import { type Tag } from "~/types"
import { cn } from "~/lib/utils"
import { TagSuggester } from "~/components/tag-suggester"
import { X } from "~/components/svg"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	tags: Tag[]
	setTags: React.Dispatch<React.SetStateAction<Tag[]>>
}

export const TagsInput: React.FC<Props> = ({ className, tags, setTags, ...props }) => {
	const inputRef = useRef<HTMLInputElement>(null)

	const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
		const currentValue = e.currentTarget.value.trim()

		const addTag = () => {
			const isTagAdded = tags.some((tag) => tag.name === currentValue)
			if (!currentValue || isTagAdded) return
			setTags([...tags, { name: currentValue }])
			e.currentTarget.value = ""
		}

		if (e.code === "Space") {
			addTag()
		}

		if (e.code === "Enter" && currentValue) {
			e.preventDefault()
			addTag()
		}

		if (e.code === "Backspace" && !currentValue) {
			const filteredTags = tags.slice(0, -1)
			setTags(filteredTags)
		}
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
				"relative flex min-h-9 flex-wrap gap-1 rounded-[4px] border border-stroke px-[14px] py-1",
				className
			)}
			onClick={handleFocusInput}
		>
			<ul className="flex items-center gap-1">
				{tags.map((tag, idx) => (
					<li
						key={tag.name}
						className="inline-flex h-[26px] items-center gap-1 rounded-full bg-text px-2 text-sm font-medium text-surface"
					>
						<span className="leading-normal">{tag.name}</span>
						<button
							tabIndex={-1}
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
				className="min-h-[28px] w-full max-w-56 rounded-[4px] bg-transparent focus:border focus:border-[hsl(0_0%_44%)] focus:outline-none"
				type="text"
				onKeyDown={handleKeyDown}
				{...props}
			/>
			<TagSuggester />
		</div>
	)
}
