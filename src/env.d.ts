interface ImportMetaEnv {
    readonly STAGING: boolean;
    readonly PROD: boolean;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

interface Window {
    FIREBASE_APPCHECK_DEBUG_TOKEN?: boolean | string;
}

declare var self: Window & typeof globalThis;
