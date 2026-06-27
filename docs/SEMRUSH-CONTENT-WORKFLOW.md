# Semrush → Content Plan Workflow

A repeatable process for turning Semrush keyword exports into a prioritized content plan and ready-to-write briefs for the Oasis Health Services site. Run it whenever you have a fresh batch of researched/exported keywords (typically quarterly, or when entering a new service line or location).

**Audience:** SEO/marketing, content leads, and the `keyword-content-planner` Claude skill (which automates §2–§6 from a CSV).

**Outcome:** a dated plan in [content-plans/](content-plans/) — a clustered, prioritized table of content opportunities, each with a brief — where blog items feed the `/new-blog` pipeline and non-blog items become page work.

> **Health-content caveat (read first).** This is a YMYL ("Your Money or Your Life") medical site. Keywords only tell you *what* to write; whether it ranks depends on E-E-A-T — author credentials, clinical review, and citations. Every plan must carry the §8 checklist forward into the brief. Do not target symptom/treatment keywords with thin, unreviewed content.

---

## 0. Prerequisites — what to export from Semrush

Pull these three exports and save the raw CSVs (don't hand-edit them — keep originals for re-runs):

| Export | Semrush tool | Gives you |
|---|---|---|
| Seed/topic keywords | Keyword Magic Tool | Volume, intent, KD, CPC, SERP features for terms around a topic |
| Competitive gap | Keyword Gap | Terms competitors rank for and you don't (Missing / Weak / Untapped tabs) |
| Competitor positions | Organic Research → Positions | A competitor's ranking URLs + the keywords driving them |

**Required columns** (rename/normalize to these headers during §1):

`Keyword, Intent, Volume, KD %, CPC, SERP Features, Competitor URL, Current Position`

`Current Position` is your own rank if known (from Position Tracking or Organic Research on your domain) — blank is fine.

---

## 1. Consolidate & clean

1. Merge the three CSVs into one working sheet.
2. **Dedupe** on `Keyword` (keep the row with the most complete data).
3. **Drop out-of-scope rows:** services you don't offer, locations you don't serve, branded competitor terms you can't/shouldn't target, and obvious junk.
4. **Normalize** columns to the headers in §0. Coerce `Volume`, `KD %`, `CPC`, `Current Position` to numbers; lowercase `Intent`.
5. Save as `*-cleaned.csv` alongside the raw exports.

> The `keyword-content-planner` skill does §1 automatically given the raw CSV paths, but still flag anything it drops so nothing is silently lost.

---

## 2. Cluster into topics

One **cluster = one piece of content**. Never one page per keyword.

- Group semantically related terms (Semrush's Keyword Manager "Cluster" feature does this, or group by hand on shared head terms / intent).
- Each cluster gets: a **primary keyword** (highest-value representative term) and a list of **secondary keywords** (the rest of the cluster).
- Name the cluster by its topic, e.g. *"anxiety symptoms"* covers `signs of anxiety`, `what does anxiety feel like`, `physical anxiety symptoms`.

---

## 3. Map each cluster to a page type

Match **intent** to the right surface in the site architecture. This decides who builds it and how.

| Intent signal | Example terms | Page type | Lives in |
|---|---|---|---|
| Informational ("what is / symptoms / how to") | `signs of burnout` | Blog post | [src/content/](../src/content/) → `/new-blog` |
| Commercial / "near me" / high CPC / local pack | `depression therapy near me` | Service or provider page | [src/pages/services/](../src/pages/services/), [src/pages/providers/](../src/pages/providers/) |
| Transactional tool ("test / quiz / screening") | `adhd self test`, `am i depressed quiz` | Self-assessment | [src/pages/assessments/](../src/pages/assessments/) |
| Resource / support ("help center / how to get help") | `how to find a therapist` | Patient resource | [src/pages/resources/](../src/pages/resources/) |
| Campaign / conversion landing | paid or high-intent term | Landing page | [src/pages/lp/](../src/pages/lp/) |

**Blog clusters** must also map to an existing blog category so they fit the taxonomy:

`community-news`, `families-caregivers`, `getting-help`, `life-skills`, `practical-resources`, `understanding-feelings` (see [src/content/categories/](../src/content/categories/)).

> **Lean into differentiation:** the self-assessments and provider directory are high-intent surfaces most competitor blogs lack. Route "test/quiz/screening/near me" intent there, not to a generic blog post.

---

## 4. Prioritize

Score every cluster so you build the highest-leverage content first.

**Priority score** = `Volume × IntentValue ÷ max(KD, 1)`

- `IntentValue`: transactional = 3, commercial = 3, resource = 2, informational = 1.5, navigational = 0.5 (tune to current business goals — e.g. raise commercial when chasing leads).
- Higher score = build sooner.

Then layer three judgment passes on top of the raw score:

1. **Quick wins** — clusters where you (or a comparable page) already rank **positions 5–20** (`Current Position`). A better page can push these to page 1 fast. Promote them.
2. **Difficulty vs. domain strength** — as a smaller domain, favor lower-`KD` long-tail clusters over head terms you can't win yet.
3. **Gap opportunities** — clusters that came from Keyword Gap "Missing/Weak". These are the strategic roadmap even if volume is modest.

Output: the cleaned clusters sorted into **Now / Next / Later** tiers.

---

## 5. Write a brief per cluster

For every **Now**-tier cluster (and Next as capacity allows), produce a brief using the template in [content-plans/BRIEF-TEMPLATE.md](content-plans/BRIEF-TEMPLATE.md). A brief is done when someone could write the page without reopening Semrush. It captures:

- Primary + secondary keywords, intent, and **page type** (§3)
- Working title / H1 and URL slug
- **SERP-derived outline** — open the top-ranking competitor URLs, list the subtopics they *all* cover (table stakes) and what they *miss* (your angle)
- **People Also Ask** questions → FAQ section
- Depth target (word count relative to what ranks)
- Internal links (which existing services/providers/assessment pages to link to and from)
- §8 E-E-A-T requirements (author, clinical reviewer, citation sources)

---

## 6. Assemble the plan

Write the dated plan to [content-plans/](content-plans/) as `YYYY-QN-content-plan.md` (e.g. `2026-Q3-content-plan.md`), containing:

1. A **priority table** — every cluster with score, tier, page type, and target keyword.
2. The **briefs** for Now/Next items (inline or linked).
3. A **dropped-keywords note** — what was removed in §1 and why (so a future run doesn't silently re-drop or miss them).

Commit it in a PR so plans are versioned and reviewable.

---

## 7. Hand off & execute

- **Blog clusters** → run `/new-blog <topic>` (or `/blog-production-workflow`) per brief. The brief *is* the input to `blog-research-specialist`.
- **Service / provider / assessment / resource / landing pages** → standard page work in [src/pages/](../src/pages/); use the `react-specialist` skill for interactive pieces.
- Track each item from brief → draft → published in the plan file.

---

## 8. YMYL / E-E-A-T checklist (carry into every brief)

- [ ] Assigned a credentialed **author** ([src/content/authors/](../src/content/authors/)) appropriate to the topic.
- [ ] Plan for **clinical review** before publish (use `blog-quality-reviewer` for blog items).
- [ ] Every clinical claim cited to a **peer-reviewed / high-authority source** (NIH/PMC, APA, etc.).
- [ ] No diagnostic or treatment guarantees; compassionate, non-alarmist tone.
- [ ] Clear path to real help (CTA to assessment, provider, or Help Center).

---

## 9. Track & measure (after publish)

- Add each target keyword to a Semrush **Position Tracking** project.
- Review movement at 4 / 8 / 12 weeks.
- Flag pages stuck below page 1 for a **refresh** (expand depth, add internal links, update citations) in the next planning cycle.

---

## Appendix — files this workflow produces

| File | Purpose |
|---|---|
| `*-raw.csv` (kept outside repo or in scratchpad) | Original Semrush exports, never edited |
| `*-cleaned.csv` | Normalized, deduped working set (§1) |
| `content-plans/YYYY-QN-content-plan.md` | The committed plan: priority table + briefs (§6) |
| `content-plans/BRIEF-TEMPLATE.md` | Reusable brief template (§5) |

See the `keyword-content-planner` skill ([.claude/skills/keyword-content-planner/SKILL.md](../.claude/skills/keyword-content-planner/SKILL.md)) to automate §1–§6 from a CSV.
