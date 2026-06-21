# SEO Implementation Guide

How SEO works on the Oasis Health Services site. The site is a **statically-built Astro 5** project; all SEO output is produced at build time. This document reflects the current implementation — see [CLAUDE.md](CLAUDE.md) and [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the broader picture.

---

## Where SEO lives

| Concern | Source |
| --- | --- |
| Per-page `<head>` meta (title, description, canonical, OG, Twitter, robots, JSON-LD, favicon, RSS link, theme-color, GTM) | [src/components/common/SeoHead.astro](src/components/common/SeoHead.astro) |
| Structured-data (JSON-LD) builders | [src/utils/schema.ts](src/utils/schema.ts) |
| sitemap, `llms.txt`, `robots.txt` generation | [tools/build-seo.js](tools/build-seo.js) |
| Build orchestration | [tools/pipeline.js](tools/pipeline.js) |
| RSS feed | [src/pages/rss.xml.js](src/pages/rss.xml.js) (via `@astrojs/rss`) |
| Google Tag Manager | [src/components/common/GoogleTagManager.astro](src/components/common/GoogleTagManager.astro) (`PUBLIC_GTM_ID`) |

---

## 1. Meta tags — `SeoHead.astro`

Every layout ([Layout](src/layouts/Layout.astro), [BaseLayout](src/layouts/BaseLayout.astro), [BlogLayout](src/layouts/BlogLayout.astro), [LandingLayout](src/layouts/LandingLayout.astro)) renders a single shared `<SeoHead>` so head tags stay consistent. Pages do **not** import `SeoHead` directly — they pass props to their layout, which forwards them.

`SeoHead` props: `title`, `description`, `keywords?`, `image?`, `type?` (`website` | `article`), `noindex?`, `schema?`.

It emits:
- `<title>`, meta description, canonical URL
- Open Graph + Twitter Card tags (image defaults to `/images/home/home-banner-1.webp`)
- `robots` — `index,follow,max-image-preview:large,...` normally; `noindex,nofollow` when `noindex` is set **or** when building staging (`import.meta.env.STAGING === true`)
- `<link rel="alternate" type="application/rss+xml" href="/rss.xml">`
- Favicon / apple-touch-icon, theme-color
- A single `<script type="application/ld+json">` when a `schema` prop is provided (`JSON.stringify(schema)`)

---

## 2. Structured data — `src/utils/schema.ts`

Helpers return plain JSON-LD objects. A page builds an **array** of them and passes it as `schema=` to its layout (an array renders as one valid JSON-LD block).

| Helper | `@type` | Used on |
| --- | --- | --- |
| `getOrganizationSchema()` | `MedicalClinic` (address, phone, opening hours, `sameAs`) | most marketing pages |
| `getServiceSchema(name, desc)` | `MedicalProcedure` | service pages, LP pages |
| `getFaqSchema(faqs)` | `FAQPage` | service/condition/provider/FAQ/LP pages |
| `getArticleSchema(post)` | `Article` | blog post pages |
| `getBreadcrumbSchema(items)` | `BreadcrumbList` | blog + assessment pages |
| `getProviderSchema(provider)` | `MentalHealthProfessional` | team member pages |
| `getMedicalWebPageSchema(page)` | `MedicalWebPage` (+ `MedicalCondition`) | assessment detail pages |
| `getItemListSchema(items)` | `ItemList` | assessments index |
| `getCollectionPageSchema(page)` | `CollectionPage` (+ `ItemList`) | blog index / category / tag / subcategory |

### Adding schema to a page

```astro
---
import Layout from '@/layouts/Layout.astro';
import { getServiceSchema, getFaqSchema } from '@/utils/schema';

const schema = [
  getServiceSchema('Medication Management', 'Expert psychiatric medication management...'),
  getFaqSchema(faqs),
];
---
<Layout title="Medication Management" description="..." schema={schema}>
  <!-- page content -->
</Layout>
```

Blog article URLs for `ItemList` entries come from `getArticleUrl()` in [src/content.config.ts](src/content.config.ts) — use it rather than re-deriving the `/blog/<year>/<month>/<slug>` path.

---

## 3. Build-time generation — `tools/build-seo.js`

Run as a step of [tools/pipeline.js](tools/pipeline.js). It scans the built `dist/**/*.html` and writes:

- **`sitemap.xml` + `sitemap-index.xml`** — excludes `404`, `/thank-you`, `/sorry`. Higher priority/changefreq for blog index & category/tag pages.
- **`llms.txt`** — categorized index of pages for AI/answer engines.
- **`robots.txt`** — environment-aware:
  - **production** (`NODE_ENV=production`): `User-agent: *`, disallow `/thank-you*` and `/sorry*`, reference `sitemap-index.xml`. AI crawlers are **intentionally allowed** (public content is educational marketing, no PHI; `llms.txt` aids answer-engine visibility).
  - **any other env** (staging/local): `Disallow: /` — keeps non-prod out of the index. Staging also gets basic-auth + `noindex` via the pipeline.

> ⚠️ The SEO generation step only runs for `npm run build:staging` / `npm run build:prod`. A plain local `npm run build` does **not** regenerate sitemap/robots/llms. See `tools/pipeline.js`.

---

## 4. Performance / Core Web Vitals

- Build-time **WebP** optimization (`tools/generate-webp.js`, Sharp).
- Self-hosted fonts (DM Sans + Playfair via `@fontsource`) — no render-blocking Google Fonts.
- Intrinsic `width`/`height` on logo images to avoid CLS.
- Astro ships zero JS by default; interactive pieces hydrate as islands with the narrowest `client:*` directive.

---

## Validation & monitoring

- **Google Search Console** — submit `https://oasishealthservices.com/sitemap-index.xml`; monitor indexing/coverage.
- **Rich Results Test** — https://search.google.com/test/rich-results (validate the JSON-LD types above).
- **PageSpeed Insights** — Core Web Vitals.

Key URLs: `/sitemap-index.xml`, `/robots.txt`, `/llms.txt`, `/rss.xml`.

---

## Still open / next steps

- `geo` coordinates + `priceRange` on the `MedicalClinic` schema (need real values).
- Blog post enrichment: reading time, related posts.
- Confirm GA4 conversion tracking in GTM (see [docs/GTM-SETUP-CHECKLIST.md](docs/GTM-SETUP-CHECKLIST.md) and [docs/ANALYTICS-TRACKING-GUIDE.md](docs/ANALYTICS-TRACKING-GUIDE.md)).
</content>
</invoke>
