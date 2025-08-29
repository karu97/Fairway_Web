// @ts-nocheck
// Importing as any to avoid type dependency on Sanity types in app build
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require('sanity');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { deskTool } = require('sanity/desk');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { visionTool } = require('@sanity/vision');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { codeInput } = require('@sanity/code-input');
import { schemaTypes } from './schemas';
import resolveProductionUrl from './resolve/productionUrl';
import { deskStructure } from './deskStructure';

export default defineConfig({
  name: 'default',
  title: 'Fairway Hotels CMS',
  projectId: 'tyzm5r8j',
  dataset: (globalThis as any).process?.env?.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
    codeInput(),
  ],
  schema: {
    types: schemaTypes,
  },
  document: {
    productionUrl: async (prev: string | undefined, context: any) => {
      return resolveProductionUrl(prev, context);
    },
  },
  cors: {
    credentials: 'include',
    origin: [
      'http://localhost:3000',
      'https://fairwayhotels.com',
      'https://*.vercel.app',
    ],
  },
  // Fix for Framer Motion compatibility
  studio: {
    components: {
      // Disable problematic animations
      logo: () => null,
    },
  },
});
