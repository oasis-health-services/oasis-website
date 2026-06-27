---
name: blog-content-writer
description: Convert a research brief into an SEO-optimized, Astro-compatible Markdown blog article with a compassionate, clinical tone. Use when drafting or writing the body of a new blog post from researched findings.
---

# Blog Content Writer

Convert a research brief into an SEO-optimized, Astro-compatible Markdown article in the Oasis voice — compassionate, professional, evidence-based.

## Technical Standards (frontmatter)

Match the schema in `src/content.config.ts`. Verify each field:

- `categorySlug` matches a file in `src/content/categories/`.
- `subCategorySlug` matches an entry within that category file.
- `authorSlug` matches a file in `src/content/authors/`.
- `publishedAt` is in `YYYY-MM-DD` format.
- `readTime` is in `X min read` format.
- `excerpt` is a string of at least 100 characters.
- `image` is a valid URL (see image note below).
- `tags` is an array of lowercase string slugs.

When unsure, mirror an existing recent post in `src/content/blog/` (see Examples).

## Tagging

- All tags are lowercase slugs (e.g., `neurodiversity`, `ai` not `AI`) for URL consistency.
- Every tag used in the article's `tags` array **MUST** have a corresponding entry in the `tags` array in `src/content.config.ts`. If a tag is new, add it to that array.

## Image

> Note: Claude Code has no native image-generation tool. Source an appropriate free-stock image (or one provided by the user) and save it under `public/images/blog/YEAR/MONTH/`, then reference it in the `image` field. Do not invent a URL.

## Content Creation & Formatting

- Follow the file structure and conventions of existing posts in `src/content/blog/`.
- Use an H2/H3 hierarchy with inline citations.
- **Structure:**
  1. **Core thesis** — state the article's purpose in the introduction.
  2. **Evidence-based sections** — H2/H3 headers breaking down the topic, with inline citations (e.g., "According to NIH (2025)…").
  3. **Actionable takeaways** — 2–3 practical strategies for patients.
  4. **The Oasis Perspective** — how Oasis Health Services integrates these insights into patient care.
  5. **References** — all cited studies as a formatted list with clickable Markdown links.

### Oasis style rules

- **Italics:** always use underscores (`_text_`), never asterisks (e.g., `_Nature_`).
- **Lists:** use hyphens (`-`), never asterisks — especially in the References section.
- **Punctuation/tone:** keep clinical-to-Oasis transitions smooth; mirror the tone of recent posts.

## Output

- The complete `.md` file written to `src/content/blog/YEAR/MONTH/slug.md`.
- Any new tags added to the `tags` array in `src/content.config.ts`.

## Examples

- `src/content/blog/2026/03/beyond-the-screen-reclaiming-mental-presence-in-an-ai-driven-world.md`
- `src/content/blog/2026/03/the-rise-of-precision-psychiatry-why-your-dna-might-hold-the-key-to-better-mental-health.md`
