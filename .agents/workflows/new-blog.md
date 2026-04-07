---
description: Create a new high-authority mental health blog post from a topic.
---

1.  **Initialize Research Phase**:
    - Trigger the `blog-research-specialist` skill with the provided topic.
    - Focus on finding 2026-relevant data, peer-reviewed studies, and clinical citations.

2.  **Generate Featured Image**:
    - Use the `generate_image` tool to create a premium, brand-aligned hero image.
    - Save the image to `public/images/blog/YEAR/MONTH/`.

3.  **Produce Draft**:
    - Trigger the `blog-content-writer` skill using the Research Brief.
    - Ensure the tone is compassionate and professional with an "Oasis Perspective" section.
    - Use the specific Astro format: `src/content/blog/YEAR/MONTH/slug.md`.

4.  **Clinical & Technical Audit**:
    - Trigger the `blog-quality-reviewer` skill for a "PASS" audit.
    - Check for schema compliance, taxonomy accuracy, and clinical fact-checking.

5.  **Final Polish & Walkthrough**:
    - Save the final file and create a walkthrough for the user.
