'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  IconRelationship,
  IconEnemy,
  IconCulture,
  IconWinning,
  IconMovement,
} from '@/components/icons/ImperativeIcons';

interface Example {
  name: string;
  description: string;
  credential?: string;
}

interface Takeaway {
  headline: string;
  description: string;
}

interface Imperative {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  examples: Example[];
  takeaway: Takeaway;
}

const imperatives: Imperative[] = [
  {
    number: 1,
    title: 'Humans, not issues.',
    subtitle: 'We\'re wired to care about people. No one is wired to care about policy. Start with the biology.',
    description: 'The most durable movements center a human relationship, not a policy position. Issues polarize. Relationships don\'t. The moment a cause becomes "an issue," it activates political identity and divides the very audience you need to unite.',
    icon: IconRelationship,
    examples: [
      {
        name: 'Girl Effect',
        description: 'Reframed an entire development sector around the relationship to girls — not poverty, not policy. When you center the relationship, not the problem, everything else follows.',
      },
      {
        name: 'Sternsinger',
        description: 'Children as agents, parents\' pride. 66 years, 300K children annually. The relationship renews the audience with every generation because it\'s human, not institutional.',
      },
    ],
    takeaway: {
      headline: 'Tap the empathy surge.',
      description: 'New parents experience a biological spike in their instinct to protect ALL children. That\'s the entry point. Move it from a passive feeling to a visible, claimable identity. Not "donate to help children" but "I\'m someone who believes every child deserves to reach five." Identity, not obligation.',
    },
  },
  {
    number: 2,
    title: 'Identify an enemy.',
    subtitle: 'The brand needs something to fight. Pick one. Be laser-focused.',
    description: 'Every successful movement brand has something it\'s AGAINST, not just something it\'s FOR. The enemy creates tension, urgency, and a reason to act now — it turns passive sympathy into active participation.',
    icon: IconEnemy,
    examples: [
      {
        name: 'Truth',
        description: '22% of youth smoking decline attributed to naming the tobacco industry as villain. The enemy made non-participation feel like complicity.',
        credential: '72andSunny\'s "Finish It" era',
      },
      {
        name: 'Kony 2012',
        description: 'Made one person the most recognizable villain on earth in 72 hours. 100M views. Enemy clarity was exceptional — even when the execution collapsed.',
      },
    ],
    takeaway: {
      headline: 'The enemy must be bipartisan.',
      description: 'In a polarized landscape, the enemy can\'t code as left or right. Preventability. Indifference. The gap between caring and acting. Something no reasonable person would defend. The enemy can be loud or quiet, but the clarity is not optional.',
    },
  },
  {
    number: 3,
    title: 'Behave as culture.',
    subtitle: 'Show up where culture lives, not where causes live. If it looks like a charity, you\'ve already lost.',
    description: 'People have an immune system for cause marketing — they spot it in milliseconds and scroll past. The most successful movements broke that coding entirely by becoming indistinguishable from the culture around them.',
    icon: IconCulture,
    examples: [
      {
        name: 'Movember',
        description: 'Coded as annual cultural tradition, not charity. The name IS culture. At peak, genuine cultural ubiquity — sitcoms, feature articles, a fixture of November.',
      },
      {
        name: 'Liquid Death',
        description: 'The cause travels inside the brand, not on top of it. People come for the brand personality. They leave with the environmental impact. The cause is invisible until you look for it.',
      },
    ],
    takeaway: {
      headline: 'Live in parenting culture, not cause culture.',
      description: 'Show up in parenting apps, not nonprofit newsletters. Retail partnerships, not donation pages. The energy of "join us" not "help them." If you removed all mention of child survival and it still looked like a cause ad, it fails.',
    },
  },
  {
    number: 4,
    title: 'Make it feel like winning.',
    subtitle: 'Don\'t ask for sacrifice. Align with how people already want to behave. Every level should be rewarding.',
    description: 'The incentive architecture around causes is backwards — you give something and get almost nothing visible in return. Meanwhile, every other system in people\'s lives makes participation rewarding.',
    icon: IconWinning,
    examples: [
      {
        name: 'Ice Bucket Challenge',
        description: 'The dare mechanic made participation genuinely fun. $115M in 6 weeks \u2192 NEK1 gene discovery \u2192 FDA-approved drug. Complete ladder from fun to life-saving outcome.',
      },
      {
        name: 'Charity Water',
        description: 'Birthday sacrifice reframed as status. GPS proof loop makes giving feel certain, not abstract. The strongest retention mechanic in cause marketing.',
      },
    ],
    takeaway: {
      headline: 'Design every level to feel like gaining, not losing.',
      description: 'Social currency, belonging, fun, visible impact. The first action should cost almost nothing. But the ceiling is high for people who want to go deeper. New parents are time-poor — the entry point must be effortless.',
    },
  },
  {
    number: 5,
    title: 'Build a movement, not a funnel.',
    subtitle: 'Concentric circles of commitment. Proof at every level. Design it to travel without you.',
    description: 'The traditional funnel ends at a donation. Movements build concentric circles — recognize, identify, signal, participate, advocate — where every level generates visible proof.',
    icon: IconMovement,
    examples: [
      {
        name: 'GivingTuesday',
        description: 'Scaled to 105 countries by giving the brand away. Distributed ownership = distributed growth. The Gates Foundation gave them $10M because the model works.',
      },
      {
        name: 'Band Aid \u2192 Live 8 \u2192 G8',
        description: 'The only complete culture-to-policy sequence. Entertainment created consciousness. Advocacy converted it to policy demands. Result: $40B in debt relief.',
      },
    ],
    takeaway: {
      headline: 'Outer circles create social data. Inner circles create political pressure.',
      description: 'The Foundation\'s real KPI is visible signals that decision-makers see. The movement must generate public proof that makes cutting development funding politically costly. Design the circles so the brand travels without the Gates logo on it.',
    },
  },
];

function ExampleCard({ example }: { example: Example }) {
  return (
    <div
      className="p-5 rounded-lg border flex-1 min-w-0"
      style={{ borderColor: 'var(--color-border)', backgroundColor: 'rgba(26,26,26,0.5)' }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: 'var(--color-accent)' }}
        />
        <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
          {example.name}
        </span>
        {example.credential && (
          <span className="text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full" style={{ color: 'var(--color-accent)', backgroundColor: 'rgba(232,195,104,0.1)' }}>
            {example.credential}
          </span>
        )}
      </div>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        {example.description}
      </p>
    </div>
  );
}

function TakeawayCard({ takeaway }: { takeaway: Takeaway }) {
  return (
    <div
      className="p-6 rounded-lg border"
      style={{ borderColor: 'rgba(232,195,104,0.25)', backgroundColor: 'rgba(232,195,104,0.04)' }}
    >
      <span
        className="text-[10px] tracking-wider uppercase block mb-3"
        style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', opacity: 0.7 }}
      >
        Gates Takeaway
      </span>
      <h4
        className="text-lg mb-2"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)' }}
      >
        {takeaway.headline}
      </h4>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        {takeaway.description}
      </p>
    </div>
  );
}

function ImperativeBlock({ imp }: { imp: Imperative }) {
  const Icon = imp.icon;

  return (
    <div className="reveal py-16 first:pt-0">
      {/* Header: icon + title + subtitle + description */}
      <div className="flex items-start gap-5 mb-8">
        <div
          className="shrink-0 p-3 rounded-xl"
          style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-accent)' }}
        >
          <Icon size={40} />
        </div>
        <div>
          <span
            className="text-xs tracking-wider uppercase block mb-2"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', opacity: 0.6 }}
          >
            Imperative {imp.number}
          </span>
          <h3
            className="text-2xl md:text-3xl mb-2"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}
          >
            {imp.title}
          </h3>
          <p
            className="text-base italic"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-secondary)' }}
          >
            {imp.subtitle}
          </p>
          <p
            className="text-[15px] leading-relaxed mt-4"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {imp.description}
          </p>
        </div>
      </div>

      {/* Examples */}
      <div className="flex flex-col md:flex-row gap-4 ml-0 md:ml-[76px] mb-4">
        {imp.examples.map((ex) => (
          <ExampleCard key={ex.name} example={ex} />
        ))}
      </div>

      {/* Gates Takeaway */}
      <div className="ml-0 md:ml-[76px]">
        <TakeawayCard takeaway={imp.takeaway} />
      </div>
    </div>
  );
}

export function SectionImperatives() {
  const ref = useScrollReveal();

  return (
    <section id="imperatives" ref={ref} className="py-32">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="reveal">
          <span
            className="text-[11px] tracking-[0.2em] uppercase block mb-12"
            style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            Strategic Imperatives
          </span>
        </div>

        <h2 className="reveal text-3xl md:text-4xl leading-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          Five rules of the road.
        </h2>
        <p className="reveal text-lg mb-16" style={{ color: 'var(--color-text-secondary)' }}>
          Not campaign messages — strategic principles that should govern every decision about what this movement brand is,
          how it shows up, and what it asks of people.
          Pressure-tested against 18 case studies spanning 40 years.
        </p>

        <div className="divide-y" style={{ borderColor: 'var(--color-border)' }}>
          {imperatives.map((imp) => (
            <ImperativeBlock key={imp.number} imp={imp} />
          ))}
        </div>
      </div>
    </section>
  );
}
