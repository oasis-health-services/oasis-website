---
name: blog-production-workflow
description: A comprehensive workflow to move a blog post from the research phase to a technically valid, clinically audited, and published state.
---

## 1. Research Phase
- **Tooling:** Trigger `blog-research-specialist`.
- **Input:** Topic, Keywords, target year (2026).
- **Goal:** Produce a Research Brief with at least 4 peer-reviewed citations and 2 "trend signals" for 2026.

## 2. Creative Phase
- **Tooling:** Trigger `blog-content-writer`.
- **Input:** Research Brief.
- **Workflow:** 
    - Draft a compassion-first headline.
    - Organize the content around "Understanding," "Solutions," and "The Oasis Perspective."
    - Ensure markdown includes frontmatter fields (categorySlug, subCategorySlug, authorSlug).

## 3. Visual & Technical Validation
- **Tooling:** `generate_image`, Manual Frontmatter Check.
- **Action:** Generate one premium, high-quality hero image and save it in the `/public/images/blog/` directory.

## 4. Audit Phase
- **Tooling:** Trigger `blog-quality-reviewer`.
- **Validation Checklist:** 
    - [ ] Scientific evidence accuracy.
    - [ ] Compassionate brand tone.
    - [ ] Proper Astro content loader schema.
    - [ ] Valid link structure (YEAR/MONTH/SLUG).

## 5. Deployment Readiness
- **IF ALL PASS:** Mark article as "ready" and trigger a final walkthrough for the user.
- **IF FAIL:** Trigger a "Revision Loop" with specific technical/clinical feedback.
