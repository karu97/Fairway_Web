export const SUPPORTED_LOCALES = ['en', 'si', 'ta'] as const;
export const DEFAULT_LOCALE = 'en' as const;

export type SupportedLocale = typeof SUPPORTED_LOCALES[number];

export interface LocaleConfig {
  code: SupportedLocale;
  name: string;
  nativeName: string;
  flag: string;
  direction: 'ltr' | 'rtl';
  dateFormat: string;
  currency: string;
  numberFormat: Intl.NumberFormatOptions;
}

export const LOCALE_CONFIGS: Record<SupportedLocale, LocaleConfig> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    direction: 'ltr',
    dateFormat: 'MM/DD/YYYY',
    currency: 'USD',
    numberFormat: {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
  },
  si: {
    code: 'si',
    name: 'Sinhala',
    nativeName: 'සිංහල',
    flag: '🇱🇰',
    direction: 'ltr',
    dateFormat: 'DD/MM/YYYY',
    currency: 'LKR',
    numberFormat: {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
  },
  ta: {
    code: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    flag: '🇱🇰',
    direction: 'ltr',
    dateFormat: 'DD/MM/YYYY',
    currency: 'LKR',
    numberFormat: {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
  },
};

export function isValidLocale(locale: string): locale is SupportedLocale {
  return SUPPORTED_LOCALES.includes(locale as SupportedLocale);
}

export function getLocaleConfig(locale: string): LocaleConfig {
  if (isValidLocale(locale)) {
    return LOCALE_CONFIGS[locale];
  }
  return LOCALE_CONFIGS[DEFAULT_LOCALE];
}

export function getDefaultLocale(): LocaleConfig {
  return LOCALE_CONFIGS[DEFAULT_LOCALE];
}

export function getSupportedLocales(): LocaleConfig[] {
  return Object.values(LOCALE_CONFIGS);
}

export function formatDate(date: Date, locale: SupportedLocale): string {
  const config = getLocaleConfig(locale);
  
  if (locale === 'en') {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  }
  
  if (locale === 'si') {
    // Sinhala date formatting
    return new Intl.DateTimeFormat('si-LK', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  }
  
  if (locale === 'ta') {
    // Tamil date formatting
    return new Intl.DateTimeFormat('ta-LK', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  }
  
  return date.toLocaleDateString();
}

export function formatCurrency(amount: number, locale: SupportedLocale): string {
  const config = getLocaleConfig(locale);
  
  if (locale === 'en') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  }
  
  if (locale === 'si') {
    return new Intl.NumberFormat('si-LK', {
      style: 'currency',
      currency: 'LKR',
    }).format(amount);
  }
  
  if (locale === 'ta') {
    return new Intl.NumberFormat('ta-LK', {
      style: 'currency',
      currency: 'LKR',
    }).format(amount);
  }
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function formatNumber(number: number, locale: SupportedLocale): string {
  const config = getLocaleConfig(locale);
  
  return new Intl.NumberFormat(locale === 'en' ? 'en-US' : `${locale}-LK`, config.numberFormat).format(number);
}

export function getHreflangTags(currentPath: string): Record<SupportedLocale, string> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fairwayhotels.com';
  
  const hreflangs: Record<SupportedLocale, string> = {} as Record<SupportedLocale, string>;
  
  SUPPORTED_LOCALES.forEach(locale => {
    if (locale === DEFAULT_LOCALE) {
      hreflangs[locale] = `${baseUrl}${currentPath}`;
    } else {
      hreflangs[locale] = `${baseUrl}/${locale}${currentPath}`;
    }
  });
  
  return hreflangs;
}

export function getCanonicalUrl(currentPath: string, locale?: SupportedLocale): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fairwayhotels.com';
  
  if (!locale || locale === DEFAULT_LOCALE) {
    return `${baseUrl}${currentPath}`;
  }
  
  return `${baseUrl}/${locale}${currentPath}`;
}

export function getAlternateUrls(currentPath: string): Array<{ locale: SupportedLocale; url: string }> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fairwayhotels.com';
  
  return SUPPORTED_LOCALES.map(locale => ({
    locale,
    url: locale === DEFAULT_LOCALE 
      ? `${baseUrl}${currentPath}`
      : `${baseUrl}/${locale}${currentPath}`,
  }));
}

export function parseLocaleFromPath(pathname: string): SupportedLocale {
  const segments = pathname.split('/').filter(Boolean);
  
  if (segments.length > 0 && isValidLocale(segments[0])) {
    return segments[0];
  }
  
  return DEFAULT_LOCALE;
}

export function removeLocaleFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  
  if (segments.length > 0 && isValidLocale(segments[0])) {
    return '/' + segments.slice(1).join('/');
  }
  
  return pathname;
}

export function addLocaleToPath(pathname: string, locale: SupportedLocale): string {
  if (locale === DEFAULT_LOCALE) {
    return pathname;
  }
  
  return `/${locale}${pathname}`;
}

export function getLocaleFromAcceptLanguage(acceptLanguage: string): SupportedLocale {
  const languages = acceptLanguage
    .split(',')
    .map(lang => lang.split(';')[0].trim().toLowerCase());
  
  for (const lang of languages) {
    // Check for exact matches
    if (isValidLocale(lang)) {
      return lang;
    }
    
    // Check for language family matches
    if (lang.startsWith('si') && isValidLocale('si')) {
      return 'si';
    }
    
    if (lang.startsWith('ta') && isValidLocale('ta')) {
      return 'ta';
    }
    
    if (lang.startsWith('en') && isValidLocale('en')) {
      return 'en';
    }
  }
  
  return DEFAULT_LOCALE;
}

export function getLocalizedField<T>(
  field: T | Record<SupportedLocale, T>,
  locale: SupportedLocale
): T {
  if (typeof field === 'object' && field !== null && !Array.isArray(field)) {
    const localizedField = field as Record<SupportedLocale, T>;
    
    if (localizedField[locale]) {
      return localizedField[locale];
    }
    
    // Fallback to default locale
    if (localizedField[DEFAULT_LOCALE]) {
      return localizedField[DEFAULT_LOCALE];
    }
    
    // Fallback to first available locale
    const firstAvailable = Object.values(localizedField)[0];
    if (firstAvailable) {
      return firstAvailable;
    }
  }
  
  return field as T;
}

export function createLocalizedSlug(
  baseSlug: string,
  locale: SupportedLocale
): string {
  if (locale === DEFAULT_LOCALE) {
    return baseSlug;
  }
  
  return `${locale}-${baseSlug}`;
}

export function parseLocalizedSlug(slug: string): { baseSlug: string; locale: SupportedLocale } {
  for (const locale of SUPPORTED_LOCALES) {
    if (locale !== DEFAULT_LOCALE && slug.startsWith(`${locale}-`)) {
      return {
        baseSlug: slug.substring(locale.length + 1),
        locale,
      };
    }
  }
  
  return {
    baseSlug: slug,
    locale: DEFAULT_LOCALE,
  };
}
