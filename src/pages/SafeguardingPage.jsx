import Meta from '../components/seo/Meta.jsx';
import PageHero from '../components/pageBlocks/PageHero.jsx';
import { FALLBACK_SETTINGS } from '../data/static.js';

export default function SafeguardingPage() {
  return (
    <>
      <Meta
        title="Safeguarding"
        description="Safeguarding at Holy Trinity Sloane Square. We follow Church of England safeguarding policy. How to raise a concern."
      />
      <PageHero
        eyebrow="Safeguarding"
        title="Safeguarding"
        lede="Holy Trinity Sloane Square is committed to the safeguarding of children, young people, and vulnerable adults."
      />

      <article className="mx-auto max-w-prose px-4 sm:px-6 lg:px-8 prose-htss pb-22">
        <p>
          We follow the safeguarding policies, procedures, and good practice of the Church of England and the Diocese of London. Everyone in a parish role that brings them into contact with children or vulnerable adults is checked, trained, and supervised.
        </p>

        <h2>How to raise a concern</h2>
        <p>
          If you have a concern about the safety or welfare of a child or vulnerable adult in connection with the parish, you can speak to:
        </p>
        <ul>
          <li>
            {/* TODO: Confirm the name and contact details of the current parish safeguarding officer with the Rector. */}
            The parish safeguarding officer (contact via the parish office on{' '}
            <a href={`tel:${FALLBACK_SETTINGS.phone.replace(/\s/g, '')}`}>{FALLBACK_SETTINGS.phone}</a>
            ).
          </li>
          <li>
            The Rector at <a href={`mailto:${FALLBACK_SETTINGS.emailRector}`}>{FALLBACK_SETTINGS.emailRector}</a>.
          </li>
          <li>
            The Diocese of London safeguarding team. See the{' '}
            <a
              href="https://www.london.anglican.org/kb-categories/safeguarding/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Diocese of London safeguarding pages
            </a>{' '}
            for direct contact details.
          </li>
        </ul>
        <p>
          In an emergency, where a child or vulnerable adult is in immediate danger, call 999.
        </p>

        <h2>Our policy</h2>
        <p>
          The parish's safeguarding policy is reviewed and approved annually by the Parochial Church Council. The current policy document is available on request from the parish office.
        </p>
      </article>
    </>
  );
}
