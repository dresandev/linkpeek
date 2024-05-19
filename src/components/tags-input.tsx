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
import { Tag } from "~/types"
import { cn } from "~/lib/utils"
import { TagSuggester } from "~/components/tag-suggester"
import { X } from "~/components/svg"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	tags: Tag[]
	setTags: Dispatch<SetStateAction<Tag[]>>
}

export const TagsInput: FC<Props> = ({ className, tags, setTags, ...props }) => {
	const [inputValue, setTagValue] = useState("")
	const [suggestedTags, setSuggestedTags] = useState<Tag[]>([])
	const [suggestedTagIdx, setSuggestedTagIdx] = useState<number | null>(null)
	const inputRef = useRef<HTMLInputElement>(null)

	const isTagAdded = tags.some((tag) => tag.name === inputValue)
	const maxSuggestedTagsLength = suggestedTags.length - 1

	const addTag = (tagName: string) => {
		if (!tagName || isTagAdded) return
		setTags([...tags, { name: tagName }])
		setTagValue("")
	}

	const addSuggestedTag = (idx: number) => {
		addTag(suggestedTags.at(idx)!.name)
		setSuggestedTagIdx(null)
		setSuggestedTags([])
	}

	const keyDownHandledEvents = {
		" ": (e: React.KeyboardEvent<HTMLInputElement>) => {
			if (isTagAdded || !inputValue) {
				e.preventDefault()

				if (suggestedTagIdx !== null) {
					return addSuggestedTag(suggestedTagIdx)
				}

				return
			}

			addTag(inputValue)
		},
		"Enter": (e: React.KeyboardEvent<HTMLInputElement>) => {
			if (!inputValue) return

			e.preventDefault()

			if (suggestedTagIdx !== null) {
				return addSuggestedTag(suggestedTagIdx)
			}

			addTag(inputValue)
		},
		"Backspace": (e: React.KeyboardEvent<HTMLInputElement>) => {
			if (inputValue || !tags.length) return
			const filteredTags = tags.slice(0, -1)
			setTags(filteredTags)
		},
		"ArrowUp": (e: React.KeyboardEvent<HTMLInputElement>) => {
			if (suggestedTags.length) e.preventDefault()

			if (suggestedTagIdx === null) {
				return setSuggestedTagIdx(maxSuggestedTagsLength)
			}

			if (suggestedTagIdx > 0) {
				return setSuggestedTagIdx(-1)
			}

			setSuggestedTagIdx(null)
		},
		"ArrowDown": (e: React.KeyboardEvent<HTMLInputElement>) => {
			if (suggestedTags.length) e.preventDefault()

			if (suggestedTagIdx === null) {
				return setSuggestedTagIdx(0)
			}

			if (suggestedTagIdx < maxSuggestedTagsLength) {
				return setSuggestedTagIdx(suggestedTagIdx + 1)
			}

			setSuggestedTagIdx(null)
		},
	}

	type KeyDownHandledEventsKeys = keyof typeof keyDownHandledEvents

	const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (!(e.key in keyDownHandledEvents)) return

		const handler = keyDownHandledEvents[e.key as KeyDownHandledEventsKeys]
		handler(e)
	}

	const handleRemoveTag = (idx: number) => {
		const filteredTags = tags.filter((_, i) => i !== idx)
		setTags(filteredTags)
	}

	const handleFocusInput = () => {
		inputRef.current?.focus()
	}

	const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setTagValue(e.currentTarget.value.trim().toLowerCase())
	}

	const handleOnSelect = (tag: Tag) => {
		addTag(tag.name)
		setSuggestedTags([])
	}

	return (
		<div
			className={cn(
				"relative flex min-h-9 flex-wrap gap-1 rounded-[4px] border border-stroke px-[14px] py-1",
				className
			)}
			onClick={handleFocusInput}
		>
			<ul className="flex flex-wrap items-center gap-1">
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
				aria-expanded={!!suggestedTags.length}
				aria-controls="tags-popup"
				aria-autocomplete="list"
				aria-haspopup="listbox"
				className="min-h-[28px] w-full max-w-56 rounded-[4px] bg-transparent focus:border focus:border-[hsl(0_0%_44%)] focus:outline-none"
				type="text"
				autoComplete="off"
				spellCheck="false"
				ref={inputRef}
				value={inputValue}
				onKeyDown={handleKeyDown}
				onChange={handleOnChange}
				{...props}
			/>
			<TagSuggester
				searchTerm={inputValue}
				onSelect={handleOnSelect}
				suggestedTags={suggestedTags}
				suggestedTagIdx={suggestedTagIdx}
				setSuggestedTags={setSuggestedTags}
			/>
		</div>
	)
}
