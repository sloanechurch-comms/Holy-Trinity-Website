#!/usr/bin/env node
// Generates public/sitemap.xml and public/robots.txt from VITE_SITE_URL.
// Sitemap includes static routes plus optional CMS routes if Sanity
// credentials are present. Excludes /admin, /search, and the 404 route.
// Run automatically by `npm run build`.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fetchDynamicRoutes } from '../src/sanity/ssg-routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const SITE_URL = (process.env.VITE_SITE_URL || 'https://sloanechurch.org').replace(/\/$/, '');

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
  const { eventSlugs, newsSlugs } = await fetchDynamicRoutes();
  return [
    ...eventSlugs.map((s) => `/music-events/events/${s}`),
    ...newsSlugs.map((s) => `/support/news/${s}`),
  ];
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
  const sitemapPath = path.join(root, 'public', 'sitemap.xml');
  await fs.writeFile(sitemapPath, xml, 'utf8');
  // eslint-disable-next-line no-console
  console.log(`[sitemap] wrote ${all.length} routes to ${path.relative(root, sitemapPath)}`);

  const robots = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /admin/

Sitemap: ${SITE_URL}/sitemap.xml
`;
  const robotsPath = path.join(root, 'public', 'robots.txt');
  await fs.writeFile(robotsPath, robots, 'utf8');
  // eslint-disable-next-line no-console
  console.log(`[sitemap] wrote robots.txt with sitemap URL ${SITE_URL}/sitemap.xml`);
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('[sitemap] failed', err);
  process.exit(1);
});
