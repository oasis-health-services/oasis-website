# Environment Setup Guide

Step-by-step instructions to configure the three environments — **DEV**, **STAGING**, and **PROD** — for the Oasis Health Services website. See [ARCHITECTURE.md](ARCHITECTURE.md) for how the build/deploy pipeline works and [CLAUDE.md](../CLAUDE.md) for the project overview.

## The three environments at a glance

| | DEV (local) | STAGING | PROD |
|---|---|---|---|
| **Runs where** | `localhost:3000` | `dev.oasishealthservices.com` | `oasishealthservices.com` |
| **Config source** | `.env.local` | GitHub Environment `staging` + `.env.staging` (local deploys) | GitHub Environment `production` + `.env.production` (local deploys) |
| **Build command** | `npm run dev` / `npm run build` | `npm run build:staging` | `npm run build:prod` |
| **NODE_ENV** | `development` | `staging` | `production` |
| **SEO files generated** (sitemaps/robots/llms) | ❌ no | ✅ yes | ✅ yes |
| **Basic auth** (htpasswd) | ❌ no | ✅ yes | ❌ no |
| **Analytics (GTM)** | ❌ off (empty `PUBLIC_GTM_ID`) | dedicated staging container (or off) | prod container `GTM-MTTSNH5Z` |
| **Firebase project** | should be a dev/emulator project | `vpm-test-ecc3d` | `vpm-23832` |

> **Golden rule:** every environment points at its **own** GTM container, GA4 property, and Firebase project. Never let DEV or STAGING write to the PROD destinations.

---

## How configuration flows

- **Local builds/dev** read a dotenv file via Node's `--env-file`: `npm run dev`/`build` → `.env.local`, `build:staging` → `.env.staging`, `build:prod` → `.env.production`. These files are **gitignored** — they live only on your machine.
- **CI / automated deploys** do **not** use those files. The GitHub Actions workflows write a fresh env file from **GitHub Environment Variables and Secrets**:
  - [.github/workflows/ci-pr.yml](../.github/workflows/ci-pr.yml) — runs on every PR into `main` (lint, typecheck, test, production build).
  - [.github/workflows/manual-deploy.yml](../.github/workflows/manual-deploy.yml) — `workflow_dispatch` that builds from `main` and rsyncs to the chosen environment's server.

So each value must be set in **two places** if you both build locally and deploy via CI: the local `.env.*` file **and** the matching GitHub Environment.

---

## Variable reference

`PUBLIC_*` values are compiled into the client bundle (not secret in the runtime sense), but API keys are still stored as **GitHub Secrets** to keep them out of logs. Everything else is a **GitHub Variable**.

| Name | Purpose | CI storage | Per-env? |
|---|---|---|---|
| `PUBLIC_SITE_URL` | Canonical site URL (used for SEO/sitemaps) | Variable | ✅ |
| `PUBLIC_GTM_ID` | Google Tag Manager container ID (empty = no analytics) | Variable | ✅ |
| `PUBLIC_MEASUREMENT_ID` | GA4 measurement ID (now informational; GA4 is loaded via GTM) | Variable | ✅ |
| `PUBLIC_PROJECT_ID` | Firebase project ID | Variable | ✅ |
| `PUBLIC_AUTH_DOMAIN` | Firebase auth domain | Variable | ✅ |
| `PUBLIC_DATABASE_URL` | Firebase RTDB URL | Variable | ✅ |
| `PUBLIC_STORAGE_BUCKET` | Firebase storage bucket | Variable | ✅ |
| `PUBLIC_MESSAGING_SENDER_ID` | Firebase messaging sender ID | Variable | ✅ |
| `PUBLIC_APP_ID` | Firebase app ID | **Secret** | ✅ |
| `PUBLIC_API_KEY` | Firebase web API key | **Secret** | ✅ |
| `PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA Enterprise key for App Check | **Secret** | ✅ |
| `PUBLIC_API_URL` | Backend portal API base URL | Variable | ✅ |
| `REMOTE_SERVER_PATH` | Absolute server path (used by staging basic-auth htpasswd) | Variable | ✅ |
| `SSH_HOST` | Deploy SSH host | Variable | ✅ |
| `SSH_PORT` | Deploy SSH port | Variable | ✅ |
| `SSH_USER` | Deploy SSH user | Variable | ✅ |
| `SSH_PATH` | Deploy target directory on the server | Variable | ✅ |
| `SSH_PRIVATE_KEY` | Deploy SSH private key | **Secret** | shared |
| `PUBLIC_REDIRECT_ON_FAILURE` | Client behavior flag | local `.env.*` | ✅ |
| `STAGING_USER` / `STAGING_PASS` | Staging basic-auth credentials (default `admin` / `oasis#2026!`) | local `.env.staging` | staging only |

> `NODE_ENV`, `PUBLIC_STAGING`, and `PUBLIC_PROD` are derived by the build (the workflow sets `NODE_ENV`; [astro.config.mjs](../astro.config.mjs) maps it to `import.meta.env.STAGING`/`PROD`). You don't set these as GitHub Variables.

---

## 1. DEV (local) setup

1. Install prerequisites: **Node 24+** and npm.
2. Install dependencies and enable the git hooks (lint/typecheck on commit, test/build on push):
   ```bash
   npm install
   npm run hooks:install
   ```
3. Create `.env.local` in the repo root. **Do not point it at production destinations.** Recommended dev values:
   ```bash
   PUBLIC_WEBSITE_URL=http://localhost:3000
   PUBLIC_SITE_URL=http://localhost:3000

   # Firebase — use a dev/emulator project, NOT vpm-23832 (prod)
   PUBLIC_API_KEY=<dev firebase web api key>
   PUBLIC_AUTH_DOMAIN=<dev>.firebaseapp.com
   PUBLIC_DATABASE_URL=https://<dev>-default-rtdb.firebaseio.com
   PUBLIC_PROJECT_ID=<dev project id>
   PUBLIC_STORAGE_BUCKET=<dev>.appspot.com
   PUBLIC_MESSAGING_SENDER_ID=<dev sender id>
   PUBLIC_APP_ID=<dev app id>

   # Analytics OFF on local dev
   PUBLIC_GTM_ID=
   PUBLIC_MEASUREMENT_ID=

   PUBLIC_RECAPTCHA_SITE_KEY=<dev recaptcha key>
   PUBLIC_API_URL=<local or dev backend url>
   NODE_ENV=DEVELOPMENT
   PUBLIC_REDIRECT_ON_FAILURE=false
   ```
4. Run it:
   ```bash
   npm run dev      # http://localhost:3000
   ```
5. Because `PUBLIC_GTM_ID` is empty and `firebase.ts` only initializes App Check (with a debug token in dev), **no analytics are sent**. App Check uses a debug token locally — register it in the Firebase console if you need form submissions to pass App Check.

**Verify dev emits no analytics:**
```bash
npm run build                       # builds with .env.local
grep -rl "googletagmanager.com" dist | wc -l   # expect 0
```

---

## 2. STAGING setup

Staging mirrors production but on `dev.oasishealthservices.com`, behind HTTP basic auth, with its **own** isolated services.

### a. Provision the cloud services (one-time)
1. **Firebase project**: use the existing staging project `vpm-test-ecc3d` (or create one). Add a Web App to get its config values.
2. **reCAPTCHA Enterprise**: create/confirm a key registered for `dev.oasishealthservices.com`; enable it for Firebase App Check.
3. **GA4 + GTM (optional but recommended):** create a **dedicated staging GTM container** and a staging GA4 property, and add the GA4 config tag inside that container. **Do not reuse the prod container `GTM-MTTSNH5Z`.** If you don't want staging analytics yet, leave `PUBLIC_GTM_ID` empty.

### b. Local `.env.staging` (for `npm run build:staging` / `deploy:staging`)
```bash
PUBLIC_WEBSITE_URL=https://dev.oasishealthservices.com
PUBLIC_SITE_URL=https://dev.oasishealthservices.com
PUBLIC_API_KEY=<staging firebase web api key>
PUBLIC_AUTH_DOMAIN=vpm-test-ecc3d.firebaseapp.com
PUBLIC_DATABASE_URL=<staging rtdb url>
PUBLIC_PROJECT_ID=vpm-test-ecc3d
PUBLIC_STORAGE_BUCKET=vpm-test-ecc3d.firebasestorage.app
PUBLIC_MESSAGING_SENDER_ID=<staging sender id>
PUBLIC_APP_ID=<staging app id>
PUBLIC_MEASUREMENT_ID=<staging GA4 id or blank>
PUBLIC_GTM_ID=                      # set to a dedicated STAGING container, or leave empty
PUBLIC_RECAPTCHA_SITE_KEY=<staging recaptcha key>
PUBLIC_API_URL=<staging backend url>
PUBLIC_STAGING=true
NODE_ENV=staging
STAGING_USER=<choose a username>
STAGING_PASS=<choose a strong password>
REMOTE_SERVER_PATH=/home/<user>/domains/dev.oasishealthservices.com/public_html
SSH_PATH=~/domains/dev.oasishealthservices.com/public_html/
PUBLIC_REDIRECT_ON_FAILURE=false
```
The staging build runs [tools/setup-staging-auth.js](../tools/setup-staging-auth.js), which generates a bcrypt `.htpasswd` and prepends a basic-auth block to `.htaccess`. Set `STAGING_USER`/`STAGING_PASS` to override the insecure built-in defaults (`admin` / `oasis#2026!`).

### c. GitHub Environment `staging` (for automated deploys)
In **GitHub → Settings → Environments → `staging`** add:
- **Variables**: `PUBLIC_SITE_URL`, `PUBLIC_GTM_ID`, `PUBLIC_MEASUREMENT_ID`, `PUBLIC_PROJECT_ID`, `PUBLIC_AUTH_DOMAIN`, `PUBLIC_DATABASE_URL`, `PUBLIC_STORAGE_BUCKET`, `PUBLIC_MESSAGING_SENDER_ID`, `PUBLIC_API_URL`, `REMOTE_SERVER_PATH`, `SSH_HOST`, `SSH_PORT`, `SSH_USER`, `SSH_PATH`.
- **Secrets**: `PUBLIC_API_KEY`, `PUBLIC_APP_ID`, `PUBLIC_RECAPTCHA_SITE_KEY`, `SSH_PRIVATE_KEY`.

### d. Deploy to staging
- **From GitHub:** Actions → **Manual Deploy** → Run workflow → choose **staging**.
- **From your machine:** `npm run deploy:staging` (use `deploy:staging-test` for an rsync dry run first).

---

## 3. PRODUCTION setup

Same shape as staging, pointed at the production project `vpm-23832`, the prod GTM container, and `oasishealthservices.com`. No basic auth.

### a. Provision (one-time)
- Firebase project `vpm-23832` (Web App config).
- reCAPTCHA Enterprise key registered for `oasishealthservices.com`, enabled for App Check.
- GA4 production property + GTM container **`GTM-MTTSNH5Z`** with the GA4 config tag inside it.

### b. Local `.env.production` (for `npm run build:prod` / `deploy:prod`)
```bash
PUBLIC_WEBSITE_URL=https://oasishealthservices.com
PUBLIC_SITE_URL=https://oasishealthservices.com
PUBLIC_API_KEY=<prod firebase web api key>
PUBLIC_AUTH_DOMAIN=vpm-23832.firebaseapp.com
PUBLIC_DATABASE_URL=https://vpm-23832-default-rtdb.firebaseio.com
PUBLIC_PROJECT_ID=vpm-23832
PUBLIC_STORAGE_BUCKET=vpm-23832.appspot.com
PUBLIC_MESSAGING_SENDER_ID=<prod sender id>
PUBLIC_APP_ID=<prod app id>
PUBLIC_MEASUREMENT_ID=G-ZPEPHFF2BH
PUBLIC_GTM_ID=GTM-MTTSNH5Z
PUBLIC_RECAPTCHA_SITE_KEY=<prod recaptcha key>
PUBLIC_API_URL=<prod backend url>
NODE_ENV=production
REMOTE_SERVER_PATH=/home/<user>/domains/oasishealthservices.com/public_html
SSH_PATH=~/domains/oasishealthservices.com/public_html/
PUBLIC_REDIRECT_ON_FAILURE=true
```

### c. GitHub Environment `production`
In **GitHub → Settings → Environments → `production`** add the same Variables and Secrets as staging, with production values — in particular:
- **`PUBLIC_GTM_ID = GTM-MTTSNH5Z`** ← required, or deployed pages will have no analytics.
- `PUBLIC_PROJECT_ID = vpm-23832`, `PUBLIC_SITE_URL = https://oasishealthservices.com`, etc.

Consider enabling a **required reviewer** on the `production` environment so prod deploys need an approval.

### d. Deploy to production
- **From GitHub:** Actions → **Manual Deploy** → Run workflow → choose **production**.
- **From your machine:** `npm run deploy:prod` (use `deploy:prod-test` for a dry run).

---

## How CI picks an environment

- **PR checks** ([ci-pr.yml](../.github/workflows/ci-pr.yml)): triggered by PRs into `main`. The job selects the `production` GitHub Environment and runs a production build as the gate. (The `staging` branch of that conditional is historical — all PRs now target `main`.)
- **Manual deploy** ([manual-deploy.yml](../.github/workflows/manual-deploy.yml)): you pick `staging` or `production`; it checks out `main`, writes the env file from that environment's Variables/Secrets, builds, and rsyncs to the server via SSH.

---

## Verification checklist

After configuring an environment, confirm separation:

```bash
# DEV — no analytics
npm run build && grep -rl "googletagmanager.com" dist | wc -l        # expect 0

# PROD — prod container present
npm run build:prod && grep -rl "GTM-MTTSNH5Z" dist | wc -l           # expect > 0
```

- In **GA4 Realtime / GTM Preview**, confirm each environment reports into its own property/container.
- Submit a test form per environment and confirm it reaches that environment's backend/Firebase project.
- Hit `dev.oasishealthservices.com` and confirm the basic-auth prompt appears.

---

## Security notes

- **Never commit** `.env`, `.env.local`, `.env.staging`, `.env.production`, or `.env.secret-keys` — they are gitignored; keep it that way.
- Store API keys / SSH keys as **GitHub Secrets**, not Variables.
- Change the staging basic-auth default password (`oasis#2026!`) — set `STAGING_USER`/`STAGING_PASS` and avoid relying on the hardcoded fallback in [setup-staging-auth.js](../tools/setup-staging-auth.js).
- Keep DEV and STAGING off the production GTM container, GA4 property, and Firebase project so test traffic never contaminates production data.
