// @ts-check
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import remarkCallout from "@r4ai/remark-callout";

import { defineConfig } from "astro/config";
import { remarkModifiedTime } from "./remark-modified-time.mjs";
import { remarkReadingTime } from "./remark-reading-time.mjs";

import node from "@astrojs/node";

export default defineConfig({
  site: "https://1hachem.xyz",
  integrations: [react(), tailwind(), sitemap(), mdx()],

  markdown: {
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

  adapter: node({
    mode: "standalone",
  }),
});