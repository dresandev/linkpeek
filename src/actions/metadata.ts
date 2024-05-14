"use server"

import { chromium } from "playwright"

export const getPageMetadata = async (url: string) => {
	try {
		const browser = await chromium.launch()
		const page = await browser.newPage()

		await page.goto(url, { waitUntil: "domcontentloaded", timeout: 5000 })

		const title = await page.title()
		const { ogImage, description } = await page.evaluate(() => {
			const ogImage = document.querySelector('meta[name="og:image"], meta[property="og:image"]')?.getAttribute("content") ?? null
			const description = document.querySelector('meta[name="description"]')?.getAttribute("content") ?? null

			return {
				ogImage,
				description,
			}
		})

		await browser.close()

		return {
			title,
			ogImage,
			description,
		}
	} catch (error) {
		console.log(error)
		return null
	}
}
