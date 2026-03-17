'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

export function SectionAssignment() {
  const ref = useScrollReveal();

  return (
    <section id="assignment" ref={ref} className="min-h-[60vh] flex items-center py-24">
      <div className="max-w-[720px] mx-auto px-6">
        <div className="reveal">
          <span
            className="text-[11px] tracking-[0.2em] uppercase block mb-12"
            style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            Assignment
          </span>
        </div>

        <div className="reveal space-y-8 text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          <p className="text-2xl md:text-3xl leading-snug" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-display)' }}>
            A multi-year campaign that engages new parents in the US, UK, and Germany
            to care about saving children&apos;s lives.
          </p>

          <p>
            3–5 years of sustained effort. Not a campaign cycle. A movement.
          </p>

          <p>
            The goal: inspire, engage, and mobilize public audiences — laddering to political pressure
            on decision-makers to maintain development funding.
          </p>

          <p>
            Something &ldquo;others can pick up and carry.&rdquo; A movement brand, not a foundation campaign.
          </p>
        </div>

        <div className="reveal mt-16 pl-6 border-l-2" style={{ borderColor: 'var(--color-accent)' }}>
          <p className="text-lg italic" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-display)' }}>
            &ldquo;I have never worked on something this ambitious in my career.&rdquo;
          </p>
          <p className="text-sm mt-3" style={{ color: 'var(--color-text-secondary)' }}>
            — Amanda Nichol, Content &amp; Campaigns Lead
          </p>
        </div>
      </div>
    </section>
  );
}
