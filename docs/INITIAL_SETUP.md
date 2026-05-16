# Initial setup

This is the one-time setup walkthrough for the Holy Trinity Sloane Square website. Read it once, in order, alongside Claude Code or a developer. It takes about an hour.

After this is done, day-to-day content updates happen entirely in the `/admin` page in your browser, with no terminal.

## You will need

- A Mac, a PC, or a Linux machine. The instructions below are written for a Mac running macOS. Most steps are the same on Windows; ask Claude for the Windows equivalent if you get stuck.
- A web browser (Chrome, Safari, or Firefox).
- About an hour, somewhere quiet.
- An email address to use for new accounts. Use your work email if you have one.

## Step 1 — Install Node.js

Node.js is the program that runs the website locally on your computer.

1. Open [nodejs.org](https://nodejs.org).
2. Download the **LTS** version. LTS stands for "long-term support" and is the safer choice.
3. Open the installer file from your downloads, and follow its instructions. Accept the defaults.

To check it installed, open the Terminal app on your Mac (press Command-Space, type "Terminal", press Enter) and type:

```bash
node --version
```

You should see something like `v20.18.0`. If you see `v20.` or higher, Node is installed.

## Step 2 — Get the code onto your computer

If you received the code as a folder, skip to the next step.

If the code is on GitHub:

1. Open [github.com](https://github.com) and sign in (create an account if you don't have one).
2. Go to the repository for the website.
3. Click the green **Code** button, then **Download ZIP**.
4. Unzip the ZIP into a folder somewhere obvious, like `Documents/htss-website`.

## Step 3 — Install the dependencies

In Terminal, navigate to the folder where the code lives. For example:

```bash
cd ~/Documents/htss-website
```

Then run:

```bash
npm install
```

This downloads everything the site needs. It will take a few minutes and print a lot of text. Wait for it to finish.

## Step 4 — Set up Sanity (the content management system)

Sanity is where you will add events, news posts, staff, and so on. It's free for small teams.

1. Open [sanity.io](https://www.sanity.io) and click **Get started**.
2. Sign up with the email you want to use for the parish, or with your Google account.
3. When asked, choose to **create a new project**. Name it something like "Holy Trinity Sloane Square".
4. When asked about the dataset, accept the default name `production`.
5. You will end up at the **Project Dashboard** (sanity.io/manage). Find the **Project ID**: it is a long string of letters and numbers in the URL and on the dashboard. Copy it.

Now, on your computer, in the htss-website folder, you will see a file called `.env.example`. Copy it to a new file called `.env`:

```bash
cp .env.example .env
```

Open the new `.env` file in a text editor (the built-in TextEdit app is fine). Find the line:

```
VITE_SANITY_PROJECT_ID=your-project-id-here
```

Replace `your-project-id-here` with the Project ID you copied. Save the file.

## Step 5 — Add localhost to Sanity's CORS allowlist

Sanity needs to know that your local development environment is allowed to talk to it.

1. Back on [sanity.io/manage](https://www.sanity.io/manage), open your project.
2. Go to **API** → **CORS Origins**.
3. Click **Add CORS Origin**.
4. Origin: `http://localhost:5173`. Tick **Allow credentials**. Save.
5. Later, when you have a live URL, repeat this with your production URL (e.g. `https://htss.org`).

## Step 6 — Run the site locally

In Terminal, from inside the htss-website folder:

```bash
npm run dev
```

Wait a moment, then open [http://localhost:5173](http://localhost:5173) in your browser. You should see the website running locally on your computer.

Now visit [http://localhost:5173/admin](http://localhost:5173/admin). The first time you do this, Sanity will ask you to log in. Use the same account you used to create the project. After logging in, you will see the Studio, the dashboard where you add content.

## Step 7 — Add some initial content

In `/admin`:

1. Open **Site settings** in the left sidebar. Make sure the address, phone, and emails are correct. Save (Sanity calls this "Publish").
2. Open **Worship → Services**. Add the three regular services: 11am Choral Eucharist (Sunday), 6pm Choral Evensong (Sunday), 6.30pm Eucharist (Wednesday). Set the display order so the most important comes first.
3. Open **Events**. Add one upcoming event so you can see how it looks on the events page. Tick the **Photo consent confirmed** box when you upload the image.

Go back to your website tab and refresh the page. Your content should appear.

## Step 8 — Deploy to Vercel

Vercel is where the site will live so the public can see it. It's free for the kind of traffic we expect.

1. Push the code to a new GitHub repository. (If GitHub is new to you, ask Claude or a developer to help with this step; it is genuinely fiddly the first time.)
2. Open [vercel.com](https://vercel.com) and sign in with your GitHub account.
3. Click **Add New → Project**.
4. Find the htss-website repository in the list and click **Import**.
5. Vercel will auto-detect that this is a Vite project. Leave the defaults as they are.
6. Under **Environment Variables**, add the same values you have in your local `.env`:
   - `VITE_SANITY_PROJECT_ID` — your project ID.
   - `VITE_SANITY_DATASET` — `production`.
   - `VITE_SANITY_API_VERSION` — `2026-05-16` (use today's date in this format).
   - `VITE_SITE_URL` — the public URL of the site once it has one.
   - `VITE_GA4_MEASUREMENT_ID` — leave blank for now, fill in once you have Google Analytics set up.
7. Click **Deploy**. Vercel will take a couple of minutes to build the site, then give you a URL.

After deployment, go back to Sanity (sanity.io/manage) and add the Vercel URL to your CORS origins, just like you did with localhost in step 5.

## Step 9 — Mailchimp double opt-in

If the parish is using Mailchimp for the weekly bulletin:

1. Log in to [mailchimp.com](https://mailchimp.com).
2. Open the audience you want subscribers added to.
3. Go to **Audience → Settings → Audience name and defaults**.
4. Make sure **Enable double opt-in** is ticked. This is a legal requirement under UK GDPR.

Then either:

- Copy the embedded signup form code from Mailchimp (**Audience → Signup forms → Embedded forms**) and paste it into `/admin` → **Site settings → Mailchimp embed code**. Save.
- Or, leave it blank and the site will use the built-in form, which uses Mailchimp's API.

## Step 10 — Google Analytics (optional)

When you are ready to track site usage:

1. Open [analytics.google.com](https://analytics.google.com), create an account and a property for the website.
2. Find your **Measurement ID** (format: `G-XXXXXXXXXX`).
3. In `/admin` → **Site settings → Google Analytics 4 measurement ID**, paste the ID. Save.
4. Analytics will load only for visitors who accept analytics cookies on the cookie banner.

## Done

You now have:

- A live website at your Vercel URL.
- A Sanity admin dashboard at `/admin` on that URL, where you can add events, news, and pages.
- The ability to run the site locally for testing changes before they go live.

For day-to-day work, see `HOW_TO_UPDATE_CONTENT.md`.

If anything went wrong, copy the error message and paste it into Claude (claude.ai or Claude Code in this folder). Most setup hiccups are recoverable in a few minutes that way.
