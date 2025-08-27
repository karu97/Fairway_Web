import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // Simple admin authentication
        // In production, you should use a proper database and hashed passwords
        if (credentials?.email === 'admin@fairwayhotels.com' && credentials?.password === 'admin123') {
          return {
            id: '1',
            email: 'admin@fairwayhotels.com',
            name: 'Admin User',
            role: 'ADMIN',
          };
        }
        
        // Additional admin users can be added here
        if (credentials?.email === 'editor@fairwayhotels.com' && credentials?.password === 'editor123') {
          return {
            id: '2',
            email: 'editor@fairwayhotels.com',
            name: 'Editor User',
            role: 'EDITOR',
          };
        }
        
        return null;
      }
    }),
  ],
  session: { 
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
        session.user.id = token.sub;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  secret: process.env.AUTH_SECRET || 'your-secret-key',
};


