export interface Tag {
	id?: string
	name: string
}

export interface Link {
	id?: string
	url: string
	ogImageUrl: string | null
	title: string
	description: string | null
	tags: Tag[]
}

export interface Filters {
	tagFilter?: string
	titleFilter?: string
}
