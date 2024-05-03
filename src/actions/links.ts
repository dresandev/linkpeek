"use server"

import { db } from '~/lib/db'

export const addLink = async ({ url, title, description, }: { url: string, title?: string, description?: string }) => {
  await db.link.create({
    data: {
      url,
      title,
      description
    }
  })
}

export const updateLink = async (id: string, { url, title, description, }: { url: string, title?: string, description?: string }) => {
  await db.link.update({
    where: { id },
    data: {
      url,
      title,
      description
    }
  })
}

export const getLinks = async () => {
  const links = await db.link.findMany()
  return links
}

export const deleteLink = async (id: string,) => {
  await db.link.delete({ where: { id } })
}
