import StubPage from '../../components/pageBlocks/StubPage.jsx';
import { FALLBACK_SETTINGS } from '../../data/static.js';

export default function HireSpacePage() {
  return (
    <StubPage
      eyebrow="Music & Events"
      title="Hire a space"
      description="Hire the nave or one of our smaller spaces at Holy Trinity Sloane Square for a concert, recording, recital, or event."
      lede="The nave is available for concerts, recitals, recordings, and a small number of secular events. Pricing and availability on request."
      extra={
        <p>
          For enquiries, please write to our Events Manager at{' '}
          <a href={`mailto:${FALLBACK_SETTINGS.emailEvents}`}>{FALLBACK_SETTINGS.emailEvents}</a>. Include the date, the nature of the event, expected audience size, and any technical requirements.
        </p>
      }
    />
  );
}
