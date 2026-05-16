import StubPage from '../../components/pageBlocks/StubPage.jsx';

export default function SchoolPage() {
  return (
    <StubPage
      eyebrow="Community"
      title="Our school"
      description="Our parish school. The school's own website has full details for prospective families."
      lede="Our parish school. The school's own website has full details for prospective families."
      extra={
        <p>
          {/* TODO: Rosie to confirm school name and add link to the school's own site. */}
          For full information on admissions, term dates, and school life, please see the school's own website.
        </p>
      }
    />
  );
}
