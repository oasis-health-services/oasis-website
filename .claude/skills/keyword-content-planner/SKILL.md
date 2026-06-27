---
name: keyword-content-planner
description: Turn Semrush keyword exports (CSV) into a clustered, prioritized content plan with briefs for the Oasis site. Use when the user has Semrush exports, asks to plan content/blog topics from keywords, do keyword clustering, prioritize content, or build an editorial calendar.
---

# Keyword Content Planner

Convert Semrush keyword export CSVs into a dated, prioritized content plan with ready-to-write briefs, then hand blog items to the `/new-blog` pipeline.

> Full process, scoring details, and rationale: [docs/SEMRUSH-CONTENT-WORKFLOW.md](../../../docs/SEMRUSH-CONTENT-WORKFLOW.md). This skill is the executable short form of that guide (§1–§6).

## Inputs

- One or more Semrush CSV paths (Keyword Magic, Keyword Gap, Organic Research). Ask for them if not provided.
- Optional: business focus for this cycle (e.g. "prioritize lead-gen / a new service line / a location").

## Steps

1. **Clean (§1)** — merge CSVs; dedupe on keyword; drop out-of-scope rows (services not offered, locations not served, irrelevant/branded junk); normalize to columns `Keyword, Intent, Volume, KD %, CPC, SERP Features, Competitor URL, Current Position`. **Report every row dropped and why** — never truncate silently.
2. **Cluster (§2)** — group related terms into topics; one cluster = one content piece, with a primary keyword + secondary keywords.
3. **Map (§3)** — assign each cluster a page type by intent:
   - Informational → **blog** ([src/content/](../../../src/content/)); also map to a category: `community-news`, `families-caregivers`, `getting-help`, `life-skills`, `practical-resources`, `understanding-feelings`.
   - Commercial / "near me" → **service/provider** ([src/pages/services/](../../../src/pages/services/), [src/pages/providers/](../../../src/pages/providers/)).
   - "test/quiz/screening" → **assessment** ([src/pages/assessments/](../../../src/pages/assessments/)).
   - Resource/support → [src/pages/resources/](../../../src/pages/resources/); campaign → [src/pages/lp/](../../../src/pages/lp/).
4. **Prioritize (§4)** — score `Volume × IntentValue ÷ max(KD,1)` (IntentValue: transactional/commercial 3, resource 2, informational 1.5, navigational 0.5). Then surface quick wins (own position 5–20), favor low-KD long-tail for this smaller domain, and flag gap opportunities. Sort into **Now / Next / Later**.
5. **Brief (§5)** — for each Now-tier cluster, fill [docs/content-plans/BRIEF-TEMPLATE.md](../../../docs/content-plans/BRIEF-TEMPLATE.md): keywords, intent, page type, title/slug, SERP-derived outline (open top competitor URLs via `WebFetch`), PAA questions, depth target, internal links, and the §8 E-E-A-T requirements.
6. **Assemble (§6)** — write `docs/content-plans/YYYY-QN-content-plan.md`: priority table + briefs + dropped-keywords note. Use the current date for the filename.

## Output

- A committed plan file in [docs/content-plans/](../../../docs/content-plans/).
- A short summary: counts per tier and page type, the top Now items, and anything dropped.
- For blog items, offer to run `/new-blog <topic>` using the brief as the research input.

## Guardrails

- Health content is YMYL — every plan carries the E-E-A-T checklist (§8) into its briefs. Don't target symptom/treatment terms with thin content.
- Don't invent keyword metrics; use only what's in the CSVs. If data is missing, say so.
- Keep raw export CSVs unedited; write cleaned data to a separate file.
