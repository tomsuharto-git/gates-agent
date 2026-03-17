'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SideNav } from '@/components/SideNav';
import { SectionBackground } from '@/components/sections/SectionBackground';
import { SectionAssignment } from '@/components/sections/SectionAssignment';
import { SectionChallenge } from '@/components/sections/SectionChallenge';
import { SectionWontWork } from '@/components/sections/SectionWontWork';
import { SectionTask } from '@/components/sections/SectionTask';
import { SectionImperatives } from '@/components/sections/SectionImperatives';
import { SectionOpportunity } from '@/components/sections/SectionOpportunity';
import { SectionWaysIn } from '@/components/sections/SectionWaysIn';
import { SectionNext } from '@/components/sections/SectionNext';

const navLinks = [
  { href: '/', label: 'Chat' },
  { href: '/client-brief', label: 'Client Brief' },
  { href: '/creative-brief', label: 'Creative Brief', active: true },
  { href: '/inspiration', label: 'Inspiration' },
];

function OnePager() {
  return (
    <main className="max-w-[720px] mx-auto px-6 py-16">
      {/* Title */}
      <div className="mb-16">
        <span
          className="text-[11px] tracking-[0.2em] uppercase block mb-6"
          style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body)', fontWeight: 500 }}
        >
          Strategy Summary
        </span>
        <h1 className="text-4xl md:text-5xl leading-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          Gates Foundation — Child Survival
        </h1>
        <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
          A 3–5 year movement brand engaging new parents in the US, UK, and Germany.
        </p>
      </div>

      {/* The Numbers */}
      <div className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { value: '4.8M', label: 'children will die before age 5 this year' },
          { value: '6.5s', label: 'a child dies from a preventable cause' },
          { value: '<$1', label: 'treats pneumonia, the #1 killer' },
          { value: '$54', label: 'returned for every $1 in immunization' },
        ].map((s) => (
          <div key={s.label} className="border-t pt-3" style={{ borderColor: 'var(--color-border)' }}>
            <div className="text-xl mb-1" style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}>{s.value}</div>
            <div className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* The Problem */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl leading-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          The love is there. It&apos;s just not reaching the children who need it.
        </h2>
        <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
          Every parent knows at a cellular level that a child dying is wrong. The instinct to protect children is universal — it cuts across politics, income, geography, religion.
        </p>
        <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
          But modern life buries it. Rent is due. Childcare costs are crushing. The news delivers five new crises before breakfast. New parents are in survival mode — even the ones who care deeply are at capacity. There&apos;s no room left for children dying in countries they&apos;ve never visited.
        </p>
        <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          And when someone does feel the tug, the options are broken: donate to a foundation you&apos;ve vaguely heard of, share a sad post, sign a petition that vanishes. No visible identity for caring. No cultural signal. And the moment the issue gets coded as political — which it has — it divides the people who would otherwise agree. The Gates Foundation name itself has become polarizing. The brand can&apos;t be the face of the movement.
        </p>
      </div>

      {/* The Task */}
      <div className="mb-16 py-10 border-t border-b" style={{ borderColor: 'var(--color-border)' }}>
        <h2
          className="text-3xl md:text-4xl leading-tight text-center"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)' }}
        >
          Build a cause brand that behaves as culture.
        </h2>
        <p className="text-center mt-4 text-base" style={{ color: 'var(--color-text-secondary)' }}>
          Guilt reaches the already-sympathetic. Wonk reaches the already-informed.
          Shock reaches the momentarily-activated. Culture reaches everyone.
        </p>
      </div>

      {/* 5 Imperatives */}
      <div className="mb-16">
        <h3 className="text-xs tracking-[0.15em] uppercase mb-6" style={{ color: 'var(--color-accent)', fontWeight: 500 }}>
          Five Imperatives
        </h3>
        <div className="space-y-4">
          {[
            { num: '01', title: 'Center the relationship to kids.', desc: 'Identity, not obligation. New parents experience an empathy surge — make it claimable.' },
            { num: '02', title: 'Identify an enemy.', desc: 'Every movement needs something to fight. It must be bipartisan, clear, and specific.' },
            { num: '03', title: 'Behave as culture.', desc: 'Live inside entertainment, self-expression, and the things people already love — not as a cause asking them to care more.' },
            { num: '04', title: 'Make it feel like winning.', desc: 'Every level of engagement should feel like gaining, not losing. Fun, status, belonging.' },
            { num: '05', title: 'Build a movement, not a funnel.', desc: 'Concentric circles of commitment. Visible signals at every level that decision-makers can see.' },
          ].map((imp) => (
            <div key={imp.num} className="flex gap-4">
              <span className="text-sm shrink-0 mt-0.5" style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', opacity: 0.5 }}>{imp.num}</span>
              <div>
                <span className="text-base font-medium" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>{imp.title}</span>
                <span className="text-sm ml-2" style={{ color: 'var(--color-text-secondary)' }}>{imp.desc}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm italic" style={{ color: 'var(--color-text-secondary)' }}>
          No movement brand in history has scored A across all five. That&apos;s the opportunity.
        </p>
      </div>

      {/* 8 Ways In */}
      <div className="mb-16">
        <h3 className="text-xs tracking-[0.15em] uppercase mb-6" style={{ color: 'var(--color-accent)', fontWeight: 500 }}>
          Eight Ways In
        </h3>
        <div className="space-y-3">
          {[
            { num: '01', name: 'The Parent Resource', pitch: 'What if the best parenting platform also saved children?', color: '#E8C368' },
            { num: '02', name: 'The Entertainment Engine', pitch: 'What if attention IS the donation?', color: '#FF6B6B' },
            { num: '03', name: 'The VC Model', pitch: 'What if brand growth funded child survival?', color: '#6B9FFF' },
            { num: '04', name: 'Hype for Help', pitch: 'What if hype culture fought actual scarcity?', color: '#FF9F43' },
            { num: '05', name: 'The Wonder Brand', pitch: 'What if saving children was an investment in perspective?', color: '#7ED6A4' },
            { num: '06', name: 'Love Well', pitch: 'What if we proved love can save every child?', color: '#E8C368' },
            { num: '07', name: 'Alive at 5', pitch: 'What if one number organized an entire movement?', color: '#FFD93D' },
            { num: '08', name: 'Skincare for Care', pitch: 'What if your daily routine funded essential care?', color: '#D4A0E8' },
          ].map((w) => (
            <div key={w.num} className="flex items-baseline gap-3">
              <span className="text-sm shrink-0 w-6" style={{ fontFamily: 'var(--font-mono)', color: w.color, opacity: 0.5 }}>{w.num}</span>
              <span className="text-base shrink-0 w-44" style={{ fontFamily: 'var(--font-display)', color: w.color }}>{w.name}</span>
              <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{w.pitch}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-8 border-t text-center" style={{ borderColor: 'var(--color-border)' }}>
        <p className="text-sm" style={{ color: 'var(--color-text-secondary)', opacity: 0.4 }}>
          Prepared by Hecho Studios (Stagwell / 72andSunny)
        </p>
      </div>
    </main>
  );
}

export default function CreativeBrief() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [view, setView] = useState<'full' | 'onepager'>('full');

  return (
    <>
      {/* Nav Header */}
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

      <div className="pt-[57px]">
        {/* View Toggle */}
        <div className="flex justify-center py-4" style={{ borderBottom: '1px solid var(--color-border)' }}>
          <div className="flex gap-1 p-1 rounded-lg" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
            <button
              onClick={() => setView('full')}
              className="px-4 py-2 rounded-md text-xs uppercase tracking-wider font-medium transition-all"
              style={{
                backgroundColor: view === 'full' ? 'var(--color-bg)' : 'transparent',
                color: view === 'full' ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                boxShadow: view === 'full' ? '0 1px 3px rgba(0,0,0,0.2)' : 'none',
              }}
            >
              Full Brief
            </button>
            <button
              onClick={() => setView('onepager')}
              className="px-4 py-2 rounded-md text-xs uppercase tracking-wider font-medium transition-all"
              style={{
                backgroundColor: view === 'onepager' ? 'var(--color-bg)' : 'transparent',
                color: view === 'onepager' ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                boxShadow: view === 'onepager' ? '0 1px 3px rgba(0,0,0,0.2)' : 'none',
              }}
            >
              One-Pager
            </button>
          </div>
        </div>

        {view === 'full' ? (
          <>
            <SideNav />
            <main className="lg:ml-[200px]">
              <SectionBackground />
              <SectionAssignment />
              <SectionChallenge />
              <SectionWontWork />
              <SectionTask />
              <SectionImperatives />
              <SectionOpportunity />
              <SectionWaysIn />
              <SectionNext />
            </main>
          </>
        ) : (
          <OnePager />
        )}
      </div>
    </>
  );
}
