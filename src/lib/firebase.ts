import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, type Analytics } from "firebase/analytics";
import { initializeAppCheck, ReCaptchaEnterpriseProvider, type AppCheck } from "firebase/app-check";

const firebaseConfig = {
    apiKey: import.meta.env.PUBLIC_API_KEY,
    authDomain: import.meta.env.PUBLIC_AUTH_DOMAIN,
    projectId: import.meta.env.PUBLIC_PROJECT_ID,
    storageBucket: import.meta.env.PUBLIC_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.PUBLIC_MESSAGING_SENDER_ID,
    appId: import.meta.env.PUBLIC_APP_ID,
    measurementId: import.meta.env.PUBLIC_MEASUREMENT_ID
};

console.log("firebaseConfig project id", firebaseConfig.projectId);
// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

let analytics: Analytics | null = null;
let appCheck: AppCheck | null = null;

if (typeof window !== "undefined") {
    if (!import.meta.env.PROD) {
        // Disable app check in development
        (self as any).FIREBASE_APPCHECK_DEBUG_TOKEN = true;
    }

    analytics = getAnalytics(app);
    appCheck = initializeAppCheck(app, {
        provider: new ReCaptchaEnterpriseProvider(import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY),
        isTokenAutoRefreshEnabled: true
    });
}

export { app, analytics, appCheck };
