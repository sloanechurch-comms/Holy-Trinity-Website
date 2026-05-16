# Holy Trinity Sloane Square Website

The parish website for [Holy Trinity Sloane Square](https://htss.org). Built with React, Vite, Tailwind, React Router, and Sanity. The Sanity Studio is embedded into the same site at `/admin`, so the day-to-day editing experience is one login away.

## Before you start

Be honest with yourself about the first hour.

The very first setup — installing Node, creating a Sanity project, creating a Vercel project, and wiring them together with environment variables — is a one-time process that takes about an hour. It involves clicking around in three or four web dashboards while also typing two or three short commands. It is much easier to do this with another pair of eyes: either a developer friend, or by walking through `docs/INITIAL_SETUP.md` alongside Claude Code or Claude.ai. After the first hour, everything you do day-to-day happens in the `/admin` page in your browser; you will not need to touch a terminal again.

If something looks wrong, copy the error message and ask Claude for help. The codebase is set up so that almost every part of it is recoverable from the kind of plain-English description Claude can give you.

## What is in this repo

- **Public website** at `/` — service times, events, news, music, the building, governance, giving, and so on.
- **Embedded Sanity Studio** at `/admin` — the dashboard where parish staff add events, edit pages, and update people.
- **Documentation** for everything in `docs/`.
- **One-time setup script** for the sitemap, which runs automatically as part of every build.

## Quick local setup

You need [Node.js 20 or newer](https://nodejs.org). To check, open Terminal and type:

```bash
node --version
```

If you see `v20.x.x` or higher, you are good. Then, from this folder:

```bash
npm install
cp .env.example .env
npm run dev
```

The first command downloads the dependencies. The second copies the example environment file. The third starts the local development server, which will print a URL like `http://localhost:5173`. Open it in your browser.

The site will run with placeholder content until you connect it to a real Sanity project. For the full walkthrough, including the Sanity bit, see `docs/INITIAL_SETUP.md`.

## Where each editable value lives

| What you want to change | Where to change it |
|---|---|
| Service times, events, news, staff, page text | The `/admin` page on the live site (or `http://localhost:5173/admin` locally) |
| Site-wide settings (address, phone, emails, social URLs, MyDona link, Mailchimp embed, GA4 ID) | The `/admin` page → "Site settings" |
| Decorative graphics, fonts, colours | `src/styles/globals.css` and `tailwind.config.js` |
| The list of redirect URLs from the old sloanechurch.org site | `vercel.json` (and the mirrored client-side fallback at `src/data/redirects.js`) |
| Environment variables (Sanity project ID, dataset, GA4 fallback, site URL) | `.env` locally, and the Vercel dashboard for production |

## Available commands

```bash
npm run dev      # Start the local development server
npm run build    # Build the production site (generates sitemap.xml as part of this)
npm run preview  # Serve the production build locally for a final check
npm run lint     # Lint the codebase
npm run format   # Format with Prettier
```

## Documentation

- `docs/INITIAL_SETUP.md` — the one-time setup walkthrough. Read first.
- `docs/HOW_TO_UPDATE_CONTENT.md` — the guide for parish staff. No code knowledge required.
- `docs/HOW_TO_DEPLOY.md` — how the site reaches the world.
- `docs/TROUBLESHOOTING.md` — what to do when something breaks.

## What is intentionally not here

A short list, so future contributors know what was a deliberate choice rather than an oversight.

- **Livestream / video archive.** Not surfaced until HTSS is actually livestreaming.
- **A members-only login area.** The public site only.
- **Multilingual support.**
- **A donation widget that takes payments directly.** Use MyDona via embed and outbound link only.
- **Custom illustrations or AI-generated imagery.** Placeholders are used until real congregation photographs are uploaded.
- **Comments, prayer requests, or any visitor-submitted content.** Out of scope for v1.

## Decisions worth knowing

A few choices that aren't obvious from the code, in case you wonder why something is the way it is.

- **JavaScript, not TypeScript.** Easier to share errors with a non-technical owner and with Claude.
- **Tailwind, not styled-components for non-Studio code.** The owner is fluent in Tailwind from Claude artifacts.
- **Sanity Studio is embedded at `/admin`, not deployed separately.** One URL for staff to remember; one Vercel project to manage. The Studio is lazy-loaded so it doesn't slow down the public site.
- **No em dashes anywhere in the user-facing copy.** Voice-guide rule. Use a comma, full stop, semicolon, or joining word instead.
- **JSX comments use `{/* TODO: ... */}`, never `<!-- HTML comments -->`.** HTML comments inside React would render in the visible page source.
- **Mailchimp double opt-in is required.** Configure this in the Mailchimp audience settings, not in the form code. The form copy tells subscribers about the confirmation email.
- **All third-party embeds (Maps, Mailchimp, MyDona) are gated behind cookie consent.** The cookie banner defaults to "necessary only." Analytics never load until explicitly accepted.
- **Sanity API token in the frontend is read-only.** Write operations only happen inside the Studio, where Sanity handles auth. Never put a write-scoped token in `.env`.

## Known TODOs

Every `TODO` marker in the codebase. Work through these after launch.

### Content (Rosie / Fr Michael)

- `src/pages/worship/WhatToExpectPage.jsx` — closing welcome paragraph from the Rector to revise in his own voice.
- `src/pages/worship/JuniorChurchPage.jsx` — confirm leader name, age range, and term dates with the Rector.
- `src/pages/worship/ConfirmationPage.jsx` — confirm this year's confirmation cohort dates.
- `src/pages/music-events/AboutMusicPage.jsx` — director of music to draft. Confirm organ builder and year.
- `src/pages/music-events/ChoirPage.jsx` — director of music to confirm audition arrangements and chorister scheme.
- `src/pages/community/TeamPage.jsx` — populate team bios via `/admin` once profiles are written.
- `src/pages/community/GovernancePage.jsx` — add Patron via `/admin` → Governance → Patron singleton; populate churchwardens + PCC members after the next APCM.
- `src/pages/community/OutreachPage.jsx` — expand with full list of outreach initiatives and partner organisations.
- `src/pages/community/SchoolPage.jsx` — confirm school name and add link to the school's own site.
- `src/pages/community/NeighbourhoodPage.jsx` — draft a short narrative description of the parish boundaries.
- `src/pages/SafeguardingPage.jsx` — confirm name and contact details of the current parish safeguarding officer.
- `src/pages/visit/PlanVisitPage.jsx` — confirm accessibility detail (hearing loop, large print) with the Rector.
- `src/pages/visit/ArtsCraftsPage.jsx` — review imported draft against current text.
- `src/pages/visit/HistoryPage.jsx` — review imported draft and amend where the historical detail has been improved since.

### Imagery (Rosie)

- Real photographs for the homepage hero (a video loop of the 11am Eucharist), the four pathway tiles, and each long-form Visit page.
- `public/og-default.jpg` (1200×630) — supply final default Open Graph image.
- `public/favicon-16.png`, `public/favicon-32.png`, `public/apple-touch-icon.png` — supply final PNG variants. `public/favicon.svg` is already in place as a temporary mark.
- `public/videos/eucharist-loop.mp4` and `.webm` — a 10-second muted loop of the congregation at the 11am Eucharist. Max 4MB.

### Integrations (Clinton / Rosie)

- `src/components/pageBlocks/NewsletterSignup.jsx` — once Mailchimp embed is provided, paste the embed code into the Site Settings `mailchimpEmbedCode` field in `/admin`. The form will switch over automatically.
- `src/pages/support/GivePage.jsx` — paste the MyDona embed snippet into the marked `<div id="mydona-widget">` block, or supply a `giveUrl` in Site Settings for the fallback button.
- Site Settings → `ga4MeasurementId` — once Google Analytics is set up, paste the measurement ID (`G-XXXXXXXXXX`) into the Site Settings document. Analytics will start working as soon as the user accepts analytics cookies.

### SEO migration (developer)

- `vercel.json` — review the redirects against `sloanechurch.org/sitemap.xml` and add any high-traffic URL that is not already mapped. Anything that does not resolve will fall through to the 404 page, so it is worth doing thoroughly before launch.

## How to get help

If something on the live site looks wrong, take a screenshot.
If something breaks during a build, copy the full error message from the terminal.
In either case, you can paste either of those into Claude.ai or open Claude Code in this folder and ask. Most things are recoverable that way.

For specific human help: Rosie Thompson (Communications Officer), or any developer comfortable with React.
