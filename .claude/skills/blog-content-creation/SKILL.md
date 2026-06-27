---
name: blog-content-creation
description: End-to-end process for creating one high-authority, evidence-based mental-health blog article with scientific citations and correct Astro content integration. Use as the single-skill reference for the full research-to-publish flow when not orchestrating the separate research/writer/reviewer skills.
---

# Scientific Blog Content Creation Workflow

The rigorous, single-skill process for creating high-authority, evidence-based blog articles for Oasis Health Services — ensuring consistency, clinical accuracy, and technical integrity.

> For an orchestrated, multi-step run, use the `/new-blog` or `/blog-production-workflow` commands, which delegate to `blog-research-specialist`, `blog-content-writer`, and `blog-quality-reviewer`.

## Phase 1: Research & Trend Analysis
- **Objective:** Identify timely topics that resonate with current mental-health challenges.
- **Workflow:**
    1. Use `WebSearch` for current mental-health trends (e.g., "mental health trends 2026").
    2. Focus on emerging themes — AI integration and its psychological impact, precision psychiatry/pharmacogenomics, modern burnout, neurodiversity and holistic care.
    3. Cross-reference trends with the categories in `src/content/categories/`.

## Phase 2: Scientific Grounding (Citations)
- **Objective:** Back every major claim with peer-reviewed research.
- **Standards:** recent studies (last 2–3 years); high-authority sources (NIH/PubMed/PMC, APA, MDPI, Nature, Cambridge University Press).
- **Linking:** include direct, clickable URLs to the original study/clinical trial in the References section.
- **Verification:** use `WebSearch` to find and `WebFetch` to confirm a direct DOI or PMC link for each citation.

## Phase 3: Technical Integration (Astro)
- **Objective:** Ensure articles are correctly indexed for search and navigation.
- **Frontmatter** (match the schema in `src/content.config.ts`):
    - `categorySlug` matches a file in `src/content/categories/`.
    - `subCategorySlug` matches an entry within that category file.
    - `authorSlug` matches a file in `src/content/authors/`.
    - `publishedAt` follows `YYYY-MM-DD`.
- **Tag management:**
    - Every tag in the article's `tags` array **MUST** exist in the `tags` array in `src/content.config.ts`. If new, add an entry there:
      ```ts
      { name: "Tag Name", slug: "tag-slug" }
      ```
    - Always use lowercase slugs (e.g., `ai`, not `AI`) for URL consistency.

## Phase 4: Content Creation & Formatting
- **Objective:** Write clear, compassionate, structured Markdown.
- **Structure:**
    1. **Core thesis** — state the article's purpose in the introduction.
    2. **Evidence-based sections** — H2/H3 headers with inline citations (e.g., "According to NIH (2025)…").
    3. **Actionable takeaways** — 2–3 practical strategies.
    4. **The Oasis Perspective** — how Oasis integrates these insights into patient care.
    5. **References** — formatted list with clickable Markdown links.
- **Oasis style:** underscores for italics (`_Nature_`, never `*`); hyphens for lists (never `*`).
- **Image:** Claude Code has no native image generation — source a free-stock/user-provided image and save it under `public/images/blog/YEAR/MONTH/`.

## Validation Checklist
- [ ] Frontmatter matches the schema in `src/content.config.ts`.
- [ ] Category and sub-category slugs verified against `src/content/categories/`.
- [ ] Every tag exists in the `tags` array in `src/content.config.ts`.
- [ ] All citations link to original, verified sources.
- [ ] File placed in `src/content/blog/[YEAR]/[MONTH]/`.

## Examples
- `src/content/blog/2026/03/beyond-the-screen-reclaiming-mental-presence-in-an-ai-driven-world.md`
- `src/content/blog/2026/03/the-rise-of-precision-psychiatry-why-your-dna-might-hold-the-key-to-better-mental-health.md`
