'use client';

import Link from 'next/link';
import { ChatPanel } from '@/components/ChatPanel';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Header */}
      <div className="px-6 md:px-8 pt-6 pb-4 flex items-center justify-between">
        <div>
          <h1
            className="text-2xl md:text-3xl"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}
          >
            Gates Foundation
          </h1>
          <p
            className="text-[11px] tracking-[0.15em] uppercase mt-1 font-medium"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Child Survival Campaign — Hecho Project Agent
          </p>
        </div>
        <Link
          href="/creative-brief"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
          style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            color: 'var(--color-accent)',
          }}
        >
          Creative Brief
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Chat */}
      <ChatPanel />
    </main>
  );
}
