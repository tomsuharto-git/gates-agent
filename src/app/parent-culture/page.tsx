'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { categories, keyStats, whiteSpaceOpportunities } from '@/data/parent-culture';
import type { ParentCultureCategory, Brand } from '@/data/parent-culture';

const navLinks = [
  { href: '/', label: 'Chat' },
  { href: '/client-brief', label: 'Client Brief' },
  { href: '/creative-brief', label: 'Creative Brief' },
  { href: '/inspiration', label: 'Inspiration' },
  { href: '/influencers', label: 'Influencers' },
  { href: '/parent-culture', label: 'Parent Culture', active: true },
];

function BrandCard({ brand, color }: { brand: Brand; color: string }) {
  return (
    <div
      className="rounded-xl p-5 transition-all hover:translate-y-[-2px]"
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
      }}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <h4
          className="text-base font-medium"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}
        >
          {brand.name}
        </h4>
        {brand.stat && (
          <span
            className="text-[10px] tracking-wider uppercase font-medium shrink-0 px-2 py-0.5 rounded"
            style={{ color, backgroundColor: `${color}15` }}
          >
            {brand.stat}
          </span>
        )}
        {!brand.stat && brand.price && (
          <span
            className="text-[10px] tracking-wider uppercase font-medium shrink-0 px-2 py-0.5 rounded"
            style={{ color: 'var(--color-text-secondary)', backgroundColor: 'var(--color-surface-light)' }}
          >
            {brand.price}
          </span>
        )}
      </div>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        {brand.detail}
      </p>
    </div>
  );
}

function CategorySection({ category }: { category: ParentCultureCategory }) {
  const ref = useScrollReveal();

  return (
    <section id={category.id} ref={ref} className="py-24 md:py-32">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-8">
            <span
              className="text-sm"
              style={{ fontFamily: 'var(--font-mono)', color: category.color, opacity: 0.5 }}
            >
              {category.icon}
            </span>
            <span
              className="text-[11px] tracking-[0.2em] uppercase"
              style={{ color: category.color, fontFamily: 'var(--font-body)', fontWeight: 500 }}
            >
              {category.label}
            </span>
          </div>
        </div>

        <h2
          className="reveal text-3xl md:text-4xl leading-tight mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {category.title}
        </h2>

        <p
          className="reveal text-base md:text-lg leading-relaxed mb-12 max-w-[680px]"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {category.subtitle}
        </p>

        <div className="reveal grid gap-3 md:grid-cols-2">
          {category.topTargets.map((brand) => (
            <BrandCard key={brand.name} brand={brand} color={category.color} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhiteSpaceSection() {
  const ref = useScrollReveal();
  const categoryColors: Record<string, string> = {
    Buy: '#E8C368',
    Consume: '#7ED6A4',
    Go: '#6B9FFF',
    Wear: '#D4A0E8',
    Follow: '#E8C368',
  };

  return (
    <section id="white-space" ref={ref} className="py-24 md:py-32">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        <div className="reveal">
          <span
            className="text-[11px] tracking-[0.2em] uppercase block mb-8"
            style={{ color: 'var(--color-accent-alt)', fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            White Space
          </span>
        </div>

        <h2
          className="reveal text-3xl md:text-4xl leading-tight mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Six first-mover opportunities.
        </h2>
        <p
          className="reveal text-base md:text-lg leading-relaxed mb-12 max-w-[680px]"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Nobody has done these. They solve problems the client hasn&apos;t thought of yet.
        </p>

        <div className="reveal grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {whiteSpaceOpportunities.map((opp) => (
            <div
              key={opp.title}
              className="rounded-xl p-5"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-[10px] tracking-wider uppercase font-medium px-2 py-0.5 rounded"
                  style={{
                    color: categoryColors[opp.category],
                    backgroundColor: `${categoryColors[opp.category]}15`,
                  }}
                >
                  {opp.category}
                </span>
              </div>
              <h4
                className="text-base font-medium mb-2"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}
              >
                {opp.title}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {opp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ParentCulturePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const heroRef = useScrollReveal();

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
        {/* Hero */}
        <section ref={heroRef} className="py-24 md:py-32">
          <div className="max-w-[1000px] mx-auto px-6 md:px-8">
            <div className="reveal">
              <span
                className="text-[11px] tracking-[0.2em] uppercase block mb-8"
                style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body)', fontWeight: 500 }}
              >
                Parent Culture Research
              </span>
            </div>

            <h1
              className="reveal text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Meeting new parents<br />where they already are.
            </h1>

            <p
              className="reveal text-lg md:text-xl leading-relaxed mb-16 max-w-[640px]"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Real brands, creators, products, and spaces across five dimensions of parent culture.
              Named targets for a cause brand that lives inside what parents already do.
            </p>

            {/* Key stats */}
            <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-6">
              {keyStats.map((s) => (
                <div key={s.label} className="border-t pt-3" style={{ borderColor: 'var(--color-border)' }}>
                  <div
                    className="text-xl md:text-2xl mb-1"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category filter pills */}
        <div
          className="sticky top-[57px] z-30 py-4"
          style={{ backgroundColor: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}
        >
          <div className="max-w-[1000px] mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <button
                onClick={() => {
                  setActiveCategory(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-3 py-1.5 text-xs rounded-lg transition-all uppercase tracking-wider font-medium shrink-0"
                style={{
                  color: activeCategory === null ? 'var(--color-bg)' : 'var(--color-text-secondary)',
                  backgroundColor: activeCategory === null ? 'var(--color-accent)' : 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                }}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(activeCategory === cat.id ? null : cat.id);
                    const el = document.getElementById(cat.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="px-3 py-1.5 text-xs rounded-lg transition-all uppercase tracking-wider font-medium shrink-0"
                  style={{
                    color: activeCategory === cat.id ? 'var(--color-bg)' : cat.color,
                    backgroundColor: activeCategory === cat.id ? cat.color : 'var(--color-surface)',
                    border: `1px solid ${activeCategory === cat.id ? cat.color : 'var(--color-border)'}`,
                  }}
                >
                  {cat.label}
                </button>
              ))}
              <div className="w-px h-6 mx-1 shrink-0" style={{ backgroundColor: 'var(--color-border)' }} />
              <button
                onClick={() => {
                  const el = document.getElementById('white-space');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="px-3 py-1.5 text-xs rounded-lg transition-all uppercase tracking-wider font-medium shrink-0"
                style={{
                  color: 'var(--color-accent-alt)',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                }}
              >
                White Space
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-[1000px] mx-auto px-6 md:px-8">
          <div className="h-px" style={{ backgroundColor: 'var(--color-border)' }} />
        </div>

        {/* Category sections */}
        {categories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}

        {/* White space */}
        <div className="max-w-[1000px] mx-auto px-6 md:px-8">
          <div className="h-px" style={{ backgroundColor: 'var(--color-border)' }} />
        </div>
        <WhiteSpaceSection />

        {/* Source note */}
        <div className="max-w-[1000px] mx-auto px-6 md:px-8 pb-24">
          <p className="text-xs" style={{ color: 'var(--color-text-secondary)', opacity: 0.5 }}>
            Sources: Babylist, Nielsen, KFF/Washington Post, Fortune, Sensor Tower, Morning Consult, Mamava, KaBOOM!, and 80+ additional sources.
            Research compiled March 2026. Markets: US, UK, Germany.
          </p>
        </div>
      </div>
    </div>
  );
}
