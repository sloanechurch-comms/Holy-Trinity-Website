import StubPage from '../../components/pageBlocks/StubPage.jsx';

export default function ChoirPage() {
  return (
    <StubPage
      eyebrow="Music & Events"
      title="The choir"
      description="The choir of Holy Trinity Sloane Square sings the principal Sunday services and the major feasts of the year."
      lede="The choir sings the principal Sunday services and the major feasts of the year. We hold auditions in late summer and welcome enquiries year-round."
      extra={
        <p>
          {/* TODO: Director of Music to confirm audition arrangements and chorister scheme. */}
          For audition enquiries, please write to the Director of Music. Rehearsals are weekly during term time.
        </p>
      }
    />
  );
}
