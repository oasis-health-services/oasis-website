---
name: blog-research-specialist
description: A skill for researching high-authority mental health trends and securing peer-reviewed evidence for clinical content.
---

## Context & Constraints

- **Year:** 2026
- **Authority Sources:** NIH, APA, MDPI, Nature, Cambridge University Press.
- **Recency:** Studies must be within the last 2-3 years.
- **Authority:** All claims must be backed by peer-reviewed research.
- **Objective:** Identify timely topics that resonate with current mental health challenges.

## Phase 1: Research & Trend Analysis

1. **Trend Scoping:** Search for 2026 mental health topics
   - Technology/AI integration and its psychological impact
   - Personalized medicine (Pharmacogenomics/Precision Psychiatry)
   - Workplace wellness and modern burnout (e.g., algorithmic burnout)
   - Neurodiversity and holistic care models
2. **Category Alignment:** Cross-reference and verify topics against categories and subcategories in `src/content/categories/`.
3. **Tag Alignment:** Cross-reference and verify tags against tags array in `src/content.config.ts

## Phase 2: Scientific Grounding (Citations)

1. **Objective**: Back every major clinical claim with peer-reviewed research
2. **Standard**:
   - Use recent studies (ideally within the last 2-3 years)
   - Prioritize high-authority sources:
     - NIH (PubMed/PMC)
     - APA
     - MDPI
     - Nature
     - Cambridge University Press
     - etc
   - Avoid using opinion pieces or non-peer-reviewed sources
3. **Verification**: Use `search_web` to find direct DOI or PMC links for each citation.

## Output Format

- List of 3-5 key findings.
- Direct URLs/Citations for each finding.
- Recommended `categorySlug` and `subCategorySlug`.
- Recommended `tagsSlug` in `tags` array.
