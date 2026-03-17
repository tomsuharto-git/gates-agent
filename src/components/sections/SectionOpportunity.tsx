'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

export function SectionOpportunity() {
  const ref = useScrollReveal();

  return (
    <section id="opportunity" ref={ref} className="min-h-[70vh] flex items-center py-32">
      <div className="max-w-[720px] mx-auto px-6 text-center">
        <div className="reveal">
          <span
            className="text-[11px] tracking-[0.2em] uppercase block mb-16"
            style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            Opportunity
          </span>
        </div>

        <h2
          className="reveal text-3xl md:text-5xl lg:text-6xl leading-[1.15] mb-12"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)' }}
        >
          No one has done all five.
        </h2>

        <div className="reveal space-y-6 text-lg leading-relaxed max-w-[600px] mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
          <p>
            The components exist in isolation. Movember nailed culture. Truth nailed the enemy.
            Ice Bucket nailed winning. GivingTuesday nailed the movement model.
          </p>
          <p>
            But no one has assembled them into a single architecture.
          </p>
          <p style={{ color: 'var(--color-text)' }}>
            The opportunity: invent the future of cause marketing by synthesizing
            these lessons into a modern playbook. This is not incremental improvement.
            It&apos;s a new category.
          </p>
        </div>
      </div>
    </section>
  );
}
