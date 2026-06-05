'use client';

const ITEMS = [
  'Custom Software',
  'AI Systems',
  'B2B Solutions',
  'Automation',
  'Scalable Infrastructure',
  'Rapid Delivery',
  'Custom Software',
  'AI Systems',
  'B2B Solutions',
  'Automation',
  'Scalable Infrastructure',
  'Rapid Delivery',
];

export default function Ticker() {
  return (
    <div
      className="overflow-hidden py-3.5"
      style={{
        background: 'var(--surface-alt)',
        borderTop:    '1px solid rgba(157,142,128,0.18)',
        borderBottom: '1px solid rgba(157,142,128,0.18)',
      }}
    >
      <div className="marquee-track flex gap-0 w-max whitespace-nowrap">
        {ITEMS.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <span
              className="text-[10px] font-semibold tracking-[0.22em] uppercase px-6"
              style={{ color: 'rgba(83,65,60,0.4)' }}
            >
              {item}
            </span>
            <span
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: 'rgba(157,142,128,0.35)' }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
