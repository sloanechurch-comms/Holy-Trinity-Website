import StubPage from '../../components/pageBlocks/StubPage.jsx';

export default function NeighbourhoodPage() {
  return (
    <StubPage
      eyebrow="Community"
      title="The neighbourhood"
      description="The parish of Holy Trinity covers the area around Sloane Square. A short note on the neighbourhood and our place in it."
      lede="The parish covers the area around Sloane Square, between the King's Road and Knightsbridge. A short note on the neighbourhood and our place in it."
      extra={
        <p>
          {/* TODO: Rosie to draft a short narrative description of the parish boundaries and key local landmarks. */}
          A fuller description of the parish, its boundaries, and its links to local civic life is being prepared.
        </p>
      }
    />
  );
}
