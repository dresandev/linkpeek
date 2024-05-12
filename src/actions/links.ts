"use server"

import { db } from "~/lib/db"
import { type Link } from "~/types"

export const getLinks = async () => {
  const links = await db.link.findMany({ orderBy: { createdAt: "desc" } })
  return links
}

export const createLink = async ({ tags, ...link }: Link) => {
  const toConnectTags = tags.filter(tag => "id" in tag)
  const toCreateTags = tags.filter(tag => !('id' in tag))

  await db.link.create({
    data: {
      ...link,
      tags: {
        connect: toConnectTags,
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
