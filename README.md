# Oasis Health Services Website

A modern, high-performance website for Oasis Health Services built with **Astro 5**, **React**, and **Tailwind CSS 4**. This project features a hybrid architecture (SSG + Hydration), automated image optimization, and a comprehensive SEO pipeline.

---

## 🏗️ Tech Stack

### Framework & UI
- **Framework**: [Astro 5.x](https://astro.build/) (Static Site Generation with Partial Hydration)
- **UI Framework**: [React 18.2](https://react.dev/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/) (Vite-integrated)
- **Animations**: [Framer Motion 10.16](https://www.framer.com/motion/)
- **Icons**: [Lucide React 0.454](https://lucide.dev/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation

### Infrastructure & Analytics
- **Build Tool**: Vite 7.x (via Astro)
- **Image Processing**: [Sharp](https://sharp.pixelplumbing.com/) (WebP conversion)
- **Analytics**: Google Tag Manager (GTM)
- **Deployment**: Rsync-based deployment to Oasis Health Services servers

---

## 🚀 Key Features

### 🎯 SEO & Analytics
- **Comprehensive Meta Tags**: Optimized title tags, descriptions, Open Graph, and Twitter cards.
- **Automated Metadata**: Post-build generation of `sitemap-0.xml`, `sitemap-index.xml`, `robots.txt`, and `llms.txt`.
- **Schema.org**: Structured data for Organization, Services, and Articles.
- **Static HTML**: Every route is pre-rendered for maximum crawlability.

### 🖼️ Image Optimization
- **WebP Conversion**: Automatic recursive conversion of JPG/PNG assets to WebP during dev and build.
- **High Performance**: Optimized assets served via the `public/images/` directory.

### 🛠️ Help Center & Forms
- **Dynamic Help Center**: Specialized request flows for Prescriptions, Appointments, Medical Records, and Billing.
- **Secure File Upload**: Support for multi-file patient documentation via `FileUploadZone`.
- **Multi-Step Forms**: Structured intake and contact forms with real-time validation.

---

## 📁 Project Structure

```
oasis-website/
├── .github/workflows/       # CI/CD (Manual Deploy, Staging, PR)
├── public/                  # Static assets (images, icons, robots.txt)
├── src/
│   ├── components/          # React & Astro components
│   │   ├── forms/           # Form logic and validation schemas
│   │   ├── ui/              # Reusable Radix UI primitives
│   │   └── pages/           # Page-specific component logic
│   ├── layouts/             # Astro layouts (Base, Landing, Blog)
│   ├── lib/                 # Shared utilities, constants, and API handlers
│   └── pages/               # Astro file-based routing
├── tools/                   # Build pipeline and CLI utilities
│   ├── pipeline.js          # Main build orchestrator
│   ├── build-seo.js         # Post-build SEO/Sitemap generator
│   └── generate-webp.js     # Image optimization utility
├── astro.config.mjs         # Astro & Vite configuration
└── package.json             # Scripts and dependencies
```

---

## 🛠️ Development

### Prerequisites
- **Node.js**: 24.x or higher
- **Package Manager**: npm

### Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   *Note: This automatically triggers recursive image optimization before starting Astro.*

### Available Scripts
- `npm run dev`: Start dev server at `localhost:3000`.
- `npm run build`: Run the full production pipeline (Images → Astro → SEO).
- `npm run typecheck`: Run Astro and TypeScript validation.
- `npm run deploy:staging`: Deploy to the staging environment.
- `npm run deploy:prod`: Deploy to the production environment.

---

## 🏗️ Build & Deployment Process

The project uses a custom pipeline located in `tools/pipeline.js` to ensure production readiness:

1.  **Image Optimization**: All images in `public/images` are verified/converted to WebP.
2.  **Astro Build**: Executes `astro build` to generate the static `dist/` directory.
3.  **SEO Generation**: Post-build generation of sitemaps and AI-friendly discovery files (`llms.txt`).
4.  **Security (Staging)**: Injects basic authentication for non-production environments.

---

## 🤝 Support & Maintenance

- **Lead Developer**: marketingcar.com
- **Internal Docs**: Staff guides for Help Center forms are located in `src/pages/resources/help-center/*-guide.md`.

---
*Built with ❤️ for Oasis Health Services*
