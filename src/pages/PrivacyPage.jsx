import Meta from '../components/seo/Meta.jsx';
import PageHero from '../components/pageBlocks/PageHero.jsx';
import { FALLBACK_SETTINGS } from '../data/static.js';

export default function PrivacyPage() {
  return (
    <>
      <Meta
        title="Privacy policy"
        description="How Holy Trinity Sloane Square uses your data, in compliance with UK GDPR and the Data Protection Act 2018."
      />
      <PageHero
        eyebrow="Privacy"
        title="Privacy policy"
        lede="How Holy Trinity Sloane Square uses your data, in compliance with UK GDPR and the Data Protection Act 2018."
      />

      <article className="mx-auto max-w-prose px-4 sm:px-6 lg:px-8 prose-htss pb-22">
        <p className="text-mid text-sm">Last updated: 16 May 2026.</p>

        <h2>Who we are</h2>
        <p>
          This site is operated by the Parochial Church Council of the Ecclesiastical Parish of Holy Trinity and St Saviour, Upper Chelsea, of 146 Sloane Street, London SW1X 9BZ. The PCC is the data controller for personal data collected via this site.
        </p>

        <h2>What we collect, and why</h2>
        <h3>Newsletter signup</h3>
        <p>
          When you subscribe to our weekly bulletin, we collect your name and email address. We process this on the basis of your consent, which you give by ticking the box on the signup form. Subscription is double opt-in: you will receive a confirmation email and must click the link in it before being added.
        </p>
        <p>
          Our newsletter is delivered via Mailchimp (Intuit). Mailchimp processes the data on our behalf under a data-processing agreement.
        </p>

        <h3>Enquiries</h3>
        <p>
          When you email the parish office, the Rector, the Events Manager, or the Director of Music, we hold the message and any reply for as long as needed to handle your enquiry and any reasonable follow-up. Some pastoral correspondence is held permanently as a matter of parish record.
        </p>

        <h3>Donations</h3>
        <p>
          One-off and recurring donations are processed by MyDona on our behalf. We do not see or store your card details. We see only the information MyDona passes to us: typically your name, email, the amount donated, and Gift Aid status. We keep donation records for legal, financial, and tax purposes for as long as required by HMRC and our auditors.
        </p>

        <h3>Analytics</h3>
        <p>
          If you accept analytics cookies, we use Google Analytics 4 to understand how the site is used. The data is aggregate and anonymised; we cannot identify you from it. You can decline analytics cookies via the cookie banner.
        </p>

        <h2>Cookies</h2>
        <p>
          For the full list of cookies we use, see our <a href="/cookies">cookie policy</a>.
        </p>

        <h2>Your rights</h2>
        <p>
          You have the right to ask us what personal data we hold about you, to correct it, to delete it (where we have no legal obligation to keep it), and to object to certain kinds of processing. To exercise any of these rights, please write to the parish office at{' '}
          <a href={`mailto:${FALLBACK_SETTINGS.emailParish}`}>{FALLBACK_SETTINGS.emailParish}</a>.
        </p>

        <h2>Complaints</h2>
        <p>
          If you are unhappy with how we have handled your data, please write to us first. You also have the right to complain to the Information Commissioner's Office (ICO) at{' '}
          <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
            ico.org.uk
          </a>
          .
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The date at the top of this page shows when it was last revised.
        </p>
      </article>
    </>
  );
}
