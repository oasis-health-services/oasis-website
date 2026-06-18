import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection('blog');

    const items = posts
        .sort((a, b) => new Date(b.data.publishedAt) - new Date(a.data.publishedAt))
        .map((post) => {
            const date = new Date(post.data.publishedAt);
            const year = date.getUTCFullYear();
            const month = String(date.getUTCMonth() + 1).padStart(2, '0');
            const slug = post.id.split('/').pop()?.replace(/\.[^/.]+$/, '') || post.id;

            return {
                title: post.data.title,
                description: post.data.excerpt,
                pubDate: post.data.publishedAt,
                link: `/blog/${year}/${month}/${slug}/`,
                categories: post.data.tags,
            };
        });

    return rss({
        title: 'Oasis Health Services Blog',
        description:
            'Evidence-based mental health insights, guidance, and resources from Oasis Health Services.',
        site: context.site,
        items,
    });
}
