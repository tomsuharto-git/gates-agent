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

      <div className="flex items-center gap-3 my-4">
        <div className="flex-1 h-px" style={{ backgroundColor: 'var(--color-border)' }} />
        <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-text-secondary)' }}>or</span>
        <div className="flex-1 h-px" style={{ backgroundColor: 'var(--color-border)' }} />
      </div>

      <button
        onClick={() => signIn('google', { callbackUrl })}
        className="w-full flex items-center justify-center gap-3 px-4 py-3.5 rounded-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer"
        style={{
          backgroundColor: 'var(--color-bg)',
          border: '1px solid var(--color-border)',
          color: 'var(--color-text)',
        }}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <span className="font-medium">Sign in with Google</span>
      </button>

      <p className="mt-6 text-center text-sm" style={{ color: 'var(--color-text-secondary)' }}>
        Hecho team or invited collaborators.
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
