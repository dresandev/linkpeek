"use server"

import { db } from '~/lib/db'

export const getTags = async () => {
  const tags = await db.tag.findMany()
  return tags
}

export const searchTags = async (q: string) => {
  if (!q) return

  const tags = await db.tag.findMany({
    where: { name: { startsWith: q } }
  })
  return tags
}
