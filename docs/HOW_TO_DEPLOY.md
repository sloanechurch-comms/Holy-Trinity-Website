# How to deploy

The site is hosted on [Vercel](https://vercel.com). Day-to-day, you do not deploy anything manually: every push to the `main` branch on GitHub triggers an automatic deploy. Every push to a non-main branch creates a preview deployment with its own URL.

## How a deploy happens

1. You (or a developer) push a commit to the `main` branch on GitHub.
2. Vercel notices and starts a build.
3. Vercel runs `npm install`, then `npm run build` (which generates `sitemap.xml` and bundles the site).
4. If the build succeeds, the new version goes live within a couple of minutes.
5. The Vercel dashboard shows the deploy status. You can see the URL of each preview deploy from the Vercel project page.

You do not have to do anything for content changes. **Content changes happen in `/admin` and appear instantly.** Deploys only happen when the code changes.

## Setting up Vercel for the first time

See `docs/INITIAL_SETUP.md`, Step 8.

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

Useful for showing the Rector a draft of a content change before it goes live (or for testing a major code change).

1. Make your changes on a new branch:
   ```bash
   git checkout -b try-new-homepage
   git add .
   git commit -m "Try new homepage hero"
   git push -u origin try-new-homepage
   ```
2. Vercel automatically builds the branch and gives you a preview URL.
3. Share the preview URL with whoever needs to see it.
4. When you're happy, merge the branch into `main`. The merged version goes live automatically.

If you are not comfortable with the git step, ask Claude or a developer to walk you through it. It's a normal part of any web project and is worth getting comfortable with eventually.
