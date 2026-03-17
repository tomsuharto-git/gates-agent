'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChatPanel } from '@/components/ChatPanel';

const navLinks = [
  { href: '/', label: 'Chat', active: true },
  { href: '/creative-brief', label: 'Creative Brief' },
  { href: '/inspiration', label: 'Inspiration' },
  { href: '/client-brief', label: 'Client Brief' },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Nav Header */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-4 flex items-center justify-between"
        style={{ backgroundColor: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group transition-all">
            <span
              className="text-lg"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}
            >
              Gates Foundation
            </span>
          </Link>
        </div>

        {/* Desktop Links */}
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

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg transition-all"
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
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all"
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

      {/* Main content: left hero + right chat */}
      <main className="flex-1 flex flex-col lg:flex-row pt-[57px]" style={{ minHeight: 'calc(100vh - 57px)' }}>
        {/* Left: Hero */}
        <div
          className="lg:w-[35%] xl:w-[30%] shrink-0 hidden lg:flex flex-col justify-between py-8 px-8 lg:px-10"
          style={{ borderRight: '1px solid var(--color-border)' }}
        >
          <div>
            <div
              className="text-sm font-medium uppercase tracking-widest mb-4 flex items-center gap-2"
              style={{ color: 'var(--color-accent)' }}
            >
              <span
                style={{
                  width: 24,
                  height: 1,
                  backgroundColor: 'var(--color-accent)',
                  display: 'inline-block',
                }}
              />
              Hecho Project Agent
            </div>
            <h1
              className="text-3xl lg:text-4xl xl:text-5xl mb-3"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-text)',
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
              }}
            >
              Child Survival Campaign
            </h1>
          </div>

          <div className="my-8">
            <p className="text-base lg:text-lg leading-relaxed max-w-md" style={{ color: 'var(--color-text-secondary)' }}>
              Multi-year movement brand for the Gates Foundation. Engaging new parents in the US, UK, and Germany to care about saving children&apos;s lives.
            </p>
          </div>

          <div />
        </div>

        {/* Right: Chat */}
        <div className="flex-1 flex flex-col min-h-[500px] lg:min-h-0">
          <ChatPanel />
        </div>
      </main>
    </div>
  );
}
