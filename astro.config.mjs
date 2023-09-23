import { defineConfig } from 'astro/config';
import { VitePWA } from 'vite-plugin-pwa';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [VitePWA()]
  },
  integrations: [tailwind(), react()],
  // output: "server",
  // adapter: vercel()
});