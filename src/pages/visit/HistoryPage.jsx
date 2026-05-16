import Meta from '../../components/seo/Meta.jsx';
import PageHero from '../../components/pageBlocks/PageHero.jsx';
import OrnamentalRule from '../../components/ui/OrnamentalRule.jsx';
import EtchedDivider from '../../components/ui/EtchedDivider.jsx';
import DropCap from '../../components/ui/DropCap.jsx';

export default function HistoryPage() {
  return (
    <>
      <Meta
        title="History"
        description="A history of Holy Trinity Sloane Square, from the original chapel of ease, through Sedding's great rebuilding, to the present day."
      />
      <PageHero
        eyebrow="Visit"
        title="History"
        lede="From a chapel of ease at the edge of fields, to a parish church on a cathedral scale, to the Cathedral of the Arts and Crafts."
      />

      <article className="mx-auto max-w-prose px-4 sm:px-6 lg:px-8 prose-htss pb-22">
        {/* TODO: Imported draft from sloanechurch.org — Rosie to review and amend where the historical detail has been improved since. */}
        <DropCap>
          The history of the parish begins with the building of Hans Town in the late eighteenth century. Henry Holland's new streets and squares created a population that needed a church, and in 1830 a brick chapel of ease was built on the present site, attached to the ancient parish of Chelsea.
        </DropCap>

        <OrnamentalRule />

        <h2>The first chapel</h2>
        <p>
          The 1830 chapel was a serviceable building for a small congregation, but as the neighbourhood grew through the Victorian period it became inadequate. By the 1880s, the chapel could not seat the parish; nor could it bear the weight of expectation of a fashionable London congregation. A successor building was needed.
        </p>

        <EtchedDivider />

        <h2>Sedding's commission</h2>
        <p>
          The rebuilding was driven forward by the Earl Cadogan, the parish's principal patron, and by the Reverend John Erskine Clarke, then incumbent. John Dando Sedding was commissioned in 1888. Sedding's brief was unusually free: he was to design a parish church on a cathedral scale, with the work of named artists at every stage. He responded with what is now the second-widest nave in London, and a building intended to give the Arts and Crafts movement its first ecclesiastical statement of size.
        </p>

        <EtchedDivider />

        <h2>The building and finishing</h2>
        <p>
          Sedding died suddenly in 1891, before the church was complete. His pupil Henry Wilson took over, both as architect and as the principal designer of the metalwork. The church was substantially complete in 1890 and consecrated in 1890; the east window by Burne-Jones and Morris & Co. was installed in 1895.
        </p>

        <EtchedDivider />

        <h2>Twentieth century</h2>
        <p>
          The church survived two world wars without significant damage, though the parish suffered the loss of many of its young men in the First World War; their names are recorded on the war memorial in the south aisle. In 1973, the Diocese of London proposed the demolition of the church on grounds of cost. The proposal was met with a campaign led by John Betjeman and the Victorian Society. The campaign succeeded; the church was reprieved, restored, and Grade I listed shortly thereafter.
        </p>

        <EtchedDivider />

        <h2>The parish today</h2>
        <p>
          Holy Trinity now serves a parish of around five thousand souls, with a Sunday congregation that includes long-standing parishioners, students, visitors to London, and an unusually wide range of nationalities. The Catholic tradition of the Church of England is preserved in the liturgy; the building is preserved by the work of generations of stewards, churchwardens, and parishioners.
        </p>
        <p>
          For the people who carry the parish forward today, see <a href="/community/our-team">Our team</a> and <a href="/community/governance">Governance</a>.
        </p>
      </article>
    </>
  );
}
