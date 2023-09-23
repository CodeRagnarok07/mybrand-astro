import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import compress from "astro-compress";
import AstroPWA from '@vite-pwa/astro'


const config = {
  site: 'https://example.com',
  integrations: [sitemap(), tailwind(), compress(), AstroPWA()]

}

config.output = "server"
config.adapter = vercel()

// https://astro.build/config
export default defineConfig(config);