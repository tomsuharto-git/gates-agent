import NextAuth from 'next-auth';
import MicrosoftEntraID from 'next-auth/providers/microsoft-entra-id';
import Google from 'next-auth/providers/google';
import { authConfig } from './auth.config';

const tenantId = process.env.AZURE_AD_TENANT_ID?.trim();
const azureClientId = process.env.AZURE_AD_CLIENT_ID?.trim();
const azureClientSecret = process.env.AZURE_AD_CLIENT_SECRET?.trim();

const allowedDomains = ['hechostudios.com'];
const allowedEmails: string[] = [
  'mail@keesbakker.studio',
  'tomsuharto@gmail.com',
];

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    MicrosoftEntraID({
      clientId: azureClientId!,
      clientSecret: azureClientSecret!,
      issuer: `https://login.microsoftonline.com/${tenantId}/v2.0`,
      authorization: {
        params: {
          scope: 'openid profile email User.Read',
        },
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60,
  },
  callbacks: {
    async signIn({ user, profile }) {
      const email = user?.email || profile?.email;
      if (!email) return false;

      const emailLower = email.toLowerCase();

      if (allowedEmails.includes(emailLower)) return true;

      const domain = emailLower.split('@')[1];
      if (!allowedDomains.includes(domain)) return false;

      return true;
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.id = profile.sub;
        token.email = profile.email;
        token.name = profile.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
