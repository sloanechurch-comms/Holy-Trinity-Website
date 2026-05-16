import StubPage from '../../components/pageBlocks/StubPage.jsx';

export default function JuniorChurchPage() {
  return (
    <StubPage
      eyebrow="Worship"
      title="Junior Church"
      description="Junior Church runs during the 11am Choral Eucharist in term time, for children from age three upwards."
      lede="Junior Church runs during the 11am Choral Eucharist in term time. Children leave for the readings and rejoin the congregation at communion."
      extra={
        <>
          {/* TODO: Rosie to confirm leader name, age range and term dates with the Rector. */}
          <p>
            Children are welcome at every service at Holy Trinity. During the 11am Choral Eucharist on Sundays in term time, Junior Church runs in parallel: the children leave with the team after the gospel acclamation, hear the readings in age-appropriate language, and rejoin their families at communion.
          </p>
          <p>
            Babies are welcome at every service. Noise is not a problem; the building is large and forgiving.
          </p>
        </>
      }
    />
  );
}
