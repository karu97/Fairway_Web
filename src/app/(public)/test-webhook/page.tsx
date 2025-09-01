'use client';

import { useState } from 'react';

export default function TestWebhookPage() {
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const testWebhook = async () => {
    setLoading(true);
    setResult('Testing webhook...');
    
    try {
      const response = await fetch('/api/webhooks/sanity', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'hotel',
          documentId: 'test-document-id',
          operation: 'update'
        }),
      });

      const data = await response.json();
      setResult(`Webhook test result: ${JSON.stringify(data, null, 2)}`);
    } catch (error) {
      setResult(`Webhook test error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const testRevalidate = async () => {
    setLoading(true);
    setResult('Testing revalidation...');
    
    try {
      const response = await fetch('/api/revalidate?path=/&secret=test-secret', {
        method: 'GET',
      });

      const data = await response.json();
      setResult(`Revalidation test result: ${JSON.stringify(data, null, 2)}`);
    } catch (error) {
      setResult(`Revalidation test error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Webhook & Revalidation Test</h1>
      
      <div className="space-y-4">
        <button
          onClick={testWebhook}
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          Test Sanity Webhook
        </button>
        
        <button
          onClick={testRevalidate}
          disabled={loading}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          Test Revalidation API
        </button>
      </div>

      {result && (
        <div className="mt-8 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Result</h2>
          <pre className="bg-white p-4 rounded text-sm overflow-auto">
            {result}
          </pre>
        </div>
      )}
    </div>
  );
}
