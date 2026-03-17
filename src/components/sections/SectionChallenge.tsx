'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const layers = [
  {
    name: 'Proximity',
    description: 'My kid is here. Those kids are there. Proximity amplifies urgency.',
  },
  {
    name: 'Overwhelm',
    description: 'Rent, childcare, the news firehose, survival mode. Even parents who care are at capacity.',
  },
  {
    name: 'Infrastructure',
    description: 'The plumbing between caring and acting is broken. Donate to a foundation you\'ve vaguely heard of. Share a sad post. That\'s it.',
  },
  {
    name: 'Identity',
    description: 'No cultural signal for "I care about this." No mustache, no wristband, no red nose. Invisible values don\'t compound.',
  },
];

export function SectionChallenge() {
  const ref = useScrollReveal();

  return (
    <section id="challenge" ref={ref} className="py-32">
      <div className="max-w-[720px] mx-auto px-6">
        <div className="reveal">
          <span
            className="text-[11px] tracking-[0.2em] uppercase block mb-12"
            style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            The Challenge
          </span>
        </div>

        {/* The Belief — large manifesto statement */}
        <div className="reveal min-h-[50vh] flex items-center mb-24">
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl leading-[1.15] mb-8" style={{ fontFamily: 'var(--font-display)' }}>
              We believe there is enough{' '}
              <span style={{ color: 'var(--color-accent)' }}>love</span>{' '}
              in the world to ensure no child dies of a preventable cause before their fifth birthday.
            </h2>
            <p className="text-xl leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              The instinct to protect children is encoded in our DNA. It cuts across politics, income, education,
              geography, religion. The love is there. The question is why it isn&apos;t reaching the children who need it.
            </p>
          </div>
        </div>

        {/* The Layers */}
        <div className="reveal mb-8">
          <p className="text-lg mb-12" style={{ color: 'var(--color-text-secondary)' }}>
            Between the love and the action, there are layers.
            They&apos;re not signs of apathy — they&apos;re the real, legitimate weight of modern life.
          </p>
        </div>

        <div className="stagger space-y-6">
          {layers.map((layer, i) => (
            <div
              key={layer.name}
              className="reveal p-6 md:p-8 rounded-xl"
              style={{ backgroundColor: 'var(--color-surface)' }}
            >
              <div className="flex items-start gap-4">
                <span
                  className="text-sm font-medium mt-1 shrink-0"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', opacity: 0.6 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
                    The {layer.name} Layer
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {layer.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
