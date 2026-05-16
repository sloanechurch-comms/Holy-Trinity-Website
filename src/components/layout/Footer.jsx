import { Link } from 'react-router-dom';
import { FOOTER_LINKS, FALLBACK_SETTINGS } from '../../data/static.js';
import { useConsent } from '../../hooks/useConsent.js';

export default function Footer({ settings }) {
  const s = { ...FALLBACK_SETTINGS, ...(settings || {}) };
  const { reset } = useConsent();

  return (
    <footer className="bg-cream border-t border-border mt-20" role="contentinfo">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-xl text-crimson mb-3">Holy Trinity Sloane Square</h3>
            <address className="not-italic text-ink leading-relaxed text-base">
              {s.address.split(',').map((part, i) => (
                <span key={i} className="block">
                  {part.trim()}
                </span>
              ))}
            </address>
            <p className="mt-3 text-base">
              <a href={`tel:${s.phone.replace(/\s/g, '')}`}>{s.phone}</a>
            </p>
            <p className="text-base">
              <a href={`mailto:${s.emailParish}`}>{s.emailParish}</a>
            </p>
            <p className="mt-3 text-mid text-sm">{s.openingHours}</p>
          </div>

          <div>
            <h3 className="font-serif text-xl text-crimson mb-3">Stay in touch</h3>
            <p className="text-base mb-3">
              The weekly bulletin brings service times, events, news, and reflections from the Rector.
            </p>
            <Link to="/support/stay-connected" className="font-sans text-sm uppercase tracking-wide">
              Subscribe to the bulletin
            </Link>
            <ul className="flex gap-3 mt-5">
              <li>
                <a
                  href={s.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex items-center justify-center w-10 h-10 border border-border hover:border-crimson hover:text-crimson transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={s.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex items-center justify-center w-10 h-10 border border-border hover:border-crimson hover:text-crimson transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M13.5 22v-9h3l.5-4h-3.5V6.5c0-1.2.3-2 2-2H17V1.1C16.6 1 15.6 1 14.5 1c-2.7 0-4.5 1.6-4.5 4.6V9H7v4h3v9h3.5z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl text-crimson mb-3">Site</h3>
            <ul className="flex flex-col gap-2 text-base">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={reset}
                  className="text-crimson underline underline-offset-2 hover:text-red text-left"
                >
                  Cookie preferences
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-mid">
          <p>
            © {new Date().getFullYear()} Holy Trinity Sloane Square. Parish of Holy Trinity and St Saviour, Upper Chelsea. Part of the{' '}
            <a href="https://www.london.anglican.org" target="_blank" rel="noopener noreferrer">
              Diocese of London
            </a>
            .
          </p>
          <p>Church of England. Registered charity.</p>
        </div>
      </div>
    </footer>
  );
}
