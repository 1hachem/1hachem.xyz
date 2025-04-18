import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import remarkCallout from "@r4ai/remark-callout";

import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { remarkModifiedTime } from "./remark-modified-time.mjs";
import { remarkReadingTime } from "./remark-reading-time.mjs";

export default defineConfig({
  site: "https://1hachem.xyz",
  integrations: [react(), sitemap(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    shikiConfig: {
      // theme: syntaxTheme,
      wrap: true,
    },
    remarkPlugins: [
      remarkReadingTime,
      remarkModifiedTime,
      [
        remarkCallout,
        {
          root: () => ({
            tagName: "callout",
          }),
          body: (/** @type {{ type: string;  }} */ callout) => ({
            tagName: "callout-body",
            properties: {
              calloutType: callout.type,
            },
          }),
          title: (/** @type {{ type: string; }} */ callout) => ({
            tagName: "callout-title",
            properties: {
              calloutType: callout.type,
            },
          }),
        },
      ],
    ],
  },

  prefetch: true,
  devToolbar: { enabled: false },
  adapter: vercel(),
});
