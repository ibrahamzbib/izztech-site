'use client';

import { motion } from 'framer-motion';

const differentiators = [
  {
    label: 'Built to fit',
    desc: 'Every project starts with your workflow, not a template we reuse from the last client.',
  },
  {
    label: 'Clear scope',
    desc: 'You will know what we are building, what it costs, and when it ships before we start.',
  },
  {
    label: 'You own it',
    desc: 'When we are done, the code and everything around it is yours. No lock-in, no surprises.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-background">
      <div className="mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p
              className="text-[10px] font-bold tracking-[0.22em] uppercase text-text-muted mb-4"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              // About
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mb-6 leading-tight">
              Software that fits<br />the way you work.
            </h2>
            <p className="text-text-muted leading-relaxed mb-4 text-sm md:text-base">
              IZZ Tech Inc. is a small software studio founded by Ibraham Zbib. I started it
              because most businesses get stuck choosing between off-the-shelf tools that almost
              fit and big agencies that cost a fortune and move slowly.
            </p>
            <p className="text-text-muted leading-relaxed text-sm md:text-base">
              We are the option in between: senior software work, built directly around how your
              business actually runs, and handed over for you to keep.
            </p>
          </motion.div>

          {/* Right — differentiators */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="space-y-3"
          >
            {differentiators.map((d, i) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.08, ease: 'easeOut' }}
                whileHover={{ x: 3, transition: { duration: 0.15 } }}
                className="group rounded-xl p-5 border transition-all duration-300 cursor-default"
                style={{
                  borderColor: 'rgba(157,142,128,0.2)',
                  background: 'var(--surface)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(83,65,60,0.2)';
                  (e.currentTarget as HTMLDivElement).style.background  = '#fff';
                  (e.currentTarget as HTMLDivElement).style.boxShadow   = '0 6px 24px rgba(83,65,60,0.07)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(157,142,128,0.2)';
                  (e.currentTarget as HTMLDivElement).style.background  = 'var(--surface)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow   = 'none';
                }}
              >
                <div className="text-sm font-semibold text-text-primary mb-1 transition-colors duration-300 group-hover:text-umber">
                  {d.label}
                </div>
                <div className="text-sm text-text-muted leading-relaxed">{d.desc}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
