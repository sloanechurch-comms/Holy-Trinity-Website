import Meta from '../../components/seo/Meta.jsx';
import PageHero from '../../components/pageBlocks/PageHero.jsx';
import CalloutBox from '../../components/ui/CalloutBox.jsx';
import Button from '../../components/ui/Button.jsx';
import ConsentGate from '../../components/ui/ConsentGate.jsx';
import { useSanityData } from '../../hooks/useSanityData.js';
import { SETTINGS_QUERY } from '../../sanity/queries.js';
import { FALLBACK_SETTINGS } from '../../data/static.js';

export default function GivePage() {
  const { data: settings } = useSanityData(SETTINGS_QUERY, null, { fallback: FALLBACK_SETTINGS });
  const s = { ...FALLBACK_SETTINGS, ...(settings || {}) };

  return (
    <>
      <Meta
        title="Give"
        description="It costs around £750 a day to keep Holy Trinity Sloane Square open, staffed, and singing. Help us continue."
      />
      <PageHero eyebrow="Support" title="Give" ornament={false} />

      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-22">
        <CalloutBox className="max-w-3xl">
          <p className="font-serif text-h2 text-crimson leading-tight">
            It costs around £750 a day to keep Holy Trinity open, staffed, and singing.
          </p>
        </CalloutBox>

        <div className="mt-12 grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div className="prose-htss">
            <p>
              The figure is the day-to-day cost of running a parish church on the scale of Holy Trinity. It pays the clergy, the parish administrator, the music staff and the choir. It pays the heat in winter and the insurance year-round. It pays for the building's repair: a Grade I listed church needs constant care, and the bill never goes away. It pays for the daily life of the parish: the daily office, the open doors, Songs and Soup, baptisms and funerals, and the work the parish does for its neighbours.
            </p>
            <p>
              The Diocese of London does not fund parish running costs; the parish raises its own. Around three-quarters of what we need comes from regular giving and legacies. Around a fifth comes from the events programme and venue hire. The remainder comes from one-off gifts, including those of visitors.
            </p>

            <h2>One-off gifts</h2>
            <p>The simplest way to give a one-off amount is via our MyDona page, which accepts cards, Apple Pay, Google Pay, and bank transfer. UK taxpayers can add Gift Aid.</p>

            <ConsentGate
              category="marketing"
              label="The MyDona donation widget needs your consent to load."
            >
              <div
                id="mydona-widget"
                className="border border-border bg-cream p-8 text-center min-h-[200px] flex flex-col items-center justify-center gap-3"
              >
                {/* TODO: Paste MyDona embed code here once provided. The fallback button below remains in either case. */}
                <p className="text-mid italic">The MyDona giving widget will appear here.</p>
                {s.giveUrl && (
                  <Button href={s.giveUrl} external variant="primary">
                    Give via MyDona <span aria-hidden="true">→</span>
                  </Button>
                )}
              </div>
            </ConsentGate>

            <h2>Regular giving</h2>
            <p>
              Regular giving is the backbone of the parish budget. A standing order, set up once and forgotten, is the most useful gift any parishioner or supporter can make. To set up a standing order, please write to the parish office, who will send you bank details and, if you are a UK taxpayer, a Gift Aid declaration.
            </p>

            <h2>Legacies</h2>
            <p>
              Many of the works of art at Holy Trinity were paid for by legacies. A legacy to the parish, whether large or small, is among the most consequential gifts a Christian can make. The parish office can help you and your solicitor with the wording.
            </p>

            <p>
              For both standing orders and legacies, please write to{' '}
              <a href={`mailto:${s.emailParish}`}>{s.emailParish}</a>.
            </p>
          </div>

          <aside className="lg:sticky lg:top-28 self-start">
            <div className="border border-border bg-cream p-6">
              <h3 className="font-serif text-xl text-crimson mb-2">Thank you</h3>
              <p className="text-base text-ink">
                Every gift, large or small, keeps the doors open for the next visitor, the next christening, and the next Eucharist. We are grateful.
              </p>
              <p className="font-sans text-sm uppercase tracking-wider text-crimson mt-4">The Rector</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
