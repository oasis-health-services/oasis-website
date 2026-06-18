interface ImportMetaEnv {
    readonly STAGING: boolean;
    readonly PROD: boolean;
    readonly PUBLIC_REDIRECT_ON_FAILURE: string;
    /** Google Tag Manager container ID, per environment. Empty = no GTM (e.g. local dev). */
    readonly PUBLIC_GTM_ID?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

interface Window {
    FIREBASE_APPCHECK_DEBUG_TOKEN?: boolean | string;
}

declare var self: Window & typeof globalThis;
