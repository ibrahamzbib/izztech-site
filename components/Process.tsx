'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Discover',
    description:
      'We start by understanding how your business actually runs, then figure out where software can save you the most time and money.',
  },
  {
    num: '02',
    title: 'Plan',
    description:
      'We map out the build around your real constraints: your budget, your timeline, and the tools you already use day to day.',
  },
  {
    num: '03',
    title: 'Build & Deliver',
    description:
      'We build in short cycles and get working software in your hands early, so you are never waiting months to see real progress.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 px-6" style={{ background: 'var(--surface-alt)' }}>
      <div className="mx-auto max-w-5xl">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="text-[10px] font-bold tracking-[0.22em] uppercase text-text-muted mb-4"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          // How We Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mb-16"
        >
          Approach
        </motion.h2>

        <div className="space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
              className="group flex gap-8 md:gap-16 py-10"
              style={{
                borderBottom: index < steps.length - 1
                  ? '1px solid rgba(157,142,128,0.2)'
                  : 'none',
              }}
            >
              {/* Step number */}
              <div className="flex-shrink-0 pt-0.5">
                <span
                  className="text-sm font-bold tracking-[0.1em] transition-colors duration-300 group-hover:text-umber"
                  style={{ color: 'rgba(157,142,128,0.5)', fontFamily: 'var(--font-display)' }}
                >
                  {step.num}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
