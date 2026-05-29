'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Services', href: '#services', id: 'nav-services' },
  { label: 'Process', href: '#process', id: 'nav-process' },
  { label: 'About', href: '#about', id: 'nav-about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled ? 'bg-background/90 backdrop-blur border-b border-border-default py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-center justify-between">
            {/* ── Logo ── */}
            <a
              id="nav-logo"
              href="#"
              className="text-lg font-semibold tracking-tight text-text-primary transition-opacity hover:opacity-70"
            >
              IZZ TECH
            </a>

            {/* ── Desktop Navigation ── */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  id={link.id}
                  href={link.href}
                  className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                id="nav-cta"
                href="#contact"
                className="text-sm font-medium text-accent-3 bg-accent-3/10 px-4 py-2 rounded-full transition-colors hover:bg-accent-3 hover:text-white ml-4"
              >
                Contact
              </a>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden p-2 -mr-2 text-text-primary"
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
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
                  className="text-text-secondary hover:text-text-primary font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMobile}
                className="text-white bg-accent-3 text-center py-3 rounded-lg font-medium mt-4"
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
