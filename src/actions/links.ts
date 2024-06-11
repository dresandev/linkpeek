"use server"

import { revalidatePath } from "next/cache"
import type { Filters, Link } from "~/types"
import { db } from "~/lib/db"
import { auth } from "~/auth"

interface GetLinksOptions {
	filters: Filters
}

export const getLinks = async ({ filters }: GetLinksOptions) => {
	const { tagFilter, titleFilter } = filters

	const links = await db.link.findMany({
		where: {
			title: {
				contains: titleFilter,
				mode: "insensitive",
			},
			tags: {
				some: tagFilter ? { name: { equals: tagFilter } } : undefined,
			},
		},
		include: { tags: true },
		orderBy: { createdAt: "desc" },
	})

	return links
}

export const createLink = async (link: Link) => {
	const session = await auth()

	if (!session) {
		return { error: "No estas autorizado para realizar esta acción." }
	}

	const tagsNames = link.tags.map((tag) => tag.name)
	const existingTags = await db.tag.findMany({
		where: { name: { in: tagsNames } },
	})
	const existingTagNames = existingTags.map((tag) => tag.name)
	const toCreateTags = link.tags.filter((tag) => !existingTagNames.includes(tag.name))

	await db.link.create({
		data: {
			...link,
			tags: {
				connect: existingTags,
				create: toCreateTags,
			},
		},
	})

	revalidatePath("/")
}

export const updateLink = async ({ id, tags, ...link }: Link) => {
	const session = await auth()

	if (!session) {
		return { error: "No estas autorizado para realizar esta acción." }
	}

	const tagsNames = tags.map((tag) => tag.name)
	const existingTags = await db.tag.findMany({
		where: { name: { in: tagsNames } },
	})
	const existingTagNames = existingTags.map((tag) => tag.name)
	const toCreateTags = tags.filter((tag) => !existingTagNames.includes(tag.name))

	await db.link.update({
		where: { id },
		data: {
			...link,
			tags: {
				set: existingTags,
				create: toCreateTags,
			},
		},
	})

	revalidatePath("/")
}

export const deleteLink = async (id: string) => {
	const session = await auth()

	if (!session) {
		return { error: "No estas autorizado para realizar esta acción." }
	}

	await db.link.delete({ where: { id } })

	revalidatePath("/")
}
