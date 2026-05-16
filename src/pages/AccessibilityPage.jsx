import Meta from '../components/seo/Meta.jsx';
import PageHero from '../components/pageBlocks/PageHero.jsx';
import { FALLBACK_SETTINGS } from '../data/static.js';

export default function AccessibilityPage() {
  return (
    <>
      <Meta
        title="Accessibility"
        description="The accessibility statement for the Holy Trinity Sloane Square website. Our commitment to WCAG 2.1 AA, known limitations, and how to report problems."
      />
      <PageHero
        eyebrow="Accessibility"
        title="Accessibility statement"
        lede="Our commitment to making this site usable by everyone, the known limitations, and how to report a problem."
      />

      <article className="mx-auto max-w-prose px-4 sm:px-6 lg:px-8 prose-htss pb-22">
        <p className="text-mid text-sm">Last reviewed: 16 May 2026.</p>

        <h2>Our commitment</h2>
        <p>
          Holy Trinity Sloane Square is committed to making this website accessible to as many people as possible. We design and build to the Web Content Accessibility Guidelines (WCAG) 2.1 at AA level.
        </p>
        <p>
          In practice that means:
        </p>
        <ul>
          <li>Pages can be navigated with a keyboard alone.</li>
          <li>Text colour and background pass WCAG contrast requirements.</li>
          <li>Headings are used in a logical order.</li>
          <li>Images have descriptive alt text.</li>
          <li>Forms have labels associated with their inputs.</li>
          <li>Animations are disabled for visitors who have set the "reduce motion" preference in their operating system.</li>
        </ul>

        <h2>Known limitations</h2>
        <p>
          We aim to meet AA, but some pages may fall short. Known limitations:
        </p>
        <ul>
          <li>
            Some heritage and history pages contain photographs whose alternative text is brief; we are working with the parish photographer to revise this.
          </li>
          <li>
            Third-party embedded content (Google Maps, Mailchimp form, MyDona donation widget, TicketSource booking pages) has its own accessibility limitations that we cannot directly control. Where possible, we provide an alternative route, e.g. a phone number for parish office contact and a written ticket-booking process by email.
          </li>
        </ul>

        <h2>Alternative formats</h2>
        <p>
          If you need information from this site in an alternative format, such as large print, plain text, or audio, please write to{' '}
          <a href={`mailto:${FALLBACK_SETTINGS.emailParish}`}>{FALLBACK_SETTINGS.emailParish}</a> or call{' '}
          <a href={`tel:${FALLBACK_SETTINGS.phone.replace(/\s/g, '')}`}>{FALLBACK_SETTINGS.phone}</a>. We will respond as quickly as we can.
        </p>

        <h2>Reporting a problem</h2>
        <p>
          If you find part of the site difficult to use, please tell us. Email{' '}
          <a href={`mailto:${FALLBACK_SETTINGS.emailParish}`}>{FALLBACK_SETTINGS.emailParish}</a> with the page address and what you were trying to do. We will respond within ten working days.
        </p>

        <h2>The Equality Act 2010</h2>
        <p>
          If you contact us with a complaint and are not happy with our response, you can contact the Equality and Human Rights Commission (EHRC) or the Equality Advisory and Support Service (EASS).
        </p>

        <h2>Preparation of this statement</h2>
        <p>
          This statement was prepared in May 2026 using the UK Government accessibility statement template as a starting structure. It will be reviewed at least once a year.
        </p>
      </article>
    </>
  );
}
