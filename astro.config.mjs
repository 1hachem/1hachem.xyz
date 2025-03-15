// @ts-check
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { remarkModifiedTime } from "./remark-modified-time.mjs";
import { remarkReadingTime } from "./remark-reading-time.mjs";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://1hachem.xyz",
  integrations: [react(), tailwind(), sitemap()],
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkModifiedTime],
  },
  prefetch: true,
  devToolbar: { enabled: false },
});
