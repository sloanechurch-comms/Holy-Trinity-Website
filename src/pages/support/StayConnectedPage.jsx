import Meta from '../../components/seo/Meta.jsx';
import PageHero from '../../components/pageBlocks/PageHero.jsx';
import NewsletterSignup from '../../components/pageBlocks/NewsletterSignup.jsx';
import ConsentGate from '../../components/ui/ConsentGate.jsx';
import { useSanityData } from '../../hooks/useSanityData.js';
import { SETTINGS_QUERY } from '../../sanity/queries.js';
import { FALLBACK_SETTINGS } from '../../data/static.js';

export default function StayConnectedPage() {
  const { data: settings } = useSanityData(SETTINGS_QUERY, null, { fallback: FALLBACK_SETTINGS });
  const embedCode = settings?.mailchimpEmbedCode;

  return (
    <>
      <Meta
        title="Stay connected"
        description="Subscribe to the Holy Trinity Sloane Square weekly bulletin: service times, events, news, and reflections from the Rector."
      />
      <PageHero
        eyebrow="Support"
        title="Stay connected"
        lede="A weekly bulletin with service times, events, news, and reflections from the Rector. Sent every Friday."
      />

      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-22">
        {embedCode ? (
          <ConsentGate
            category="marketing"
            label="The Mailchimp form needs your consent to load."
          >
            <NewsletterSignup embedCode={embedCode} />
          </ConsentGate>
        ) : (
          <NewsletterSignup />
        )}
      </section>
    </>
  );
}
