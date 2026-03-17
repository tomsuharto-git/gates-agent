'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const playbooks = [
  {
    name: 'The Guilt Engine',
    description: 'Sad image. Swelling music. Donate now. Works on a shrinking, already-sympathetic audience. Creates compassion fatigue.',
  },
  {
    name: 'The Wonk Brief',
    description: 'Data. Policy papers. Goalkeepers Reports. Intellectually rigorous, emotionally inert. The Foundation\'s comfort zone — and exactly why they wrote this RFP.',
  },
  {
    name: 'The Shock Loop',
    description: 'Algorithmic outrage. Burns hot, fades fast. Clicks, not commitment. Optimized for attention spikes, not sustained behavior change.',
  },
];

export function SectionWontWork() {
  const ref = useScrollReveal();

  return (
    <section id="wont-work" ref={ref} className="py-24">
      <div className="max-w-[720px] mx-auto px-6">
        <div className="reveal">
          <span
            className="text-[11px] tracking-[0.2em] uppercase block mb-12"
            style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            What Won&apos;t Work
          </span>
        </div>

        <div className="stagger space-y-6 mb-16">
          {playbooks.map((p) => (
            <div
              key={p.name}
              className="reveal group relative p-6 md:p-8 rounded-xl border transition-all duration-500"
              style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}
            >
              <h3
                className="text-xl mb-3 transition-opacity duration-500 group-hover:opacity-40"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}
              >
                {p.name}
              </h3>
              <p
                className="text-base leading-relaxed transition-opacity duration-500 group-hover:opacity-30"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {p.description}
              </p>
              {/* Strikethrough on hover */}
              <div
                className="absolute top-1/2 left-6 right-6 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ backgroundColor: 'var(--color-accent-alt)' }}
              />
            </div>
          ))}
        </div>

        <div className="reveal">
          <p className="text-xl md:text-2xl leading-relaxed" style={{ fontFamily: 'var(--font-display)' }}>
            They&apos;re conversion tactics masquerading as brand strategies.{' '}
            <span style={{ color: 'var(--color-accent-alt)' }}>
              None of them operate as culture.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
