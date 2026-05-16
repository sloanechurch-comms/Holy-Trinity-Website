import Meta from '../../components/seo/Meta.jsx';
import PageHero from '../../components/pageBlocks/PageHero.jsx';
import CalloutBox from '../../components/ui/CalloutBox.jsx';
import { FALLBACK_SETTINGS } from '../../data/static.js';

export default function LifeEventsPage() {
  return (
    <>
      <Meta
        title="Baptisms, weddings and funerals"
        description="Information on baptisms, weddings, and funerals at Holy Trinity Sloane Square. Please contact the parish office to begin."
      />
      <PageHero
        eyebrow="Worship"
        title="Baptisms, weddings and funerals"
        lede="The major moments of a life, marked in the parish. The parish office is the place to begin; we will guide you from there."
      />

      <article className="mx-auto max-w-prose px-4 sm:px-6 lg:px-8 prose-htss pb-22">
        <h2>Baptism</h2>
        <p>
          Baptism is the sacrament of belonging in the Christian family. We baptise infants, older children, and adults. To begin, contact the parish office. The Rector will meet you to prepare for the day and, in the case of an adult or older child, to walk through what baptism means.
        </p>

        <h2>Confirmation</h2>
        <p>
          Confirmation is the moment a baptised person publicly takes on the promises made at their baptism. The Bishop confirms; the parish prepares. We run a small group for candidates each year, normally in the spring. See <a href="/worship/confirmation">our confirmation page</a> for the current cohort.
        </p>

        <h2>Weddings</h2>
        <p>
          A church wedding is a public service in the parish, witnessed by the congregation. Some couples have a clear connection to Holy Trinity. Others establish a connection in advance, by attending services for a period of time. We are pleased to discuss both routes. To begin, write to the parish office.
        </p>

        <h2>Funerals</h2>
        <p>
          When someone you love has died, you can contact the Rector directly. We will help you arrange the service, whether at Holy Trinity, at a crematorium, or graveside. There is no fee for a parish funeral.
        </p>

        <CalloutBox>
          <p>
            To begin, please contact the parish office on{' '}
            <a href={`tel:${FALLBACK_SETTINGS.phone.replace(/\s/g, '')}`}>{FALLBACK_SETTINGS.phone}</a> or{' '}
            <a href={`mailto:${FALLBACK_SETTINGS.emailParish}`}>{FALLBACK_SETTINGS.emailParish}</a>.
          </p>
        </CalloutBox>
      </article>
    </>
  );
}
