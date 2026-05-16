#!/usr/bin/env node
// Generates public/sitemap.xml from the known static routes plus optional
// CMS routes if Sanity credentials are present. Excludes /admin, /search,
// and the 404 route. Run automatically by `npm run build`.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const SITE_URL = (process.env.VITE_SITE_URL || 'https://htss.org').replace(/\/$/, '');

const STATIC_ROUTES = [
  '/',
  '/worship/services',
  '/worship/what-to-expect',
  '/worship/junior-church',
  '/worship/life-events',
  '/worship/confirmation',
  '/music-events/about-the-music',
  '/music-events/the-choir',
  '/music-events/events',
  '/music-events/events/archive',
  '/music-events/hire-a-space',
  '/visit/plan-your-visit',
  '/visit/the-building',
  '/visit/arts-and-crafts',
  '/visit/history',
  '/community/our-team',
  '/community/governance',
  '/community/outreach',
  '/community/school',
  '/community/neighbourhood',
  '/support/give',
  '/support/news',
  '/support/stay-connected',
  '/contact',
  '/safeguarding',
  '/privacy',
  '/cookies',
  '/accessibility',
];

async function fetchSanityRoutes() {
  const projectId = process.env.VITE_SANITY_PROJECT_ID;
  const dataset = process.env.VITE_SANITY_DATASET || 'production';
  const apiVersion = process.env.VITE_SANITY_API_VERSION || '2026-05-16';
  if (!projectId || projectId === 'placeholder-project-id') return [];
  const query = encodeURIComponent(
    '{"events": *[_type == "event"]{"slug": slug.current}, "news": *[_type == "newsPost"]{"slug": slug.current}}',
  );
  const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;
  try {
    const r = await fetch(url);
    if (!r.ok) return [];
    const json = await r.json();
    const eventRoutes = (json.result?.events || []).filter((e) => e.slug).map((e) => `/music-events/events/${e.slug}`);
    const newsRoutes = (json.result?.news || []).filter((n) => n.slug).map((n) => `/support/news/${n.slug}`);
    return [...eventRoutes, ...newsRoutes];
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('[sitemap] Sanity fetch failed, continuing with static routes only:', err.message);
    return [];
  }
}

function urlEntry(route) {
  return `  <url>
    <loc>${SITE_URL}${route === '/' ? '' : route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.6'}</priority>
  </url>`;
}

async function main() {
  const sanityRoutes = await fetchSanityRoutes();
  const all = Array.from(new Set([...STATIC_ROUTES, ...sanityRoutes]));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all.map(urlEntry).join('\n')}
</urlset>
`;
  const outPath = path.join(root, 'public', 'sitemap.xml');
  await fs.writeFile(outPath, xml, 'utf8');
  // eslint-disable-next-line no-console
  console.log(`[sitemap] wrote ${all.length} routes to ${path.relative(root, outPath)}`);
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('[sitemap] failed', err);
  process.exit(1);
});
