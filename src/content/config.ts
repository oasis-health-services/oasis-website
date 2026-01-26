import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishedAt: z.coerce.date(),
        updatedAt: z.coerce.date().optional(),
        author: z.string().default('Oasis Health Services'),
        image: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = { blog };
