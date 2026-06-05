'use client';

export default function Footer() {
  return (
    <footer className="py-12 px-6" style={{ background: 'var(--hero-bg)' }}>
      <div
        className="mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
        style={{ color: 'rgba(212,205,196,0.35)' }}
      >
        <div
          className="font-semibold tracking-[0.15em] uppercase text-sm"
          style={{ color: 'rgba(212,205,196,0.65)', fontFamily: 'var(--font-display)' }}
        >
          IZZ TECH INC
        </div>

        <div style={{ color: 'rgba(212,205,196,0.3)' }}>
          &copy; {new Date().getFullYear()} IZZ Tech Inc. All rights reserved.
        </div>

        <div className="flex gap-6">
          <a
            href="mailto:ibraham@izztech.io"
            className="transition-colors duration-200"
            style={{ color: 'rgba(212,205,196,0.35)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(212,205,196,0.7)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(212,205,196,0.35)')}
          >
            ibraham@izztech.io
          </a>
          <span style={{ color: 'rgba(212,205,196,0.25)' }}>Palm City, FL</span>
        </div>
      </div>
    </footer>
  );
}
