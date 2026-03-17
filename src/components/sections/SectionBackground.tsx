'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const stats = [
  { value: '$200B', label: 'committed over 20 years' },
  { value: '10M → 5M', label: 'child deaths cut in half, 2000–2020' },
  { value: '4.8M', label: 'projected child deaths in 2025 — first increase this century' },
  { value: '6.5s', label: 'a child dies from a preventable cause' },
];

const costs = [
  { item: 'ORS packet', cost: 'A few cents', impact: 'Prevents death from dehydration' },
  { item: 'Bed net', cost: '$2', impact: 'Protects 2 people for 3–4 years' },
  { item: 'Amoxicillin', cost: 'Under $1', impact: 'Cures most bacterial pneumonia' },
  { item: 'Primary care', cost: '<$100/yr', impact: 'Prevents 90% of child deaths' },
  { item: 'Immunization', cost: '$1 invested', impact: 'Returns $54' },
];

export function SectionBackground() {
  const ref = useScrollReveal();

  return (
    <section id="background" ref={ref} className="min-h-screen flex items-center py-32">
      <div className="max-w-[720px] mx-auto px-6">
        <div className="reveal">
          <span
            className="text-[11px] tracking-[0.2em] uppercase block mb-12"
            style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            Background
          </span>
        </div>

        <h2 className="reveal text-4xl md:text-5xl leading-tight mb-16" style={{ fontFamily: 'var(--font-display)' }}>
          The Gates Foundation has committed{' '}
          <span style={{ color: 'var(--color-accent)' }}>$200 billion</span> over 20 years
          to ensure no child dies of a preventable cause before age 5.
        </h2>

        <div className="reveal space-y-6 text-lg leading-relaxed mb-20" style={{ color: 'var(--color-text-secondary)' }}>
          <p>
            From 2000 to 2020, child mortality was cut in half — 10 million annual deaths down to 5 million.
            That progress was financed: GAVI, vaccines, bed nets, ORS (oral rehydration salts — pennies per dose), skilled birth attendance.
          </p>
          <p>
            For the first time this century, child deaths are projected to{' '}
            <span style={{ color: 'var(--color-accent-alt)' }}>increase</span>.
            Development aid is going negative. The systems that saved millions of children are being defunded.
          </p>
        </div>

        {/* Stat blocks */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat) => (
            <div key={stat.label} className="border-t pt-4" style={{ borderColor: 'var(--color-border)' }}>
              <div
                className="text-2xl md:text-3xl mb-2"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}
              >
                {stat.value}
              </div>
              <div className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* The scandal of preventability */}
        <div className="reveal mb-16">
          <h3 className="text-2xl md:text-3xl mb-10" style={{ fontFamily: 'var(--font-display)' }}>
            The solutions exist. They&apos;re proven. They&apos;re cheap.
          </h3>

          <div className="space-y-4">
            {costs.map((c) => (
              <div
                key={c.item}
                className="flex items-baseline gap-4 py-3 border-b"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <span className="text-sm font-medium w-32 shrink-0" style={{ color: 'var(--color-text)' }}>
                  {c.item}
                </span>
                <span
                  className="text-sm w-24 shrink-0"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}
                >
                  {c.cost}
                </span>
                <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  {c.impact}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal py-12 border-t border-b" style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-xl md:text-2xl leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            The barrier is not the cure. It&apos;s the gap between where the child lives and where the cure is.
            That gap is a choice, not a fact of nature.
          </p>
        </div>
      </div>
    </section>
  );
}
