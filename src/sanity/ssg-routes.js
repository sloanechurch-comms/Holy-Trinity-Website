// Build-time helper used by both scripts/generate-sitemap.js and the SSG
// route enumerator in src/main.jsx. Reads env from process.env so it works
// in plain Node (sitemap script) and in vite-react-ssg's build process.
// All env reads happen inside the function so importing this module from
// client code (where process is undefined) doesn't crash.

export async function fetchDynamicRoutes() {
  const projectId =
    (typeof process !== 'undefined' && process.env && process.env.VITE_SANITY_PROJECT_ID) || '';
  const dataset =
    (typeof process !== 'undefined' && process.env && process.env.VITE_SANITY_DATASET) ||
    'production';
  const apiVersion =
    (typeof process !== 'undefined' && process.env && process.env.VITE_SANITY_API_VERSION) ||
    '2026-05-16';

  if (!projectId || projectId === 'placeholder-project-id') {
    // eslint-disable-next-line no-console
    console.warn('[ssg-routes] Sanity not configured; skipping dynamic routes.');
    return { eventSlugs: [], newsSlugs: [] };
  }

  const query = encodeURIComponent(
    '{"events": *[_type == "event"]{"slug": slug.current}, "news": *[_type == "newsPost"]{"slug": slug.current}}',
  );
  const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;

  try {
    const r = await fetch(url);
    if (!r.ok) {
      // eslint-disable-next-line no-console
      console.warn(`[ssg-routes] Sanity returned ${r.status}; skipping dynamic routes.`);
      return { eventSlugs: [], newsSlugs: [] };
    }
    const json = await r.json();
    const eventSlugs = (json.result?.events || []).map((e) => e.slug).filter(Boolean);
    const newsSlugs = (json.result?.news || []).map((n) => n.slug).filter(Boolean);
    return { eventSlugs, newsSlugs };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('[ssg-routes] Sanity fetch failed; continuing with empty list:', err.message);
    return { eventSlugs: [], newsSlugs: [] };
  }
}
