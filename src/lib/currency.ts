export interface Currency {
  code: string;
  name: string;
  symbol: string;
  rate: number; // Rate relative to USD
  decimals: number;
}

export const SUPPORTED_CURRENCIES: Record<string, Currency> = {
  USD: {
    code: 'USD',
    name: 'US Dollar',
    symbol: '$',
    rate: 1,
    decimals: 2,
  },
  LKR: {
    code: 'LKR',
    name: 'Sri Lankan Rupee',
    symbol: 'Rs',
    rate: 320, // Approximate rate
    decimals: 2,
  },
  EUR: {
    code: 'EUR',
    name: 'Euro',
    symbol: '€',
    rate: 0.85,
    decimals: 2,
  },
  GBP: {
    code: 'GBP',
    name: 'British Pound',
    symbol: '£',
    rate: 0.73,
    decimals: 2,
  },
  AUD: {
    code: 'AUD',
    name: 'Australian Dollar',
    symbol: 'A$',
    rate: 1.35,
    decimals: 2,
  },
  CAD: {
    code: 'CAD',
    name: 'Canadian Dollar',
    symbol: 'C$',
    rate: 1.25,
    decimals: 2,
  },
  SGD: {
    code: 'SGD',
    name: 'Singapore Dollar',
    symbol: 'S$',
    rate: 1.32,
    decimals: 2,
  },
  INR: {
    code: 'INR',
    name: 'Indian Rupee',
    symbol: '₹',
    rate: 75,
    decimals: 2,
  },
};

export const DEFAULT_CURRENCY = 'USD';

export function getCurrency(code: string): Currency {
  return SUPPORTED_CURRENCIES[code.toUpperCase()] || SUPPORTED_CURRENCIES[DEFAULT_CURRENCY];
}

export function getAllCurrencies(): Currency[] {
  return Object.values(SUPPORTED_CURRENCIES);
}

export function convertCurrency(
  amount: number,
  fromCurrency: string,
  toCurrency: string
): number {
  if (fromCurrency === toCurrency) {
    return amount;
  }

  const from = getCurrency(fromCurrency);
  const to = getCurrency(toCurrency);

  // Convert to USD first, then to target currency
  const usdAmount = amount / from.rate;
  return usdAmount * to.rate;
}

export function formatCurrency(
  amount: number,
  currencyCode: string,
  locale: string = 'en-US'
): string {
  const currency = getCurrency(currencyCode);
  
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency.code,
      minimumFractionDigits: currency.decimals,
      maximumFractionDigits: currency.decimals,
    }).format(amount);
  } catch (error) {
    // Fallback formatting
    return `${currency.symbol}${amount.toFixed(currency.decimals)}`;
  }
}

export function formatPrice(
  amount: number,
  currencyCode: string,
  locale: string = 'en-US',
  showCurrency: boolean = true
): string {
  const currency = getCurrency(currencyCode);
  
  if (showCurrency) {
    return formatCurrency(amount, currencyCode, locale);
  }
  
  try {
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: currency.decimals,
      maximumFractionDigits: currency.decimals,
    }).format(amount);
  } catch (error) {
    return amount.toFixed(currency.decimals);
  }
}

export function parseCurrencyAmount(
  value: string,
  currencyCode: string
): number | null {
  const currency = getCurrency(currencyCode);
  
  // Remove currency symbols and non-numeric characters except decimal point
  const cleanValue = value.replace(/[^\d.,]/g, '');
  
  // Handle different decimal separators
  let normalizedValue = cleanValue;
  if (cleanValue.includes(',') && cleanValue.includes('.')) {
    // If both separators exist, assume comma is thousands separator
    normalizedValue = cleanValue.replace(/,/g, '');
  } else if (cleanValue.includes(',')) {
    // If only comma exists, assume it's decimal separator
    normalizedValue = cleanValue.replace(/,/g, '.');
  }
  
  const amount = parseFloat(normalizedValue);
  
  if (isNaN(amount)) {
    return null;
  }
  
  return Math.round(amount * Math.pow(10, currency.decimals)) / Math.pow(10, currency.decimals);
}

export function getCurrencySymbol(currencyCode: string): string {
  const currency = getCurrency(currencyCode);
  return currency.symbol;
}

export function getCurrencyName(currencyCode: string): string {
  const currency = getCurrency(currencyCode);
  return currency.name;
}

export function isSupportedCurrency(currencyCode: string): boolean {
  return currencyCode.toUpperCase() in SUPPORTED_CURRENCIES;
}

export function getExchangeRate(fromCurrency: string, toCurrency: string): number {
  if (fromCurrency === toCurrency) {
    return 1;
  }
  
  const from = getCurrency(fromCurrency);
  const to = getCurrency(toCurrency);
  
  return to.rate / from.rate;
}

export function calculatePriceRange(
  minPrice: number,
  maxPrice: number,
  fromCurrency: string,
  toCurrency: string
): { min: number; max: number } {
  const min = convertCurrency(minPrice, fromCurrency, toCurrency);
  const max = convertCurrency(maxPrice, fromCurrency, toCurrency);
  
  return {
    min: Math.floor(min),
    max: Math.ceil(max),
  };
}

export function getPriceRangeLabel(
  minPrice: number,
  maxPrice: number,
  currencyCode: string,
  locale: string = 'en-US'
): string {
  const currency = getCurrency(currencyCode);
  
  if (minPrice === maxPrice) {
    return formatCurrency(minPrice, currencyCode, locale);
  }
  
  const min = formatCurrency(minPrice, currencyCode, locale);
  const max = formatCurrency(maxPrice, currencyCode, locale);
  
  return `${min} - ${max}`;
}

export function getPriceTier(price: number, currencyCode: string): string {
  const currency = getCurrency(currencyCode);
  
  // Convert to USD for consistent tier calculation
  const usdPrice = price / currency.rate;
  
  if (usdPrice < 50) {
    return 'budget';
  } else if (usdPrice < 150) {
    return 'mid-range';
  } else if (usdPrice < 300) {
    return 'luxury';
  } else {
    return 'ultra-luxury';
  }
}

export function getPriceTierLabel(tier: string): string {
  const labels: Record<string, string> = {
    budget: 'Budget',
    'mid-range': 'Mid-Range',
    luxury: 'Luxury',
    'ultra-luxury': 'Ultra-Luxury',
  };
  
  return labels[tier] || tier;
}

export function getPriceTierColor(tier: string): string {
  const colors: Record<string, string> = {
    budget: 'text-green-600',
    'mid-range': 'text-blue-600',
    luxury: 'text-purple-600',
    'ultra-luxury': 'text-red-600',
  };
  
  return colors[tier] || 'text-gray-600';
}

export function getPriceTierBackground(tier: string): string {
  const backgrounds: Record<string, string> = {
    budget: 'bg-green-50',
    'mid-range': 'bg-blue-50',
    luxury: 'bg-purple-50',
    'ultra-luxury': 'bg-red-50',
  };
  
  return backgrounds[tier] || 'bg-gray-50';
}

export function getPriceTierBorder(tier: string): string {
  const borders: Record<string, string> = {
    budget: 'border-green-200',
    'mid-range': 'border-blue-200',
    luxury: 'border-purple-200',
    'ultra-luxury': 'border-red-200',
  };
  
  return borders[tier] || 'border-gray-200';
}

export function formatPriceRange(
  minPrice: number,
  maxPrice: number,
  currencyCode: string,
  locale: string = 'en-US',
  showCurrency: boolean = true
): string {
  if (minPrice === maxPrice) {
    return formatPrice(minPrice, currencyCode, locale, showCurrency);
  }
  
  const min = formatPrice(minPrice, currencyCode, locale, showCurrency);
  const max = formatPrice(maxPrice, currencyCode, locale, showCurrency);
  
  return `${min} - ${max}`;
}

export function getCurrencyDisplayName(currencyCode: string, locale: string = 'en-US'): string {
  try {
    const currency = getCurrency(currencyCode);
    return new Intl.DisplayNames(locale, { type: 'currency' }).of(currency.code) || currency.name;
  } catch (error) {
    return getCurrencyName(currencyCode);
  }
}

export function getCurrencyDisplayNames(locale: string = 'en-US'): Record<string, string> {
  const names: Record<string, string> = {};
  
  Object.keys(SUPPORTED_CURRENCIES).forEach(code => {
    names[code] = getCurrencyDisplayName(code, locale);
  });
  
  return names;
}

export function getCurrencyOptions(locale: string = 'en-US'): Array<{
  value: string;
  label: string;
  symbol: string;
}> {
  return Object.values(SUPPORTED_CURRENCIES).map(currency => ({
    value: currency.code,
    label: getCurrencyDisplayName(currency.code, locale),
    symbol: currency.symbol,
  }));
}
