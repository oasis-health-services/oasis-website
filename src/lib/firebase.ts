import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaEnterpriseProvider, type AppCheck } from "firebase/app-check";

// Page/site analytics is handled by Google Tag Manager (see GoogleTagManager.astro),
// not Firebase Analytics — this avoids double-counting GA4. Firebase here is only
// used for App Check (form-submission protection).
const firebaseConfig = {
    apiKey: import.meta.env.PUBLIC_API_KEY,
    authDomain: import.meta.env.PUBLIC_AUTH_DOMAIN,
    projectId: import.meta.env.PUBLIC_PROJECT_ID,
    storageBucket: import.meta.env.PUBLIC_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.PUBLIC_MESSAGING_SENDER_ID,
    appId: import.meta.env.PUBLIC_APP_ID,
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

let appCheck: AppCheck | null = null;

if (typeof window !== "undefined") {
    if (!import.meta.env.PROD && !import.meta.env.STAGING) {
        // Disable App Check enforcement in local development.
        (self as any).FIREBASE_APPCHECK_DEBUG_TOKEN = true;
    }

    appCheck = initializeAppCheck(app, {
        provider: new ReCaptchaEnterpriseProvider(import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY),
        isTokenAutoRefreshEnabled: true
    });
}

export { app, appCheck };
