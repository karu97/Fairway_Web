'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode, createContext, useContext } from 'react';

interface SiteSettings {
  siteName?: string;
  defaultLocale?: string;
  supportedLocales?: string[];
  defaultSEO?: any;
  logo?: { url: string; alt?: string };
  siteIcon?: { url: string; alt?: string };
  brandColors?: {
    primary?: string;
    secondary?: string;
    accent?: string;
    text?: string;
    background?: string;
  };
  contact?: {
    phone?: string;
    email?: string;
    address?: string;
  };
  social?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
}

interface ProvidersProps {
  children: ReactNode;
  siteSettings?: SiteSettings;
}

const SiteSettingsContext = createContext<SiteSettings | undefined>(undefined);

export function useSiteSettings() {
  const context = useContext(SiteSettingsContext);
  return context;
}

export default function Providers({ children, siteSettings }: ProvidersProps) {
  return (
    <SessionProvider>
      <SiteSettingsContext.Provider value={siteSettings}>
        {children}
      </SiteSettingsContext.Provider>
    </SessionProvider>
  );
}
