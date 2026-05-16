import { Link } from 'react-router-dom';
import Meta from '../../components/seo/Meta.jsx';
import PageHero from '../../components/pageBlocks/PageHero.jsx';
import CalloutBox from '../../components/ui/CalloutBox.jsx';
import Button from '../../components/ui/Button.jsx';

export default function WhatToExpectPage() {
  return (
    <>
      <Meta
        title="What to expect at a service"
        description="If you have not been before, here is what happens when you come to Holy Trinity Sloane Square. Read in advance, then come. You will be welcome."
      />
      <PageHero
        eyebrow="Worship"
        title="What to expect"
        lede="If you have not been to Holy Trinity before, here is what to expect on the day. Read in advance if it helps; come either way."
      />

      <article className="mx-auto max-w-prose px-4 sm:px-6 lg:px-8 prose-htss pb-22">
        <p>
          You do not need to be Anglican to come. You do not need to know the form. You do not need to be confident about what you believe, or to have been to church before. You are welcome to take part, and you are welcome to sit at the back and observe. Either is fine.
        </p>

        <h2>The services</h2>

        <h3>11am Choral Eucharist · Sunday</h3>
        <p>
          The main service of the week. The choir sings, the building is incensed, and Junior Church runs in parallel for children. Around seventy-five minutes. Coffee is served in the church afterwards.
        </p>

        <h3>6pm Choral Evensong · Sunday</h3>
        <p>
          A sung service of evening prayer from the Book of Common Prayer. No communion is offered. If you are new to the tradition and want to listen rather than take part, this is the simplest first visit. Around forty-five minutes.
        </p>

        <h3>6.30pm Eucharist · Wednesday</h3>
        <p>
          A quieter said Eucharist mid-week, around thirty minutes. No music. A good choice if Sundays do not work.
        </p>

        <h2>What will happen at the Eucharist</h2>
        <p>
          You will be handed an order of service when you arrive. Follow it as much or as little as you like. The congregation stands for hymns, the Gospel, and the eucharistic prayer. We sit for readings and for the sermon. Many people kneel during the prayers; cushions are on the kneelers if you want one, and nobody minds if you stay sitting.
        </p>
        <p>
          At communion, anyone who would normally receive the sacrament in their own tradition is welcome to receive here. If you would prefer not to receive, you are warmly invited to come forward for a blessing. Cross your arms over your chest as a sign that you would like a blessing rather than communion, and the priest will do the rest.
        </p>

        <h2>Children</h2>
        <p>
          Junior Church runs during the 11am service in term time, taking children out for the readings and bringing them back at communion. Babies and small children are welcome at every service. Noise is not a problem; the building is large and forgiving.
        </p>

        <h2>What to bring</h2>
        <p>
          Nothing. The order of service and hymn books are provided. Dress as you would for any London Sunday.
        </p>

        <h2>Afterwards</h2>
        <p>
          Coffee is served at the back of the church after the 11am. Please stay if you can. Introduce yourself to the Rector, or to whoever you find at the urn. You will not have to explain who you are or why you came.
        </p>

        <CalloutBox>
          <p className="font-serif italic text-ink text-lg leading-relaxed">
            {/* TODO: Rosie / Fr Michael to revise this welcome paragraph in the Rector's own voice. */}
            If you are coming for the first time, do say. I will look out for you, and so will the wardens at the door. You are welcome here, whoever you are, however you arrive.
          </p>
          <p className="font-sans text-sm uppercase tracking-wider text-crimson mt-4">The Rector</p>
        </CalloutBox>

        <p className="mt-10">
          <Button to="/worship/services" variant="outline">
            See full service times <span aria-hidden="true">→</span>
          </Button>
        </p>
      </article>
    </>
  );
}
