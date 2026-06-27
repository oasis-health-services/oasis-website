---
description: Create a new high-authority mental health blog post from a topic.
argument-hint: <topic or keyword>
---

Create a new high-authority, evidence-based mental health blog post for the topic: **$ARGUMENTS**

Run the full pipeline, delegating to the blog skills at each step:

1. **Research** — use the `blog-research-specialist` skill on the topic. Find 2026-relevant data, peer-reviewed studies, and verified clinical citations (DOI/PMC). Produce a research brief.

2. **Featured image** — Claude Code has no native image-generation tool. Source a premium, brand-aligned free-stock image (or ask the user to provide one) and save it under `public/images/blog/YEAR/MONTH/`.

3. **Draft** — use the `blog-content-writer` skill with the research brief. Compassionate, professional tone with a "The Oasis Perspective" section. Write to `src/content/blog/YEAR/MONTH/slug.md` in the existing Astro format.

4. **Audit** — use the `blog-quality-reviewer` skill for a PASS/FAIL audit: schema compliance (`src/content.config.ts`), taxonomy accuracy, link validity, and clinical fact-checking. Fix any FAIL items and re-audit until PASS.

5. **Walkthrough** — save the final file and give the user a short walkthrough of what was created and where.
