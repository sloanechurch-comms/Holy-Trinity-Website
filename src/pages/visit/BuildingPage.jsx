import Meta from '../../components/seo/Meta.jsx';
import PageHero from '../../components/pageBlocks/PageHero.jsx';
import OrnamentalRule from '../../components/ui/OrnamentalRule.jsx';
import DropCap from '../../components/ui/DropCap.jsx';
import PlaceholderImage from '../../components/ui/PlaceholderImage.jsx';

export default function BuildingPage() {
  return (
    <>
      <Meta
        title="The building"
        description="John Dando Sedding's Holy Trinity Sloane Square: a Grade I listed Arts and Crafts masterpiece in Chelsea, called by Betjeman the Cathedral of the Arts and Crafts."
      />
      <PageHero
        eyebrow="Visit"
        title="The building"
        lede="Holy Trinity Sloane Square is Grade I listed, the principal Arts and Crafts church in London, and home to the largest Morris & Co. east window ever made."
      />

      <article className="mx-auto max-w-prose px-4 sm:px-6 lg:px-8 prose-htss pb-22">
        <DropCap>
          The present church was begun in 1888 to designs by John Dando Sedding, and finished after his sudden death in 1891 by his pupil Henry Wilson. It replaced an earlier brick chapel on the same site. Sedding wanted a parish church on a cathedral scale, in which every detail, from the ironwork to the embroidery, was the work of a named artist.
        </DropCap>

        <OrnamentalRule />
        <h2>John Dando Sedding, architect</h2>
        <p>
          Sedding was the leading architect of the Arts and Crafts movement in church-building. He drew on the late medieval Perpendicular style for the structure, but unlike the high Victorian Gothic of his contemporaries he treated decoration not as ornament applied from outside, but as the natural expression of materials and the artists who made them.
        </p>
        <p>
          The plan is broad and aisled, with a wide nave that lifts the eye toward the east window. Sedding's intention was that the building should hold a singing congregation; the acoustic is generous, and choirs that sing here remark on it.
        </p>

        <OrnamentalRule />
        <h2>The east window</h2>
        <p>
          The window above the high altar is the largest stained-glass window ever made by Morris & Co. It was designed by Edward Burne-Jones in the last years of his life, and is held to be among his finest work in the medium. There are forty-eight figures of saints, prophets, patriarchs, and apostles, arranged in three tiers.
        </p>
        <p>
          The window is best seen in the late morning, when the light from the east is at its strongest.
        </p>

        <div className="not-prose my-10">
          <PlaceholderImage
            label="Photograph of the Burne-Jones east window in morning light, full width"
            aspectRatio="16/10"
          />
        </div>

        <OrnamentalRule />
        <h2>Metalwork, embroidery, and furnishings</h2>
        <p>
          The metalwork is by Henry Wilson and F. W. Pomeroy; the embroidery on the altar frontals and copes is by the Royal School of Needlework. The font, pulpit, lectern, and altar rails are each the work of named makers, listed in the parish guide. The names matter: this was the principle of the Arts and Crafts movement, that the maker is part of the work.
        </p>

        <OrnamentalRule />
        <h2>The Cathedral of the Arts and Crafts</h2>
        <p>
          John Betjeman, who loved the building, called it "the Cathedral of the Arts and Crafts." The Victorian Society defended it from demolition in 1973. It is Grade I listed, the highest level of statutory protection.
        </p>

        <p className="mt-10">
          For the full story, see <a href="/visit/history">our history page</a>, or take time on a weekday between ten and five to visit. A printed guide is available in the church.
        </p>
      </article>
    </>
  );
}
