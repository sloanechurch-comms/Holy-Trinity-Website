import { motion } from 'framer-motion';
import { STUB_INSTAGRAM } from '../../data/static.js';
import PlaceholderImage from '../ui/PlaceholderImage.jsx';

export default function InstagramGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {STUB_INSTAGRAM.map((item, i) => (
        <motion.a
          key={i}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="block no-underline group"
          aria-label={`Open Instagram: ${item.caption}`}
        >
          <div className="relative aspect-square overflow-hidden bg-cream">
            <PlaceholderImage label={item.placeholder} aspectRatio="1/1" className="absolute inset-0" />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-200" />
          </div>
          <p className="mt-2 text-sm text-mid italic">{item.caption}</p>
        </motion.a>
      ))}
    </div>
  );
}
