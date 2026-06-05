'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CTA() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="contact"
      className="py-32 px-6"
      style={{ background: 'var(--surface-alt)' }}
    >
      <div className="mx-auto max-w-xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p
            className="text-[10px] font-bold tracking-[0.22em] uppercase text-text-muted mb-6"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            // Get in Touch
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary mb-5">
            Ready to build?
          </h2>
          <p className="text-text-muted mb-10 leading-relaxed text-sm md:text-base">
            Tell us what you&apos;re trying to solve and we&apos;ll get back to you
            within a day.
          </p>

          <AnimatePresence mode="wait">
            {!expanded ? (
              <motion.button
                key="btn"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => setExpanded(true)}
                className="btn-primary cursor-pointer"
              >
                Start a conversation
              </motion.button>
            ) : (
              <motion.div
                key="card"
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="rounded-2xl p-6 md:p-8 max-w-sm mx-auto text-left flex flex-col gap-6 overflow-hidden"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid rgba(157,142,128,0.2)',
                  boxShadow: '0 8px 40px rgba(83,65,60,0.08)',
                }}
              >
                {/* Card header */}
                <div
                  className="flex justify-between items-center pb-4"
                  style={{ borderBottom: '1px solid rgba(157,142,128,0.18)' }}
                >
                  <h3 className="text-text-primary font-semibold text-base tracking-tight">
                    Contact Info
                  </h3>
                  <button
                    onClick={() => setExpanded(false)}
                    className="text-text-muted hover:text-text-primary transition-colors p-1"
                    aria-label="Close"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Email */}
                <a href="mailto:ibraham@izztech.io" className="flex items-center gap-4 group">
                  <div
                    className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center transition-colors duration-300"
                    style={{ background: 'rgba(212,205,196,0.35)', color: 'var(--umber)' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'var(--umber)'; (e.currentTarget as HTMLDivElement).style.color = '#fff'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(212,205,196,0.35)'; (e.currentTarget as HTMLDivElement).style.color = 'var(--umber)'; }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-text-muted font-bold mb-0.5 uppercase tracking-wider" style={{ fontFamily: 'var(--font-body)' }}>Email</div>
                    <div className="text-text-primary font-medium text-sm">ibraham@izztech.io</div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ibrahamzbib/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center transition-colors duration-300"
                    style={{ background: 'rgba(212,205,196,0.35)', color: 'var(--umber)' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'var(--umber)'; (e.currentTarget as HTMLDivElement).style.color = '#fff'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(212,205,196,0.35)'; (e.currentTarget as HTMLDivElement).style.color = 'var(--umber)'; }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-text-muted font-bold mb-0.5 uppercase tracking-wider" style={{ fontFamily: 'var(--font-body)' }}>LinkedIn</div>
                    <div className="text-text-primary font-medium text-sm">Connect with Ibraham</div>
                  </div>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
