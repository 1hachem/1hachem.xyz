import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "*.{md,mdx}", base: "./src/content/blogs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tag: z.enum(["lifestyle", "dev", "relegion", "management"]),
  }),
});

export const collections = { blog };
