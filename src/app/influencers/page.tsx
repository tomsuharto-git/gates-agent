'use client';

import Link from 'next/link';
import { useState } from 'react';

type Market = 'us' | 'uk' | 'de';

const navLinks = [
  { href: '/', label: 'Chat' },
  { href: '/client-brief', label: 'Client Brief' },
  { href: '/creative-brief', label: 'Creative Brief' },
  { href: '/inspiration', label: 'Inspiration' },
  { href: '/influencers', label: 'Influencers', active: true },
  { href: '/parent-culture', label: 'Parent Culture' },
];

interface Influencer {
  name: string;
  handle: string;
  platform: string;
  followers: string;
  category: string;
  why: string;
  causeAlignment?: string;
}

const influencers: Record<Market, { label: string; flag: string; data: Influencer[] }> = {
  us: {
    label: 'United States',
    flag: 'US',
    data: [
      { name: 'Chrissy Teigen', handle: '@chrissyteigen', platform: 'IG', followers: '43M+', category: 'Celebrity parent', why: 'Honest motherhood; infant loss; IVF journey', causeAlignment: 'Child health advocacy' },
      { name: 'Dr. Mike', handle: '@doctor.mike', platform: 'IG + TikTok + YT', followers: '29M+', category: 'Family medicine', why: 'Medical facts vs. myths; massive reach', causeAlignment: 'Medical charities' },
      { name: 'Laro Benz', handle: '@larobenz', platform: 'TikTok', followers: '17M', category: 'Dad creator', why: 'Viral comedy dad; millennial father audience' },
      { name: 'Laura Love', handle: '@lauralove', platform: 'TikTok', followers: '7.6M', category: 'Mom creator', why: 'Everyday baby/toddler moments' },
      { name: 'Team 2 Moms', handle: '@team2moms', platform: 'TikTok', followers: '7.1M', category: 'LGBTQ+ parents', why: 'IVF/adoption; inclusive parenting' },
      { name: 'Emilie Kiser', handle: '@emiliekiser', platform: 'TikTok', followers: '5.1M', category: 'Mom creator', why: 'Relatable chaotic-family humor' },
      { name: 'Big Little Feelings', handle: '@biglittlefeelings', platform: 'IG', followers: '3.6M', category: 'Parenting experts', why: 'Toddler emotion coaching; concrete scripts' },
      { name: 'Dr. Becky Kennedy', handle: '@drbeckyatgoodinside', platform: 'IG + TikTok', followers: '3.4M', category: 'Parenting psychologist', why: '"Good Inside" empathy-led advice; TIME100', causeAlignment: 'TIME100 credibility' },
      { name: 'The Deal Family', handle: '@thedealfamily', platform: 'TikTok', followers: '2.6M', category: 'Family humor', why: 'Lighthearted family skits' },
      { name: 'Busy Toddler', handle: '@busytoddler', platform: 'IG', followers: '2.4M', category: 'Early childhood educator', why: 'Play-based activities for 0-3' },
      { name: 'Feeding Littles', handle: '@feedinglittles', platform: 'IG', followers: '1.5M', category: 'Dietitian / OT', why: 'Baby-led weaning; safe solids for 0-3' },
      { name: 'The Considerate Mama', handle: '@theconsideratemama', platform: 'TikTok', followers: '1.4M', category: 'Parent coach', why: 'Gentle discipline; peaceful parenting' },
      { name: 'Dr. Meghan Martin', handle: '@drmeghancmartin', platform: 'TikTok', followers: '500K+', category: 'Pediatric ER physician', why: 'Medical myth-busting; child safety' },
      { name: 'Beleaf in Fatherhood', handle: '@beleafme', platform: 'YT + IG', followers: '500K+', category: 'Dad creator', why: 'Black fatherhood visibility; faith-based', causeAlignment: 'Youth programs' },
      { name: 'Dr. Wendy Sue Swanson', handle: '@seattlemamadoc', platform: 'Twitter + IG', followers: '200K+', category: 'Pediatrician', why: 'Evidence-based child health; vaccines', causeAlignment: 'AAP contributor' },
    ],
  },
  uk: {
    label: 'United Kingdom',
    flag: 'UK',
    data: [
      { name: 'Zoe Sugg', handle: '@zoesugg', platform: 'IG + YT', followers: '9.2M', category: 'Lifestyle parent', why: 'OG YouTuber; cozy family content', causeAlignment: 'Mental health advocacy' },
      { name: 'Stacey Solomon', handle: '@staceysolomon', platform: 'IG', followers: '5.9M', category: 'Celebrity parent', why: 'Warm mum-of-5; gentle parenting; trusted', causeAlignment: 'NSPCC supporter' },
      { name: 'LadBaby', handle: '@ladbaby', platform: 'IG + YT + TikTok', followers: '3M+', category: 'Dad / celebrity', why: 'Sausage-roll humor; household name', causeAlignment: 'Raised millions for Trussell Trust' },
      { name: 'Rochelle Humes', handle: '@rochellehumes', platform: 'IG', followers: '2.3M', category: 'Celebrity parent', why: 'TV presenter; mum of 3; baby brand' },
      { name: 'Giovanna Fletcher', handle: '@mrsgifletcher', platform: 'IG + Podcast', followers: '2M', category: 'Author / parent', why: '"Happy Mum Happy Baby" podcast; maternal mental health', causeAlignment: 'Founded HMHB community' },
      { name: 'Louise Pentland', handle: '@louisepentland', platform: 'YT + IG', followers: '2.1M', category: 'Lifestyle parent', why: 'Single/remarried mum journey' },
      { name: 'Kate Ferdinand', handle: '@kateferdinand', platform: 'IG', followers: '1.5M', category: 'Celebrity parent', why: 'Candid blended family content' },
      { name: 'The Kabs Family', handle: '@thekabsfamily', platform: 'IG + TikTok', followers: '1.5M', category: 'Family humor', why: 'High energy; diverse UK family audience' },
      { name: 'The Dad Lab', handle: '@thedadlab', platform: 'YT + IG', followers: '1.5M', category: 'STEM dad', why: 'Science experiments for toddlers' },
      { name: 'Dr. Ranj Singh', handle: '@drranjonline', platform: 'IG + TikTok', followers: '500K', category: 'NHS Pediatrician / TV', why: 'This Morning, CBeebies; trusted medical voice', causeAlignment: 'NHS health campaigns' },
      { name: 'The LDN Family', handle: '@theldnfamily', platform: 'IG + TikTok', followers: '500K+', category: 'London lifestyle family', why: 'Young family; glam + real parenting mix' },
      { name: 'Mother Pukka', handle: '@motherpukka', platform: 'IG', followers: '400K+', category: 'Parenting activist', why: '#FlexAppeal; policy advocacy for working parents', causeAlignment: 'UK flexible working rights' },
      { name: 'The Unmumsy Mum', handle: '@theunmumsymum', platform: 'IG', followers: '250K+', category: 'Author / blogger', why: 'Anti-perfect-parent; brutally honest' },
      { name: 'Clemmie Telford', handle: '@clemmietelford', platform: 'IG', followers: '200K+', category: 'Parenting writer', why: 'Honest reflections; maternal wellbeing', causeAlignment: 'NCT contributor' },
      { name: 'Dr. Philippa Kaye', handle: '@drphilippakaye', platform: 'IG', followers: '150K+', category: 'GP / medical author', why: '5 child health books; pregnancy-to-childhood' },
    ],
  },
  de: {
    label: 'Germany',
    flag: 'DE',
    data: [
      { name: 'Sarah Harrison', handle: '@sarah.harrison.official', platform: 'IG', followers: '3.2M', category: 'Celebrity lifestyle parent', why: 'Mum of 3; daily family routines; aspirational' },
      { name: 'Louisa Jindaoui', handle: '@linlouuu', platform: 'IG', followers: '2.4M', category: 'Lifestyle family', why: "Footballer's wife; motherhood content; 12% engagement" },
      { name: 'Benny & Angie', handle: '@benny.und.angie', platform: 'IG', followers: '1.6M', category: 'Family comedy', why: 'Humorous family challenges; 5.9% engagement' },
      { name: 'Die Walsers', handle: '@diewalsers.official', platform: 'IG', followers: '1.3M', category: 'Family lifestyle', why: 'Fastest-growing DE family creator; love/joy/humor' },
      { name: 'Anne Wunsche', handle: '@anne_wuensche', platform: 'IG', followers: '1.1M', category: 'Celebrity single parent', why: '"Berlin Tag & Nacht" fame; candid single-mum' },
      { name: 'Cathy Hummels', handle: '@cathyhummels', platform: 'IG', followers: '694K', category: 'Celebrity parent', why: 'Parenting, fashion, lifestyle' },
      { name: 'Isabeau', handle: '@isabeau_youtube', platform: 'IG + YT', followers: '590K', category: 'Pregnancy & postpartum', why: 'Dedicated 0-3 niche; childbirth & new motherhood' },
      { name: 'Silvia Wollny', handle: '@wollnysilvia', platform: 'IG', followers: '510K', category: 'Reality TV parent', why: '"Die Wollnys" (11 children); mass appeal' },
      { name: 'Sanaz Seyedsadri', handle: '@sanaz.seyedsadri', platform: 'TikTok', followers: '~500K', category: 'Family TikTok', why: 'Fastest-growing DE family creator on TikTok' },
      { name: 'Familie Mohnke', handle: '@familiemohnke', platform: 'YT + IG', followers: '400K+', category: 'Family vloggers', why: 'Long-running daily family vlog; trusted' },
      { name: 'Nilam Farooq', handle: '@nilam.art', platform: 'IG + YT', followers: '400K+', category: 'Actress / lifestyle mom', why: 'German-Egyptian; intersectional family content' },
      { name: 'Patricia Kelly', handle: '@patriciakelly.official', platform: 'IG', followers: '350K+', category: 'Celebrity parent', why: 'Kelly Family member; faith-adjacent family life' },
      { name: 'Jayda Zimmermann', handle: '@jaydazimber', platform: 'TikTok + IG', followers: '300K+', category: 'Young mom creator', why: 'Hamburg-based; pregnancy & early motherhood' },
      { name: 'Alina Hohn', handle: '@alinahohn', platform: 'IG', followers: '300K+', category: 'New motherhood', why: 'First-time mum; humor and vulnerability' },
      { name: 'Dr. Franziska Rubin', handle: '@dr.franziskarubin', platform: 'TV + IG', followers: '200K+', category: 'TV physician', why: "Germany's top female TV health doctor; ARD/MDR", causeAlignment: 'Public health campaigns' },
    ],
  },
};

const shortlist: { name: string; market: string; reason: string }[] = [
  { name: 'LadBaby', market: 'UK', reason: 'Proven cause activator — raised millions for charity through his platform' },
  { name: 'Mother Pukka', market: 'UK', reason: 'Social advocacy built into her brand; policy-change track record' },
  { name: 'Dr. Ranj Singh', market: 'UK', reason: 'NHS institutional credibility; public health campaign experience' },
  { name: 'Chrissy Teigen', market: 'US', reason: 'Infant loss advocate; child health vocal; 43M reach' },
  { name: 'Dr. Becky Kennedy', market: 'US', reason: 'TIME100 credibility; trust-first audience of engaged parents' },
  { name: 'Dr. Franziska Rubin', market: 'DE', reason: 'Institutional health voice; bridges lifestyle and public health' },
];

function MarketBadge({ market }: { market: string }) {
  const colors: Record<string, string> = {
    US: '#6B9FFF',
    UK: '#E8C368',
    DE: '#7ED6A4',
  };
  return (
    <span
      className="text-[9px] tracking-wider uppercase px-2 py-0.5 rounded font-medium"
      style={{ color: colors[market] || 'var(--color-text-secondary)', backgroundColor: `${colors[market] || '#888'}15` }}
    >
      {market}
    </span>
  );
}

export default function InfluencersPage() {
  const [activeMarket, setActiveMarket] = useState<Market>('us');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const markets: { id: Market; label: string; flag: string }[] = [
    { id: 'us', label: 'United States', flag: 'US' },
    { id: 'uk', label: 'United Kingdom', flag: 'UK' },
    { id: 'de', label: 'Germany', flag: 'DE' },
  ];

  const current = influencers[activeMarket];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-4 flex items-center justify-between"
        style={{ backgroundColor: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}
      >
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
            Gates Foundation
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 text-[11px] rounded-lg transition-all whitespace-nowrap uppercase tracking-wider font-medium"
              style={{
                color: link.active ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                backgroundColor: link.active ? 'rgba(232,195,104,0.08)' : 'transparent',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg"
          style={{ color: 'var(--color-text)' }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div
          className="md:hidden fixed top-[57px] left-0 right-0 z-40 px-4 pb-4 space-y-1"
          style={{ backgroundColor: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center px-4 py-3 rounded-lg text-sm"
              style={{
                color: link.active ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                backgroundColor: link.active ? 'rgba(232,195,104,0.08)' : 'transparent',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="pt-[57px]">
        <div className="max-w-[1000px] mx-auto px-6 md:px-8 py-16">
          {/* Header */}
          <span
            className="text-[11px] tracking-[0.2em] uppercase block mb-8"
            style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            Influencer Landscape
          </span>
          <h1 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
            45 creators. 3 markets.
          </h1>
          <p className="text-lg mb-12 max-w-[600px]" style={{ color: 'var(--color-text-secondary)' }}>
            New-parent influencers across the US, UK, and Germany &mdash; mapped by reach, category, and cause alignment.
          </p>

          {/* Market tabs */}
          <div className="flex gap-1 mb-10 p-1 rounded-lg inline-flex" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
            {markets.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveMarket(m.id)}
                className="px-5 py-2.5 rounded-md text-sm transition-all duration-200 cursor-pointer"
                style={{
                  fontWeight: activeMarket === m.id ? 500 : 400,
                  backgroundColor: activeMarket === m.id ? 'var(--color-bg)' : 'transparent',
                  color: activeMarket === m.id ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                  boxShadow: activeMarket === m.id ? '0 1px 3px rgba(0,0,0,0.2)' : 'none',
                }}
              >
                {m.flag} {m.label}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl mb-16" style={{ border: '1px solid var(--color-border)' }}>
            <table className="w-full text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-surface-light)' }}>
                  <th className="text-left px-5 py-3 font-medium" style={{ color: 'var(--color-text)' }}>Name</th>
                  <th className="text-left px-5 py-3 font-medium hidden md:table-cell" style={{ color: 'var(--color-text)' }}>Platform</th>
                  <th className="text-left px-5 py-3 font-medium" style={{ color: 'var(--color-text)' }}>Followers</th>
                  <th className="text-left px-5 py-3 font-medium hidden lg:table-cell" style={{ color: 'var(--color-text)' }}>Category</th>
                  <th className="text-left px-5 py-3 font-medium hidden md:table-cell" style={{ color: 'var(--color-text)' }}>Why Parents Follow</th>
                  <th className="text-left px-5 py-3 font-medium hidden lg:table-cell" style={{ color: 'var(--color-text)' }}>Cause Fit</th>
                </tr>
              </thead>
              <tbody>
                {current.data.map((inf, i) => (
                  <tr key={inf.name} style={{ backgroundColor: i % 2 === 0 ? 'var(--color-surface)' : 'var(--color-bg)' }}>
                    <td className="px-5 py-3">
                      <div>
                        <span style={{ color: 'var(--color-text)' }}>{inf.name}</span>
                        <span className="block text-xs mt-0.5" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '10px' }}>
                          {inf.handle}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-3 hidden md:table-cell" style={{ color: 'var(--color-text-secondary)' }}>{inf.platform}</td>
                    <td className="px-5 py-3">
                      <span style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>{inf.followers}</span>
                    </td>
                    <td className="px-5 py-3 hidden lg:table-cell" style={{ color: 'var(--color-text-secondary)' }}>{inf.category}</td>
                    <td className="px-5 py-3 hidden md:table-cell" style={{ color: 'var(--color-text-secondary)', maxWidth: '280px' }}>{inf.why}</td>
                    <td className="px-5 py-3 hidden lg:table-cell">
                      {inf.causeAlignment ? (
                        <span className="text-xs px-2 py-1 rounded-md" style={{ backgroundColor: 'rgba(30,110,63,0.15)', color: '#7ED6A4' }}>
                          {inf.causeAlignment}
                        </span>
                      ) : (
                        <span style={{ color: 'var(--color-text-secondary)', opacity: 0.3 }}>&mdash;</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Strategic shortlist */}
          <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
            <p className="text-xs uppercase tracking-[0.2em] mb-6" style={{ color: 'var(--color-accent)' }}>
              Strategic Shortlist &mdash; Highest Cause Alignment
            </p>
            <p className="text-sm mb-8 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              Creators with existing cause-activation track records or institutional health credibility &mdash; the most natural partners for a child survival movement.
            </p>
            <div className="space-y-4">
              {shortlist.map((s) => (
                <div key={s.name} className="flex items-start gap-4 pl-4 border-l-2" style={{ borderColor: 'var(--color-accent)' }}>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-base" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>{s.name}</span>
                      <MarketBadge market={s.market} />
                    </div>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{s.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Germany note */}
          <div className="mt-8 rounded-2xl p-8" style={{ backgroundColor: 'var(--color-surface-light)', border: '1px solid var(--color-border)' }}>
            <p className="text-xs uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--color-accent-alt)' }}>Germany Market Note</p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              German parenting creators are overwhelmingly lifestyle and humor-focused &mdash; almost no existing cause orientation.
              A campaign here should <strong style={{ color: 'var(--color-text)' }}>pair lifestyle creators</strong> (Sarah Harrison, Louisa Jindaoui for reach)
              <strong style={{ color: 'var(--color-text)' }}> with institutional health voices</strong> (DGKJ pediatric association, Dr. Franziska Rubin)
              rather than expecting pre-existing alignment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
