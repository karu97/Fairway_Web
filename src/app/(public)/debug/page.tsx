import { getHotels, getHotel } from '@/lib/sanity';
import { config } from '@/lib/config';

export default async function DebugPage() {
  const hotels = await getHotels();
  
  // Test individual hotel fetching
  let testHotel = null;
  if (hotels.length > 0) {
    testHotel = await getHotel(hotels[0].slug);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Debug Page</h1>
      
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Configuration</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
            {JSON.stringify(config, null, 2)}
          </pre>
        </div>
        

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Hotels Data</h2>
          <p className="mb-2">Total hotels found: {hotels.length}</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
            {JSON.stringify(hotels, null, 2)}
          </pre>
        </div>

        {testHotel && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Test Hotel Data</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
              {JSON.stringify(testHotel, null, 2)}
            </pre>
          </div>
        )}

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Supported Locales</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
            {JSON.stringify(config.site.supportedLocales, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
