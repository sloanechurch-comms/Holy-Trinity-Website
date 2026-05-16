import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Meta from '../../components/seo/Meta.jsx';
import PageHero from '../../components/pageBlocks/PageHero.jsx';
import EventCard from '../../components/pageBlocks/EventCard.jsx';
import { SkeletonCardGrid } from '../../components/ui/Skeleton.jsx';
import { useSanityData } from '../../hooks/useSanityData.js';
import { UPCOMING_EVENTS_QUERY } from '../../sanity/queries.js';

const FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'concert', label: 'Concerts' },
  { value: 'community', label: 'Community' },
  { value: 'service', label: 'Services' },
  { value: 'talk', label: 'Talks' },
];

export default function EventsPage() {
  const [filter, setFilter] = useState('all');
  const { data, loading, isConfigured } = useSanityData(UPCOMING_EVENTS_QUERY, null, { fallback: [] });

  const filtered = useMemo(() => {
    const list = data || [];
    if (filter === 'all') return list;
    return list.filter((e) => e.type === filter);
  }, [data, filter]);

  return (
    <>
      <Meta
        title="Events"
        description="Concerts, community events, talks, and special services at Holy Trinity Sloane Square. Browse what's on and book where booking is needed."
      />
      <PageHero
        eyebrow="Music & Events"
        title="Events"
        lede="Concerts in the nave, community lunches, talks, and special services. Booking is via TicketSource where required. Many events are free."
      />

      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-22">
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter events by type">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              role="tab"
              type="button"
              aria-selected={filter === f.value}
              onClick={() => setFilter(f.value)}
              className={`px-4 py-2 border font-sans text-sm uppercase tracking-wide transition-colors duration-150 ${
                filter === f.value
                  ? 'border-crimson bg-crimson text-white'
                  : 'border-border text-ink hover:border-crimson hover:text-crimson'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {loading && isConfigured ? (
          <SkeletonCardGrid count={6} />
        ) : filtered.length === 0 ? (
          <div className="bg-cream border border-border p-8 sm:p-10 text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-h2 text-red mb-3">No upcoming events</h2>
            <p className="text-ink mb-5">
              We don't have any events {filter === 'all' ? '' : `in this category `}coming up at the moment. The weekly bulletin will let you know as soon as the next one is added.
            </p>
            <p>
              <Link
                to="/support/stay-connected"
                className="font-sans text-sm uppercase tracking-wider text-crimson no-underline"
              >
                Subscribe to the bulletin <span aria-hidden="true">→</span>
              </Link>
            </p>
            <p className="mt-2">
              <Link
                to="/music-events/events/archive"
                className="font-sans text-sm uppercase tracking-wider text-crimson no-underline"
              >
                See past events <span aria-hidden="true">→</span>
              </Link>
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((e) => (
                <EventCard key={e._id} event={e} />
              ))}
            </div>
            <p className="mt-10 text-right">
              <Link
                to="/music-events/events/archive"
                className="font-sans text-sm uppercase tracking-wider text-crimson no-underline"
              >
                Looking for a past event? See the archive <span aria-hidden="true">→</span>
              </Link>
            </p>
          </>
        )}
      </section>
    </>
  );
}
