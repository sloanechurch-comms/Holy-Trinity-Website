import StubPage from '../../components/pageBlocks/StubPage.jsx';

export default function OutreachPage() {
  return (
    <StubPage
      eyebrow="Community"
      title="Outreach"
      description="Outreach at Holy Trinity Sloane Square: Songs and Soup, our weekly community lunch, and other parish projects."
      lede="The work the parish does in its neighbourhood: regular community projects, and the occasional larger initiative."
      extra={
        <p>
          {/* TODO: Rosie to expand with full list of outreach initiatives and partner organisations. */}
          Songs and Soup is a weekly community lunch in the church, running every Tuesday at 1pm. Music, a hot lunch, and good company. No booking; no charge.
        </p>
      }
    />
  );
}
