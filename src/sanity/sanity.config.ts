import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { codeInput } from '@sanity/code-input';
import { schemaTypes } from './schemas';
import { deskStructure } from './deskStructure';

export default defineConfig({
  name: 'default',
  title: 'Fairway Hotels CMS',
  projectId: 'tyzm5r8j',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
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
    // Prevent publishing without required fields
    productionUrl: {
      draftMode: {
        enable: '/api/draft',
      },
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
