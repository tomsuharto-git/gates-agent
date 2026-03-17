'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

export function SectionTask() {
  const ref = useScrollReveal();

  return (
    <section id="task" ref={ref} className="min-h-screen flex items-center py-32">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <div className="reveal">
          <span
            className="text-[11px] tracking-[0.2em] uppercase block mb-16"
            style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            The Task
          </span>
        </div>

        <h2
          className="reveal text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-12"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)' }}
        >
          Build a cause brand that behaves as culture.
        </h2>

        <div className="reveal space-y-6 text-lg md:text-xl leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          <p>
            Don&apos;t fight for attention against culture. Become culture.
          </p>

          <div
            className="mt-12 pt-12 border-t text-left max-w-[600px] mx-auto"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <div className="space-y-4 text-base">
              <p>
                <span style={{ color: 'var(--color-text-secondary)', opacity: 0.5 }}>Guilt</span>{' '}
                reaches the already-sympathetic.
              </p>
              <p>
                <span style={{ color: 'var(--color-text-secondary)', opacity: 0.5 }}>Wonk</span>{' '}
                reaches the already-informed.
              </p>
              <p>
                <span style={{ color: 'var(--color-text-secondary)', opacity: 0.5 }}>Shock</span>{' '}
                reaches the momentarily-activated.
              </p>
              <p style={{ color: 'var(--color-text)' }}>
                <span style={{ color: 'var(--color-accent)' }}>Culture</span>{' '}
                reaches everyone — because everyone is already in it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
