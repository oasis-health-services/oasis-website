# CLAUDE.md

Authoritative guide for working in this repository — for AI agents and humans. This file is the source of truth; deeper detail lives in the linked docs.

## What this is

The **Oasis Health Services** website: a behavioral/mental-health marketing and patient-services site. It serves marketing pages, a provider directory, patient resources, clinical self-assessments, a blog, and multi-step Help Center / intake forms. It is a statically-built site (no application server) deployed via rsync to shared hosting.

## Tech stack

- **Astro 5** — static site generation with partial ("island") hydration; file-based routing.
- **React 18** — interactive UI, mounted as Astro islands.
- **Tailwind CSS 4** — via the `@tailwindcss/vite` plugin. **There is no `tailwind.config` file**; theme tokens live in `@theme` / `:root` inside [src/styles/global.css](src/styles/global.css).
- **Radix UI** primitives + **class-variance-authority** (CVA) for component variants.
- **React Hook Form + Zod** for forms and validation ([src/lib/schema.ts](src/lib/schema.ts)).
- **Zustand** for form/UI state ([src/store/index.ts](src/store/index.ts)).
- **Firebase** (Analytics + App Check) for analytics and form-submission protection.
- **Sharp** for build-time WebP image optimization.
- **Node 24+** required (see `engines` in [package.json](package.json)).

## Commands

```bash
npm run dev          # generate WebP, then astro dev on http://localhost:3000
npm run build        # full pipeline using .env.local (tools/pipeline.js)
npm run build:staging / build:prod   # same pipeline with staging/production env
npm run typecheck    # astro check (TypeScript + Astro diagnostics)
npm run lint         # eslint (flat config; errors block, warnings surface)
npm test             # vitest run (unit tests for src/lib logic)
npm run deploy:staging / deploy:prod # build, then rsync dist/ to the server
```

`npm run build` runs [tools/pipeline.js](tools/pipeline.js): **WebP optimization → `astro build` → SEO/sitemap/robots/llms generation (staging & prod only) → staging basic-auth injection (staging only)**. A plain local `build` does not run the SEO step.

## Architecture in brief

- **Routing** is file-based: every page is a `.astro` file under [src/pages/](src/pages/) (e.g. `src/pages/services/[slug].astro`). There is no client-side router. (`react-router-dom` appears in dependencies but is not the routing mechanism.)
- **`.astro` vs React**: `.astro` files render the static page shell, layout, SEO/meta, and content. Interactive pieces are React components mounted as islands with a `client:*` directive.
- **Hydration policy**: use `client:load` for above-the-fold or immediately-interactive UI (the dominant pattern), and `client:visible` for below-the-fold sections (e.g. FAQ/secondary blocks in the Help Center pages).
- **Data layer**: typed datasets live in `src/lib/*-data.ts` (e.g. the `Provider` interface in [src/lib/providers-data.ts](src/lib/providers-data.ts)) and are imported directly by pages/components. Blog/author/category content lives in [src/content/](src/content/) as Astro content collections.
- **Forms & state**: React Hook Form + Zod schemas, reusable field components in [src/components/forms/](src/components/forms/), shared `useFormStore` in [src/store/index.ts](src/store/index.ts), submission/upload via Firebase in [src/api/](src/api/).

## Conventions cheat-sheet

- Import alias `@/` → `src/` (configured in [tsconfig.json](tsconfig.json)).
- `.tsx` = typed React, `.jsx` = untyped React, `.astro` = pages/layouts.
- **PascalCase** component files; **kebab-case** route, data, and style files; **lowercase** filenames for `ui/` primitives.
- Compose classes with `cn()` from [src/lib/utils.js](src/lib/utils.js); use **CVA** for variant-driven components (see [src/components/ui/button.tsx](src/components/ui/button.tsx)).
- Colors/spacing come from oklch design tokens in [src/styles/global.css](src/styles/global.css) — reference token-backed Tailwind utilities, don't hard-code hex.

## Guardrails

- **Do not add a `tailwind.config.*`** — Tailwind 4 is configured in CSS via `@theme`.
- Keep new interactive UI as React islands inside `.astro` pages; pick the narrowest `client:*` directive that works (`client:visible` over `client:load` for below-the-fold).
- Reuse existing form field components (`ContactFields`, `InsuranceFields`, `SelectField`, etc.) and `src/lib/utils.js` helpers before writing new ones.
- Add Zod validation in [src/lib/schema.ts](src/lib/schema.ts) for any new form input.

## Further reading

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — rendering model, directory map, data/forms/build details.
- [docs/CONVENTIONS.md](docs/CONVENTIONS.md) — naming, components, styling, forms, TS/lint conventions.
- [docs/ENVIRONMENTS.md](docs/ENVIRONMENTS.md) — step-by-step DEV/STAGING/PROD setup: env vars, GitHub Environments, analytics separation, deploys.
- [docs/ANALYTICS-TRACKING-GUIDE.md](docs/ANALYTICS-TRACKING-GUIDE.md) — create GA4 properties + GTM containers (staging/prod), wire `PUBLIC_GTM_ID`, and instrument site events (with Consent Mode v2).
- [docs/GTM-SETUP-CHECKLIST.md](docs/GTM-SETUP-CHECKLIST.md) — click-by-click GTM container build: variables, tel/mailto + custom-event triggers, GA4 event tags, publish & verify.
- [README.md](README.md) — project overview & setup.
- [SEO-IMPLEMENTATION.md](SEO-IMPLEMENTATION.md) — SEO pipeline, sitemaps, schema markup.
- [PULL_REQUEST_PROCESS.md](PULL_REQUEST_PROCESS.md) — branch/PR/release workflow.
- `.agents/` — AI skills & workflows (blog production, React specialist).
