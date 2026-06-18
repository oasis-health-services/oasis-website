/**
 * Lightweight analytics event helper.
 *
 * Pushes a named event onto the GTM dataLayer. Google Tag Manager (loaded by
 * GoogleTagManager.astro, per-environment via PUBLIC_GTM_ID) picks these up via
 * Custom Event triggers and forwards them to GA4. See docs/ANALYTICS-TRACKING-GUIDE.md.
 *
 * Safe to call anywhere:
 * - On the server (SSR/build) it is a no-op.
 * - In local dev (no GTM container) the push is harmless — nothing consumes it.
 *
 * Privacy: never pass PHI/PII (names, email, phone, DOB, member IDs, health
 * answers/results). Track that an action happened, not its personal content.
 */
type EventParams = Record<string, unknown>;

interface DataLayerWindow extends Window {
    dataLayer?: EventParams[];
}

export function trackEvent(event: string, params: EventParams = {}): void {
    if (typeof window === "undefined") return;
    const w = window as DataLayerWindow;
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event, ...params });
}
