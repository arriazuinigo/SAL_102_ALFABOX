import { defineCollection, z } from 'astro:content';

// Define the schema for blog posts
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    image: z.string().optional(),
    youtubeId: z.string().optional(),
  }),
});

// Export the collections
export const collections = {
  'blog': blogCollection,
};