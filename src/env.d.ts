interface ImportMetaEnv {
    readonly STAGING: boolean;
    readonly PROD: boolean;
    readonly PUBLIC_REDIRECT_ON_FAILURE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

interface Window {
    FIREBASE_APPCHECK_DEBUG_TOKEN?: boolean | string;
}

declare var self: Window & typeof globalThis;
