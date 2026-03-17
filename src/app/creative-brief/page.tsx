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
  { href: '/creative-brief', label: 'Creative Brief', active: true },
  { href: '/inspiration', label: 'Inspiration' },
  { href: '/client-brief', label: 'Client Brief' },
];

export default function CreativeBrief() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      </div>
    </>
  );
}
