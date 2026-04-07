---
name: blog-content-writer
description: A skill for converting research briefs into SEO-optimized, Astro-compatible Markdown articles with a compassionate tone.
---

## Description

Converts research briefs into SEO-optimized, Astro-compatible Markdown articles with a compassionate tone.

## Technical Standards

- **Objective:** Ensure articles are correctly indexed by search engines and are accessible to users.
- **Standards:**
  - If applicable, source an appropriate free-stock image for the article or generate one for the featured image
  - Ensure `categorySlug` matches a file in `src/content/categories/`.
  - Ensure `subCategorySlug` matches an entry within that category file.
  - Ensure `authorSlug` matches a file in `src/content/authors/`.
  - Ensure `publishedAt` is in `YYYY-MM-DD` format.
  - Ensure `readTime` is in `X min read` format.
  - Ensure `excerpt` is a string of at least 100 characters.
  - Ensure `image` is a valid URL.
  - Ensure `tags` is an array of strings.
- **Formatting:**
  - Ensure file and format follows existing blogs in `src/content/blog`
  - Use H2/H3 hierarchy, inline citations, and an "Oasis Perspective" section.
  - **Italics:** Always use underscores (`_text_`) instead of asterisks for italics (e.g., _Nature_).
  - **Lists:** Use hyphens (`-`) instead of asterisks for all bulleted lists, especially in the Reference section.
  - **Punctuation:** Use commas or colons thoughtfully based on the "Oasis Perspective" (refer to recent edits for tone).
- **Tagging:** All tags must be lowercase slugs (e.g., `neurodiversity`).
  - Every tag used in the article's `tags` array **MUST** have a corresponding entry in tags array in `src/content.config.ts`.
  - Always use **lowercase slugs** for tags (e.g., `ai`, not `AI`) to maintain URL consistency.

## Content Creation & Formatting

- **Objective**: Write clear, compassionate, and structured Markdown
- **Structure**:
  1. **Core Thesis**: Clearly state the article's purpose in the introduction
  2. **Evidence-Based Sections**: Use H2 and H3 headers to brekdown complex topics. Include inline citations (e.g., "According to NIH (2025)...")
  3. **Actionable Takeaways**: Provide patients with 2-3 practical strategies.
  4. **Oasis Perspectives**: Explain how Oasis Health Services integrates these scientific insights into patient care.
  5. **Reference Section**: List all cited studies in a formatted list with clickable markdown links

## Output Format

- Complete `.md` file content.
- Add any new tags to the tags array
