'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CTA() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="contact" className="py-32 px-6">
      <div className="mx-auto max-w-xl text-center border-t border-border-default/50 pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-medium tracking-tight text-text-primary mb-6">
            Ready to simplify?
          </h2>
          <p className="text-text-secondary mb-10">
            Let's discuss how automation can give your team its time back.
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
                className="inline-flex items-center justify-center bg-accent-3 text-white px-8 py-3.5 rounded-full text-sm font-medium transition-opacity hover:opacity-90 cursor-pointer"
              >
                Get in touch
              </motion.button>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-[#F9F9F8] border border-border-default/50 rounded-2xl p-6 md:p-8 max-w-sm mx-auto text-left flex flex-col gap-6 overflow-hidden shadow-sm"
              >
                <div className="flex justify-between items-center border-b border-border-default/50 pb-4">
                  <h3 className="text-text-primary font-semibold text-lg tracking-tight">Contact Info</h3>
                  <button 
                    onClick={() => setExpanded(false)}
                    className="text-text-muted hover:text-text-primary transition-colors p-1"
                    aria-label="Close"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <a href="mailto:ibraham@izztech.io" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-accent-1/30 flex items-center justify-center text-accent-3 group-hover:bg-accent-3 group-hover:text-white transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-text-muted font-bold mb-0.5 uppercase tracking-wider">Email</div>
                    <div className="text-text-primary font-medium text-sm">ibraham@izztech.io</div>
                  </div>
                </a>

                <a href="tel:+15550000000" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-accent-1/30 flex items-center justify-center text-accent-3 group-hover:bg-accent-3 group-hover:text-white transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-text-muted font-bold mb-0.5 uppercase tracking-wider">Phone</div>
                    <div className="text-text-primary font-medium text-sm">(555) 000-0000</div>
                  </div>
                </a>

                <a href="https://linkedin.com/in/ibrahamzbib" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-accent-1/30 flex items-center justify-center text-accent-3 group-hover:bg-accent-3 group-hover:text-white transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-text-muted font-bold mb-0.5 uppercase tracking-wider">LinkedIn</div>
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
