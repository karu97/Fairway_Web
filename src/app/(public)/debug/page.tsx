import { getHotels, getTours, getBlogPosts, isSanityConfigured } from '@/lib/sanity';
import { config } from '@/lib/config';

export default async function DebugPage() {
  const isConfigured = isSanityConfigured();
  
  let hotels: any[] = [];
  let tours: any[] = [];
  let blogPosts: any[] = [];
  let errors: string[] = [];

  if (isConfigured) {
    try {
      hotels = await getHotels();
    } catch (error) {
      errors.push(`Hotels error: ${error}`);
    }

    try {
      tours = await getTours();
    } catch (error) {
      errors.push(`Tours error: ${error}`);
    }

    try {
      blogPosts = await getBlogPosts();
    } catch (error) {
      errors.push(`Blog posts error: ${error}`);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Debug Information</h1>
      
      <div className="space-y-8">
        {/* Configuration Status */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Sanity Configuration</h2>
          <div className="space-y-2">
            <p><strong>Is Configured:</strong> {isConfigured ? 'Yes' : 'No'}</p>
            <p><strong>Project ID:</strong> {config.sanity.projectId || 'Not set'}</p>
            <p><strong>Dataset:</strong> {config.sanity.dataset || 'Not set'}</p>
            <p><strong>API Version:</strong> {config.sanity.apiVersion || 'Not set'}</p>
            <p><strong>Use CDN:</strong> {config.sanity.useCdn ? 'Yes' : 'No'}</p>
            <p><strong>Has Token:</strong> {config.sanity.token ? 'Yes' : 'No'}</p>
          </div>
        </div>

        {/* Errors */}
        {errors.length > 0 && (
          <div className="bg-red-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-red-800">Errors</h2>
            <ul className="space-y-2">
              {errors.map((error, index) => (
                <li key={index} className="text-red-700">{error}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Data Counts */}
        <div className="bg-blue-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Data Counts</h2>
          <div className="space-y-2">
            <p><strong>Hotels:</strong> {hotels.length}</p>
            <p><strong>Tours:</strong> {tours.length}</p>
            <p><strong>Blog Posts:</strong> {blogPosts.length}</p>
          </div>
        </div>

        {/* Sample Data */}
        {hotels.length > 0 && (
          <div className="bg-green-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Sample Hotel</h2>
            <pre className="bg-white p-4 rounded text-sm overflow-auto">
              {JSON.stringify(hotels[0], null, 2)}
            </pre>
          </div>
        )}

        {tours.length > 0 && (
          <div className="bg-yellow-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Sample Tour</h2>
            <pre className="bg-white p-4 rounded text-sm overflow-auto">
              {JSON.stringify(tours[0], null, 2)}
            </pre>
          </div>
        )}

        {blogPosts.length > 0 && (
          <div className="bg-purple-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Sample Blog Post</h2>
            <pre className="bg-white p-4 rounded text-sm overflow-auto">
              {JSON.stringify(blogPosts[0], null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
