// @ts-check
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import { remarkModifiedTime } from "./remark-modified-time.mjs";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://1hachem.xyz",
  i18n: {
    locales: ["en", "fr", "ja"],
    defaultLocale: "en",
  },
  integrations: [
    react(),
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          fr: "fr-CA",
          ja: "ja-JP",
        },
      },
    }),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkModifiedTime],
  },
  prefetch: true,
  devToolbar: { enabled: false },
});
