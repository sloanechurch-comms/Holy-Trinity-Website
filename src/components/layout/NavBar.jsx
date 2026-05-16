import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_ITEMS } from '../../data/static.js';
import Button from '../ui/Button.jsx';
import SearchBar from '../ui/SearchBar.jsx';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled ? 'bg-white/90 backdrop-blur border-b border-border' : 'bg-white border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-20">
          <Link
            to="/"
            className="no-underline group flex flex-col leading-none"
            aria-label="Holy Trinity Sloane Square home"
          >
            <span className="font-serif text-crimson text-xl sm:text-2xl tracking-tight group-hover:text-red transition-colors duration-150">
              Holy Trinity
            </span>
            <span className="font-sans text-ink text-[0.7rem] sm:text-xs uppercase tracking-[0.15em] mt-0.5">
              Sloane Square
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) => {
                  const sectionPath = item.href.split('/')[1];
                  const matchesSection = location.pathname.startsWith(`/${sectionPath}`);
                  const active = isActive || matchesSection;
                  return [
                    'no-underline relative font-sans text-[0.95rem] tracking-wide uppercase pb-1 transition-colors duration-150',
                    active ? 'text-crimson' : 'text-ink hover:text-crimson',
                  ].join(' ');
                }}
              >
                {({ isActive }) => {
                  const sectionPath = item.href.split('/')[1];
                  const matchesSection = location.pathname.startsWith(`/${sectionPath}`);
                  const active = isActive || matchesSection;
                  return (
                    <>
                      {item.label}
                      {active && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute left-0 right-0 -bottom-1 h-[2px] bg-crimson"
                          aria-hidden="true"
                        />
                      )}
                    </>
                  );
                }}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:block">
              <SearchBar />
            </div>
            <div className="hidden md:block">
              <Button to="/visit/plan-your-visit" variant="primary" className="text-sm py-2 px-4">
                Plan a visit
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 text-ink hover:text-crimson"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-0 top-18 bottom-0 bg-white border-t border-border overflow-y-auto"
          >
            <nav className="px-6 py-8" aria-label="Mobile primary">
              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      to={item.href}
                      className="block font-serif text-2xl text-ink hover:text-crimson py-3 no-underline"
                    >
                      {item.label}
                    </NavLink>
                    {item.children && (
                      <ul className="pl-4 pb-2">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <NavLink
                              to={child.href}
                              className="block text-mid hover:text-crimson py-1.5 no-underline text-base"
                            >
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3">
                <Button to="/visit/plan-your-visit" variant="primary">
                  Plan a visit
                </Button>
                <Button to="/support/give" variant="outline">
                  Give
                </Button>
              </div>
              <div className="mt-6 sm:hidden">
                <SearchBar compact />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
