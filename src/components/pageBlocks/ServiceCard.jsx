import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
  if (!service) return null;
  return (
    <article className="border border-border bg-white p-6 sm:p-7 transition-shadow duration-150 hover:shadow-sm">
      <header className="mb-3">
        <p className="font-sans text-xs uppercase tracking-[0.15em] text-mid">
          {service.day} {service.time && `· ${service.time}`}
        </p>
        <h3 className="font-serif text-h3 text-ink mt-1.5">{service.name}</h3>
      </header>
      <p className="text-ink leading-relaxed">{service.shortDescription}</p>
      {service.isSeasonal && service.seasonalNote && (
        <p className="mt-3 text-sm italic text-mid">{service.seasonalNote}</p>
      )}
      <p className="mt-4">
        <Link
          to="/worship/what-to-expect"
          className="font-sans text-sm uppercase tracking-wider text-crimson no-underline"
        >
          What to expect <span aria-hidden="true">→</span>
        </Link>
      </p>
    </article>
  );
}
