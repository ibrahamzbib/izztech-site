'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Services',  href: '#services', id: 'nav-services' },
  { label: 'Process',   href: '#process',  id: 'nav-process'  },
  { label: 'About',     href: '#about',    id: 'nav-about'    },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  /* Text / border colours flip based on scroll position (hero is dark) */
  const linkColor  = scrolled ? 'text-text-secondary hover:text-text-primary' : 'text-white/60 hover:text-white';
  const logoColor  = scrolled ? 'text-text-primary' : 'text-white';
  const ctaBg      = scrolled ? 'bg-umber text-white hover:opacity-85' : 'border border-white/20 text-white/70 hover:bg-white/10';

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? 'bg-background/95 backdrop-blur border-b border-border-default py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a
              id="nav-logo"
              href="#"
              className={`text-sm font-semibold tracking-[0.15em] uppercase transition-colors duration-300 ${logoColor}`}
              style={{ fontFamily: 'var(--font-display)' }}
            >
              IZZ TECH INC
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  id={link.id}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 ${linkColor}`}
                >
                  {link.label}
                </a>
              ))}
              <a
                id="nav-cta"
                href="#contact"
                className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ml-2 ${ctaBg}`}
              >
                Contact
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen((p) => !p)}
              className={`md:hidden p-2 -mr-2 transition-colors duration-300 ${scrolled ? 'text-text-primary' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-lg">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={closeMobile}
                  className="text-text-secondary hover:text-text-primary font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMobile}
                className="btn-primary text-center mt-4"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
