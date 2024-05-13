"use server"

import { db } from "~/lib/db"
import { type Link } from "~/types"

export const getLinks = async () => {
  const links = await db.link.findMany({ orderBy: { createdAt: "desc" } })
  return links
}

export const createLink = async ({ tags, ...link }: Link) => {
  const existingTags = await db.tag.findMany({
    where: {
      name: { in: tags }
    }
  })

  const existingTagNames = existingTags.map(tag => tag.name);
  const newTagNames = tags.filter(tag => !existingTagNames.includes(tag));
  const toCreateTags = newTagNames.map(name => ({ name }));


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

export const updateLink = async (id: string, link: Link) => {
  await db.link.update({ where: { id }, data: link })
}

export const deleteLink = async (id: string,) => {
  await db.link.delete({ where: { id } })
}
