// Type imports
// import type { ManifestOptions } from "@vite-pwa/astro"

import * as consts from "@/consts";

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: consts.BASE_URL, // Change this to your production URL.
	description: consts.SITE_DESCRIPTION,
	type: "website",
	image: {
		url: "https://picsum.photos/1200/630", // Change this to your website's thumbnail.
		alt: "OpenGraph thumbnail description.", // Change this to your website's thumbnail description.
		width: 1200,
		height: 630
	},
	siteName: consts.SITE_TITLE, // Change this to your website's name,
	twitter: {
		card: "summary_large_image"
	}
}

/**
 * Defines the configuration for PWA webmanifest.
 */

// : Partial<ManifestOptions>

export const manifest = {
	name: consts.SITE_TITLE, // Change this to your website's name.
	short_name: consts.SITE_TITLE_SHORT, // Change this to your website's short name.
	description: consts.SITE_DESCRIPTION,
	theme_color: "#30E130", // Change this to your primary color.
	background_color: "#ffffff", // Change this to your background color.
	display: "minimal-ui",
	icons: [
		{
			src: "/favicons/favicon-192x192.png",
			sizes: "192x192",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable"
		}
	]
}
