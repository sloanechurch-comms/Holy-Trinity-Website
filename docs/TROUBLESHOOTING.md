# Troubleshooting

A short list of common problems and what to do about them. If the answer isn't here, copy the error and paste it into Claude.ai with a short description of what you were trying to do.

## "I changed something in /admin but the website doesn't show it"

1. Refresh the browser tab (Cmd-R or Ctrl-R).
2. Make sure you clicked **Publish** (not just **Save as draft**) in the Studio.
3. Wait a few seconds and refresh again. There is sometimes a brief delay while Sanity's CDN catches up.
4. Hard refresh: Cmd-Shift-R on Mac, Ctrl-Shift-R on Windows. This bypasses the browser cache.

If it still doesn't appear, check that you published the document you think you published. Look in **Site settings → Settings overview** or open the relevant document and verify the publish state.

## "The Studio at /admin won't load / says 'Sanity Studio not configured'"

This means the site can't find your Sanity project ID. Two places to check:

- Locally: open `.env` in the project root. Confirm `VITE_SANITY_PROJECT_ID` is set to your real project ID (you can find it on sanity.io/manage). Then **restart `npm run dev`** — env changes don't take effect until you restart the dev server.
- On the live site: in Vercel → Settings → Environment Variables, confirm `VITE_SANITY_PROJECT_ID` is set. Then redeploy.

## "I get a CORS error when opening /admin"

Sanity needs to know your URL is allowed. Open sanity.io/manage → your project → API → CORS Origins. Add:

- `http://localhost:5173` for local development.
- Your production URL (e.g. `https://htss.org`) for the live site.

For both, tick **Allow credentials**.

## "npm install fails"

The two most common reasons:

1. **You don't have Node.js installed, or your version is too old.** Check with `node --version`. You need v20 or higher. If you have it but it's old, [download the latest LTS from nodejs.org](https://nodejs.org).
2. **Permissions issue with the npm cache.** You'll see something like "EACCES" or "cache folder contains root-owned files". Fix: `sudo chown -R $(whoami):staff ~/.npm` (you'll be asked for your computer password).

If neither works, paste the error into Claude.

## "npm run build fails"

Open the error and look for the file mentioned. The most common culprits:

- A typo or broken import in a recent edit. Fix the file, save, run `npm run build` again.
- A missing environment variable. Make sure `.env` has all the required variables (see `.env.example`).
- A peer dependency conflict. If the error mentions `ERESOLVE`, try `npm install --legacy-peer-deps`.

## "The hero video isn't playing"

The video is meant to be at `/public/videos/eucharist-loop.mp4`. If the file isn't there, the site falls back to a poster image. If the poster image isn't there either, it falls back to a styled placeholder.

To add a real video:

1. Save the MP4 (and a WebM version) to `public/videos/`.
2. Keep it under 4MB.
3. Make sure the filename matches what the homepage component expects (`eucharist-loop.mp4` and `eucharist-loop.webm`).

The video is also disabled for visitors who have set "reduce motion" in their operating system, or who are on slow connections. This is intentional.

## "Newsletter signup form doesn't work"

The signup form uses a placeholder submission until Mailchimp is wired up.

- For the simplest setup: paste the Mailchimp **embedded form** HTML into `/admin` → **Site settings → Mailchimp embed code**. Save. The site will switch to that.
- Make sure **double opt-in is enabled** in your Mailchimp audience settings. This is a legal requirement under UK GDPR.

## "Map / Mailchimp form / donation widget shows a 'requires consent' placeholder"

This is by design. These third-party embeds use cookies, so they are gated behind cookie consent. When the visitor accepts marketing/embeds cookies (or "Accept all"), the embed loads automatically.

If you, as an editor, want to see what the visitor sees with the embed loaded, accept all in the cookie banner.

## "I see 'placeholder-project-id' on the page"

The Sanity project ID environment variable isn't set, so the site is falling back to its placeholder. Set `VITE_SANITY_PROJECT_ID` in `.env` (locally) or in Vercel's environment variables (production), then restart/redeploy.

## "Google Analytics isn't tracking visits"

Three things to check:

1. The measurement ID (format `G-XXXXXXXXXX`) is set, either in `/admin` → **Site settings → Google Analytics 4 measurement ID** or in the `VITE_GA4_MEASUREMENT_ID` env var. The Sanity setting takes precedence over the env var.
2. The visitor accepted analytics cookies on the cookie banner. Analytics never loads until they do; that is the law.
3. In Google Analytics itself, your property is set up correctly and you're looking at the right time range.

## "I broke something and want to undo"

For content in Sanity: open the document, click the three-dot menu at the top, choose **History**. You can browse previous versions and restore one.

For code: see `HOW_TO_DEPLOY.md` for how to roll back to a previous deployment in Vercel.

## "How do I find Claude / Claude Code in this folder?"

Open Terminal, navigate to this folder (`cd ~/Documents/htss-website` or wherever you put it), and run `claude`. If you've installed it. If not, head to [claude.ai](https://claude.ai) and paste your problem there.
