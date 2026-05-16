import Meta from '../components/seo/Meta.jsx';
import PageHero from '../components/pageBlocks/PageHero.jsx';
import ConsentGate from '../components/ui/ConsentGate.jsx';
import { useSanityData } from '../hooks/useSanityData.js';
import { SETTINGS_QUERY } from '../sanity/queries.js';
import { FALLBACK_SETTINGS } from '../data/static.js';

export default function ContactPage() {
  const { data: settings } = useSanityData(SETTINGS_QUERY, null, { fallback: FALLBACK_SETTINGS });
  const s = { ...FALLBACK_SETTINGS, ...(settings || {}) };

  return (
    <>
      <Meta
        title="Contact"
        description="Contact Holy Trinity Sloane Square. Parish office, Rector, Events Manager, and Director of Music."
      />
      <PageHero
        eyebrow="Contact"
        title="Contact"
        lede="Who to write to, depending on what you need. The parish office answers most enquiries and will route the rest."
      />

      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-22 grid gap-12 lg:grid-cols-2">
        <div className="prose-htss">
          <h2>Parish office</h2>
          <p>
            The first stop for any enquiry: weddings, baptisms, funerals, building access, visits, and routine messages to the Rector.
          </p>
          <p>
            <a href={`tel:${s.phone.replace(/\s/g, '')}`}>{s.phone}</a>
            <br />
            <a href={`mailto:${s.emailParish}`}>{s.emailParish}</a>
          </p>

          <h2>The Rector</h2>
          <p>
            For pastoral matters or specific theological questions.
          </p>
          <p>
            <a href={`mailto:${s.emailRector}`}>{s.emailRector}</a>
          </p>

          <h2>Events Manager</h2>
          <p>
            For venue hire and event production enquiries.
          </p>
          <p>
            <a href={`mailto:${s.emailEvents}`}>{s.emailEvents}</a>
          </p>

          <h2>Director of Music</h2>
          <p>
            For the choir, organ recitals, and music programming.
          </p>
          <p>
            <a href={`mailto:${s.emailMusic}`}>{s.emailMusic}</a>
          </p>

          <h2>Address</h2>
          <address className="not-italic">
            Holy Trinity Sloane Square
            <br />
            146 Sloane Street, Chelsea
            <br />
            London SW1X 9BZ
          </address>
          <p>{s.openingHours}.</p>

          <h2>Safeguarding</h2>
          <p>
            For safeguarding enquiries, please see our{' '}
            <a href="/safeguarding">safeguarding page</a>.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-h2 text-red mb-4">Find us on the map</h2>
          <ConsentGate
            category="marketing"
            label="The Google Map needs your consent to load."
          >
            <div className="aspect-[4/3] border border-border bg-cream overflow-hidden">
              <iframe
                title="Map showing Holy Trinity Sloane Square at 146 Sloane Street"
                src="https://www.google.com/maps?q=146+Sloane+Street,+London+SW1X+9BZ&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </ConsentGate>
        </div>
      </section>
    </>
  );
}
