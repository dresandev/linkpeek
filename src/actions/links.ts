"use server"

import { db } from '~/lib/db'
import { type Link } from '~/types'

export const getLinks = async () => {
  const links = await db.link.findMany({ orderBy: { createdAt: 'desc' } })
  return links
}

export const addLink = async ({ tags, ...link }: Link) => {
  await db.link.create({
    data: {
      ...link,
      tags: { create: tags, connect: [{ id: "clvynvs5z00019ga7lqe905sn" }] }
    }
  })
}

export const updateLink = async (id: string, link: Link) => {
  await db.link.update({ where: { id }, data: link })
}

export const deleteLink = async (id: string,) => {
  await db.link.delete({ where: { id } })
}
