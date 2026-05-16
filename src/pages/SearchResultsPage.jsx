import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Meta from '../components/seo/Meta.jsx';
import PageHero from '../components/pageBlocks/PageHero.jsx';
import { useSearch } from '../hooks/useSearch.js';
import { useSanityData } from '../hooks/useSanityData.js';
import { UPCOMING_EVENTS_QUERY, RECENT_NEWS_QUERY } from '../sanity/queries.js';

export default function SearchResultsPage() {
  const [params] = useSearchParams();
  const query = params.get('q') || '';

  const { data: events } = useSanityData(UPCOMING_EVENTS_QUERY, null, { fallback: [] });
  const { data: news } = useSanityData(RECENT_NEWS_QUERY, null, { fallback: [] });

  const extras = useMemo(() => {
    const items = [];
    for (const e of events || []) {
      items.push({
        type: 'event',
        title: e.title,
        href: `/music-events/events/${e.slug}`,
        snippet: e.description,
      });
    }
    for (const n of news || []) {
      items.push({
        type: 'news',
        title: n.title,
        href: `/support/news/${n.slug}`,
        snippet: n.excerpt,
      });
    }
    return items;
  }, [events, news]);

  const { search } = useSearch(extras);
  const results = search(query);

  const grouped = useMemo(() => {
    const out = { page: [], event: [], news: [] };
    for (const r of results) {
      if (out[r.type]) out[r.type].push(r);
    }
    return out;
  }, [results]);

  return (
    <>
      <Meta title={query ? `Search: ${query}` : 'Search'} description="Search Holy Trinity Sloane Square." noindex />
      <PageHero
        eyebrow="Search"
        title={query ? `Results for "${query}"` : 'Search'}
        lede={query ? `${results.length} ${results.length === 1 ? 'result' : 'results'}` : 'Use the search bar at the top of the page, or press the slash key from anywhere.'}
        ornament={false}
      />

      <section className="mx-auto max-w-prose px-4 sm:px-6 lg:px-8 pb-22">
        {query && results.length === 0 && (
          <p className="text-mid">
            No matches. Try a shorter search, or look at the <Link to="/">homepage</Link> for the main sections.
          </p>
        )}
        {grouped.page.length > 0 && (
          <div className="mb-10">
            <h2 className="font-serif text-h2 text-red mb-4">Pages</h2>
            <ul className="space-y-3">
              {grouped.page.map((r) => (
                <li key={r.href}>
                  <Link to={r.href} className="font-serif text-h3 text-ink hover:text-crimson no-underline">
                    {r.title}
                  </Link>
                  {r.snippet && <p className="text-mid text-sm">{r.snippet}</p>}
                </li>
              ))}
            </ul>
          </div>
        )}
        {grouped.event.length > 0 && (
          <div className="mb-10">
            <h2 className="font-serif text-h2 text-red mb-4">Events</h2>
            <ul className="space-y-3">
              {grouped.event.map((r) => (
                <li key={r.href}>
                  <Link to={r.href} className="font-serif text-h3 text-ink hover:text-crimson no-underline">
                    {r.title}
                  </Link>
                  {r.snippet && <p className="text-mid text-sm">{r.snippet}</p>}
                </li>
              ))}
            </ul>
          </div>
        )}
        {grouped.news.length > 0 && (
          <div className="mb-10">
            <h2 className="font-serif text-h2 text-red mb-4">News</h2>
            <ul className="space-y-3">
              {grouped.news.map((r) => (
                <li key={r.href}>
                  <Link to={r.href} className="font-serif text-h3 text-ink hover:text-crimson no-underline">
                    {r.title}
                  </Link>
                  {r.snippet && <p className="text-mid text-sm">{r.snippet}</p>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
}
