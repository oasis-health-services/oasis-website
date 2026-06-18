# Conventions & Style Guide

Coding conventions observed in this repository. Follow these when adding or changing code so the codebase stays consistent. See [ARCHITECTURE.md](ARCHITECTURE.md) for structure and [CLAUDE.md](../CLAUDE.md) for the quick reference.

## File types & naming

- **`.astro`** — pages and layouts. Page files use **kebab-case** matching the URL (`verify-insurance.astro`, `[slug].astro`).
- **`.tsx`** — typed React components. **`.jsx`** — untyped React components (legacy/simple ones). Prefer `.tsx` for new components.
- **Component files** are **PascalCase** (`StartNowForm.tsx`, `CookieConsent.tsx`), **except** the `ui/` primitives which use **lowercase** filenames (`button.tsx`, `card.tsx`, `select.tsx`).
- **Data files** in `src/lib/` use **kebab-case** (`providers-data.ts`, `insurance-data.ts`).
- **Style files** use **kebab-case** (`global.css`, `blog.css`, `lp.css`).
- Directories are **kebab-case** (`components/forms/`, `resources/help-center/`).

## Imports

- Use the `@/` alias for `src/` (e.g. `import { cn } from "@/lib/utils"`). Configured in [tsconfig.json](../tsconfig.json).

## Components

- Type props with **TypeScript interfaces that extend React types** where applicable, e.g. `interface SocialIconProps extends React.SVGProps<SVGSVGElement>` and `React.ComponentProps<'div'>` (see [src/components/ui/card.tsx](../src/components/ui/card.tsx)).
- Use **generics for reusable field components** with a `Controller` wrapper (see `SelectField`, `RadioGroupField` in [src/components/forms/](../src/components/forms/)).
- `ui/` primitives are small, composable wrappers exported by name (e.g. `export { Card, CardHeader, ... }`).

## Styling

- **Tailwind CSS 4** via the Vite plugin. **There is no `tailwind.config` file** — theme is configured in CSS with `@theme` in [src/styles/global.css](../src/styles/global.css). Do not add a JS/TS Tailwind config.
- **Design tokens** are CSS custom properties in **oklch** color space (`--primary`, `--secondary`, `--muted`, `--accent`, `--border`, `--ring`, `--radius`, `--chart-*`, sidebar tokens), with a `.dark` override block. Use token-backed utilities; avoid hard-coded hex values.
- **Fonts**: `--font-sans` → DM Sans, `--font-serif`/`--font-display` → Playfair Display (from `@fontsource`).
- Merge class names with **`cn()`** from [src/lib/utils.js](../src/lib/utils.js) (`clsx` + `tailwind-merge`).
- Use **class-variance-authority (CVA)** for variant-driven components (see `buttonVariants` in [src/components/ui/button.tsx](../src/components/ui/button.tsx)).
- Page-scoped CSS: `blog.css` for blog pages, `lp.css` for landing pages.

## Forms

- Validate with **Zod** schemas in [src/lib/schema.ts](../src/lib/schema.ts), connected to React Hook Form via `@hookform/resolvers`.
- Reuse the established patterns: `emptyToUndefined` normalization and `superRefine` for cross-field/conditional validation.
- Reuse existing field components (`ContactFields`, `InsuranceFields`, `EmergencyContactForm`, `GuardianContactForm`, `SelectField`, `CheckboxField`, `RadioGroupField`, `FileUploadZone`) rather than re-implementing inputs.
- Display validation messages with the `FieldError` component (`<FieldError error={errors.lead?.firstName} />`).
- Share multi-step state through `useFormStore` ([src/store/index.ts](../src/store/index.ts)).

## Utilities

Reuse helpers in [src/lib/utils.js](../src/lib/utils.js) before adding new ones:

- `cn(...inputs)` — Tailwind class merge.
- `formatPhoneNumber(value)` — US phone formatting.
- `formatPostalCode(value)` — 5- or 9-digit ZIP formatting.
- `formatAddress(address)` — full address string.
- `calculateAge(dob)` / `isMinor(dob)` — age helpers (e.g. for guardian-contact logic).

## TypeScript, linting, tests & tooling

- TS config extends **`astro/tsconfigs/strict`** with `@/*` → `src/*`, `jsx: react-jsx`, `jsxImportSource: react` ([tsconfig.json](../tsconfig.json)).
- Type-check with `npm run typecheck` (`astro check`).
- **ESLint** uses a flat config ([eslint.config.js](../eslint.config.js)): `@eslint/js` + `typescript-eslint` recommended + `react-hooks`, over `.js/.jsx/.ts/.tsx` (`.astro` is covered by `astro check`). Run `npm run lint` (or `npm run lint:fix`). Errors block; warnings (e.g. unused vars, `exhaustive-deps`) are surfaced but non-blocking — fix them as you touch code. There is no Prettier or `.editorconfig` yet; match surrounding formatting.
- **Tests** use **Vitest** ([vitest.config.js](../vitest.config.js)). Co-locate as `*.test.ts`/`*.test.js` next to the code; the `@/` alias works in tests. Run `npm test` (or `npm run test:watch`). Pure logic in `src/lib/` (utils, Zod schemas, assessment data) is the priority for coverage — see [src/lib/utils.test.js](../src/lib/utils.test.js), [src/lib/schema.test.ts](../src/lib/schema.test.ts), [src/lib/assessments/assessments.test.ts](../src/lib/assessments/assessments.test.ts).
- Git hooks live in `.githooks/`; enable them once with `npm run hooks:install`. **pre-commit** runs lint + typecheck; **pre-push** runs tests + build. CI ([.github/workflows/ci-pr.yml](../.github/workflows/ci-pr.yml)) runs all four on PRs into `main`.

## Quick "do / don't"

- ✅ Add interactivity as React islands inside `.astro` pages with the narrowest `client:*` directive.
- ✅ Add new form fields with Zod validation and reuse existing field components.
- ✅ Use oklch design tokens and `cn()` for styling.
- ❌ Don't add a `tailwind.config.*`.
- ❌ Don't hard-code colors that already exist as tokens.
- ❌ Don't introduce a client-side router — routing is file-based in `src/pages/`.
