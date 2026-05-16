import { Link } from 'react-router-dom';
import PlaceholderImage from '../ui/PlaceholderImage.jsx';
import { urlFor } from '../../sanity/imageBuilder.js';

function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
}

function formatTime(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return d
    .toLocaleTimeString('en-GB', { hour: 'numeric', minute: '2-digit', hour12: true })
    .replace(' ', '')
    .toLowerCase();
}

const TYPE_LABELS = {
  concert: 'Concert',
  community: 'Community',
  service: 'Service',
  talk: 'Talk',
  other: 'Event',
};

export default function EventCard({ event, compact = false }) {
  if (!event) return null;
  const href = `/music-events/events/${event.slug}`;
  const imageUrl = event.image ? urlFor(event.image).width(800).height(450).fit('crop').auto('format').url() : null;

  return (
    <article className="group flex flex-col bg-white border border-border transition-all duration-150 hover:-translate-y-0.5 hover:shadow-sm">
      <Link to={href} className="block no-underline">
        <div className="relative aspect-[16/9] overflow-hidden bg-cream">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={event.imageAlt || event.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          ) : (
            <PlaceholderImage
              label={`Image for ${event.title}`}
              aspectRatio="16/9"
              className="absolute inset-0"
            />
          )}
          <span className="absolute top-3 left-3 bg-white/95 text-ink px-2.5 py-1 text-xs font-sans uppercase tracking-wide">
            {TYPE_LABELS[event.type] || 'Event'}
          </span>
        </div>
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <p className="font-sans text-xs uppercase tracking-[0.15em] text-mid">
          {formatDate(event.date)} · {formatTime(event.date)}
        </p>
        <h3 className="font-serif text-h3 text-ink mt-1.5">
          <Link to={href} className="no-underline hover:text-crimson">
            {event.title}
          </Link>
        </h3>
        {!compact && <p className="mt-2 text-ink text-base flex-grow">{event.description}</p>}
        <div className="mt-4 flex items-center justify-between gap-3 text-sm">
          <span className="text-mid">{event.price || 'Free'}</span>
          {event.ticketUrl ? (
            <a
              href={event.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm uppercase tracking-wider text-crimson no-underline"
            >
              Book <span aria-hidden="true">→</span>
            </a>
          ) : (
            <Link to={href} className="font-sans text-sm uppercase tracking-wider text-crimson no-underline">
              Details <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
