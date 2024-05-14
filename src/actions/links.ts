"use server"

import { db } from "~/lib/db"
import { type Link } from "~/types"

export const getLinks = async () => {
  const links = await db.link.findMany({
    include: { tags: true },
    orderBy: { createdAt: "desc" }
  })
  return links
}

export const createLink = async (link: Link) => {
  const tagsNames = link.tags.map(tag => tag.name)
  const existingTags = await db.tag.findMany({
    where: { name: { in: tagsNames } }
  })
  const existingTagNames = existingTags.map(tag => tag.name)
  const toCreateTags = link.tags.filter(tag => !existingTagNames.includes(tag.name))

  await db.link.create({
    data: {
      ...link,
      tags: {
        connect: existingTags,
        create: toCreateTags,
      }
    }
  })
}

export const updateLink = async ({ id, tags, ...link }: Link) => {
  const tagsNames = tags.map(tag => tag.name)
  const existingTags = await db.tag.findMany({
    where: { name: { in: tagsNames } }
  })
  const existingTagNames = existingTags.map(tag => tag.name)
  const toCreateTags = tags.filter(tag => !existingTagNames.includes(tag.name))

  await db.link.update({
    where: { id },
    data: {
      ...link,
      tags: {
        set: existingTags,
        create: toCreateTags,
      }
    }
  })
}

export const deleteLink = async (id: string,) => {
  await db.link.delete({ where: { id } })
}
