import { Link } from 'react-router-dom';
import Meta from '../../components/seo/Meta.jsx';
import PageHero from '../../components/pageBlocks/PageHero.jsx';
import { useSanityData } from '../../hooks/useSanityData.js';
import { PAST_EVENTS_QUERY } from '../../sanity/queries.js';

const PAGE_SIZE = 50;

function groupByYear(events) {
  const groups = {};
  for (const e of events) {
    const year = new Date(e.date).getFullYear();
    if (!groups[year]) groups[year] = [];
    groups[year].push(e);
  }
  return Object.entries(groups)
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([year, items]) => ({ year, items }));
}

export default function EventsArchivePage() {
  const { data, loading, isConfigured } = useSanityData(PAST_EVENTS_QUERY, null, { fallback: [] });
  const events = (data || []).slice(0, PAGE_SIZE);
  const grouped = groupByYear(events);

  return (
    <>
      <Meta
        title="Past events"
        description="Past events at Holy Trinity Sloane Square. A chronological archive of concerts, talks, and community events."
        noindex
      />
      <PageHero
        eyebrow="Music & Events"
        title="Past events"
        lede="A chronological list of past events at Holy Trinity. Each entry links to its full page, which remains live so external links and search results still work."
      />

      <section className="mx-auto max-w-prose px-4 sm:px-6 lg:px-8 pb-22">
        {loading && isConfigured ? (
          <p className="text-mid">Loading…</p>
        ) : grouped.length === 0 ? (
          <p className="text-mid">
            No past events yet. Browse <Link to="/music-events/events">upcoming events</Link>.
          </p>
        ) : (
          grouped.map((group) => (
            <div key={group.year} className="mb-10">
              <h2 className="font-serif text-h2 text-red border-b border-border pb-2 mb-4">{group.year}</h2>
              <ul className="space-y-3">
                {group.items.map((e) => (
                  <li key={e._id} className="grid grid-cols-[120px,1fr] gap-4 text-base">
                    <span className="font-sans text-mid text-sm">
                      {new Date(e.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                    </span>
                    <span>
                      <Link to={`/music-events/events/${e.slug}`} className="text-ink hover:text-crimson">
                        {e.title}
                      </Link>
                      {e.description && (
                        <span className="block text-mid text-sm">{e.description}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}

        <p className="mt-10">
          <Link
            to="/music-events/events"
            className="font-sans text-sm uppercase tracking-wider text-crimson no-underline"
          >
            Back to upcoming events <span aria-hidden="true">→</span>
          </Link>
        </p>
      </section>
    </>
  );
}
