import { Link } from 'react-router-dom';

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-serif text-[1.05rem] tracking-[0.01em] px-6 py-3 transition-all duration-150 no-underline focus-visible:outline-2 focus-visible:outline focus-visible:outline-crimson focus-visible:outline-offset-2';

const variants = {
  primary:
    'bg-crimson text-white border border-crimson hover:bg-red hover:border-red active:bg-crimson',
  outline:
    'bg-transparent text-crimson border border-crimson hover:bg-crimson hover:text-white',
  ghost:
    'bg-transparent text-ink border border-transparent hover:text-crimson',
};

export default function Button({
  variant = 'primary',
  href,
  to,
  external = false,
  className = '',
  children,
  type = 'button',
  ...rest
}) {
  const classes = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;
  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    const linkProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};
    return (
      <a href={href} className={classes} {...linkProps} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
