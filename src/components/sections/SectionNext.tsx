'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const timeline = [
  { date: 'April 1', label: 'Written submission', detail: 'Capabilities, case studies, initial strategic/creative thinking' },
  { date: 'April 20', label: 'Tissue session', detail: '45 min early concept review (optional)' },
  { date: 'Late April', label: 'Final presentation', detail: '60 min pitch to the full Foundation team' },
];

export function SectionNext() {
  const ref = useScrollReveal();

  return (
    <section id="next" ref={ref} className="py-32">
      <div className="max-w-[720px] mx-auto px-6">
        <div className="reveal">
          <span
            className="text-[11px] tracking-[0.2em] uppercase block mb-12"
            style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            Next
          </span>
        </div>

        <h2 className="reveal text-3xl md:text-4xl leading-tight mb-8" style={{ fontFamily: 'var(--font-display)' }}>
          This is our initial thinking.
          We want to develop it together.
        </h2>

        <p className="reveal text-lg mb-16" style={{ color: 'var(--color-text-secondary)' }}>
          Which of these directions excites you? Where should we go deeper?
          The strategy is the foundation. The creative territories are starting positions, not final answers.
        </p>

        {/* Timeline */}
        <div className="reveal space-y-0 mb-20">
          {timeline.map((t, i) => (
            <div key={t.date} className="flex gap-6 pb-8 last:pb-0">
              <div className="flex flex-col items-center">
                <div
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: i === 0 ? 'var(--color-accent)' : 'var(--color-border)' }}
                />
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 mt-2" style={{ backgroundColor: 'var(--color-border)' }} />
                )}
              </div>
              <div className="pb-4">
                <div className="flex items-baseline gap-3 mb-1">
                  <span
                    className="text-sm font-medium"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}
                  >
                    {t.date}
                  </span>
                  <span className="text-base" style={{ color: 'var(--color-text)' }}>
                    {t.label}
                  </span>
                </div>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  {t.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing */}
        <div
          className="reveal p-8 md:p-12 rounded-xl text-center"
          style={{ backgroundColor: 'var(--color-surface)' }}
        >
          <p className="text-2xl md:text-3xl leading-relaxed mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            No movement brand in history has scored A across all five imperatives.
          </p>
          <p className="text-lg" style={{ color: 'var(--color-accent)' }}>
            That gap is the opportunity.
          </p>
        </div>

        {/* Footer */}
        <div className="reveal mt-24 pt-8 border-t text-center" style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)', opacity: 0.4 }}>
            Prepared by Hecho Studios (Stagwell / 72andSunny)
          </p>
        </div>
      </div>
    </section>
  );
}
