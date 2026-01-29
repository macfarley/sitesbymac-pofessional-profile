/**
 * Redirect Management Dashboard
 * 
 * A development tool for testing and managing project redirects.
 */

'use client';

import { useState, useEffect } from 'react';

interface RedirectDoc {
  projectId: string;
  title: string;
  patterns: string[];
  destination: string;
}

interface RedirectData {
  redirects: RedirectDoc[];
  total: number;
  patterns: string[];
}

export default function RedirectsPage() {
  const [redirectData, setRedirectData] = useState<RedirectData | null>(null);
  const [loading, setLoading] = useState(true);
  const [testResults, setTestResults] = useState<Record<string, string>>({});

  useEffect(() => {
    fetchRedirects();
  }, []);

  const fetchRedirects = async () => {
    try {
      const response = await fetch('/api/redirects');
      const data = await response.json();
      setRedirectData(data);
    } catch (error) {
      console.error('Failed to fetch redirects:', error);
    } finally {
      setLoading(false);
    }
  };

  const testRedirect = async (projectId: string, pattern: string) => {
    try {
      const response = await fetch('/api/redirects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId, pattern }),
      });
      
      const result = await response.json();
      setTestResults(prev => ({
        ...prev,
        [`${projectId}-${pattern}`]: result.message || 'Test completed'
      }));
    } catch (error) {
      console.error('Test redirect failed:', error);
      setTestResults(prev => ({
        ...prev,
        [`${projectId}-${pattern}`]: 'Test failed'
      }));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-100 dark:bg-gray-900 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">Loading redirects...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            🔗 Project Redirect Dashboard
          </h1>
          <p className="text-gray-600 mb-6">
            Manage and test URL redirects for portfolio projects.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900">Total Projects</h3>
              <p className="text-2xl font-bold text-blue-700">
                {redirectData?.total || 0}
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900">URL Patterns</h3>
              <p className="text-2xl font-bold text-green-700">
                {redirectData?.patterns.length || 0}
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900">Active Redirects</h3>
              <p className="text-2xl font-bold text-purple-700">
                {redirectData?.redirects.length || 0}
              </p>
            </div>
          </div>
        </div>

        {redirectData?.redirects.map((redirect) => (
          <div key={redirect.projectId} className="bg-amber-50 dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {redirect.title}
                </h2>
                <p className="text-sm text-gray-500">
                  Project ID: <code className="bg-gray-100 px-2 py-1 rounded">
                    {redirect.projectId}
                  </code>
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Destination:</div>
                <a 
                  href={redirect.destination}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-mono break-all"
                >
                  {redirect.destination}
                </a>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="font-medium text-gray-700 mb-2">Available URL Patterns:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {redirect.patterns.map((pattern) => {
                  const testKey = `${redirect.projectId}-${pattern}`;
                  const testResult = testResults[testKey];
                  
                  return (
                    <div key={pattern} className="border border-gray-200 rounded-lg p-3">
                      <div className="font-mono text-sm mb-2 bg-stone-50 dark:bg-gray-700 p-2 rounded">
                        {pattern}
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => testRedirect(redirect.projectId, pattern)}
                          className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded"
                        >
                          Test
                        </button>
                        <a
                          href={pattern}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded"
                        >
                          Visit
                        </a>
                      </div>
                      {testResult && (
                        <div className="mt-2 text-xs text-gray-600 dark:text-gray-400 bg-stone-50 dark:bg-gray-700 p-2 rounded">
                          {testResult}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            📖 Usage Documentation
          </h2>
          <div className="prose prose-sm max-w-none">
            <h3>Available URL Patterns:</h3>
            <ul>
              {redirectData?.patterns.map((pattern) => (
                <li key={pattern}>
                  <code>{pattern.replace('{id}', '[project-id]')}</code>
                </li>
              ))}
            </ul>
            
            <h3>Examples:</h3>
            <ul>
              <li><code>/go/stircraft</code> → StirCraft app</li>
              <li><code>/demo/dream-weaver</code> → Dream Weaver demo</li>
              <li><code>/projects/stircraft/live</code> → StirCraft live site</li>
            </ul>
            
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <p className="text-sm">
                <strong>Note:</strong> All redirects include UTM tracking parameters
                for analytics. Redirects are managed via Next.js middleware for
                optimal performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
