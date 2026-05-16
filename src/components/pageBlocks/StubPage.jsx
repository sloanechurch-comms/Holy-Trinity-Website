import Meta from '../seo/Meta.jsx';
import PageHero from './PageHero.jsx';
import CalloutBox from '../ui/CalloutBox.jsx';
import { FALLBACK_SETTINGS } from '../../data/static.js';

export default function StubPage({ eyebrow, title, description, lede, extra }) {
  return (
    <>
      <Meta title={title} description={description} />
      <PageHero eyebrow={eyebrow} title={title} lede={lede} />
      <section className="mx-auto max-w-prose px-4 sm:px-6 lg:px-8 prose-htss pb-22">
        {extra}
        <CalloutBox>
          <p>
            This section is being prepared. In the meantime, please contact the parish office on{' '}
            <a href={`tel:${FALLBACK_SETTINGS.phone.replace(/\s/g, '')}`}>{FALLBACK_SETTINGS.phone}</a> or{' '}
            <a href={`mailto:${FALLBACK_SETTINGS.emailParish}`}>{FALLBACK_SETTINGS.emailParish}</a> for information.
          </p>
        </CalloutBox>
      </section>
    </>
  );
}
