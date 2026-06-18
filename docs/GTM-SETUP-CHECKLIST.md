# GTM Container Build Checklist

A click-by-click checklist to configure a Google Tag Manager container so it forwards this site's events to GA4. Do this **once per environment** (staging container, then production container) — the only difference is the GA4 Measurement ID.

**Prereqs:** the GA4 property + Web data stream exist (you have a `G-XXXXXXX`), and the container's `GTM-XXXXXXX` is set as `PUBLIC_GTM_ID` for that environment. See [ANALYTICS-TRACKING-GUIDE.md](ANALYTICS-TRACKING-GUIDE.md) and [ENVIRONMENTS.md](ENVIRONMENTS.md).

Work inside a **Workspace**; **Submit → Publish** only at the end (§7).

---

## What the code already emits

The site pushes these to `dataLayer` (no further code needed). Your job in GTM is to listen for them and forward to GA4.

| dataLayer `event` | Parameters | Fired when | Source |
|---|---|---|---|
| `generate_lead` | `form_type` (intake/contact/referral/partnership) | a lead form submits | [api/index.ts](../src/api/index.ts) |
| `verify_insurance` | — | insurance verification submits | api/index.ts |
| `helpdesk_request` | — | Help Center request submits | api/index.ts |
| `form_submit` | `form_type` (document_request/emergency_contact/guardian_contact) | an info form submits | api/index.ts |
| `booking_click` | `platform`, `provider` | a provider booking option is clicked | [BookingButton.jsx](../src/components/pages/providers/BookingButton.jsx) |
| `assessment_start` | `screener` | a screener is started | [ScreenerTool.jsx](../src/components/pages/assessments/ScreenerTool.jsx) |
| `assessment_complete` | `screener` | a screener reaches results | ScreenerTool.jsx |

`tel:` / `mailto:` clicks are **not** in code — they're captured by GTM click triggers below. Page views, scrolls, outbound clicks, file downloads, and site search come free from GA4 **Enhanced Measurement**.

---

## 1. Enable Built-in Variables (for the tel/email triggers)

**Variables → Configure** → tick: **Click Element, Click Classes, Click ID, Click Target, Click URL, Click Text**.

## 2. Create User-Defined Variables

**Variables → New** for each:

| Variable name | Type | Configuration |
|---|---|---|
| `GA4_MEASUREMENT_ID` | **Constant** | value = this environment's `G-XXXXXXX` |
| `DLV - form_type` | **Data Layer Variable** | Data Layer Variable Name = `form_type` |
| `DLV - platform` | **Data Layer Variable** | `platform` |
| `DLV - provider` | **Data Layer Variable** | `provider` |
| `DLV - screener` | **Data Layer Variable** | `screener` |

> Using the Constant for the Measurement ID is what lets you copy the container between environments and only swap one value.

## 3. Create the GA4 Configuration tag (page views)

**Tags → New → Google Tag**
- **Tag ID:** `{{GA4_MEASUREMENT_ID}}`
- **Trigger:** **All Pages**
- Name it `GA4 - Configuration`. Save.

## 4. Create the Triggers

**Triggers → New** for each.

**Link-click triggers** (type **Click – Just Links**, *This trigger fires on → Some Link Clicks*):

| Trigger name | Condition |
|---|---|
| `Link - Phone` | `Click URL` **starts with** `tel:` |
| `Link - Email` | `Click URL` **starts with** `mailto:` |

**Custom Event triggers** (type **Custom Event**, *Event name* must match exactly):

| Trigger name | Event name |
|---|---|
| `CE - generate_lead` | `generate_lead` |
| `CE - verify_insurance` | `verify_insurance` |
| `CE - helpdesk_request` | `helpdesk_request` |
| `CE - form_submit` | `form_submit` |
| `CE - booking_click` | `booking_click` |
| `CE - assessment_start` | `assessment_start` |
| `CE - assessment_complete` | `assessment_complete` |

## 5. Create the GA4 Event tags

**Tags → New → Google Analytics: GA4 Event** for each row. Set **Measurement ID / Configuration** to `{{GA4_MEASUREMENT_ID}}` (or select the `GA4 - Configuration` tag if prompted), set the **Event Name**, add **Event Parameters**, and attach the **Trigger**.

| Tag name | Event Name | Event Parameters | Trigger |
|---|---|---|---|
| `GA4 - tel_click` | `tel_click` | — | `Link - Phone` |
| `GA4 - email_click` | `email_click` | — | `Link - Email` |
| `GA4 - generate_lead` | `generate_lead` | `form_type` = `{{DLV - form_type}}` | `CE - generate_lead` |
| `GA4 - verify_insurance` | `verify_insurance` | — | `CE - verify_insurance` |
| `GA4 - helpdesk_request` | `helpdesk_request` | — | `CE - helpdesk_request` |
| `GA4 - form_submit` | `form_submit` | `form_type` = `{{DLV - form_type}}` | `CE - form_submit` |
| `GA4 - booking_click` | `booking_click` | `platform` = `{{DLV - platform}}`, `provider` = `{{DLV - provider}}` | `CE - booking_click` |
| `GA4 - assessment_start` | `assessment_start` | `screener` = `{{DLV - screener}}` | `CE - assessment_start` |
| `GA4 - assessment_complete` | `assessment_complete` | `screener` = `{{DLV - screener}}` | `CE - assessment_complete` |

> **Consent:** leave GTM's built-in Consent Mode behavior on. The site sets consent defaults to *denied* and updates on the user's choice (see [CookieConsent.tsx](../src/components/common/CookieConsent.tsx)), so these tags are automatically held until analytics consent is granted — no per-tag config needed.

## 6. Register the parameters in GA4 (so they're reportable)

In **GA4 → Admin → Custom definitions → Create custom dimension** add event-scoped dimensions for `form_type`, `platform`, `provider`, `screener` (so they appear in reports, not just realtime).

## 7. Submit & Publish

**Submit** (top right) → name the version (e.g. `2026-06 baseline events`) → **Publish**.
Build the **staging** container first, verify (§8), then repeat in **production** (same config, swap `GA4_MEASUREMENT_ID`). You can **Admin → Export Container** from staging and **Import** into prod to avoid re-keying.

## 8. Verify

- **Preview** (Tag Assistant) → open the site → exercise each action and confirm the matching tag fires with the right parameters:
  - submit each form type → `generate_lead` / `verify_insurance` / `helpdesk_request` / `form_submit`
  - click a provider booking option → `booking_click` (check `platform`, `provider`)
  - start & finish a screener → `assessment_start` / `assessment_complete`
  - click a phone number → `tel_click`; click an email link → `email_click`
- **GA4 → DebugView** shows the events live while in Preview.
- **Consent check:** before accepting cookies, tags should be **blocked**; after accepting, they fire.
- **GA4 → Realtime** confirms events land in the correct (staging vs prod) property.

## 9. Mark conversions

**GA4 → Admin → Events** → toggle **Mark as key event** for `generate_lead` and `booking_click` (and optionally `verify_insurance`, `helpdesk_request`).

---

### Quick reference: what to create

- **6 built-in** click variables enabled
- **5 user-defined** variables (`GA4_MEASUREMENT_ID` + 4 DLVs)
- **1 GA4 config** tag + **All Pages**
- **9 triggers** (2 link-click + 7 custom-event)
- **9 GA4 event** tags
- mark **2+ conversions**
