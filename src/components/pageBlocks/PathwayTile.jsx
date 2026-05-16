import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PlaceholderImage from '../ui/PlaceholderImage.jsx';

export default function PathwayTile({ title, description, href, image, placeholder, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        to={href}
        className="group block no-underline transition-transform duration-200 hover:-translate-y-0.5"
      >
        <div className="relative overflow-hidden border border-border bg-cream">
          {image ? (
            <img
              src={image}
              alt={placeholder || title}
              loading="lazy"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : (
            <PlaceholderImage label={placeholder || title} aspectRatio="4/3" />
          )}
        </div>
        <div className="pt-5">
          <h2 className="font-serif text-h2 text-red group-hover:text-crimson transition-colors">{title}</h2>
          <p className="mt-2 text-ink text-base">{description}</p>
          <span className="inline-block mt-3 font-sans text-sm uppercase tracking-wider text-crimson">
            Read more <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
