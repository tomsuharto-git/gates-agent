'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

interface WayIn {
  number: number;
  name: string;
  pitch: string;
  tone: string;
  enemy: string;
  parentAngle: string;
  actAsCulture: string;
  winWin: string;
  movement: string;
  beats: string[];
  accentColor: string;
  bgGradient: string;
  image: string;
}

const waysIn: WayIn[] = [
  {
    number: 1,
    name: 'The Parent Resource',
    pitch: 'What if the best parenting support platform in the world also saved children\'s lives?',
    tone: 'Warm, competent, trustworthy',
    enemy: 'The broken infrastructure between caring and acting',
    parentAngle: 'Meet them at 3am with something genuinely useful. The empathy surge is real — channel it through utility, not guilt.',
    actAsCulture: 'Lives in parenting apps, not nonprofit newsletters. Feels like the friend who recommended something that actually helped.',
    winWin: 'You get help. Children get funded. Every interaction is both self-serving and generous.',
    movement: 'Engagement data creates visible proof at scale — "This community funded 2,400 vaccinations this month."',
    beats: [
      'What if new parents didn\'t have to choose between getting help and giving it? Sleep guidance, feeding support, community, mental health — and every interaction funds survival programs.',
      'The proof loop closes in real time: "This community\'s engagement funded 2,400 vaccinations this month." You never had to donate. You just used something useful.',
      'No cause brand in history has been built on utility. Every one was built on identity, outrage, commerce, or spectacle. This would be the first built on the radical idea that helping people IS the movement.',
    ],
    accentColor: '#E8C368',
    bgGradient: 'linear-gradient(135deg, rgba(232,195,104,0.06) 0%, rgba(15,15,15,0) 60%)',
    image: '/images/01-parent-resource.png',
  },
  {
    number: 2,
    name: 'The Entertainment Engine',
    pitch: 'What if the most entertaining thing in your feed also happened to save children\'s lives?',
    tone: 'Joyful, spectacular, irreverent',
    enemy: 'The boredom of traditional cause marketing',
    parentAngle: 'The MrBeast generation is becoming parents right now. Speak their language — spectacle, humor, joy.',
    actAsCulture: 'The brand IS entertainment — content people seek out, not cause marketing they scroll past.',
    winWin: 'Watching is the donation. Sharing is the advocacy. The audience participates by paying attention.',
    movement: 'Creator network distributes the brand. Impact stories become the next piece of content. Self-sustaining cycle.',
    beats: [
      'Every serious issue gets treated seriously. What if this one didn\'t? What if the brand was genuinely the most fun, shareable, joyful content in parenting — and the entertainment was the funding mechanism?',
      'Your attention could BE the donation. Views and engagement generate revenue that flows directly to survival programs. The spectacle of impact becomes the next piece of content.',
      'The MrBeast generation — Gen Z, young millennials — is exactly who\'s becoming new parents right now. What if someone built a cause brand that spoke their language?',
    ],
    accentColor: '#FF6B6B',
    bgGradient: 'linear-gradient(135deg, rgba(255,107,107,0.06) 0%, rgba(15,15,15,0) 60%)',
    image: '/images/02-entertainment-engine.png',
  },
  {
    number: 3,
    name: 'The VC Model',
    pitch: 'What if the next great fund backed brands that scale impact for children — not returns for shareholders?',
    tone: 'Bold, ambitious, Silicon Valley meets social impact',
    enemy: 'The assumption that profit and purpose can\'t compound together',
    parentAngle: 'Parents already buy from brands that align with their values. This makes every purchase count.',
    actAsCulture: 'Shows up in business press, founder communities, investor circles — not charity galas.',
    winWin: 'Brands join because it\'s good business. Consumers shop because it\'s aligned. Growth funds survival automatically.',
    movement: 'Every portfolio company is a distribution channel. As they grow, the cause compounds without asking.',
    beats: [
      'What if brands pledged a percentage of their growth to child survival as they scale? The ask isn\'t "donate" — it\'s "grow your business and the growth benefits children."',
      'Founders wouldn\'t join out of guilt. They\'d join because it\'s good business — a credibility signal that attracts conscious consumers and talent.',
      'Imagine a visible ecosystem where growth = impact. Every portfolio company is a distribution channel. As they grow, the cause compounds automatically.',
    ],
    accentColor: '#6B9FFF',
    bgGradient: 'linear-gradient(135deg, rgba(107,159,255,0.06) 0%, rgba(15,15,15,0) 60%)',
    image: '/images/03-vc-model.png',
  },
  {
    number: 4,
    name: 'Hype for Help',
    pitch: 'What if the mechanics of hype culture — drops, scarcity, heat — could be weaponized against the scarcity that kills children?',
    tone: 'Heat, provocative, unapologetic',
    enemy: 'The complacency that comes with cheap solutions no one sees',
    parentAngle: 'New parents are already in creator/hype culture. The brand meets them in the feeds they\'re already in.',
    actAsCulture: 'Operates like Supreme, not Salvation Army. Drops, waitlists, collaborations — the mechanics of desire.',
    winWin: 'You get a genuinely cool product. A child gets 1,100 vaccines. The tension IS the flex.',
    movement: 'Each drop generates earned media + impact proof simultaneously. Sellouts become the story.',
    beats: [
      'Hype culture manufactures scarcity to create desire. Children are dying of actual scarcity. What if we used one to fight the other? The irony would BE the brand.',
      'Imagine creator residencies, limited drops, collaborations with the hottest names in culture. A $200 hoodie that funds 1,100 vaccines. The tension between luxury and necessity is the statement.',
      'Every drop could be a content moment AND a proof moment simultaneously. Sellouts generate earned media. Impact generates the next story.',
    ],
    accentColor: '#FF9F43',
    bgGradient: 'linear-gradient(135deg, rgba(255,159,67,0.06) 0%, rgba(15,15,15,0) 60%)',
    image: '/images/04-hype-for-help.png',
  },
  {
    number: 5,
    name: 'The Wonder Brand',
    pitch: 'What if saving children wasn\'t charity — but an investment in the perspective the world desperately needs?',
    tone: 'Wonder, joyful, radical simplicity',
    enemy: 'The adult systems that create the problems children die from',
    parentAngle: 'Parents rediscover wonder through their children every day. This brand names what they\'re already feeling.',
    actAsCulture: 'Drawn by children. Voiced by children. Looks like nothing else in the cause space — raw, joyful, human.',
    winWin: 'Participation reconnects adults with the childlike perspective they\'ve lost. The reward is the feeling.',
    movement: 'Deepest circle: parents who internalize the childlike way become different citizens, voters, humans.',
    beats: [
      'What if children aren\'t recipients of our generosity but the source of something we\'ve lost? Wonder, radical honesty, boundary blindness, joy as default state. Every child who doesn\'t make it is a way of seeing the world we\'ll never get.',
      '"What would a child do?" A child wouldn\'t accept that 4.8M die from preventable causes. A child would say: then prevent them. That simplicity isn\'t naivete. It\'s the smartest take in the room.',
      'What if the brand itself saw the world the way children do? Drawn by children. Voiced by children. Not cute — powerful. A worldview, not just a campaign.',
    ],
    accentColor: '#7ED6A4',
    bgGradient: 'linear-gradient(135deg, rgba(126,214,164,0.06) 0%, rgba(15,15,15,0) 60%)',
    image: '/images/05-wonder-brand.png',
  },
  {
    number: 6,
    name: 'Love Well',
    pitch: 'What if there\'s a well of love in this world deep enough to save every child — and all we need to do is prove it?',
    tone: 'Warm but not soft. Confident but not loud.',
    enemy: 'The cynicism that says love isn\'t enough',
    parentAngle: 'The empathy surge of new parenthood is love at its loudest. Love Well gives it a name and a direction.',
    actAsCulture: 'Love IS culture — music, art, family, community. The brand doesn\'t need to become culture. It already is.',
    winWin: 'You\'re not sacrificing. You\'re proving something you already believe. Every act is evidence in humanity\'s favor.',
    movement: 'Believe → cosign → participate → prove → celebrate. The innermost circle: "We proved love can save 4.8M children."',
    beats: [
      '"Love Well" — two words, two meanings. A reservoir of love (the noun) and an instruction to love with reach and skill (the imperative). Both readings compound.',
      'What if the ask wasn\'t generosity but validation? Do you believe love is real? Do you believe there\'s enough of it? Then prove it. Prove it with us. That\'s a bet people want to join, not a donation they feel obligated to make.',
      'The Gates Foundation staked $200B on a bet that love and human ingenuity can solve the world\'s biggest problems. What if Love Well made that everyone\'s bet?',
    ],
    accentColor: '#E8C368',
    bgGradient: 'linear-gradient(135deg, rgba(232,195,104,0.06) 0%, rgba(15,15,15,0) 60%)',
    image: '/images/06-love-well.png',
  },
  {
    number: 7,
    name: 'Alive at 5',
    pitch: 'What if one number could organize an entire movement — the age, the time, the gesture, the price, the symbol?',
    tone: 'Bright, kinetic, universal',
    enemy: 'The abstract distance between caring and acting',
    parentAngle: 'Teaching a baby to high-five is one of the first games parents play. The gesture is already embedded in parenthood.',
    actAsCulture: '5pm is daily. The high five is physical. The handprint is wearable. It exists in the world, not in a campaign.',
    winWin: 'The gesture is mutual, celebratory, joyful. You were already going to high-five your kid.',
    movement: 'A daily wave circling the globe — millions of visible signals that no decision-maker can ignore.',
    beats: [
      'What if the number 5 became an entire brand system? The age children deserve to reach. 5pm as a daily moment of connection. The high five as the gesture. $5 as the entry point. A child\'s handprint as the symbol.',
      'What if 5pm happened every day, in every timezone — a wave of parents high-fiving their children that circles the globe continuously? Daily relevance that no cause brand has ever achieved.',
      'The high five is mutual, celebratory, physical, intergenerational, cross-cultural. What if the brand\'s signature gesture was the opposite of a donation button — something joyful you were already going to do with your kid?',
    ],
    accentColor: '#FFD93D',
    bgGradient: 'linear-gradient(135deg, rgba(255,217,61,0.06) 0%, rgba(15,15,15,0) 60%)',
    image: '/images/07-alive-at-5.png',
  },
  {
    number: 8,
    name: 'Skincare for Care',
    pitch: 'What if your daily skincare routine — an act of care you already do twice a day — automatically funded essential care for children?',
    tone: 'Clean, elevated, ritual',
    enemy: 'The lie that self-care and other-care are opposites',
    parentAngle: 'New mothers\' skincare routine is often their only moment of self-care. This honors it and extends it.',
    actAsCulture: 'Lives in Sephora, not at a fundraiser. Competes on product quality in a $180B market.',
    winWin: 'The most "selfish" daily act becomes the most generous. No choosing between yourself and the world.',
    movement: '730 touchpoints/year per person. The product on your shelf IS your visible signal. Daily compounding.',
    beats: [
      'Skincare is a daily ritual — 730 touchpoints a year. What if that intimate moment of self-care, often the only quiet moment in a new parent\'s day, carried a second meaning?',
      'Not a charity label on generic products. What if it were a genuine premium brand — something you\'d find in Sephora, not at a fundraiser — where the routine IS the participation?',
      'The subversion: what if the most "selfish" daily act became the most generous? You wouldn\'t choose between caring for yourself and caring for the world. They\'d be the same gesture.',
    ],
    accentColor: '#D4A0E8',
    bgGradient: 'linear-gradient(135deg, rgba(212,160,232,0.06) 0%, rgba(15,15,15,0) 60%)',
    image: '/images/08-skincare-for-care.png',
  },
];

function WayInPanel({ way }: { way: WayIn }) {
  return (
    <div
      className="reveal py-20 md:py-28 border-t"
      style={{ borderColor: 'var(--color-border)', background: way.bgGradient }}
    >
      <div className="max-w-[720px] mx-auto px-6">
        {/* Image */}
        <div className="mb-8 flex justify-center">
          <img
            src={way.image}
            alt={way.name}
            className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover"
            style={{ border: `1px solid ${way.accentColor}20` }}
          />
        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
          {[
            { label: 'Enemy it fights', value: way.enemy },
            { label: 'New parent angle', value: way.parentAngle },
            { label: 'Acts as culture', value: way.actAsCulture },
            { label: 'The win-win', value: way.winWin },
            { label: 'The movement', value: way.movement },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <span className="text-[10px] tracking-wider uppercase" style={{ color: 'var(--color-text-secondary)', opacity: 0.4 }}>
                {item.label}
              </span>
              <span style={{ color: way.accentColor }}>
                {item.value}
              </span>
            </div>
          ))}
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
          Eight ways in.
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

      {/* Summary grid */}
      <div className="reveal max-w-[800px] mx-auto px-6 mt-24">
        <div className="py-12 border-t" style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-xs tracking-[0.15em] uppercase mb-8" style={{ color: 'var(--color-text-secondary)', opacity: 0.5 }}>
            All eight at a glance
          </p>
          <div className="space-y-5">
            {waysIn.map((way) => (
              <div key={way.number} className="flex items-center gap-4">
                <img
                  src={way.image}
                  alt={way.name}
                  className="w-10 h-10 rounded-lg object-cover shrink-0"
                />
                <span
                  className="text-sm shrink-0 w-6"
                  style={{ fontFamily: 'var(--font-mono)', color: way.accentColor, opacity: 0.5 }}
                >
                  {String(way.number).padStart(2, '0')}
                </span>
                <span
                  className="text-base font-medium shrink-0 w-48"
                  style={{ fontFamily: 'var(--font-display)', color: way.accentColor }}
                >
                  {way.name}
                </span>
                <span className="text-sm leading-relaxed hidden md:inline" style={{ color: 'var(--color-text-secondary)' }}>
                  {way.pitch}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
