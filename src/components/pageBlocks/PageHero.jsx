import { motion } from 'framer-motion';
import OrnamentalRule from '../ui/OrnamentalRule.jsx';

export default function PageHero({ eyebrow, title, lede, ornament = true, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <section className={`mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-22 pb-10`}>
      <div className={`max-w-3xl ${alignment}`}>
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-xs tracking-[0.18em] uppercase text-mid mb-4"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="font-serif text-h1 lg:text-display text-crimson"
        >
          {title}
        </motion.h1>
        {lede && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-serif italic text-mid text-lede mt-5 max-w-prose"
          >
            {lede}
          </motion.p>
        )}
      </div>
      {ornament && <OrnamentalRule className="my-10" />}
    </section>
  );
}
