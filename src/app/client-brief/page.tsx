'use client';

import Link from 'next/link';
import { useState } from 'react';

type Tab = 'rfp' | 'analysis';

const navLinks = [
  { href: '/', label: 'Chat' },
  { href: '/client-brief', label: 'Client Brief', active: true },
  { href: '/creative-brief', label: 'Creative Brief' },
  { href: '/inspiration', label: 'Inspiration' },
];

function Section({ label, title, content }: { label: string; title: string; content: string }) {
  return (
    <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
      <p className="text-xs uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--color-accent)' }}>{label}</p>
      <h3 className="text-xl mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>{title}</h3>
      <p className="leading-relaxed text-sm" style={{ color: 'var(--color-text-secondary)' }}>{content}</p>
    </div>
  );
}

function Upshot({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--color-surface-light)', border: '1px solid var(--color-border)' }}>
      <p className="text-xs uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--color-accent)' }}>The Upshot</p>
      <h3 className="text-xl mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)' }}>{title}</h3>
      <p className="leading-relaxed" style={{ color: 'var(--color-text)' }}>{body}</p>
    </div>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid var(--color-border)' }}>
      <table className="w-full text-sm" style={{ fontFamily: 'var(--font-body)' }}>
        <thead>
          <tr style={{ backgroundColor: 'var(--color-surface-light)' }}>
            {headers.map((h, i) => (
              <th key={i} className="text-left px-5 py-3 font-medium" style={{ color: 'var(--color-text)' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ backgroundColor: i % 2 === 0 ? 'var(--color-surface)' : 'var(--color-bg)' }}>
              {row.map((cell, j) => (
                <td key={j} className="px-5 py-3" style={{ color: 'var(--color-text-secondary)' }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RFPTab() {
  return (
    <div className="w-full" style={{ height: 'calc(100vh - 240px)', minHeight: '600px' }}>
      <iframe
        src="/briefs/rfp.pdf"
        className="w-full h-full rounded-xl"
        style={{ border: '1px solid var(--color-border)' }}
        title="Gates Foundation RFP"
      />
    </div>
  );
}

function AnalysisTab() {
  return (
    <div className="space-y-6">
      <Upshot
        title="Build a movement brand, not a campaign. Make it portable enough that others can pick it up and carry it."
        body="The Gates Foundation is seeking a creative partner for a 3-5 year multi-market campaign engaging new parents in the US, UK, and Germany. The real goal: generate visible public signals that make cutting development funding politically costly. This is an advocacy campaign wearing a brand campaign's clothes."
      />

      {/* RFP Analysis */}
      <Section
        label="The Unspoken Need"
        title="They need to depoliticize child survival — without looking like they&apos;re trying to depoliticize it."
        content="The Gates Foundation has a credibility problem, not a message problem. In a post-COVID, polarized landscape, the Gates name itself is a barrier with segments of the target audience. That's why they emphasize 'new voices,' 'trusted champions,' and 'partner amplification' — they know they can't be the face of this."
      />

      <Section
        label="The Reframe"
        title="This isn&apos;t a &lsquo;save the children&rsquo; campaign. It&apos;s a &lsquo;what kind of parent do you want to be?&rsquo; campaign."
        content="The brief frames this as getting new parents to care about other people's children. But the real opportunity is to frame child survival as part of your own parenting identity — that being a good parent means believing no child's life matters less than your child's. The shift is from charity to identity."
      />

      <Section
        label="The Barrier"
        title="New parents are in survival mode"
        content="The gap between 'I care about all children' (a value almost everyone holds) and 'I will take action for children I'll never meet' (a behavior almost no one does) is massive. The barrier isn't apathy — it's overwhelm. Every day delivers a new crisis competing for the finite emotional bandwidth of an exhausted new parent."
      />

      {/* Win Strategy */}
      <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
        <p className="text-xs uppercase tracking-[0.2em] mb-6" style={{ color: 'var(--color-accent)' }}>Win Strategy</p>
        <div className="space-y-6">
          <div>
            <h4 className="text-base font-medium mb-2" style={{ color: 'var(--color-text)' }}>1. Identity, not charity</h4>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>Position child survival as a core expression of modern parenthood, not a donation ask. Parents don&apos;t want to be guilted — they want to feel like caring about all kids is simply what good parents do.</p>
          </div>
          <div>
            <h4 className="text-base font-medium mb-2" style={{ color: 'var(--color-text)' }}>2. Culturally native, not campaign-imposed</h4>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>The idea has to live inside platforms, moments, and conversations new parents are already having — parenting apps, pediatrician offices, baby registries, parenting TikTok.</p>
          </div>
          <div>
            <h4 className="text-base font-medium mb-2" style={{ color: 'var(--color-text)' }}>3. Designed to travel without the logo</h4>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>The most powerful thing the Foundation can do is build something bigger than itself. The creative idea should be ownable by parents, partners, and communities — with the Foundation as the engine, not the face.</p>
          </div>
        </div>
      </div>

      {/* Cultural Tensions */}
      <div>
        <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--color-accent)' }}>Cultural Tensions</p>
        <Table
          headers={['Tension', 'Why It Matters']}
          rows={[
            ['My child vs. all children', 'New parents feel both intensely. The campaign must honor the personal while extending it to the universal.'],
            ['Compassion vs. overwhelm', 'People want to care but are drowning in crises. The campaign must feel like oxygen, not another obligation.'],
            ['Global values vs. local politics', 'Child survival is being politicized (foreign aid cuts, "America First"). The campaign must be uncancelable.'],
            ['Institutional trust vs. grassroots', 'Gates Foundation is an institution. Parents trust other parents. The creative must bridge this gap.'],
            ['Optimism vs. urgency', 'Child deaths are rising. But doom doesn\'t mobilize. The campaign needs "we can actually fix this" energy.'],
          ]}
        />
      </div>

      {/* Headwinds */}
      <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
        <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--color-accent-alt)' }}>Headwinds</p>
        <ul className="space-y-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          <li><strong style={{ color: 'var(--color-text)' }}>Politicization of the Gates name.</strong> Conspiracy theories, vaccine skepticism, anti-globalist sentiment have made &ldquo;Gates Foundation&rdquo; a polarizing brand.</li>
          <li><strong style={{ color: 'var(--color-text)' }}>Compassion fatigue + domestic anxiety.</strong> New parents are worried about affording their own childcare, not children in sub-Saharan Africa.</li>
          <li><strong style={{ color: 'var(--color-text)' }}>Low salience of child mortality.</strong> Competing against inflation, climate, war, AI anxiety for attention.</li>
          <li><strong style={{ color: 'var(--color-text)' }}>Fragmented media landscape.</strong> No single campaign moment will reach 40% of any audience. Sustained multi-channel effort required.</li>
          <li><strong style={{ color: 'var(--color-text)' }}>3-5 year commitment.</strong> This isn&apos;t a project — it&apos;s a retainer requiring sustained senior talent.</li>
        </ul>
      </div>

      {/* How Competitors Will Pitch */}
      <div>
        <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--color-accent)' }}>How Competitors Will Likely Pitch</p>
        <Table
          headers={['Play', 'Why It Won\'t Win']}
          rows={[
            ['The "Every Child" manifesto film', 'Beautiful, award-worthy, forgettable within 6 months. This is the expected pitch.'],
            ['Celebrity parent ambassador', 'Expensive, risky. The Foundation likely already has relationships they\'d prefer to leverage.'],
            ['Data-shock / guilt play', 'The brief explicitly signals they want values, not policy. This approach feels like a lecture.'],
          ]}
        />
      </div>

      {/* Client Team */}
      <div>
        <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--color-accent)' }}>Client Team Map</p>
        <Table
          headers={['Name', 'Role', 'Why They Matter']}
          rows={[
            ['Leonora Diller', 'Campaign Lead, Seattle', 'Orchestrator, not decision-maker'],
            ['Amanda Nichol', 'Content & Campaigns Lead', 'Senior voice — set the strategic frame on the call'],
            ['Hannah', 'EMEA + East Asia (19 markets)', 'Regional heavyweight — her priorities shape creative evaluation'],
            ['Katie Peters', 'US + Canada Comms', 'Flagged bipartisanship as hard constraint. DC-based.'],
            ['Lawrence', 'Audience Insight, EMEA', 'Built propensity-to-care framework. His buy-in on insight quality matters.'],
            ['Marcus', 'Germany Comms Lead', 'Key contact for German market activation'],
            ['Kate', 'UK & EU Communications', 'Key contact for UK market activation'],
          ]}
        />
      </div>

      {/* 8 Things */}
      <Section
        label="Discovery #1"
        title="The Foundation is shutting down in 20 years"
        content="The $200B commitment isn't open-ended. This campaign is a legacy play — the public-facing engine for their #1 goal. Five years is 'a runway' with year-on-year progress required. Frame the creative idea as the start of something generational that outlasts the Foundation itself."
      />

      <Section
        label="Discovery #2"
        title="The real KPI is political influence"
        content="Both Hannah (EMEA) and Katie (US) were explicit: the ultimate goal is 'visible signals that decision-makers see.' Public mobilization → visible action → political pressure → maintained development funding. Every creative idea needs a 'how does a lawmaker see this?' lens."
      />

      <Section
        label="Discovery #3"
        title="Bipartisanship is a hard constraint"
        content="Katie Peters was unambiguous: 'This can't become a campaign that speaks to only one side of the political spectrum.' This eliminates entire creative territories — anything that codes as progressive activism, anything adjacent to culture-war framing. The idea needs to be adoptable by a parent in rural Texas and a parent in Brooklyn."
      />

      <Section
        label="Discovery #4"
        title="'America First' is context, not enemy"
        content="Katie acknowledged US narratives centered on domestic impact. Don't fight the domestic focus — use it. Connect child survival abroad to child/maternal health at home. 'Every child deserves to reach five' works in both Memphis and Malawi."
      />

      <Section
        label="Discovery #5"
        title="New parents were a data surprise"
        content="Lawrence built a 'depoliticized propensity to care' index — new parents weren't initially on the radar. They emerged from the data because of the measurable 'empathy surge' in early parenthood. The audience choice is research-validated, not gut-driven."
      />

      <Section
        label="Discovery #6"
        title="Child survival is their strongest topic"
        content="When the Foundation assessed all three goals against stretch audiences, child survival scored highest. This campaign was chosen first because it's their strongest card — both an opportunity and a pressure point."
      />

      <Section
        label="Discovery #7"
        title="Canada is in scope"
        content="Katie Peters covers 'the United States and Canada.' Hannah's EMEA team covers 19 markets. The creative idea needs to scale well beyond three markets — design for portability from day one."
      />

      <Section
        label="Discovery #8"
        title="The competitive field is wide"
        content="Joint Q&A call format with all agencies hearing the same briefing — probably 8-15 agencies at this stage. Known competitors: BBDO, Skating Panda, Anomaly, Dog Jaw. The April 1 written submission is the real filter — narrows to 3 finalists."
      />

      {/* Competitive Intel */}
      <div>
        <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--color-accent)' }}>Competitive Intelligence</p>
        <Table
          headers={['Agency', 'Signal']}
          rows={[
            ['Dog Jaw (Meg)', 'Asked the first and best question — "what surprised you in the research?" Signals strategic depth.'],
            ['BBDO', 'Global network, cause marketing pedigree'],
            ['Skating Panda', 'Cause specialist — likely strong on movement architecture'],
            ['Anomaly', 'Strong brand-building reputation'],
          ]}
        />
      </div>

      {/* Timeline */}
      <div>
        <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--color-accent)' }}>Timeline</p>
        <Table
          headers={['Milestone', 'Date', 'Note']}
          rows={[
            ['Expression of interest', 'March 16', 'Confirmed'],
            ['Q&A questions submitted', 'This week', 'Via shared doc'],
            ['Written submission', 'April 1', 'THE decisive gate — capabilities, case studies, initial strategic/creative thinking'],
            ['Tissue session', 'Week of April 20', '45 min early concept review (optional)'],
            ['Final presentation', 'April 27 – May 4', '60 min pitch to full team'],
          ]}
        />
      </div>

      {/* Key Quotes */}
      <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
        <p className="text-xs uppercase tracking-[0.2em] mb-6" style={{ color: 'var(--color-accent)' }}>Key Quotes from Kickoff</p>
        <div className="space-y-6">
          {[
            { quote: 'I have never worked on something this ambitious in my career.', who: 'Amanda Nichol' },
            { quote: 'We are in exploration mode. We want the biggest, boldest thinking.', who: 'Amanda Nichol' },
            { quote: 'This can\'t become a campaign that speaks to only one side of the political spectrum.', who: 'Katie Peters' },
            { quote: 'Something others can pick up and carry.', who: 'Leonora Diller' },
          ].map((q, i) => (
            <div key={i} className="pl-5 border-l-2" style={{ borderColor: 'var(--color-accent)' }}>
              <p className="text-base italic mb-1" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
                &ldquo;{q.quote}&rdquo;
              </p>
              <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>— {q.who}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ClientBriefPage() {
  const [activeTab, setActiveTab] = useState<Tab>('rfp');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs: { id: Tab; label: string }[] = [
    { id: 'rfp', label: 'RFP Document' },
    { id: 'analysis', label: 'Brief Analysis' },
  ];

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
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg" style={{ color: 'var(--color-text)' }}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden fixed top-[57px] left-0 right-0 z-40 px-4 pb-4 space-y-1" style={{ backgroundColor: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)} className="flex items-center px-4 py-3 rounded-lg text-sm" style={{ color: link.active ? 'var(--color-accent)' : 'var(--color-text-secondary)' }}>
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="pt-[57px]">
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-12">
          <span className="text-[11px] tracking-[0.2em] uppercase block mb-6" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body)', fontWeight: 500 }}>
            Client Brief
          </span>

          {/* Tabs */}
          <div className="flex gap-1 mb-8 p-1 rounded-lg inline-flex" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-5 py-2.5 rounded-md text-sm transition-all duration-200 cursor-pointer"
                style={{
                  fontWeight: activeTab === tab.id ? 500 : 400,
                  backgroundColor: activeTab === tab.id ? 'var(--color-bg)' : 'transparent',
                  color: activeTab === tab.id ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                  boxShadow: activeTab === tab.id ? '0 1px 3px rgba(0,0,0,0.2)' : 'none',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'rfp' && <RFPTab />}
          {activeTab === 'analysis' && <AnalysisTab />}
        </div>
      </div>
    </div>
  );
}
