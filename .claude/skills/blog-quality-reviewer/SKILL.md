---
name: blog-quality-reviewer
description: Technically validate and clinically fact-check a drafted blog post before publishing. Use when auditing, reviewing, or QA-checking a new or edited blog article for schema, citation, link, and Oasis-style compliance.
---

# Blog Quality Reviewer

Audit a drafted blog post and return a PASS/FAIL verdict with required corrections.

## Validation Checklist

1. **Clinical:** Do the claims match their cited DOI/PMC sources?
2. **Schema:** Does the frontmatter match the schema in `src/content.config.ts`?
3. **Tags:** Does every tag used in the article exist in the `tags` array in `src/content.config.ts`?
4. **Paths:** Is the file in `src/content/blog/[YEAR]/[MONTH]/`?
5. **Links** (use `WebFetch` to confirm):
   - Does each reference link resolve to a valid online resource?
   - Does the title in each reference match the title of the referenced article?
6. **Formatting standards (Oasis style):**
   - **Italics:** uses underscores (`_Nature_`)? FAIL if `*` is used.
   - **Lists:** uses hyphens (`-`) for lists and references? FAIL if `*` is used.
   - **Punctuation/tone:** clinical-to-Oasis transitions are smooth and consistent with the approved tone.

## Output Format

- **Status:** PASS / FAIL
- **Required Changes:** bulleted list of corrections if FAIL.
