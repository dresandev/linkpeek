export const TagSuggester = () => {
	return (
		<ul
			id="tags-popup"
			role="listbox"
			className="absolute inset-x-0 top-full z-30 flex flex-col gap-y-px overflow-hidden rounded-lg border border-stroke bg-stroke"
		>
			<li
				className="bg-secondary-surface px-4 py-1 aria-selected:bg-text aria-selected:text-surface"
				role="option"
				aria-selected={true}
			>
				Typescript
			</li>
			<li
				className="bg-secondary-surface px-4 py-1 aria-selected:bg-text aria-selected:text-surface"
				role="option"
				aria-selected={false}
			>
				Typescript
			</li>
			<li
				className="bg-secondary-surface px-4 py-1 aria-selected:bg-text aria-selected:text-surface"
				role="option"
				aria-selected={false}
			>
				Typescript
			</li>
			<li
				className="bg-secondary-surface px-4 py-1 aria-selected:bg-text aria-selected:text-surface"
				role="option"
				aria-selected={false}
			>
				Typescript
			</li>
			<li
				className="bg-secondary-surface px-4 py-1 aria-selected:bg-text aria-selected:text-surface"
				role="option"
				aria-selected={false}
			>
				Typescript
			</li>
		</ul>
	)
}
