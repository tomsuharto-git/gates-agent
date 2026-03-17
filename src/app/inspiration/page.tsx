'use client';

import Link from 'next/link';
import { useState } from 'react';
import { caseStudies } from '@/data/case-studies';

const imperativeLabels: Record<number, string> = {
  1: 'Relationship',
  2: 'Enemy',
  3: 'Culture',
  4: 'Winning',
  5: 'Movement',
};

const imperativeColors: Record<number, string> = {
  1: '#E8C368',
  2: '#C75D3A',
  3: '#7ED6A4',
  4: '#6B9FFF',
  5: '#D4A0E8',
};

const navLinks = [
  { href: '/', label: 'Chat' },
  { href: '/creative-brief', label: 'Creative Brief' },
  { href: '/inspiration', label: 'Inspiration', active: true },
  { href: '/client-brief', label: 'Client Brief' },
];

export default function InspirationPage() {
  const [filter, setFilter] = useState<number | null>(null);
  const [showCautionary, setShowCautionary] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filtered = caseStudies.filter((cs) => {
    if (!showCautionary && cs.cautionary) return false;
    if (filter && !cs.imperativeAlignment.includes(filter)) return false;
    return true;
  });

  const positive = filtered.filter((cs) => !cs.cautionary);
  const cautionary = filtered.filter((cs) => cs.cautionary);

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
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
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
            Inspiration
          </span>
          <h1 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
            18 case studies. 40 years.
          </h1>
          <p className="text-lg mb-12 max-w-[600px]" style={{ color: 'var(--color-text-secondary)' }}>
            What worked, what didn&apos;t, and what we can steal — pressure-tested against our five imperatives.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            <button
              onClick={() => setFilter(null)}
              className="px-3 py-1.5 text-xs rounded-lg transition-all uppercase tracking-wider font-medium"
              style={{
                color: filter === null ? 'var(--color-bg)' : 'var(--color-text-secondary)',
                backgroundColor: filter === null ? 'var(--color-accent)' : 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              All
            </button>
            {[1, 2, 3, 4, 5].map((imp) => (
              <button
                key={imp}
                onClick={() => setFilter(filter === imp ? null : imp)}
                className="px-3 py-1.5 text-xs rounded-lg transition-all uppercase tracking-wider font-medium"
                style={{
                  color: filter === imp ? 'var(--color-bg)' : imperativeColors[imp],
                  backgroundColor: filter === imp ? imperativeColors[imp] : 'var(--color-surface)',
                  border: `1px solid ${filter === imp ? imperativeColors[imp] : 'var(--color-border)'}`,
                }}
              >
                {imperativeLabels[imp]}
              </button>
            ))}
            <div className="w-px h-6 mx-2" style={{ backgroundColor: 'var(--color-border)' }} />
            <button
              onClick={() => setShowCautionary(!showCautionary)}
              className="px-3 py-1.5 text-xs rounded-lg transition-all uppercase tracking-wider font-medium"
              style={{
                color: showCautionary ? 'var(--color-accent-alt)' : 'var(--color-text-secondary)',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              {showCautionary ? 'Cautionary tales on' : 'Cautionary tales off'}
            </button>
          </div>

          {/* Positive cases */}
          <div className="grid gap-4 md:grid-cols-2 mb-16">
            {positive.map((cs) => (
              <CaseCard key={cs.id} study={cs} />
            ))}
          </div>

          {/* Cautionary cases */}
          {cautionary.length > 0 && showCautionary && (
            <>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs tracking-wider uppercase font-medium" style={{ color: 'var(--color-accent-alt)' }}>
                  Cautionary tales
                </span>
                <div className="flex-1 h-px" style={{ backgroundColor: 'var(--color-border)' }} />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {cautionary.map((cs) => (
                  <CaseCard key={cs.id} study={cs} cautionary />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function CaseCard({ study, cautionary }: { study: typeof caseStudies[0]; cautionary?: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="p-6 rounded-xl border transition-all duration-200 cursor-pointer"
      style={{
        borderColor: cautionary ? 'rgba(199,93,58,0.2)' : 'var(--color-border)',
        backgroundColor: 'var(--color-surface)',
      }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start gap-4 mb-3">
        <img
          src={`/images/cs-${study.id}.png`}
          alt={study.name}
          className="w-12 h-12 rounded-lg object-cover shrink-0"
        />
        <div className="flex-1 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl mb-1" style={{ fontFamily: 'var(--font-display)', color: cautionary ? 'var(--color-accent-alt)' : 'var(--color-text)' }}>
            {study.name}
          </h3>
          <span className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)', opacity: 0.5 }}>
            {study.years}
          </span>
        </div>
        <div className="flex gap-1.5 shrink-0">
          {study.imperativeAlignment.map((imp) => (
            <span
              key={imp}
              className="text-[9px] tracking-wider uppercase px-1.5 py-0.5 rounded"
              style={{ color: imperativeColors[imp], backgroundColor: `${imperativeColors[imp]}15` }}
            >
              {imperativeLabels[imp]}
            </span>
          ))}
        </div>
      </div>
      </div>

      <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>
        {study.tagline}
      </p>

      {expanded && (
        <div className="space-y-4 pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
          {/* Stats */}
          <div className="flex flex-wrap gap-3">
            {study.keyStats.map((stat, i) => (
              <span
                key={i}
                className="text-xs px-2.5 py-1 rounded-md"
                style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-accent)', fontFamily: 'var(--font-mono)' }}
              >
                {stat}
              </span>
            ))}
          </div>

          {/* Lesson */}
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            {study.lesson}
          </p>
        </div>
      )}

      {/* Expand hint */}
      <div className="flex justify-end mt-2">
        <svg
          className="w-4 h-4 transition-transform duration-200"
          style={{ color: 'var(--color-text-secondary)', opacity: 0.3, transform: expanded ? 'rotate(180deg)' : 'rotate(0)' }}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
