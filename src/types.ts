export interface Tag {
  id?: string
  name: string
}

export interface Link {
  url: string,
  ogImageUrl: string | null,
  title: string,
  description: string | null,
  tags: Tag[]
}
