# Content Plans

Versioned, dated content plans produced by the [Semrush → Content Plan Workflow](../SEMRUSH-CONTENT-WORKFLOW.md).

## What's here

- **`BRIEF-TEMPLATE.md`** — reusable per-item content brief. Copy it per cluster.
- **`YYYY-QN-content-plan.md`** — a dated plan: priority table + briefs + dropped-keywords note. One per planning cycle.

## How a plan gets made

1. Export keywords from Semrush (Keyword Magic, Keyword Gap, Organic Research).
2. Run the `keyword-content-planner` skill on the CSVs, or follow [SEMRUSH-CONTENT-WORKFLOW.md](../SEMRUSH-CONTENT-WORKFLOW.md) by hand.
3. Review the generated plan in a PR.
4. Execute: blog items → `/new-blog`; other page types → standard page work.

Raw Semrush CSV exports are **not** committed here — keep them in the scratchpad or outside the repo. Only the resulting plan and briefs belong in version control.
