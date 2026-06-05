# belletriq (BTQ) — landing

Landing site for **belletriq** — a Ukrainian creative community / music label.
Single-page scroll experience (About → Artists → Services → Music) plus standalone pages routed with React Router. At build time each page is prerendered to its own ready-made HTML file (so search engines and link previews see real content, not an empty page).

Live: Firebase Hosting (project `belletriq-eaedc`, default URL `https://belletriq-eaedc.web.app`).

---

## Tech stack

| What | Used for |
|------|----------|
| [React 18](https://react.dev) | UI |
| [Vite 4](https://vitejs.dev) | dev server & build |
| [React Router 6](https://reactrouter.com) | page routing (URLs) |
| [vite-react-ssg](https://github.com/Daydreamer-riri/vite-react-ssg) | prerenders each page to a ready-made HTML file at build time |
| [SCSS Modules](https://sass-lang.com) | styling (`*.module.scss`) |
| [Swiper](https://swiperjs.com) | sliders |
| [react-scrollama](https://github.com/jsonkao/react-scrollama) | scroll-driven home page |
| [EmailJS](https://www.emailjs.com) | contact form |
| [Vitest](https://vitest.dev) | tests (checks the prerendered pages) |
| [Firebase Hosting](https://firebase.google.com/docs/hosting) | production hosting |

---

## Getting started

### Requirements
- [Node.js](https://nodejs.org) **18+** (project is built and tested on Node 22)
- npm (comes with Node)

### 1. Install dependencies
```bash
npm install
```

### 2. Environment variables (optional, only for the contact form)
The contact form uses EmailJS. Copy the example file and fill in the keys:
```bash
cp .env.example .env
```
```
VITE_CONTACT_SERVICE_KEY=...
VITE_CONTACT_TEMPLATE_KEY=...
VITE_CONTACT_SECRET_KEY=...
```
The site runs fine without these — only the contact form needs them.

### 3. Run the dev server
```bash
npm run dev
```
Open **http://localhost:5173** in your browser. The page reloads automatically when you save a file.

---

## Project structure

```
src/
├─ App.jsx              ← all routes (URLs) live here
├─ main.jsx             ← app entry point
├─ pages/               ← one folder per page
│  ├─ AboutPage/        ┐
│  ├─ ArtistsPage/      ├─ sections of the home one-page scroll  ("/")
│  ├─ ServicesPage/     │
│  ├─ MusicPage/        ┘
│  └─ DisantrefactPage/ ← a real standalone page  ("/disantrefact")
├─ layouts/MainLayout/  ← the home page ("/") — stitches the scroll sections together
├─ components/          ← reusable UI (menus, buttons, modals, slider…)
├─ api/                 ← static data (artists, menu links, thumbnails)
├─ assets/              ← images, icons, video
└─ styles/              ← global SCSS (variables, mixins)
```

---

## How routing works

All URLs are declared in **`src/App.jsx`**:

| URL | What shows up |
|-----|----------------|
| `/` | `MainLayout` — the one-page scroll (About → Artists → Services → Music) |
| `/disantrefact` | `DisantrefactPage` — a standalone page |
| anything else | redirects back to `/` |

> **Important:** *About / Artists / Services / Music are **not** separate URLs.* They are scroll sections inside the home page (`/`). A "new page" in React Router terms is a **new URL** of its own — like `/disantrefact`. That's exactly what the guide below walks you through.

> **Good to know:** when the site is built, each of these URLs is turned into its own ready-made HTML file (e.g. `dist/disantrefact/index.html`). That's what makes pages show up correctly in Google and in link previews. You don't have to do anything for this — it happens automatically on every build.

---

## 📄 How to add a new page (no coding experience needed)

> This guide is written so you can follow it without being a developer — just copy the ready-made blocks and change the name. If anything is unclear, copy the step and ask ChatGPT / Claude; there is a ready-to-use prompt at the end.

### First, understand the two kinds of "page"

1. **A section on the home page** (About, Artists, Services, Music). These are **not** separate addresses — you reach them by scrolling inside the single page `/`. Adding one of these is more involved and is **not** what this guide covers.
2. **A real standalone page** with its own address — for example `yoursite.com/merch`. This is what React Router does, and this is what we'll add now. A live example already exists in the project: the `/disantrefact` page.

Below we add the **second kind** — a real page with its own address. For the example we'll call it **merch** (a merch store), and its address will be `/merch`.

### ✏️ Name-replacement rule

Two spellings appear throughout the code below — replace both with your own name:

| In the example | What it is | Replace with |
|----------------|-----------|--------------|
| `Merch` (capitalized) | the page's name in the code | e.g. `Events`, `Shop` — **in Latin letters, capitalized** |
| `merch` (lowercase) | the address in the browser | the same word in **lowercase, no spaces** → becomes `/shop` |

> Use **Latin letters** (English) for names. `MerchPage`, `EventsPage` — good; non-Latin names — no.

---

### Step 1. Create the folder and 3 files

Create the folder `src/pages/MerchPage/` and put **three** files inside.

**File 1 — `src/pages/MerchPage/MerchPage.jsx`** (the page itself — its content goes here):
```jsx
import styles from './MerchPage.module.scss';

export const MerchPage = () => {
  return (
    <section className={styles.container} id="merch">
      <h1>merch</h1>
    </section>
  );
};
```

**File 2 — `src/pages/MerchPage/MerchPage.module.scss`** (the styles — how the page looks):
```scss
.container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

**File 3 — `src/pages/MerchPage/index.js`** (a helper file — its content is always this; just change the name):
```js
export * from './MerchPage';
```

> 💡 The easiest way not to miss anything: open the neighbouring `src/pages/DisantrefactPage/` folder, copy it whole, rename the folder and files, then replace `Disantrefact` → `Merch` and `disantrefact` → `merch` inside.

---

### Step 2. Connect the page to an address

Open **`src/App.jsx`**. Right now it looks like this — a list of pages, where each line ties an **address** (`path`) to a **page** (`element`):

```jsx
import { Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { DisantrefactPage } from './pages/DisantrefactPage';
import { CutmylipsPage } from './pages/CutmylipsPage';

export const routes = [
  { path: '/', element: <MainLayout /> },
  { path: '/disantrefact', element: <DisantrefactPage /> },
  { path: '/cutmylips', element: <CutmylipsPage /> },
  { path: '*', element: <Navigate to="/" replace /> },
];
```

Add **two lines** (marked `// ←`):

```jsx
import { Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { DisantrefactPage } from './pages/DisantrefactPage';
import { CutmylipsPage } from './pages/CutmylipsPage';
import { MerchPage } from './pages/MerchPage';              // ← 1. import the new page

export const routes = [
  { path: '/', element: <MainLayout /> },
  { path: '/disantrefact', element: <DisantrefactPage /> },
  { path: '/cutmylips', element: <CutmylipsPage /> },
  { path: '/merch', element: <MerchPage /> },               // ← 2. give it the address /merch
  { path: '*', element: <Navigate to="/" replace /> },
];
```

> Put your new line **next to the other `{ path: …, element: … }` lines, above the one with `path: '*'`**. That last line with the star is a "catch-all": it sends every unknown address back to the home page, so keep it at the very bottom.
>
> ⚠️ The `// ←` comments are only here to show what changes — **do not put them in the real file**; copy the lines without them.

---

### Step 3. Check that it works

Start (or, if it's already running, leave it running) the dev server:
```bash
npm run dev
```
Open **http://localhost:5173/merch** in your browser — your page with the word "merch" should appear. Done 🎉

---

### Step 4. Publish it to the live site

Save the changes to git and push them to the `master` branch — the site rebuilds and updates **automatically** (via GitHub Actions → Firebase):
```bash
git add .
git commit -m "Add merch page"
git push
```
After a couple of minutes the page will be live at `https://belletriq-eaedc.web.app/merch`.

> Not sure about the git commands? It's perfectly fine to ask ChatGPT / Claude, or whoever set the project up, for help.

---

### 🤖 Tip: do it with AI

You don't have to do it by hand — paste this prompt into ChatGPT or Claude:

> "In my React + Vite project (it uses vite-react-ssg), pages live in `src/pages/`, each one is a folder with three files (`Name.jsx`, `Name.module.scss`, `index.js`), and routes are entries in the exported `routes` array in `src/App.jsx`, each shaped `{ path: '…', element: <…/> }`. Following the same pattern, create a new page called **NAME** with the address **/ADDRESS**, and show me exactly what to add to `App.jsx`. An existing page to copy from is `DisantrefactPage` (`/disantrefact`)."

### Linking the page in the menu

Your new page already opens at its own address. But **it won't appear in the site menu on its own** — the menu here is built separately (file `src/components/SideMenu/SideMenu.jsx`, items come from `src/api/links.js`) and is tailored to the home-page sections. Adding a menu item that points to a real page is a separate step; the easiest path is to ask an AI assistant or a developer, pointing them at those two files.

---

## Deploy

Production deploys **automatically**: every push to `master` triggers the GitHub Actions workflow
[`.github/workflows/firebase-hosting-merge.yml`](.github/workflows/firebase-hosting-merge.yml),
which runs `npm ci`, `npm run build` and deploys `dist/` to Firebase Hosting (project `belletriq-eaedc`).

Direct page URLs (e.g. `/disantrefact`) work in production because the build prerenders every page to its own static file — `npm run build` writes `dist/disantrefact/index.html`, `dist/cutmylips/index.html`, and so on — and Firebase serves those files directly thanks to `cleanUrls` (see `firebase.json`). The `"**"` → `/index.html` rewrite stays only as a fallback for unknown paths (it sends them to the home page, which then redirects).

> EmailJS keys are injected in CI from repository **secrets** (`VITE_CONTACT_*`) — they are not committed to the repo.

---

## Available scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` | start the local dev server (http://localhost:5173) |
| `npm run build` | build the production site into `dist/`, prerendering each page to its own HTML file (via vite-react-ssg) |
| `npm run test` | run the tests — they build the site and check the prerendered pages have the right title, description and link-preview tags (Vitest) |
| `npm run preview` | preview the production build locally |
| `npm run lint` | check the code style with ESLint |
| `npm run deploy` | manual deploy to GitHub Pages (alternative to the automatic Firebase deploy) |
