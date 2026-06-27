---
description: Move a blog post from research to a technically valid, clinically audited, published-ready state.
argument-hint: <topic, keywords>
---

Run the comprehensive blog production workflow for: **$ARGUMENTS**

Move the post from research to a technically valid, clinically audited, published-ready state.

## 1. Research Phase
- Use the `blog-research-specialist` skill.
- Input: topic, keywords, target year (2026).
- Goal: a research brief with at least 4 peer-reviewed citations and 2 "trend signals" for 2026.

## 2. Creative Phase
- Use the `blog-content-writer` skill with the research brief.
- Draft a compassion-first headline.
- Organize content around "Understanding," "Solutions," and "The Oasis Perspective."
- Include all required frontmatter (`categorySlug`, `subCategorySlug`, `authorSlug`, etc.) per `src/content.config.ts`.

## 3. Visual & Technical Validation
- Source one premium, brand-aligned image (Claude Code has no native image generation) and save it under `public/images/blog/YEAR/MONTH/`.
- Manually verify frontmatter against `src/content.config.ts`.

## 4. Audit Phase
- Use the `blog-quality-reviewer` skill. Validate:
    - [ ] Scientific evidence accuracy.
    - [ ] Compassionate brand tone.
    - [ ] Astro content schema compliance.
    - [ ] Valid link structure and file path (`src/content/blog/YEAR/MONTH/slug.md`).
- Fix any FAIL items and re-audit until PASS.
