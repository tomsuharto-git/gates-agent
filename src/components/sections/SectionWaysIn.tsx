'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

interface WayIn {
  number: number;
  name: string;
  pitch: string;
  tone: string;
  enemy: string;
  beats: string[];
  accentColor: string;
  bgGradient: string;
}

const waysIn: WayIn[] = [
  {
    number: 1,
    name: 'The Overserve Model',
    pitch: 'Help overwhelmed parents. Their engagement funds survival.',
    tone: 'Warm, competent, trustworthy',
    enemy: 'The broken infrastructure between caring and acting',
    beats: [
      'Build the best parenting support platform in the world — sleep guidance, feeding support, community, mental health.',
      'Every use generates engagement that funds child survival programs. You see the proof.',
      'No case study in our research built a cause brand on utility. This is built on the radical idea that helping people IS the movement.',
    ],
    accentColor: '#E8C368',
    bgGradient: 'linear-gradient(135deg, rgba(232,195,104,0.06) 0%, rgba(15,15,15,0) 60%)',
  },
  {
    number: 2,
    name: 'The Entertainment Engine',
    pitch: 'MrBeast meets cause. Attention IS the donation.',
    tone: 'Joyful, spectacular, irreverent',
    enemy: 'The boredom of traditional cause marketing',
    beats: [
      'Child survival is a bummer topic. Every serious issue gets treated seriously. What if this one didn\'t?',
      'Your attention IS the donation. Views, engagement, participation generate revenue that flows to survival programs.',
      'The MrBeast generation — Gen Z, young millennials — is exactly who\'s becoming new parents right now.',
    ],
    accentColor: '#FF6B6B',
    bgGradient: 'linear-gradient(135deg, rgba(255,107,107,0.06) 0%, rgba(15,15,15,0) 60%)',
  },
  {
    number: 3,
    name: 'The VC Model',
    pitch: 'What if A16Z benefited kids, not shareholders?',
    tone: 'Bold, ambitious, Silicon Valley meets social impact',
    enemy: 'The assumption that profit and purpose can\'t compound together',
    beats: [
      'Brands pledge support for child survival as they scale. Growth benefits children, not shareholders.',
      'Founders don\'t donate out of guilt. They build with purpose baked into the cap table.',
      'A visible ecosystem of businesses where growth = impact. The fund compounds as the economy grows.',
    ],
    accentColor: '#6B9FFF',
    bgGradient: 'linear-gradient(135deg, rgba(107,159,255,0.06) 0%, rgba(15,15,15,0) 60%)',
  },
  {
    number: 4,
    name: 'The Cult Brand',
    pitch: 'Use scarcity to fight scarcity. The irony is the point.',
    tone: 'Heat, provocative, unapologetic',
    enemy: 'The complacency that comes with cheap solutions no one sees',
    beats: [
      'Hype culture manufactures scarcity to create desire. Children are dying of actual scarcity. The subversion is the statement.',
      'Creator-in-residence program. Limited drops. The $200 hoodie funds 1,100 vaccines. The tension IS the brand.',
      'Each drop is a content moment AND a proof moment simultaneously.',
    ],
    accentColor: '#FF9F43',
    bgGradient: 'linear-gradient(135deg, rgba(255,159,67,0.06) 0%, rgba(15,15,15,0) 60%)',
  },
  {
    number: 5,
    name: 'The Negative Space',
    pitch: 'Amplify the absence. Show what\'s missing, not what\'s suffering.',
    tone: 'Quiet, devastating, elegant',
    enemy: 'The numbness that comes from showing suffering',
    beats: [
      '"For sale: baby shoes, never worn." The most powerful story about child survival never mentions death.',
      'Show the empty chair at the table. The growth chart that stops. The birthday cake with no one to blow out the candles.',
      'It puts YOUR life in the frame. The absence is felt in your world, not theirs.',
    ],
    accentColor: '#A09890',
    bgGradient: 'linear-gradient(135deg, rgba(160,152,144,0.04) 0%, rgba(15,15,15,0) 60%)',
  },
  {
    number: 6,
    name: 'The Childlike Way',
    pitch: 'The world needs what children bring.',
    tone: 'Wonder, joyful, radical simplicity',
    enemy: 'The adult systems that create the problems children die from',
    beats: [
      'Children aren\'t recipients of our generosity. They\'re the source of something we\'ve lost — wonder, honesty, boundary blindness, joy as default state.',
      '"What would a child do?" A child would not accept that 4.8M die from preventable causes. A child would say: then prevent them.',
      'The brand itself should see the world the way children do. Drawn by children. Voiced by children. Not cute. Powerful.',
    ],
    accentColor: '#7ED6A4',
    bgGradient: 'linear-gradient(135deg, rgba(126,214,164,0.06) 0%, rgba(15,15,15,0) 60%)',
  },
  {
    number: 7,
    name: 'Love Well',
    pitch: 'A public bet on humanity. Prove love can save children.',
    tone: 'Warm but not soft. Confident but not loud.',
    enemy: 'The cynicism that says love isn\'t enough',
    beats: [
      '"Love Well" — a double meaning. A reservoir of love (the noun) and an instruction to love with reach and skill (the imperative).',
      'This isn\'t asking for generosity. It\'s asking for validation. Do you believe love is real? Then prove it. Prove it with us.',
      'The Gates Foundation staked $200B on a bet that love and human ingenuity can solve the world\'s biggest problems. Love Well makes it everyone\'s bet.',
    ],
    accentColor: '#E8C368',
    bgGradient: 'linear-gradient(135deg, rgba(232,195,104,0.06) 0%, rgba(15,15,15,0) 60%)',
  },
  {
    number: 8,
    name: 'Alive at 5',
    pitch: 'One number organizes everything. 5pm. High five. $5. Five years.',
    tone: 'Bright, kinetic, universal',
    enemy: 'The abstract distance between caring and acting',
    beats: [
      'The number 5 IS the brand system: age (5 years), time (5pm daily wave), gesture (high five), price ($5), symbol (handprint).',
      'Daily relevance. 5pm happens every day, in every timezone — a wave of connection circling the globe continuously.',
      'The high five is mutual, celebratory, physical, intergenerational, cross-cultural. It\'s the opposite of a donation button.',
    ],
    accentColor: '#FFD93D',
    bgGradient: 'linear-gradient(135deg, rgba(255,217,61,0.06) 0%, rgba(15,15,15,0) 60%)',
  },
  {
    number: 9,
    name: 'Care × Care',
    pitch: 'Your daily skincare routine funds essential care for kids.',
    tone: 'Clean, elevated, ritual',
    enemy: 'The lie that self-care and other-care are opposites',
    beats: [
      'Skincare is a daily ritual — 730 touchpoints a year. What if that act of self-care automatically became an act of care for children?',
      'Not a charity label on generic products. A genuine premium brand where the routine IS the participation.',
      'The subversion: the most "selfish" daily act becomes the most generous. You don\'t choose between caring for yourself and caring for the world.',
    ],
    accentColor: '#D4A0E8',
    bgGradient: 'linear-gradient(135deg, rgba(212,160,232,0.06) 0%, rgba(15,15,15,0) 60%)',
  },
];

function WayInPanel({ way }: { way: WayIn }) {
  return (
    <div
      className="reveal py-20 md:py-28 border-t"
      style={{ borderColor: 'var(--color-border)', background: way.bgGradient }}
    >
      <div className="max-w-[720px] mx-auto px-6">
        <div className="flex items-baseline gap-4 mb-6">
          <span
            className="text-sm"
            style={{ fontFamily: 'var(--font-mono)', color: way.accentColor, opacity: 0.5 }}
          >
            {String(way.number).padStart(2, '0')}
          </span>
          <span
            className="text-xs tracking-wider uppercase"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {way.tone}
          </span>
        </div>

        <h3
          className="text-3xl md:text-4xl lg:text-5xl mb-4"
          style={{ fontFamily: 'var(--font-display)', color: way.accentColor }}
        >
          {way.name}
        </h3>

        <p className="text-xl md:text-2xl mb-10 leading-relaxed" style={{ color: 'var(--color-text)' }}>
          {way.pitch}
        </p>

        <div className="space-y-5 mb-10">
          {way.beats.map((beat, i) => (
            <div key={i} className="flex gap-4">
              <div
                className="w-1 shrink-0 rounded-full mt-1.5"
                style={{ backgroundColor: way.accentColor, opacity: 0.3, height: '16px' }}
              />
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {beat}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs tracking-wider uppercase" style={{ color: 'var(--color-text-secondary)', opacity: 0.5 }}>
            Enemy it fights:
          </span>
          <span className="text-sm" style={{ color: way.accentColor }}>
            {way.enemy}
          </span>
        </div>
      </div>
    </div>
  );
}

export function SectionWaysIn() {
  const ref = useScrollReveal();

  return (
    <section id="ways-in" ref={ref} className="py-32">
      <div className="max-w-[720px] mx-auto px-6 mb-16">
        <div className="reveal">
          <span
            className="text-[11px] tracking-[0.2em] uppercase block mb-12"
            style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            Ways In
          </span>
        </div>

        <h2 className="reveal text-3xl md:text-4xl leading-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          Nine ways in.
        </h2>
        <p className="reveal text-lg" style={{ color: 'var(--color-text-secondary)' }}>
          Not variations on a theme — fundamentally different theories of how the brand earns attention,
          creates engagement, and funds child survival. Each has a different tonal register,
          a different enemy, and a different participation theory.
        </p>
      </div>

      <div>
        {waysIn.map((way) => (
          <WayInPanel key={way.number} way={way} />
        ))}
      </div>

      {/* Tonal spectrum */}
      <div className="reveal max-w-[720px] mx-auto px-6 mt-20">
        <div className="py-8 border-t border-b" style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-xs tracking-wider uppercase mb-6" style={{ color: 'var(--color-text-secondary)', opacity: 0.5 }}>
            Tonal spectrum
          </p>
          <div className="flex items-center justify-between text-xs" style={{ color: 'var(--color-text-secondary)' }}>
            <span>Quiet</span>
            <div className="flex-1 mx-4 h-px" style={{ background: 'linear-gradient(to right, #A09890, #E8C368, #FF6B6B)' }} />
            <span>Loud</span>
          </div>
          <div className="flex flex-wrap gap-3 mt-4 justify-center">
            {['Negative Space', 'Love Well', 'Childlike Way', 'Care×Care', 'Overserve', 'Alive at 5', 'VC Model', 'Entertainment', 'Cult Brand'].map((name) => (
              <span
                key={name}
                className="text-[10px] tracking-wider uppercase px-2 py-1 rounded"
                style={{ color: 'var(--color-text-secondary)', backgroundColor: 'var(--color-surface)' }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
