import Meta from '../../components/seo/Meta.jsx';
import PageHero from '../../components/pageBlocks/PageHero.jsx';
import OrnamentalRule from '../../components/ui/OrnamentalRule.jsx';
import EtchedDivider from '../../components/ui/EtchedDivider.jsx';
import DropCap from '../../components/ui/DropCap.jsx';

export default function ArtsCraftsPage() {
  return (
    <>
      <Meta
        title="Arts and Crafts at Holy Trinity"
        description="Morris & Co., Burne-Jones, Henry Wilson, the Royal School of Needlework. The Arts and Crafts furnishings of Holy Trinity Sloane Square."
      />
      <PageHero
        eyebrow="Visit"
        title="The Arts and Crafts"
        lede="The building is the work of named makers, in the Arts and Crafts principle that the maker is inseparable from the work."
      />

      <article className="mx-auto max-w-prose px-4 sm:px-6 lg:px-8 prose-htss pb-22">
        {/* TODO: Imported draft from sloanechurch.org — Rosie to review against current text and replace any out-of-date attribution. */}
        <DropCap>
          The Arts and Crafts movement was a reaction against industrial production. Its founders, William Morris foremost among them, wanted to recover the dignity of skilled hand work and the integrity of materials. Holy Trinity is one of the movement's most ambitious religious buildings, conceived from the first as a place where every craft would be represented.
        </DropCap>

        <OrnamentalRule />
        <h2>Morris & Co. and Edward Burne-Jones</h2>
        <p>
          The east window is the largest stained-glass window ever made by Morris & Co. Designed by Edward Burne-Jones, it was completed in 1895, three years before his death. The forty-eight figures are arranged in three tiers and include patriarchs, prophets, apostles, and the saints of the universal Church.
        </p>
        <p>
          Burne-Jones's drawings for the window are held in collections elsewhere; in the church, they are realised in glass and lead.
        </p>

        <EtchedDivider />

        <h2>Henry Wilson and the metalwork</h2>
        <p>
          Henry Wilson, Sedding's pupil and successor, designed much of the metalwork: the altar rails, the lectern, the gates, and the ironwork around the chancel. Wilson became one of the most important Arts and Crafts metalworkers of the next generation; his work at Holy Trinity is among the largest single bodies of his work in England.
        </p>

        <EtchedDivider />

        <h2>F. W. Pomeroy and the sculpture</h2>
        <p>
          The sculptural detail, including the capitals of the nave piers and the figures at the chancel arch, is by F. W. Pomeroy, working in collaboration with Wilson and to Sedding's designs.
        </p>

        <EtchedDivider />

        <h2>The Royal School of Needlework</h2>
        <p>
          The altar frontals, copes, and chasubles in the parish vestry were made by the Royal School of Needlework, founded in 1872 by Princess Helena. They remain in use for the principal feasts of the year.
        </p>

        <OrnamentalRule />
        <h2>Seeing the work</h2>
        <p>
          The building is open to visitors from {/* fallback hours used */}10am to 5pm, Monday to Saturday. A printed guide is available at the door. Volunteer guides are sometimes present on weekday afternoons; for a group visit, please write to the parish office in advance.
        </p>
        <p>
          For the architectural context and the building's history, see <a href="/visit/the-building">The building</a> and <a href="/visit/history">History</a>.
        </p>
      </article>
    </>
  );
}
