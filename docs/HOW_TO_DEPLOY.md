# How to deploy

The site is hosted on [Vercel](https://vercel.com) and is already live at https://htss-website.vercel.app.

## Two kinds of change, two different stories

- **Content changes** (events, news, staff, page text, site settings): happen entirely in the `/admin` Sanity Studio. They appear on the live site within seconds. **You do not deploy for content changes.** This covers ~99% of what the parish will ever update.

- **Code changes** (anything in `src/`, `package.json`, configuration, design changes): require a code deploy via the Vercel CLI. See below.

## Why we don't use GitHub auto-deploy

In a typical Vercel setup, pushes to GitHub's `main` branch trigger automatic deploys. We intentionally did not set this up for HTSS, because the parish's GitHub org (`sloanechurch-comms`) and the Vercel account that owns this project belong to different identity chains. Connecting them cleanly would mean entangling identities that are better kept separate. Manual CLI deploys are simpler and only happen when code actually changes.

## How a code deploy happens

From the project folder on your computer:

```bash
# Preview deploy (creates a unique URL, doesn't affect production)
vercel

# Production deploy (updates the live site)
vercel --prod
```

That's it. The first time you run this you'll be asked to log in to Vercel (browser flow); after that it remembers you.

Always run a preview deploy first, click around the preview URL, *then* promote to production with `vercel --prod`. Don't push directly to production if you're not certain about the change.

## Setting up Vercel for the first time

The Vercel project is already created and linked. The first time you want to deploy from a new computer:

```bash
# 1. Install the Vercel CLI globally
npm install -g vercel

# 2. Log in (browser flow)
vercel login

# 3. From inside the project folder, link to the existing project
vercel link
# Choose: existing project → htss-website
```

After that, `vercel` and `vercel --prod` will work from your machine.

## Domain configuration

Once you have your final domain (e.g. `htss.org`):

1. In Vercel: Project → Settings → Domains → **Add**.
2. Enter the domain. Vercel will give you DNS records to add at your domain registrar.
3. Add the DNS records at your registrar (usually an A record and/or a CNAME). DNS changes take anywhere from a few minutes to a few hours to propagate.
4. Vercel automatically issues a free SSL certificate so the site is served over HTTPS.

After the domain is live, update:

- `.env` and Vercel environment variables: `VITE_SITE_URL=https://htss.org` (no trailing slash).
- Sanity CORS origins: add `https://htss.org` (sanity.io/manage → API → CORS Origins).

## Environment variables

Set these in Vercel: Project → Settings → Environment Variables. After changing them, redeploy.

| Variable | Production value |
|---|---|
| `VITE_SANITY_PROJECT_ID` | The project ID from sanity.io/manage |
| `VITE_SANITY_DATASET` | `production` |
| `VITE_SANITY_API_VERSION` | A date like `2026-05-16` |
| `VITE_SITE_URL` | `https://htss.org` (or your real production URL) |
| `VITE_GA4_MEASUREMENT_ID` | `G-XXXXXXXXXX` once you have Google Analytics; otherwise leave blank |

## When a deploy fails

This usually means the build script encountered an error. From the Vercel dashboard:

1. Click on the failing deploy.
2. Read the **Build Logs** tab. The error message is usually near the bottom.
3. Copy the error and either:
   - Run `npm run build` locally to reproduce and fix it, or
   - Paste the error into Claude (claude.ai or Claude Code in this folder).

Most build failures are dependency issues, type errors, or import paths. Almost never anything dramatic.

## How to roll back

If a deploy made it to production and broke something:

1. Vercel dashboard → Deployments.
2. Find the last working deployment.
3. Click the three-dot menu → **Promote to Production**.
4. The previous version is live again within seconds.

Then fix the broken commit locally and push a new working version.

## How to do a preview deploy

Useful for showing the Rector a draft of a code change before it goes live.

From the project folder:

```bash
vercel
```

That builds and uploads a preview, then prints a unique URL like `https://htss-website-abc123-rosie-1863s-projects.vercel.app`. Share it with whoever needs to see it. If they approve, promote with:

```bash
vercel --prod
```

This pushes the same build to the production URL.

## Pushing code to GitHub

Code changes should still be committed and pushed to GitHub for version control and history, even though Vercel doesn't deploy from there:

```bash
git add .
git commit -m "Describe the change"
git push origin main
```

Push and deploy are now two separate steps. Get into the habit of doing both, in either order.
