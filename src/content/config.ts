import { Heart, HandHelping, Sparkles, Users, FileText, Megaphone } from "lucide-react";
import { defineCollection, z, getCollection, type CollectionEntry, reference } from 'astro:content';


export interface SubCategory {
    name: string;
    slug: string;
    description: string;
}

// export interface Tag {
//     name: string;
//     slug: string;
// }

// Icon mapping for use in Astro components
export const iconComponents = {
    Heart,
    HandHelping,
    Sparkles,
    Users,
    FileText,
    Megaphone,
};

// export const tags: Tag[] = [
//     { name: "Feeling Anxious", slug: "feeling-anxious" },
//     { name: "First Appointment", slug: "first-appointment" },
//     { name: "Coping Skills", slug: "coping-skills" },
//     { name: "Families", slug: "families" },
//     { name: "Routines", slug: "routines" },
//     { name: "Self-Care", slug: "self-care" },
//     { name: "Mindfulness", slug: "mindfulness" },
//     { name: "Sleep", slug: "sleep" },
//     { name: "Relationships", slug: "relationships" },
//     { name: "Parenting", slug: "parenting" },
//     { name: "Work-Life Balance", slug: "work-life-balance" },
//     { name: "Recovery", slug: "recovery" },
//     { name: "Medication", slug: "medication" },
//     { name: "Therapy", slug: "therapy" },
//     { name: "Crisis Support", slug: "crisis-support" },
// ];

const authors = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        role: z.string(),
        slug: z.string(),
        avator: z.string().optional(),
    }),
});

const tags = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        slug: z.string(),
    }),
});

const categories = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.string(),
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        iconName: z.string(),
        color: z.string(),
        bgColor: z.string(),
        items: z.array(z.object({
            name: z.string(),
            slug: z.string(),
            description: z.string(),
        })),
    }),
});

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        image: z.string().optional(),
        categorySlug: z.string(),
        subCategorySlug: z.string(),
        readTime: z.string(),
        tags: z.array(z.string()),
        publishedAt: z.date(),
        authorSlug: z.string(),
        featured: z.boolean().optional(),
    }),
});


export const collections = { categories, authors, blog, tags };

export type Article = CollectionEntry<'blog'>;
export type Category = CollectionEntry<'categories'>;
export type Author = CollectionEntry<'authors'>;
export type Tag = CollectionEntry<'tags'>;

// Helper functions

export async function getCategories(): Promise<Category[]> {
    return await getCollection('categories');
}

export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
    const allCategories = await getCollection('categories');
    return allCategories.find((c) => c.data.slug === slug);
}

export async function getSubcategoryBySlug(categorySlug: string, subcategorySlug: string) {
    const category = await getCategoryBySlug(categorySlug);
    if (!category) return undefined;

    const subcategory = category.data.items.find((item) => item.slug === subcategorySlug);
    if (!subcategory) return undefined;

    return { category, subcategory };
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
    const allArticles = await getCollection('blog');
    return allArticles.find((a) => {
        const flatSlug = a.id.split('/').pop()?.replace(/\.[^/.]+$/, "") || a.id;
        return flatSlug === slug || a.id === slug || a.slug === slug;
    });
}

export async function getArticlesByCategory(categorySlug: string): Promise<Article[]> {
    const allArticles = await getCollection('blog');
    return allArticles.filter((a) => a.data.categorySlug === categorySlug);
}

export async function getArticlesBySubcategory(subcategorySlug: string): Promise<Article[]> {
    const allArticles = await getCollection('blog');
    return allArticles.filter((a) => a.data.subCategorySlug.includes(subcategorySlug));
}

export async function getArticlesByTag(tagSlug: string): Promise<Article[]> {
    const allArticles = await getCollection('blog');
    return allArticles.filter((a) => a.data.tags?.some((t) => t === tagSlug));

}

export async function getTagBySlug(slug: string): Promise<Tag | undefined> {
    const allTags = await getCollection('tags');
    return allTags.find((t) => t.data.slug === slug);
}

export async function getRelatedArticles(article: Article, limit: number = 3): Promise<Article[]> {
    const allArticles = await getCollection('blog');
    return allArticles
        .filter((a) => a.id !== article.id)
        .filter((a) => a.data.categorySlug === article.data.categorySlug || (a.data.tags && article.data.tags && a.data.tags.some((t) => article.data.tags!.some((at) => at === t))))
        .slice(0, limit);
}

export async function getFeaturedArticle(): Promise<Article | undefined> {
    const allArticles = await getCollection('blog');
    return allArticles.find((a) => a.data.featured);
}


export interface SearchResult {
    type: "article" | "category" | "subcategory" | "tag";
    title: string;
    description: string;
    url: string;
    category?: string;
}

export async function searchContent(query: string, limit = 10): Promise<SearchResult[]> {
    if (!query || query.trim().length < 1) return [];

    const q = query.toLowerCase().trim();
    const results: SearchResult[] = [];
    const allArticles = await getCollection('blog');
    const allTags = await getCollection('tags');

    // Search articles
    for (const article of allArticles) {
        const titleMatch = article.data.title.toLowerCase().includes(q);
        const excerptMatch = article.data.excerpt.toLowerCase().includes(q);
        const contentMatch = article.body?.toLowerCase().includes(q);
        const tagMatch = article.data.tags?.some(t => t.toLowerCase().includes(q));


        if (titleMatch || excerptMatch || contentMatch || tagMatch) {
            const flatSlug = article.id.split('/').pop()?.replace(/\.[^/.]+$/, "") || article.id;
            results.push({
                type: "article",
                title: article.data.title,
                description: article.data.excerpt,
                url: `/blog/${flatSlug}`,
                category: article.data.categorySlug, // Fixed property name
            });
        }
    }


    // Search categories
    const allCategories = await getCollection('categories');
    for (const category of allCategories) {
        if (
            category.data.title.toLowerCase().includes(q) ||
            category.data.description.toLowerCase().includes(q)
        ) {
            results.push({
                type: "category",
                title: category.data.title,
                description: category.data.description,
                url: `/blog/category/${category.data.slug}`,
            });
        }

        // Search subcategories
        for (const sub of category.data.items) {
            if (
                sub.name.toLowerCase().includes(q) ||
                sub.description.toLowerCase().includes(q)
            ) {
                results.push({
                    type: "subcategory",
                    title: sub.name,
                    description: sub.description,
                    url: `/blog/category/${category.data.slug}/${sub.slug}`,
                    category: category.data.title,
                });
            }
        }
    }

    // Search tags
    for (const tag of allTags) {
        if (tag.data.name.toLowerCase().includes(q)) {
            const articleCount = allArticles.filter(a =>
                a.data.tags?.some(t => t === tag.data.slug)
            ).length;

            results.push({
                type: "tag",
                title: tag.data.name,
                description: `${articleCount} article${articleCount !== 1 ? "s" : ""} with this tag`,
                url: `/blog/tag/${tag.data.slug}`,
            });
        }
    }

    // Sort: prioritize title matches, then by type
    results.sort((a, b) => {
        const aTitle = a.title.toLowerCase().includes(q) ? 0 : 1;
        const bTitle = b.title.toLowerCase().includes(q) ? 0 : 1;
        if (aTitle !== bTitle) return aTitle - bTitle;

        const typeOrder = { article: 0, subcategory: 1, category: 2, tag: 3 };
        return typeOrder[a.type] - typeOrder[b.type];
    });

    return results.slice(0, limit);
}