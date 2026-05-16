import StubPage from '../../components/pageBlocks/StubPage.jsx';

export default function ConfirmationPage() {
  return (
    <StubPage
      eyebrow="Worship"
      title="Confirmation"
      description="Confirmation classes at Holy Trinity Sloane Square. A small group runs each year, normally in spring, in preparation for the Bishop's visit."
      lede="A small group runs each year, normally in spring, in preparation for the Bishop's visit."
      extra={
        <p>
          {/* TODO: Rosie to confirm the year's confirmation cohort dates with the Rector. */}
          Confirmation is for those who have been baptised and now wish to take on the promises of their baptism for themselves. Candidates meet over several weeks to read scripture together, talk through the creeds, and prepare for the day itself. To express interest, write to the Rector or speak to clergy after a service.
        </p>
      }
    />
  );
}
