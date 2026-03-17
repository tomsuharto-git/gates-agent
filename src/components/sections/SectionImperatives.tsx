'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  IconRelationship,
  IconEnemy,
  IconCulture,
  IconWinning,
  IconMovement,
} from '@/components/icons/ImperativeIcons';

interface CaseStudy {
  name: string;
  lesson: string;
  credential?: string;
}

interface Imperative {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  cases: CaseStudy[];
}

const imperatives: Imperative[] = [
  {
    number: 1,
    title: 'Center the relationship to kids.',
    subtitle: 'Everyone has one. It cuts across every divide. Start there.',
    description: 'New parents experience an empathy surge — their instinct to protect ALL children spikes in the first years of parenthood. That\'s the entry point. The strategic job is to move that orientation from a passive feeling to a visible, claimable identity. Not "donate to help children" but "I\'m someone who believes every child deserves to reach five." Identity, not obligation.',
    icon: IconRelationship,
    cases: [
      {
        name: 'Sternsinger',
        lesson: 'Children as agents, parents\' pride. 66 years, 300K children annually. The relationship renews the audience with every generation.',
      },
      {
        name: 'Girl Effect',
        lesson: 'Made the relationship to girls the lens for an entire sector\'s strategy. When you center the relationship — not the problem — everything else follows.',
      },
    ],
  },
  {
    number: 2,
    title: 'Identify an enemy.',
    subtitle: 'The brand needs something to fight. Pick one. Be laser-focused.',
    description: 'Every successful movement brand has something it\'s AGAINST, not just something it\'s FOR. The enemy creates tension, urgency, and a reason to act now. It must be bipartisan — something no reasonable person would defend. Different ways in may propose different enemies: preventability, indifference, the gap between caring and acting. The enemy can be loud or quiet. The clarity is not optional.',
    icon: IconEnemy,
    cases: [
      {
        name: 'Truth',
        lesson: '22% of youth smoking decline attributed to naming the tobacco industry as villain. The enemy made non-participation feel like complicity.',
        credential: '72andSunny\'s "Finish It" era',
      },
      {
        name: 'Kony 2012',
        lesson: 'Made one person the most recognizable villain on earth in 72 hours. 100M views. Enemy clarity was exceptional.',
      },
    ],
  },
  {
    number: 3,
    title: 'Behave as culture.',
    subtitle: 'Show up where culture lives, not where causes live. If it looks like a charity, you\'ve already lost.',
    description: 'People have an immune system for cause marketing — they spot it in milliseconds and scroll past. The brand must break that coding entirely. Show up in parenting apps, not nonprofit newsletters. Retail partnerships, not donation pages. Look like a brand, not a charity. Sound confident, not pleading. The energy of "join us" not "help them." If you removed all mention of child survival and it still looked like a cause ad, it fails.',
    icon: IconCulture,
    cases: [
      {
        name: 'Movember',
        lesson: 'Coded as annual cultural tradition, not charity. The name IS culture. At peak, genuine cultural ubiquity — sitcoms, feature articles, a fixture of November.',
      },
      {
        name: 'Liquid Death',
        lesson: 'The cause travels inside the brand, not on top of it. People come for the brand personality. They leave with the environmental impact.',
      },
    ],
  },
  {
    number: 4,
    title: 'Make it feel like winning.',
    subtitle: 'Don\'t ask for sacrifice. Align with how people already want to behave. Every level should be rewarding.',
    description: 'The incentive architecture around causes is backwards — you give something and get almost nothing visible in return. Meanwhile, every other system in people\'s lives makes participation rewarding. Design every level of engagement to feel like gaining, not losing: social currency, belonging, fun, visible impact. The first action should cost almost nothing. But the ceiling is high for people who want to go deeper.',
    icon: IconWinning,
    cases: [
      {
        name: 'Ice Bucket Challenge',
        lesson: 'The dare mechanic made participation genuinely fun. $115M in 6 weeks → NEK1 gene discovery → FDA-approved drug. Complete ladder from fun to life-saving outcome.',
      },
      {
        name: 'Charity Water',
        lesson: 'Birthday sacrifice reframed as status. GPS proof loop makes giving feel certain, not abstract. The strongest retention mechanic in cause marketing.',
      },
    ],
  },
  {
    number: 5,
    title: 'Build a movement, not a funnel.',
    subtitle: 'Concentric circles of commitment. Proof at every level. Signals decision-makers can see.',
    description: 'The traditional funnel ends at a donation. The movement funnel is concentric circles: recognize, identify, signal, participate, advocate. Every circle generates visible signals — the outer circles create social data, the inner circles create the physical and political signals that decision-makers see. This is how you answer the Foundation\'s real KPI: public pressure that makes cutting development funding politically costly.',
    icon: IconMovement,
    cases: [
      {
        name: 'GivingTuesday',
        lesson: 'Scaled to 105 countries by giving the brand away. Distributed ownership = distributed growth. Gates Foundation gave them $10M.',
      },
      {
        name: 'Band Aid → Live 8 → G8',
        lesson: 'The only complete culture-to-policy sequence. Entertainment created consciousness. Advocacy converted it to policy demands. Result: $40B in debt relief.',
      },
    ],
  },
];

function CaseCard({ study }: { study: CaseStudy }) {
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
          {study.name}
        </span>
        {study.credential && (
          <span className="text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full" style={{ color: 'var(--color-accent)', backgroundColor: 'rgba(232,195,104,0.1)' }}>
            {study.credential}
          </span>
        )}
      </div>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        {study.lesson}
      </p>
    </div>
  );
}

function ImperativeBlock({ imp }: { imp: Imperative }) {
  const Icon = imp.icon;

  return (
    <div className="reveal py-16 first:pt-0">
      <div className="flex items-start gap-5 mb-6">
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

      <div className="flex flex-col md:flex-row gap-4 mt-8 ml-0 md:ml-[76px]">
        {imp.cases.map((c) => (
          <CaseCard key={c.name} study={c} />
        ))}
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
