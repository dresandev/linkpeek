import * as cheerio from 'cheerio'

export const getPageMetadata = async (url: string) => {
  const response = await fetch(url)
  const html = await response.text()
  const $ = cheerio.load(html)
  const ogImageUrl = $('meta[property="og:image"]').attr('content')
  const title = $('title').text()
  const description = $('meta[name="description"]').attr('content')

  return {
    ogImageUrl,
    title,
    description,
  }
}
