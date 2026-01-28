
export interface SubCategory {
    name: string;
    slug: string;
    description: string;
}

export interface Category {
    id: string;
    slug: string;
    title: string;
    description: string;
    iconName: string;
    color: string;
    bgColor: string;
    items: SubCategory[];
}

export interface SearchResult {
    type: "article" | "category" | "subcategory" | "tag";
    title: string;
    description: string;
    url: string;
    category?: string;
}

/**
 * Client-side search logic that operates on a passed-in categories array.
 * This avoids importing 'astro:content' in client components.
 */
export function searchContent(query: string, categories: Category[], limit = 10): SearchResult[] {
    if (!query || query.trim().length < 1) return [];

    const q = query.toLowerCase().trim();
    const results: SearchResult[] = [];

    // Search categories
    for (const category of categories) {
        if (
            category.title.toLowerCase().includes(q) ||
            category.description.toLowerCase().includes(q)
        ) {
            results.push({
                type: "category",
                title: category.title,
                description: category.description,
                url: `/blog/category/${category.slug}`,
            });
        }

        // Search subcategories
        for (const sub of category.items) {
            if (
                sub.name.toLowerCase().includes(q) ||
                sub.description.toLowerCase().includes(q)
            ) {
                results.push({
                    type: "subcategory",
                    title: sub.name,
                    description: sub.description,
                    url: `/blog/category/${category.slug}/${sub.slug}`,
                    category: category.title,
                });
            }
        }
    }

    // Sort results: prioritize title matches, then by type
    results.sort((a, b) => {
        const aTitle = a.title.toLowerCase().includes(q) ? 0 : 1;
        const bTitle = b.title.toLowerCase().includes(q) ? 0 : 1;
        if (aTitle !== bTitle) return aTitle - bTitle;

        const typeOrder = { article: 0, subcategory: 1, category: 2, tag: 3 };
        return (typeOrder[a.type] || 99) - (typeOrder[b.type] || 99);
    });

    return results.slice(0, limit);
}
