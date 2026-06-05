'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--hero-bg)' }}
    >
      {/* Animated warm glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="blob-1 absolute -top-48 -left-24 w-[650px] h-[650px] rounded-full blur-[140px]"
             style={{ background: 'rgba(83,65,60,0.35)' }} />
        <div className="blob-2 absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full blur-[120px]"
             style={{ background: 'rgba(157,142,128,0.2)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px]"
             style={{ background: 'rgba(212,205,196,0.05)' }} />
      </div>

      {/* Dot grid overlay */}
      <div className="dot-grid-dark absolute inset-0 pointer-events-none" aria-hidden />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-40 pb-32 md:pt-52 md:pb-44">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2.5 mb-10 px-3.5 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.2em] uppercase"
          style={{
            border: '1px solid rgba(212,205,196,0.18)',
            color: 'rgba(212,205,196,0.5)',
            fontFamily: 'var(--font-body)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'rgba(212,205,196,0.45)' }} />
          IZZ Tech Inc. · B2B Software Studio
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl md:text-5xl lg:text-[3.75rem] font-semibold tracking-tight text-white leading-[1.1] mb-6"
        >
          We build the software<br />
          your business{' '}
          <span className="gradient-text">actually needs.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: 'easeOut' }}
          className="text-base md:text-lg leading-relaxed mb-12 max-w-xl"
          style={{ color: 'rgba(212,205,196,0.52)' }}
        >
          IZZ Tech Inc. is a software studio. We design and build custom tools,
          AI systems, and automation for companies that have outgrown
          spreadsheets and off-the-shelf apps.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3 }}
          className="flex flex-wrap items-center gap-5"
        >
          <a
            href="#contact"
            className="btn-primary group"
          >
            Start a conversation
            <svg
              className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#services"
            className="text-sm font-medium transition-colors duration-300"
            style={{ color: 'rgba(212,205,196,0.4)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(212,205,196,0.75)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(212,205,196,0.4)')}
          >
            See what we build →
          </a>
        </motion.div>

        {/* Divider stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.55 }}
          className="mt-20 pt-8 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3 max-w-lg"
          style={{ borderTop: '1px solid rgba(212,205,196,0.1)' }}
        >
          {[
            'Custom software',
            'AI & automation',
            'Web platforms',
            'Systems integration',
            'Data & dashboards',
            'Internal tools',
          ].map((label) => (
            <div key={label}>
              <div
                className="text-[11px] font-semibold tracking-[0.12em] uppercase leading-relaxed"
                style={{ color: 'rgba(212,205,196,0.5)', fontFamily: 'var(--font-body)' }}
              >
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
