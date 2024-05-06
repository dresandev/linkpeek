"use server"

import { db } from '~/lib/db'

export const addLink = async ({
  url,
  ogImageUrl,
  title,
  description,
}: {
  url: string,
  ogImageUrl: string | null,
  title: string,
  description?: string | null
}) => {
  await db.link.create({ data: { url, ogImageUrl, title, description } })
}

export const updateLink = async (id: string, { url }: { url: string, title?: string, description?: string }) => {
  await db.link.update({
    where: { id },
    data: { url, }
  })
}

export const getLinks = async () => {
  const links = await db.link.findMany()
  return links
}

export const deleteLink = async (id: string,) => {
  await db.link.delete({ where: { id } })
}
