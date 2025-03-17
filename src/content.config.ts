import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { TAGS } from "./consts";

const blog = defineCollection({
  loader: glob({ pattern: "*.{md,mdx}", base: "./src/content/blogs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tag: z.enum(TAGS),
  }),
});

export const collections = { blog };
