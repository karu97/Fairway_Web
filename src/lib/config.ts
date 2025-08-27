export const config = {
  site: {
    name: 'Fairway Hotels',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'en',
    supportedLocales: (process.env.NEXT_PUBLIC_SUPPORTED_LOCALES || 'en').split(','),
  },
  database: {
    url: process.env.DATABASE_URL!,
  },
  sanity: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    useCdn: process.env.NODE_ENV === 'production',
    token: process.env.SANITY_API_READ_TOKEN,
    writeToken: process.env.SANITY_API_WRITE_TOKEN,
    webhookSecret: process.env.SANITY_WEBHOOK_SECRET,
  },
  auth: {
    secret: process.env.AUTH_SECRET!,
    url: process.env.NEXTAUTH_URL || 'http://localhost:3000',
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  email: {
    resend: {
      apiKey: process.env.RESEND_API_KEY,
    },
    smtp: {
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  },
  search: {
    meili: {
      host: process.env.MEILI_HOST || 'http://localhost:7700',
      masterKey: process.env.MEILI_MASTER_KEY!,
    },
  },
  payments: {
    stripe: {
      publicKey: process.env.STRIPE_PUBLIC_KEY!,
      secretKey: process.env.STRIPE_SECRET_KEY!,
      webhookSecret: process.env.STRIPE_WEBHOOK_SECRET!,
    },
    payhere: {
      merchantId: process.env.PAYHERE_MERCHANT_ID,
    },
    webxpay: {
      merchantId: process.env.WEBXPAY_MERCHANT_ID,
    },
  },
  analytics: {
    ga: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    vercel: process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID,
  },
  maps: {
    mapbox: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
  },
  cloudinary: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
  },
} as const;

export type Config = typeof config;

// Validation function to check required environment variables
export function validateConfig() {
  const required = [
    'DATABASE_URL',
    'NEXT_PUBLIC_SANITY_PROJECT_ID',
    'AUTH_SECRET',
    'STRIPE_PUBLIC_KEY',
    'STRIPE_SECRET_KEY',
  ];

  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}

// Helper to get config with validation
export function getConfig() {
  if (process.env.NODE_ENV === 'production') {
    validateConfig();
  }
  return config;
}
