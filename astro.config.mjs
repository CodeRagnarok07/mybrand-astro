import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import compress from "astro-compress";
// import { VitePWA } from 'vite-plugin-pwa';


// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  
  integrations: [sitemap(), tailwind(), compress()]
  // output: "server",
  // adapter: vercel()
});