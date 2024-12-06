// @ts-check
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import { remarkModifiedTime } from "./remark-modified-time.mjs";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://1hachem.xyz",
  i18n: {
    locales: ["en", "fr", "ja"],
    defaultLocale: "en",
  },
  integrations: [tailwind(), sitemap()],
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkModifiedTime],
  },
  prefetch: true,
  devToolbar: { enabled: false },
});
