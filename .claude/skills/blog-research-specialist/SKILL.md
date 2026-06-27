---
name: blog-research-specialist
description: Research high-authority mental health trends and secure peer-reviewed evidence for clinical blog content. Use when starting a new blog post, gathering citations, validating a topic, or producing a research brief before writing.
---

# Blog Research Specialist

Produce a research brief that grounds a mental-health blog article in current trends and peer-reviewed evidence.

## Context & Constraints

- **Year:** 2026 (use the current date for recency checks).
- **Authority sources:** NIH (PubMed/PMC), APA, MDPI, Nature, Cambridge University Press, and similar.
- **Recency:** Prefer studies from the last 2–3 years.
- **Rigor:** Every clinical claim must be backed by peer-reviewed research. Avoid opinion pieces and non-peer-reviewed sources.
- **Objective:** Identify timely topics that resonate with current mental-health challenges.

## Phase 1: Research & Trend Analysis

1. **Trend scoping** — use `WebSearch` for current mental-health topics, e.g.:
   - Technology/AI integration and its psychological impact
   - Personalized medicine (pharmacogenomics / precision psychiatry)
   - Workplace wellness and modern burnout (e.g., algorithmic burnout)
   - Neurodiversity and holistic care models
2. **Category alignment** — cross-reference candidate topics against the category files in `src/content/categories/`.
3. **Tag alignment** — cross-reference candidate tags against the `tags` array in `src/content.config.ts`.

## Phase 2: Scientific Grounding (Citations)

1. Back every major clinical claim with peer-reviewed research.
2. Prefer recent (2–3 year) studies from the high-authority sources above.
3. **Verification:** use `WebSearch` to locate, then `WebFetch` to confirm, a direct DOI or PMC link for each citation. Confirm the link resolves and the title matches the claim.

## Output Format

- 3–5 key findings.
- A direct, verified URL/citation for each finding.
- Recommended `categorySlug` and `subCategorySlug` (must exist in `src/content/categories/`).
- Recommended tag slugs for the `tags` array (lowercase; must exist in or be added to `src/content.config.ts`).
