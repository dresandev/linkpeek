import { db } from '~/lib/db'

export const getTags = async () => {
  const tags = await db.tag.findMany()
  return tags
}
