# Analytics & Tracking Guide (GA4 + Google Tag Manager)

A developer's walkthrough for creating the Google Analytics 4 properties and Google Tag Manager containers for **staging** and **production**, wiring them into this project, and tracking the meaningful actions on the website.

**Audience:** a developer with repository access, new to GA4/GTM.
**Companion docs:** [ENVIRONMENTS.md](ENVIRONMENTS.md) (env vars & deploys), [ARCHITECTURE.md](ARCHITECTURE.md), [CLAUDE.md](../CLAUDE.md).

---

## 1. How analytics works in this project

- **Google Tag Manager (GTM) is the only loader.** [GoogleTagManager.astro](../src/components/common/GoogleTagManager.astro) injects the GTM snippet into every page (via the layouts). GA4 is configured **inside** GTM — the app does not call GA4 or `getAnalytics()` directly (Firebase is used only for App Check).
- **The container is per-environment**, chosen by the `PUBLIC_GTM_ID` env var. Empty ⇒ nothing loads (local dev). See [ENVIRONMENTS.md](ENVIRONMENTS.md).
- **You will create, per environment:** one **GA4 property** (with a Web data stream) and one **GTM container**. So: a staging pair and a production pair — never shared.

```
Browser → GTM container (GTM-XXXX) → GA4 Configuration tag (G-XXXX) → GA4 property
                         ↑
          dataLayer.push({...}) events from the site
```

---

## 2. Prerequisites & access

- A Google account that is a member of the Oasis Google Analytics **Account** and Tag Manager **Account** (ask the owner to invite you).
- Roles needed:
  - **GA4:** *Editor* (to create properties/streams and mark conversions) — *Administrator* if you must create the account itself.
  - **GTM:** *Publish* on the container (to create and publish tags).
- Decide naming up front, e.g. GA4 properties `Oasis – Production` / `Oasis – Staging`; GTM containers `oasishealthservices.com` / `dev.oasishealthservices.com`.

---

## 3. Create the GA4 property (do this twice: staging, then prod)

1. Go to https://analytics.google.com → **Admin** (gear, bottom-left).
2. **Create → Property**. Name it (`Oasis – Staging` / `Oasis – Production`), set time zone & currency → **Next** → fill business details → **Create**.
3. Under the new property: **Data Streams → Add stream → Web**.
   - **Staging URL:** `https://dev.oasishealthservices.com`  •  **Prod URL:** `https://oasishealthservices.com`
   - Stream name e.g. `Web – Staging` / `Web – Production`.
4. Copy the **Measurement ID** shown (`G-XXXXXXX`). You'll reference it from GTM.
5. Leave **Enhanced measurement** ON (auto-tracks page views, scrolls, outbound clicks, site search, file downloads) — it covers a lot of the "activity" tracking with zero code.
6. Repeat for the second environment. **You now have two distinct `G-XXXX` IDs.**

> Existing IDs in the repo today: prod `G-ZPEPHFF2BH`, staging `G-X8W86CDC6P`. You can reuse these or create fresh ones — just keep staging and prod separate.

---

## 4. Create the GTM container (twice) and wire it into the repo

1. Go to https://tagmanager.google.com → **Create Container** (or **Admin → Create Container** in the Oasis account).
2. Container name = the site domain; **Target platform = Web** → **Create**.
3. Copy the **Container ID** (`GTM-XXXXXXX`).
4. Wire it into the project (see [ENVIRONMENTS.md](ENVIRONMENTS.md) for the full variable flow):
   - **Local builds:** set `PUBLIC_GTM_ID` in `.env.staging` / `.env.production`.
   - **CI / deploys:** set the `PUBLIC_GTM_ID` **Variable** in the matching **GitHub Environment** (`staging` / `production`).
   - **Local dev:** leave `PUBLIC_GTM_ID` empty in `.env.local` (no tracking).
5. The current production container is **`GTM-MTTSNH5Z`**. Create a **separate** container for staging; do not point staging at the prod container.

---

## 5. Connect GA4 to GTM (pageviews)

In each container:

1. **Tags → New → Tag Configuration → Google Tag** (a.k.a. GA4 Configuration).
2. Enter the matching **Measurement ID** (`G-XXXX` for that environment). Tip: store it as a **Constant** variable (e.g. `GA4_MEASUREMENT_ID`) and reference `{{GA4_MEASUREMENT_ID}}` so tags are environment-portable.
3. **Triggering → All Pages** → Save.
4. **Preview** (top right) → enter the site URL → confirm the tag fires and **GA4 → Reports → Realtime** shows your visit.
5. **Submit → Publish** (see §8).

That alone gives page views + Enhanced Measurement events. Sections 6–7 add the site-specific actions.

---

## 6. Measurement plan — what to track on this site

The site currently pushes **no custom events** (only the container loads). Below is the recommended plan. "Source" notes where the action originates in the codebase.

| Action | Event name | How it's captured | Source |
|---|---|---|---|
| Page view | `page_view` | Automatic (GA4 config tag) | all pages |
| Scroll / outbound click / file download / site search | (Enhanced Measurement) | Automatic in GA4 | — |
| Intake started | `intake_start` | dataLayer push when the multi-step form opens | [StartNowForm.tsx](../src/components/forms/StartNowForm.tsx) |
| Intake step advanced | `intake_step` (param: step) | dataLayer push on next/prev | [MultistepForm.tsx](../src/components/forms/MultistepForm.tsx) |
| **Lead submitted (key conversion)** | `generate_lead` (param: form_type) | dataLayer push on successful submit | [StartNowForm](../src/components/forms/StartNowForm.tsx), [VerifyInsuranceForm](../src/components/forms/VerifyInsuranceForm.tsx), [HelpdeskRequestForm](../src/components/forms/HelpdeskRequestForm.tsx), [ThankYou.jsx](../src/components/pages/ThankYou.jsx) |
| Insurance verification submitted | `verify_insurance` | dataLayer push on submit | [VerifyInsuranceForm.tsx](../src/components/forms/VerifyInsuranceForm.tsx) |
| Help Center request submitted | `helpdesk_request` (param: request_type) | dataLayer push on submit | [HelpdeskRequestForm.tsx](../src/components/forms/HelpdeskRequestForm.tsx) |
| Provider booking click | `booking_click` (param: platform = zocdoc/alma/headway) | dataLayer push on click | [BookingButton.jsx](../src/components/pages/providers/BookingButton.jsx) |
| Phone call click | `tel_click` | GTM Click trigger on `tel:` links | ~20 components |
| Email click | `email_click` | GTM Click trigger on `mailto:` links | ~20 components |
| Assessment started / completed | `assessment_start` / `assessment_complete` (param: screener) | dataLayer push | [ScreenerTool.jsx](../src/components/pages/assessments/ScreenerTool.jsx) |

**Mark as GA4 conversions** (GA4 → Admin → Events → toggle *Mark as key event*): `generate_lead`, `booking_click`, and optionally `verify_insurance` / `helpdesk_request`.

> **Naming conventions:** `snake_case` event names; keep a small, stable set; use parameters (e.g. `form_type`) instead of many one-off event names.

---

## 7. Two ways to instrument events (use both)

### 7a. GTM-only (no code) — for simple clicks
Best for `tel_click`, `email_click`, and generic outbound links.
1. **Variables → Configure** → enable the built-in **Click** variables (Click URL, Click Element, Click Text).
2. **Triggers → New → Click – Just Links**, condition e.g. `Click URL` *starts with* `tel:` → name it `Link – Phone`.
3. **Tags → New → GA4 Event**, Event name `tel_click`, Configuration tag = your GA4 tag, trigger = `Link – Phone`.
4. Repeat with `mailto:` for `email_click`.

### 7b. dataLayer events (code) — for forms, conversions, booking
Async form submits and React-island interactions are unreliable to catch with GTM click triggers, so push explicit events. Add a tiny helper and call it from the components.

**Helper** — `src/lib/analytics.ts` (push is a no-op when GTM isn't loaded, e.g. dev):
```ts
type AnalyticsEvent = Record<string, unknown> & { event: string };

export function trackEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({ event, ...params });
}
```

**Example — provider booking** ([BookingButton.jsx](../src/components/pages/providers/BookingButton.jsx)), on each platform link:
```jsx
<a href={provider.platforms.alma} target="_blank" rel="noopener noreferrer"
   onClick={() => trackEvent("booking_click", { platform: "alma", provider: provider.slug })}>
```

**Example — lead conversion** (fire once on the success/thank-you step):
```jsx
useEffect(() => { trackEvent("generate_lead", { form_type: "intake" }); }, []);
```

**Then in GTM**, surface each event:
1. **Variables → New → Data Layer Variable** for each param (e.g. `dlv.form_type`, `dlv.platform`).
2. **Triggers → New → Custom Event**, Event name = `generate_lead` (must match the push) → name it `CE – generate_lead`.
3. **Tags → New → GA4 Event**, Event name `generate_lead`, add parameters mapping `form_type` → `{{dlv.form_type}}`, trigger = `CE – generate_lead`.

> Whether the helper is implemented now is a separate task — this guide documents the pattern; the snippets are ready to drop in.

---

## 8. Publish & keep environments in sync

1. In GTM, work in a **Workspace**, then **Submit → Publish**; give each version a clear name (e.g. `2026-06 add lead + booking events`).
2. **Staging first:** build and publish in the staging container, verify, then replicate the same tags/triggers/variables in the production container and publish.
3. GTM has an **Import/Export** (Admin → Export/Import Container) you can use to copy a tested config from staging into prod, then swap the GA4 Measurement ID constant.

---

## 9. Testing & verification

- **GTM Preview / Tag Assistant** — connect to the site URL; confirm each tag fires on the expected interaction and reads the right dataLayer values.
- **GA4 DebugView** (Admin → DebugView) — see events in real time while in Preview mode.
- **GA4 Realtime** — confirm page views and conversions land in the correct (staging vs prod) property.
- **Repo check** that the right container ships per environment:
  ```bash
  npm run build      && grep -rl "googletagmanager.com" dist | wc -l   # DEV: expect 0
  npm run build:prod && grep -rl "GTM-MTTSNH5Z" dist | wc -l           # PROD: expect > 0
  ```
- **Per-event QA checklist:** submit each form (see it as `generate_lead`), click each booking platform, click a `tel:`/`mailto:` link, complete an assessment — confirm each appears once with correct parameters.

---

## 10. Consent & privacy (healthcare)

This is a behavioral-health site; treat analytics as privacy-sensitive.

- **No PHI/PII in events.** Never put names, emails, phone numbers, DOB, insurance/member IDs, or health details into event names or parameters. Track *that* a form was submitted (`generate_lead`), not *what* was entered.
- **Google Consent Mode v2 is wired up.** [CookieConsent.tsx](../src/components/common/CookieConsent.tsx) stores `{ preferences: { essential, analytics, marketing } }` under `localStorage["oasis-cookie-consent"]`, and tag firing now honors that choice:
  1. **Default = denied** is set *before* GTM loads, and any stored choice is re-applied immediately, in the head snippet of [GoogleTagManager.astro](../src/components/common/GoogleTagManager.astro) (`analytics_storage`/`ad_storage`/`ad_user_data`/`ad_personalization`).
  2. **On choice**, `saveConsent()` calls `gtag('consent','update', …)` mapping `analytics → analytics_storage` and `marketing → ad_*`, so the live page updates without a reload.
  3. In GTM, leave the default **Consent Mode** behavior on; GA4 tags respect these signals automatically. Use **Tag Assistant** to confirm tags are blocked before consent and fire after.
- Link your **Privacy Policy / cookie notice** to what GA4 collects. Consider enabling **IP anonymization**-equivalent settings (GA4 anonymizes IPs by default) and a sensible **data-retention** period (GA4 → Admin → Data Settings → Data Retention).

---

## 11. Troubleshooting & maintenance

| Symptom | Likely cause | Fix |
|---|---|---|
| No data in GA4 | Wrong/empty `PUBLIC_GTM_ID`, or GA4 tag not published | Verify the env Variable; publish the container; check Preview |
| Staging data in prod property | Staging container references the prod `G-XXXX` | Use the staging Measurement ID constant in the staging container |
| Event missing | dataLayer push name ≠ Custom Event trigger name | Match names exactly; check DebugView |
| Events fire but no params | Data Layer Variable not created/mapped | Add `dlv.*` variables and map them on the GA4 Event tag |
| Nothing fires on localhost | Intended — `PUBLIC_GTM_ID` is empty in dev | Use staging to validate end-to-end |
| Tags fire despite "reject" | GA4 tag set to ignore consent, or stored consent stale | Confirm Consent Mode is on for the tag; clear `localStorage["oasis-cookie-consent"]` and retry |

**Ownership:** keep a short note of who administers the GA4 properties and GTM containers, and review the tag list quarterly to prune unused tags and confirm conversions are still marked.
