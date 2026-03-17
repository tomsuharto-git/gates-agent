'use client';

import { Suspense } from 'react';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

function SignInForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const error = searchParams.get('error');

  return (
    <div className="rounded-xl p-8" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
      {error && (
        <div className="mb-4 p-3 rounded-lg text-sm" style={{ background: 'rgba(199,93,58,0.15)', border: '1px solid rgba(199,93,58,0.3)', color: 'var(--color-accent-alt)' }}>
          {error === 'OAuthAccountNotLinked'
            ? 'This email is already associated with another account.'
            : error === 'AccessDenied'
            ? 'Access denied. Only @hechostudios.com accounts are allowed.'
            : 'An error occurred during sign in. Please try again.'}
        </div>
      )}

      <button
        onClick={() => signIn('microsoft-entra-id', { callbackUrl })}
        className="w-full flex items-center justify-center gap-3 px-4 py-3.5 rounded-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer"
        style={{
          backgroundColor: 'var(--color-bg)',
          border: '1px solid var(--color-border)',
          color: 'var(--color-text)',
        }}
      >
        <svg className="w-5 h-5" viewBox="0 0 21 21" fill="none">
          <rect x="1" y="1" width="9" height="9" fill="#F25022" />
          <rect x="11" y="1" width="9" height="9" fill="#7FBA00" />
          <rect x="1" y="11" width="9" height="9" fill="#00A4EF" />
          <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
        </svg>
        <span className="font-medium">Sign in with Microsoft</span>
      </button>

      <p className="mt-6 text-center text-sm" style={{ color: 'var(--color-text-secondary)' }}>
        Use your @hechostudios.com account.
      </p>
    </div>
  );
}

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <h1 className="text-4xl mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
            Gates Foundation
          </h1>
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--color-text-secondary)' }}>
            Child Survival Campaign
          </p>
        </div>

        <Suspense
          fallback={
            <div className="rounded-xl p-8 animate-pulse" style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-text-secondary)' }}>
              Loading...
            </div>
          }
        >
          <SignInForm />
        </Suspense>
      </div>
    </div>
  );
}
