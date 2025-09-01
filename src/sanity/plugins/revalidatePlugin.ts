import { definePlugin } from 'sanity';

export const revalidatePlugin = definePlugin({
  name: 'revalidate-plugin',
  document: {
    onPublish: async (args) => {
      const { document } = args;
      
      // Only revalidate if we have the necessary environment variables
      if (!process.env.REVALIDATE_SECRET || !process.env.NEXT_PUBLIC_SITE_URL) {
        console.warn('Missing environment variables for cache revalidation');
        return;
      }

      try {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
        const secret = process.env.REVALIDATE_SECRET;
        
        // Determine which paths and tags to revalidate based on document type
        let paths: string[] = ['/'];
        let tags: string[] = [];
        
        switch (document._type) {
          case 'hotel':
            paths.push('/hotels');
            tags = ['hotels', 'featured-hotels'];
            break;
          case 'tour':
            paths.push('/tours');
            tags = ['tours', 'featured-tours'];
            break;
          case 'blog':
            paths.push('/blog');
            tags = ['blog'];
            break;
          case 'content':
            paths.push('/about', '/contact');
            tags = ['content'];
            break;
          case 'settings':
            tags = ['settings'];
            break;
          default:
            tags = ['sanity'];
        }

        // Revalidate paths
        for (const path of paths) {
          await fetch(`${baseUrl}/api/revalidate?path=${encodeURIComponent(path)}&secret=${secret}`, {
            method: 'GET',
          });
        }

        // Revalidate tags
        for (const tag of tags) {
          await fetch(`${baseUrl}/api/revalidate?tag=${encodeURIComponent(tag)}&secret=${secret}`, {
            method: 'GET',
          });
        }

        console.log(`Revalidated cache for ${document._type}: ${document._id}`);
      } catch (error) {
        console.error('Error revalidating cache:', error);
      }
    },
  },
});
