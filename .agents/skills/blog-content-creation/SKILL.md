---
name: blog-content-creation
description: A workflow for creating high-authority, evidence-based mental health blog articles with scientific citations and proper Astro content integration.
---

# Scientific Blog Content Creation Workflow

This skill documents the rigorous process used to create high-authority, evidence-based blog articles for the Oasis Health Services website. Follow these steps to ensure consistency, clinical accuracy, and technical integrity.

## Phase 1: Research & Trend Analysis
- **Objective**: Identify timely topics that resonate with current mental health challenges.
- **Workflow**:
    1. Search for latest issues in mental health for the current year (e.g., "Mental health trends 2026").
    2. Focus on emerging themes like:
        - Technology/AI integration and its psychological impacts.
        - Personalized medicine (Pharmacogenomics/Precision Psychiatry).
        - Workplace wellness and modern burnout (e.g., algorithmic burnout).
        - Neurodiversity and holistic care models.
    3. Cross-reference trends with existing blog categories in `src/content/categories/`.

## Phase 2: Scientific Grounding (Citations)
- **Objective**: Back every major claim with peer-reviewed research.
- **Standards**:
    - Use recent studies (ideally within the last 2-3 years).
    - Prioritize high-authority sources: **NIH (PubMed/PMC)**, **APA**, **MDPI**, **Nature**, **Cambridge University Press**, etc.
    - **Linking**: Always include direct, clickable URLs to the original study or clinical trial in the references section.
- **Verification**: Use `search_web` to find direct DOI or PMC links for each citation.

## Phase 3: Technical Integration (Astro)
- **Objective**: Ensure articles are correctly indexed for search and navigation.
- **Step 1: Frontmatter Configuration**:
    - Ensure `categorySlug` matches a file in `src/content/categories/`.
    - Ensure `subCategorySlug` matches an entry within that category file.
    - Ensure `authorSlug` matches a file in `src/content/authors/`.
    - Ensure `publishedAt` follows the `YYYY-MM-DD` format.
- **Step 2: Tag Management**:
    - Every tag used in the article's `tags` array **MUST** have a corresponding JSON file in `src/content/tags/`.
    - Always use **lowercase slugs** for tags (e.g., `ai`, not `AI`) to maintain URL consistency.
    - If a tag is new, create its JSON file:
      ```json
      {
          "name": "Tag Name",
          "slug": "tag-slug"
      }
      ```

## Phase 4: Content Creation & Formatting
- **Objective**: Write clear, compassionate, and structured Markdown.
- **Structure**:
    1. **Core Thesis**: Clearly state the article's purpose in the introduction.
    2. **Evidence-Based Sections**: Use H2 and H3 headers to break down complex topics. Include inline citations (e.g., "According to NIH (2025)...").
    3. **Actionable Takeaways**: Provide patients with 2-3 practical strategies.
    4. **Oasis Perspective**: Explain how Oasis Health Services integrates these scientific insights into patient care.
    5. **References Section**: List all cited studies in a formatted list with clickable markdown links.

## Validation Checklist
- [ ] Frontmatter follows the schema in `src/content/config.ts`.
- [ ] Category and Sub-category slugs are verified.
- [ ] All tags have corresponding JSON files in `src/content/tags/`.
- [ ] All scientific citations are linked to original sources.
- [ ] Article is placed in the correct directory: `src/content/blog/[YEAR]/[MONTH]/`.

## Examples
- [Beyond the Screen](file:///Users/johnakinyele/workspaces/obhs/oasis-website/src/content/blog/2026/03/beyond-the-screen-reclaiming-mental-presence-in-an-ai-driven-world.md)
- [The Rise of Precision Psychiatry](file:///Users/johnakinyele/workspaces/obhs/oasis-website/src/content/blog/2026/03/the-rise-of-precision-psychiatry-why-your-dna-might-hold-the-key-to-better-mental-health.md)
