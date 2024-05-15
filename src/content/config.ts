import { defineCollection, z } from 'astro:content';

const services = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		heroImage: z.string().optional(),
	}),
});

export const collections = { services };
