# AGENTS.md

Welcome to the **AppsMakerDeluxe Studios** portfolio codebase. This document outlines key architecture decisions, standards, workflows, and automated behaviors to guide human developers and AI coding agents.

---

## 1. Project Overview & Tech Stack
- **Studio**: AppsMakerDeluxe Studios (independent German Android app development studio).
- **Core Stack**:
  - **Framework**: Next.js 16 (built & rendered via `vinext` + Vite 8).
  - **Styling**: Tailwind CSS v4 + native CSS in `app/globals.css`.
  - **Deployment**: GitHub Pages from `/docs` directory on branch `main`.
  - **Internationalization**: 12 languages (DE, EN, FR, ES, AR, FA, JA, ZH, IT, PT, RU, TR) with full RTL support.

---

## 2. Hero Section App Showcase & 10-Second Auto-Rotation
The Hero section displays two dynamic, interactive 3D phone mockups (`.phone-back` and `.phone-main`) that link directly to Google Play:

### Architecture & Behavior:
- **Interval Rotation**: The two hero apps rotate every **10 seconds** (`10000ms`) to showcase different apps from the studio portfolio.
- **Dynamic Pool (`HERO_APPS`)**:
  - Derived dynamically from `APPS_META` in `app/page.tsx`.
  - Filters all apps where `category === "phone"` and excludes wide/landscape assets (`!app.tone.includes("wide")`).
  - Starts with `everago` (back) and `daymigo` (main) as the initial render pair for stable SSR and backwards-compatible HTML export.
  - Every 10 seconds, advances to the next pair in the queue and seamlessly wraps around.
- **Auto-Inclusion of New Apps**:
  - **Rule**: Whenever any new app is added to `APPS_META` with `category: "phone"`, it **automatically joins** the hero rotation queue without modifying the hero component code.
- **User Experience & Accessibility**:
  - **Hover Pause**: Hovering over the hero visual container pauses the rotation timer (`onMouseEnter` / `onMouseLeave`) so visitors can comfortably view, inspect, or click the Google Play link without the content swapping underneath them.
  - **Smooth Transitions**: A subtle `.fading` CSS transition (`opacity` and `transform: scale(0.96)`) creates a fluid crossfade between app screenshots.
  - **Reduced Motion**: Respects `prefers-reduced-motion: reduce` by suppressing transitions.
  - **Direct Store Links**: Each mockup retains full interactivity with localized `aria-label` and `alt` attributes.

---

## 3. Checklist for Adding a New App
When adding a new app (e.g. from an external Android project workspace):

1. **Card Asset (787 × 1400 px)**:
   - Create/optimize `public/apps/<app_key>.webp`.
   - Ensure clean phone mockup or feature showcase matching the portfolio style.
2. **Schema Type**:
   - In `app/i18n/types.ts`: Add `<app_key>: AppItemTranslation;` inside `TranslationSchema.apps`.
3. **Localized Translations**:
   - In `app/i18n/translations.ts`: Add translations for `<app_key>` in all 12 supported languages (`name`, `tag`, `description`).
4. **App Metadata**:
   - In `app/page.tsx`: Append entry to `APPS_META`:
     ```ts
     {
       key: "<app_key>" as const,
       image: "/apps/<app_key>.webp",
       url: "https://play.google.com/store/apps/details?id=<package_name>",
       tone: "<color_tone>", // e.g., emerald, cyan, coral, gold, slate, etc.
       category: "phone" as const, // or "wearos" as const
     },
     ```
   - If `category` is `"phone"`, it will automatically be included in the hero rotation!
5. **Test Suite Verification**:
   - In `tests/rendered-html.test.mjs`:
     - Add package ID to `appId` list.
     - Add regex assertion `assert.match(html, /<App Name>/);`.
     - Add `assert.ok(dict.apps.<app_key>.name, ...)` in the 12-language loop.
     - Add `await access(new URL("../public/apps/<app_key>.webp", import.meta.url));`.
6. **Build, Verify & Deploy**:
   - Run tests:
     ```powershell
     $env:PATH = "C:\Users\DrAvE\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;" + $env:PATH
     pnpm run test
     ```
   - Export static build to `docs/`:
     ```powershell
     pnpm run build:pages
     ```
   - Commit changes and push to `origin/main`.
   - Verify live on `https://appsmakerdeluxe.github.io/`.

---

## 4. Critical Build & Deployment Policies
- **GitHub Pages Configuration**:
  - The repository deploys directly from the `/docs` folder on the `main` branch.
  - **DO NOT** create or restore `.github/workflows/deploy.yml` — it causes simultaneous deployment race conditions with GitHub's native Pages deploy.
- **Node Environment**:
  - Always prefix `$env:PATH` with `C:\Users\DrAvE\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;` in PowerShell when running `pnpm`, `npm`, or `node` commands.

## Store screenshot text encoding

Windows PowerShell 5.1 reads UTF-8 .ps1 files without a BOM as the active ANSI code page. Literal German umlauts can therefore become mojibake in rendered PNGs (for example, Fundst<U+00FC>cke becomes Fundst<U+00C3><U+00BC>cke; <U+00FC>, <U+00E4>, and <U+00F6> are misdecoded). The Play API preserves uploaded PNG bytes; the renderer causes this defect. Keep screenshot-renderer source ASCII-only and build diacritics explicitly from Unicode code points (for example [char]0x00FC), or use a verified UTF-8-with-BOM workflow. Reject U+00C3, U+00C2, and U+FFFD in marketing text, regenerate the images, and inspect full-size PNGs before upload; thumbnails can hide encoding defects.
