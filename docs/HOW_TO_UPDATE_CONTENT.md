# How to update content

A guide for parish staff. No code knowledge needed; you will work entirely in a browser.

## How to log in

1. Open the live website.
2. Go to `/admin` (e.g. `https://htss.org/admin`).
3. Log in with your Sanity account. The first time, the Rector or whoever set up the site will need to invite you. Ask them to add you as an Editor in `sanity.io/manage`.

You will see a sidebar on the left with sections: Worship, Events, People, Governance, News and notices, Page content blocks, Site settings.

## How content gets to the website

When you click **Publish**, your change is live within a few seconds. There is no separate "push to live" step. If you make a mistake, you can edit it again and publish over the top.

If you want to make a change but not have it appear yet, untick **Publish** and use **Save as draft**. Drafts are not visible to the public.

## How to add an event

1. Click **Events** in the left sidebar.
2. Click the pencil-with-plus icon at the top of the list.
3. Fill in the **Title**, **Date and time** (this also sets when the event appears in the listing), and **Event type** (Concert, Community, Service, Talk, or Other).
4. Write a **Short description** in one or two sentences. This appears on the event card on the listing page.
5. Optionally, write a **Full description** for the event's own page.
6. Upload an **Image**. Landscape, ideally 16:9. **Add Image alt text** below; this is required and describes the image for screen readers. e.g. "Choir in stalls at the Sunday Eucharist".
7. Tick **Photo consent confirmed** once you have checked that everyone identifiable in the photograph has given consent. **Never upload an image of an identifiable child without written parental consent on file.**
8. If the event has tickets, paste the **TicketSource link** under Booking. Otherwise leave blank.
9. Add a **Price** as a string, e.g. "£15" or "Free, donations welcome".
10. Tick **Feature on homepage** to make this event appear in the "This week at Holy Trinity" section.
11. Click **Publish**.

Tip: in the Studio, you can also schedule publication for a future date using the scheduled publishing icon (the clock). Useful if you want an event to go live the moment your bulletin lands in inboxes.

## How to add a staff member

1. Click **People → Staff and clergy** in the sidebar.
2. Click the pencil-with-plus icon.
3. Fill in **Name**, **Role** (e.g. "Director of Music"), and **Display order** (use 1, 2, 3 to set the order on the team page; lower numbers appear first).
4. Upload a **Photo** if available; add **Photo alt text**; tick **Photo consent confirmed**.
5. Write a short **Bio**: keep to 50–120 words. Warm, specific, not CV-style.
6. Optionally, an **Email**.
7. Tick **Clergy member** if appropriate; this affects the card styling on the team page.
8. **Publish**.

## How to refresh PCC membership after the APCM

PCC membership refreshes every year after the Annual Parochial Church Meeting, usually in April or May. **This is a yearly job; put it in your diary.**

1. Click **People → PCC members** in the sidebar.
2. For members who are leaving the PCC: open their entry, click the three-dot menu at the top, choose **Delete**, and confirm. (Or if you want to keep their record, just leave it; only the published ones appear on the Governance page once you remove the publish state. Easier: delete.)
3. For new members: click the pencil-with-plus icon. Fill in **Name**, **Role** (Churchwarden, Treasurer, PCC Secretary, Deanery Synod Representative, Lay Member, or Other), and **Display order** (this controls order within their role grouping). Set **Contact via parish office only** on. Most PCC members do not provide a photo; that is fine.
4. **Publish** each one.

If you need to update the Patron entry, open **Governance → Patron** in the sidebar. There is only one Patron document; you edit the existing one, you don't create a new one. Same for **Site settings**.

## How to write a news post

1. Click **News and notices**.
2. Click the pencil-with-plus icon.
3. Fill in **Title**. The **Slug** auto-fills from the title; you can edit if you want a shorter URL.
4. Set **Published at** to the date you want the post to be dated (defaults to now).
5. Optionally, set the **Author** by linking to an existing Staff member.
6. Write a short **Excerpt** (1–2 sentences for the listing page).
7. Write the **Body** using the rich-text editor. Use the H2 button for major section headings; the website will add decorative dividers automatically.
8. Optionally, upload a **Featured image** with alt text and consent.
9. **Publish**.

## How to update service times

1. Click **Worship → Services** in the sidebar.
2. Click the service you want to edit.
3. Update the **Time** (format: 11am, 6.30pm; lowercase am/pm without a space) or the **Short description**.
4. If a service is seasonal (e.g. Advent carols), tick **Seasonal** and fill in **Seasonal note**.
5. **Publish**.

## How to upload an image with alt text

Anywhere you upload an image, the system will ask for alt text. **Alt text is for people who cannot see the image** — visually impaired visitors using screen readers, or anyone with images turned off. Write what the image shows, briefly and specifically.

Good alt text examples:
- "Choir in stalls during the Sunday Eucharist, viewed from the nave"
- "The Burne-Jones east window in late-morning light"
- "Songs and Soup volunteers serving lunch at the back of the church"

Avoid:
- "Image" (doesn't help anyone)
- "Beautiful church" (subjective; doesn't describe what's there)
- Repeating the image's filename

## How to change the site address, phone, emails, social links

In **Site settings**. Edit the field, click **Publish**. Changes appear on the live site within a few seconds.

## How to update the homepage intro paragraph or other page text

Most pages have their copy in the code itself. The homepage intro is in `src/pages/HomePage.jsx`, for example. If you want to edit page copy without touching code, ask the developer to convert that block to a **Page content block** in Sanity. From then on you can edit it in `/admin` → **Page content blocks**.

## A few rules of thumb for HTSS voice

These come from the HTSS Communications style guide.

- **British English.** Colour, honour, programme, Eucharist, enquire, organisation.
- **No em dashes** (—) anywhere in copy. Use a comma, full stop, semicolon, or joining word instead.
- **Specific over abstract.** "The Burne-Jones east window," not "the stained glass."
- **Vary sentence length.** Use semicolons, colons, and joining words to connect ideas.
- **Avoid AI vocabulary.** No "tapestry," "testament," "vibrant," "delve," "journey," "embark," "steeped in," "rich with," "beckons," "transformative."
- **No tricolons.** Don't write "beauty, reverence, and music." Vary the structure.
- **Confident, brief, cultured.** Short copy is fine. Long copy needs to earn its length.
- **No generic closings.** Skip "All are welcome" and "Come and see." Write the thing.

When in doubt, read the homepage and the What to Expect page. That is the voice.

## If something looks wrong

Refresh the website. If it still looks wrong, take a screenshot, open Claude.ai, paste the screenshot, and describe what you tried to do. You will get a clear answer most of the time.

If something is genuinely broken (a page won't load, you see an error message), copy the error and send it to the developer along with what you were doing when it happened.
