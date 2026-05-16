// Map of old sloanechurch.org URLs to new URLs. The 301 redirects are also
// configured at the Vercel platform level via vercel.json so they fire before
// React boots. The client-side fallback here covers the dev environment and
// any URL Vercel routes through index.html.
export const REDIRECTS = {
  '/about-us': '/visit/the-building',
  '/about-us/': '/visit/the-building',
  '/about-us/our-vision': '/',
  '/about-us/our-vision/': '/',
  '/services': '/worship/services',
  '/services/': '/worship/services',
  '/holy-week': '/worship/services',
  '/holy-week/': '/worship/services',
  '/community': '/community/our-team',
  '/community/': '/community/our-team',
  '/holy-trinity-sloane-squire-by-peyton-skipwith-history-and-guide-book':
    '/visit/history',
  '/arts-crafts': '/visit/arts-and-crafts',
  '/arts-crafts/': '/visit/arts-and-crafts',
  '/visiting': '/visit/plan-your-visit',
  '/visiting/': '/visit/plan-your-visit',
  '/contact-us': '/contact',
  '/contact-us/': '/contact',
};
