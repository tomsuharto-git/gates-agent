'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { caseStudies } from '@/data/case-studies';
import { caseStudyDetails } from '@/data/case-study-details';

const imperativeLabels: Record<number, string> = {
  1: 'Relationship to Kids',
  2: 'Identify an Enemy',
  3: 'Behave as Culture',
  4: 'Feel Like Winning',
  5: 'Movement, Not Funnel',
};

const imperativeColors: Record<number, string> = {
  1: '#E8C368',
  2: '#C75D3A',
  3: '#7ED6A4',
  4: '#6B9FFF',
  5: '#D4A0E8',
};

const gradeColors: Record<string, string> = {
  A: '#7ED6A4',
  B: '#E8C368',
  C: '#FF9F43',
  D: '#C75D3A',
  F: '#A09890',
};

const lensLabels = [
  { key: 'mechanic', label: 'The Mechanic', subtitle: 'What people actually did' },
  { key: 'signal', label: 'The Signal', subtitle: 'The visible participation signal' },
  { key: 'reward', label: 'The Reward', subtitle: 'What participants got back' },
  { key: 'coding', label: 'The Coding', subtitle: 'Cultural register — how it felt' },
  { key: 'durability', label: 'The Durability', subtitle: 'Longevity and evolution' },
  { key: 'scalability', label: 'The Scalability', subtitle: 'Global reach, what traveled' },
  { key: 'ladder', label: 'The Ladder', subtitle: 'Systemic change and evidence' },
] as const;

const navLinks = [
  { href: '/', label: 'Chat' },
  { href: '/client-brief', label: 'Client Brief' },
  { href: '/creative-brief', label: 'Creative Brief' },
  { href: '/inspiration', label: 'Inspiration' },
];

export default function CaseStudyDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const study = caseStudies.find((cs) => cs.id === id);
  const detail = caseStudyDetails[id];

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--color-bg)' }}>
        <p style={{ color: 'var(--color-text-secondary)' }}>Case study not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-4 flex items-center justify-between"
        style={{ backgroundColor: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}
      >
        <Link href="/" className="text-lg" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
          Gates Foundation
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 text-[11px] rounded-lg transition-all whitespace-nowrap uppercase tracking-wider font-medium"
              style={{
                color: link.label === 'Inspiration' ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                backgroundColor: link.label === 'Inspiration' ? 'rgba(232,195,104,0.08)' : 'transparent',
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
            <Link key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)} className="flex items-center px-4 py-3 rounded-lg text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <div className="pt-[57px]">
        <div className="max-w-[800px] mx-auto px-6 md:px-8 py-12">
          {/* Back link */}
          <Link href="/inspiration" className="inline-flex items-center gap-2 text-sm mb-8 transition-all hover:gap-3" style={{ color: 'var(--color-text-secondary)' }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Case Studies
          </Link>

          {/* Header */}
          <div className="flex items-start gap-5 mb-8">
            <img
              src={`/images/cs-${study.id}.png`}
              alt={study.name}
              className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover shrink-0"
            />
            <div>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {study.imperativeAlignment.map((imp) => (
                  <span
                    key={imp}
                    className="text-[9px] tracking-wider uppercase px-1.5 py-0.5 rounded"
                    style={{ color: imperativeColors[imp], backgroundColor: `${imperativeColors[imp]}15` }}
                  >
                    {imperativeLabels[imp]}
                  </span>
                ))}
                {study.cautionary && (
                  <span className="text-[9px] tracking-wider uppercase px-1.5 py-0.5 rounded" style={{ color: 'var(--color-accent-alt)', backgroundColor: 'rgba(199,93,58,0.15)' }}>
                    Cautionary
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-display)', color: study.cautionary ? 'var(--color-accent-alt)' : 'var(--color-text)' }}>
                {study.name}
              </h1>
              <span className="text-sm mt-1 block" style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)', opacity: 0.5 }}>
                {study.years}
              </span>
            </div>
          </div>

          <p className="text-lg mb-4" style={{ color: 'var(--color-text)' }}>
            {study.tagline}
          </p>

          {/* Key stats */}
          <div className="flex flex-wrap gap-3 mb-8">
            {study.keyStats.map((stat, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1.5 rounded-md"
                style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-accent)', fontFamily: 'var(--font-mono)' }}
              >
                {stat}
              </span>
            ))}
          </div>

          {/* Overview */}
          {detail?.overview && (
            <p className="text-base leading-relaxed mb-12" style={{ color: 'var(--color-text-secondary)' }}>
              {detail.overview}
            </p>
          )}

          {/* 7 Lenses */}
          {detail && (
            <div className="space-y-8 mb-16">
              <p className="text-xs tracking-[0.15em] uppercase" style={{ color: 'var(--color-accent)', fontWeight: 500 }}>
                Full Analysis
              </p>

              {lensLabels.map((lens, i) => {
                const content = detail[lens.key as keyof typeof detail];
                if (!content || typeof content !== 'string') return null;
                return (
                  <div
                    key={lens.key}
                    className="p-6 md:p-8 rounded-xl"
                    style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
                  >
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="text-sm" style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', opacity: 0.4 }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="text-lg" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
                          {lens.label}
                        </h3>
                        <span className="text-xs" style={{ color: 'var(--color-text-secondary)', opacity: 0.5 }}>
                          {lens.subtitle}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed ml-9" style={{ color: 'var(--color-text-secondary)' }}>
                      {content}
                    </p>
                  </div>
                );
              })}
            </div>
          )}

          {/* Synthesis */}
          {detail?.synthesis && (
            <div className="mb-8 p-6 md:p-8 rounded-xl" style={{ backgroundColor: 'var(--color-surface-light)', border: '1px solid var(--color-border)' }}>
              <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: 'var(--color-accent)', fontWeight: 500 }}>
                What We Can Steal
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text)' }}>
                {detail.synthesis}
              </p>
            </div>
          )}

          {detail?.cautionary && (
            <div className="mb-12 p-6 md:p-8 rounded-xl" style={{ backgroundColor: 'rgba(199,93,58,0.05)', border: '1px solid rgba(199,93,58,0.2)' }}>
              <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: 'var(--color-accent-alt)', fontWeight: 500 }}>
                Cautionary Lesson
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {detail.cautionary}
              </p>
            </div>
          )}

          {/* Imperative Scorecard */}
          {detail?.imperativeScores && (
            <div className="mb-12">
              <p className="text-xs tracking-[0.15em] uppercase mb-6" style={{ color: 'var(--color-accent)', fontWeight: 500 }}>
                Imperative Scorecard
              </p>
              <div className="space-y-3">
                {Object.entries(detail.imperativeScores).map(([key, score]) => {
                  const impNum = parseInt(key.replace('imp', ''));
                  return (
                    <div
                      key={key}
                      className="flex items-center gap-4 p-4 rounded-lg"
                      style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
                    >
                      <span
                        className="text-xl font-medium w-8 text-center"
                        style={{ fontFamily: 'var(--font-mono)', color: gradeColors[score.grade] || 'var(--color-text-secondary)' }}
                      >
                        {score.grade}
                      </span>
                      <div className="flex-1">
                        <span className="text-sm font-medium block" style={{ color: imperativeColors[impNum] }}>
                          {imperativeLabels[impNum]}
                        </span>
                        <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                          {score.reason}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Strategic lesson */}
          <div className="py-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
            <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: 'var(--color-text-secondary)', opacity: 0.5 }}>
              Strategic Lesson
            </p>
            <p className="text-lg leading-relaxed" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
              {study.lesson}
            </p>
          </div>

          {/* Back */}
          <div className="pt-8">
            <Link href="/inspiration" className="inline-flex items-center gap-2 text-sm transition-all hover:gap-3" style={{ color: 'var(--color-accent)' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
