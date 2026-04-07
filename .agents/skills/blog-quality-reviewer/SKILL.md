---
name: blog-quality-reviewer
description: A skill for performing technical validation and clinical fact-checking on drafted blog posts.
---

## Validation Checklist

1. **Clinical:** Do claims match the cited DOI sources?
2. **Schema:** Does frontmatter match `src/content.config.ts`?
3. **Tags:** Does tag exist in `src/content.config.ts` for every tag used?
4. **Paths:** Is the file destined for `src/content/blog/[YEAR]/[MONTH]/`?
5. **Links:**
   - Does each reference links lead to a valid resource online?
   - Does the title in each reference match the title in the referenced article?
6. **Formatting Standards (Oasis Style):**
   - **Italics:** Does the post use underscores (`_Nature_`) for italics? (FAIL if `*` is used).
   - **Lists:** Does the post use hyphens (`-`) for lists and references? (FAIL if `*` is used).
   - **Punctuation:** Verify that clinical-to-Oasis transitions are smooth and consistent with approved tone.

## Output Format

- **Status:** PASS/FAIL
- **Required Changes:** Bulleted list of corrections if FAIL.
