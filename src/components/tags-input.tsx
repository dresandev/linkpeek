"use client"

import type {
	InputHTMLAttributes,
	Dispatch,
	SetStateAction,
	FC,
	KeyboardEventHandler,
	ChangeEventHandler,
} from "react"
import { useRef, useState } from "react"
import { type Tag } from "~/types"
import { cn } from "~/lib/utils"
import { TagSuggester } from "~/components/tag-suggester"
import { X } from "~/components/svg"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	tags: Tag[]
	setTags: Dispatch<SetStateAction<Tag[]>>
}

export const TagsInput: FC<Props> = ({ className, tags, setTags, ...props }) => {
	const [tagValue, setTagValue] = useState("")
	const inputRef = useRef<HTMLInputElement>(null)

	const isTagAdded = tags.some((tag) => tag.name === tagValue)

	const addTag = () => {
		if (!tagValue || isTagAdded) return
		setTags([...tags, { name: tagValue.trim().toLowerCase() }])
		setTagValue("")
	}

	const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.code === "Space") {
			if (isTagAdded || !tagValue) return e.preventDefault()
			return addTag()
		}

		if (e.code === "Enter" && tagValue) {
			e.preventDefault()
			return addTag()
		}

		if (e.code === "Backspace" && !tagValue && tags.length) {
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

	const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setTagValue(e.currentTarget.value)
	}

	const handleOnSelect = (tag: Tag) => {
		setTags([...tags, tag])
		setTagValue("")
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
							type="button"
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
				role="combobox"
				aria-expanded={false}
				aria-controls="tags-popup"
				aria-autocomplete="list"
				aria-haspopup="listbox"
				className="min-h-[28px] w-full max-w-56 rounded-[4px] bg-transparent focus:border focus:border-[hsl(0_0%_44%)] focus:outline-none"
				type="text"
				autoComplete="off"
				spellCheck="false"
				ref={inputRef}
				value={tagValue}
				onKeyDown={handleKeyDown}
				onChange={handleOnChange}
				{...props}
			/>
			<TagSuggester searchTerm={tagValue} onSelect={handleOnSelect} />
		</div>
	)
}
