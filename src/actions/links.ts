"use server"

import { db } from '~/lib/db'

export const addLink = ({ url }: { url: string }) => {
  db.link.create({
    data: {
      url
    }
  })
}

export const updateLink = () => {

}

export const deleteLink = () => {

}
