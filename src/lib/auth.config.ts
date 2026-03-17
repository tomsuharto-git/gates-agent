import type { NextAuthConfig } from 'next-auth';

const isDev = process.env.NODE_ENV === 'development';

export const authConfig: NextAuthConfig = {
  providers: [],
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      if (isDev) return true;

      const isLoggedIn = !!auth?.user;
      const isAuthPage = nextUrl.pathname.startsWith('/auth');
      const isApiAuthRoute = nextUrl.pathname.startsWith('/api/auth');

      if (isApiAuthRoute) return true;

      if (isAuthPage && isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl));
      }

      if (!isAuthPage && !isLoggedIn) {
        return false;
      }

      return true;
    },
  },
};
