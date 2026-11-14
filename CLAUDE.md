# Portfolio — project brief for Claude

Personal portfolio of Sakshi Shah (full-stack .NET / Angular developer, Ahmedabad). Goal: land a new job in ~6 months.
Live: https://sakshishah-dev.github.io/portfolio/ (GitHub Pages, deployed by .github/workflows/deploy.yml on push to main).

## Rules (never break)
- **₹0 forever**: static site only. No paid APIs, servers, databases, form services or trackers.
- **Client project is under NDA**: never add client name, code, screenshots or internal details. Industry + country only.
- Keep it simple for recruiters; depth is opt-in (X-ray, replay).
- **Branch names**: `main` is the live branch. Work goes on `features/<feature-name>` (e.g. `features/time-travel`).
  Never create `claude/...` branches. Merge to `main` only with Sakshi's OK.
- How to work with Sakshi: short overview of why + all steps, then only Step 1 in detail; wait for her result.

## Page (recruiter-first)
Hero (greeting + headline + IdCard on a lanyard) → JobMatch (dark band, `content/match.ts`) → Work → HowIWork →
Experience → Skills → QuickAnswers (screening questions) → Contact. When the hero card is out of view (or on project
pages) `CardDock` shows a corner badge; tapping it opens `CardModal` (card drops in on its lanyard). Theme switch: ThemeToggle. Identity = web developer; SQL is NOT highlighted.

## How it works
- Content: `src/content/{profile,experience,projects,match}.ts` — edit these to change text; one object per project.
- Hash routing (`#/work/<slug>`) because GitHub Pages is static. Vite `base: '/portfolio/'`.
- **Style layers** (for the build replay): `styles/layout.css` (.st-layout), `look.css` (.st-look), `components.css` (.st-comp),
  `motion.css` (.st-motion). Every rule must sit under its layer class. `tokens.css` + `chrome.css` + `xray.css` are always on.
- **Build replay** (`components/BuildReplay.tsx`): stages 0–6 toggle the layer classes on `.app`; stage ≥5 = data loaded.
- **X-ray** (`components/Ui.tsx` `<Xr>`): wraps a section; X-ray on → outline + label, click → `CodePanel` shows the real file
  via `import.meta.glob(..., { query: '?raw' })` in `xray/sources.ts`. Add `data-xr-ignore` to controls inside an Xr.

## Ideas not built yet
Time-travel slider (Playwright screenshots per deploy), "Under the hood" page (Lighthouse CI + test counts), résumé PDF,
optional in-browser AI twin (Transformers.js, no API key).
