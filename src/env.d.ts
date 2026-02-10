/// <reference types="astro/client" />

interface Window {
    FIREBASE_APPCHECK_DEBUG_TOKEN?: boolean | string;
}

declare var self: Window & typeof globalThis;
