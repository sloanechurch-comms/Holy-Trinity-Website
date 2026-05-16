import { useParams, Link, Navigate } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import Meta from '../../components/seo/Meta.jsx';
import OrnamentalRule from '../../components/ui/OrnamentalRule.jsx';
import CalloutBox from '../../components/ui/CalloutBox.jsx';
import Button from '../../components/ui/Button.jsx';
import EventCard from '../../components/pageBlocks/EventCard.jsx';
import PlaceholderImage from '../../components/ui/PlaceholderImage.jsx';
import { useSanityData } from '../../hooks/useSanityData.js';
import { EVENT_BY_SLUG_QUERY, UPCOMING_EVENTS_QUERY } from '../../sanity/queries.js';
import { urlFor } from '../../sanity/imageBuilder.js';
import { buildEventSchema } from '../../utils/seo.js';
import { FALLBACK_SETTINGS } from '../../data/static.js';

function formatLong(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  const date = d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const time = d
    .toLocaleTimeString('en-GB', { hour: 'numeric', minute: '2-digit', hour12: true })
    .replace(' ', '')
    .toLowerCase();
  return { date, time };
}

export default function EventDetailPage() {
  const { slug } = useParams();
  const { data: event, loading, isConfigured } = useSanityData(
    EVENT_BY_SLUG_QUERY,
    { slug },
  );
  const { data: upcoming } = useSanityData(UPCOMING_EVENTS_QUERY, null, { fallback: [] });

  if (loading && isConfigured) {
    return (
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-22">
        <div className="shimmer h-12 w-2/3 mb-4" />
        <div className="shimmer h-6 w-1/3" />
      </div>
    );
  }

  if (!event) {
    return <Navigate to="/music-events/events" replace />;
  }

  const { date, time } = formatLong(event.date);
  const hasPassed = event.date && new Date(event.date) < new Date();
  const imageUrl = event.image ? urlFor(event.image).width(1600).auto('format').url() : null;
  const moreEvents = (upcoming || []).filter((e) => e.slug !== event.slug).slice(0, 3);

  const seoTitle = event.seo?.title || event.title;
  const seoDescription = event.seo?.description || event.description;
  const ogImage = event.image ? urlFor(event.image).width(1200).height(630).fit('crop').auto('format').url() : null;

  return (
    <>
      <Meta
        title={seoTitle}
        description={seoDescription}
        image={ogImage}
        imageAlt={event.imageAlt}
        type="article"
        structuredData={buildEventSchema({
          title: event.title,
          description: event.description,
          date: event.date,
          imageUrl: ogImage,
          ticketUrl: event.ticketUrl,
          price: event.price,
        })}
      />

      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <Link to="/music-events/events" className="font-sans text-sm uppercase tracking-wider text-crimson no-underline">
          ← All events
        </Link>
        <header className="mt-5 max-w-3xl">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-mid">
            {event.type || 'Event'} · {date} · {time}
          </p>
          <h1 className="font-serif text-h1 lg:text-display text-crimson mt-3">{event.title}</h1>
        </header>
      </section>

      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-8">
        <div className="relative w-full overflow-hidden bg-cream" style={{ maxHeight: '60vh' }}>
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={event.imageAlt || event.title}
              className="w-full object-cover"
              style={{ maxHeight: '60vh' }}
            />
          ) : (
            <PlaceholderImage label={`Image for ${event.title}`} aspectRatio="16/9" />
          )}
        </div>
      </section>

      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 lg:grid-cols-[2fr,1fr]">
        <div className="prose-htss">
          {event.longDescription ? (
            <PortableText value={event.longDescription} />
          ) : (
            <p className="font-serif text-xl leading-relaxed text-ink">{event.description}</p>
          )}
        </div>

        <aside className="lg:sticky lg:top-28 self-start">
          {hasPassed ? (
            <CalloutBox>
              <p className="font-serif text-lg text-ink">This event has now taken place.</p>
              <p className="mt-3 text-sm text-mid">
                Browse <Link to="/music-events/events/archive">past events</Link> or see <Link to="/music-events/events">what's coming up</Link>.
              </p>
            </CalloutBox>
          ) : (
            <div className="border border-border bg-cream p-6">
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="font-sans uppercase tracking-wide text-mid text-xs">When</dt>
                  <dd className="text-ink mt-1">
                    {date}
                    <br />
                    {time}
                  </dd>
                </div>
                <div>
                  <dt className="font-sans uppercase tracking-wide text-mid text-xs">Where</dt>
                  <dd className="text-ink mt-1">
                    Holy Trinity Sloane Square
                    <br />
                    146 Sloane Street, London SW1X 9BZ
                  </dd>
                </div>
                <div>
                  <dt className="font-sans uppercase tracking-wide text-mid text-xs">Price</dt>
                  <dd className="text-ink mt-1">{event.price || 'Free, no booking required'}</dd>
                </div>
              </dl>
              {event.ticketUrl ? (
                <div className="mt-5">
                  <Button href={event.ticketUrl} external variant="primary" className="w-full justify-center">
                    Book tickets
                  </Button>
                </div>
              ) : null}
              <p className="mt-5 text-sm">
                <Link to="/visit/plan-your-visit" className="font-sans uppercase tracking-wider text-crimson no-underline text-sm">
                  Plan a visit <span aria-hidden="true">→</span>
                </Link>
              </p>
            </div>
          )}

          {!hasPassed && (
            <p className="mt-4 text-sm text-mid">
              Questions? Email{' '}
              <a href={`mailto:${FALLBACK_SETTINGS.emailEvents}`}>{FALLBACK_SETTINGS.emailEvents}</a>.
            </p>
          )}
        </aside>
      </section>

      {moreEvents.length > 0 && (
        <>
          <OrnamentalRule />
          <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-22">
            <h2 className="font-serif text-h2 text-red mb-8">More events</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {moreEvents.map((e) => (
                <EventCard key={e._id} event={e} compact />
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
}
