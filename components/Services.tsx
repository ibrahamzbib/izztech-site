'use client';

import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Custom Software',
    description:
      'Tools built around how your team actually works, instead of forcing your team to work around the tool. We replace the spreadsheets and patched-together apps you have outgrown.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'AI & Automation',
    description:
      'We put AI and automation to work on the repetitive parts of your business, so your team can spend its time on the work that actually moves the needle.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Web Platforms',
    description:
      'Fast, reliable web apps, APIs, and the infrastructure behind them, built to grow with you and hold up under real traffic.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Systems Integration',
    description:
      'We connect the tools you already pay for, so your CRM, payments, email, and the rest finally talk to each other and stop making your team copy data by hand.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Data & Dashboards',
    description:
      'We pull your scattered business data into one live dashboard your team can actually read, so you can see what is working without digging through spreadsheets.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="3" y1="21" x2="21" y2="21" />
        <rect x="5" y="11" width="3.5" height="7" rx="0.5" />
        <rect x="10.5" y="6" width="3.5" height="12" rx="0.5" />
        <rect x="16" y="14" width="3.5" height="4" rx="0.5" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Internal Tools',
    description:
      'Custom back-office software built for the way you operate: client portals, ops dashboards, booking and inventory systems, and the admin panels that hold it together.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-background">
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
          // What We Build
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mb-14"
        >
          Capabilities
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.num}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-surface rounded-2xl p-7 border cursor-default transition-all duration-300"
              style={{
                borderColor: 'rgba(157,142,128,0.18)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(83,65,60,0.25)';
                (e.currentTarget as HTMLDivElement).style.boxShadow  = '0 12px 40px rgba(83,65,60,0.09)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(157,142,128,0.18)';
                (e.currentTarget as HTMLDivElement).style.boxShadow  = 'none';
              }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
                style={{
                  background: 'rgba(212,205,196,0.35)',
                  color: 'var(--umber)',
                }}
              >
                {svc.icon}
              </div>

              {/* Number */}
              <p
                className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3 transition-colors duration-300"
                style={{ color: 'rgba(157,142,128,0.5)', fontFamily: 'var(--font-body)' }}
              >
                {svc.num}
              </p>

              <h3 className="text-base font-semibold text-text-primary mb-3 leading-snug">
                {svc.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {svc.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
