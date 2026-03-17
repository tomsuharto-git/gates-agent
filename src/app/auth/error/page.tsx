'use client';

import Link from 'next/link';

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="text-center">
        <h1 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent-alt)' }}>
          Access Denied
        </h1>
        <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
          Only @hechostudios.com accounts can access this site.
        </p>
        <Link
          href="/auth/signin"
          className="inline-flex px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
          style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-accent)' }}
        >
          Try Again
        </Link>
      </div>
    </div>
  );
}
