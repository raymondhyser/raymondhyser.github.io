import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const cultivation = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cultivation" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    citations: z.array(z.string()).optional(),
  }),
});

export const collections = { cultivation };
