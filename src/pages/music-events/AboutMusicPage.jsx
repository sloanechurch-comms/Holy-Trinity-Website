import StubPage from '../../components/pageBlocks/StubPage.jsx';

export default function AboutMusicPage() {
  return (
    <StubPage
      eyebrow="Music & Events"
      title="About the music"
      description="The music at Holy Trinity Sloane Square: choir, organ, and a tradition that runs from plainsong through to the present day."
      lede="The music at Holy Trinity follows the cathedral tradition: sung Eucharist at 11am and Choral Evensong at 6pm on Sundays in term time, with a wider programme of concerts through the year."
      extra={
        <p>
          {/* TODO: Director of Music to draft. */}
          The choir sings the principal Sunday services and the major feasts of the year. The organ is by [TODO: builder, year], rebuilt in [TODO]. The programme of concerts in the church is listed on the events page; full details are on the dedicated music pages, which we are preparing.
        </p>
      }
    />
  );
}
