import Meta from '../../components/seo/Meta.jsx';
import PageHero from '../../components/pageBlocks/PageHero.jsx';
import Button from '../../components/ui/Button.jsx';
import CalloutBox from '../../components/ui/CalloutBox.jsx';
import ConsentGate from '../../components/ui/ConsentGate.jsx';
import { FALLBACK_SETTINGS } from '../../data/static.js';

export default function PlanVisitPage() {
  return (
    <>
      <Meta
        title="Plan your visit"
        description="How to find us, opening hours, accessibility, and what to expect when you arrive at Holy Trinity Sloane Square."
      />
      <PageHero
        eyebrow="Visit"
        title="Plan your visit"
        lede="Practical detail for your first visit: where we are, opening times, accessibility, and what to do when you arrive."
      />

      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-22 grid gap-12 lg:grid-cols-2">
        <div className="prose-htss">
          <h2>Address</h2>
          <p>
            Holy Trinity Sloane Square
            <br />
            146 Sloane Street, Chelsea
            <br />
            London SW1X 9BZ
          </p>
          <p>
            <a href={`tel:${FALLBACK_SETTINGS.phone.replace(/\s/g, '')}`}>{FALLBACK_SETTINGS.phone}</a>
            <br />
            <a href={`mailto:${FALLBACK_SETTINGS.emailParish}`}>{FALLBACK_SETTINGS.emailParish}</a>
          </p>

          <h2>Opening hours</h2>
          <p>{FALLBACK_SETTINGS.openingHours}.</p>
          <p>On Sundays, the church is open for worship throughout the day.</p>

          <h2>How to find us</h2>
          <p>
            The nearest tube is{' '}
            <strong>Sloane Square</strong> (District and Circle lines), a short walk up Sloane Street. The church is also a few minutes from{' '}
            <strong>Knightsbridge</strong> (Piccadilly line). Buses 11, 19, 22, 137, 211, 319, 360 and C1 all stop close by.
          </p>

          <h2>Accessibility</h2>
          {/* TODO: Rosie to confirm accessibility detail with the Rector and churchwardens. */}
          <p>
            The main entrance on Sloane Street is step-free. A hearing loop is available for the principal Sunday services. Large-print orders of service can be provided on request; ask a steward at the door or write to the parish office in advance.
          </p>
          <p>
            For more on access, see our <a href="/accessibility">accessibility statement</a>.
          </p>

          <h2>When you arrive</h2>
          <p>
            A steward will usually be on the door before services and will hand you an order of service. If you would like to sit at the back, that is welcome; the wardens can also seat you closer if you prefer.
          </p>

          <p className="mt-8">
            <Button to="/worship/what-to-expect" variant="outline">
              What to expect at a service <span aria-hidden="true">→</span>
            </Button>
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

          <CalloutBox className="mt-8">
            <h3 className="font-serif text-xl text-crimson mb-2">First time?</h3>
            <p>
              Tell a steward when you arrive. We will look out for you and, if you would like, introduce you to someone after the service.
            </p>
          </CalloutBox>
        </div>
      </section>
    </>
  );
}
