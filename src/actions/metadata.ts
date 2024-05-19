"use server"

import { firefox } from "playwright"

export const getPageMetadata = async (url: string) => {
	try {
		const encodedURIComponent = encodeURIComponent(
			JSON.stringify({
				"browserName": "Chrome",
				"browserVersion": "latest",
				"LT:Options": {
					platform: "Windows 10",
					user: process.env.LT_USERNAME,
					accessKey: process.env.LT_ACCESS_KEY,
					build: "Playwright-LambdaTest-Build",
					name: "Playwright-LambdaTest-Session",
				},
			})
		)
		const wsEndpoint = `wss://cdp.lambdatest.com/playwright?capabilities=${encodedURIComponent}`

		const browser = await firefox.connect(wsEndpoint)
		const page = await browser.newPage()

		await page.goto(url, { waitUntil: "domcontentloaded", timeout: 5000 })

		const title = await page.title()
		const { ogImage, description } = await page.evaluate(() => {
			const ogImage =
				document
					.querySelector('meta[name="og:image"], meta[property="og:image"]')
					?.getAttribute("content") ?? null
			const description =
				document.querySelector('meta[name="description"]')?.getAttribute("content") ?? null

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
