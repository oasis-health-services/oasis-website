---
name: squash-and-merge-prs
description: User wants PRs always merged via squash-and-merge
metadata:
  type: feedback
---

When merging pull requests, always use squash-and-merge (`gh pr merge --squash`), never a merge commit or rebase.

**Why:** Keeps the `main` history linear — one commit per PR. Stated as a standing preference ("always squash and merge changes").

**How to apply:** Use `gh pr merge <#> --squash`. Still only merge when the user asks to merge — this preference governs the *method*, not whether to merge.
