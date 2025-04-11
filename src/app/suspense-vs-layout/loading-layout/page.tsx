async function SlowComponent() {
  // Simulate a slow data fetch
  await new Promise(resolve => setTimeout(resolve, 5000));

  return (
    <div className="p-4 bg-blue-100 rounded-lg text-black">
      <h2 className="text-xl font-bold">Slow Loading Component</h2>
      <p>This content took 5 seconds to load</p>
    </div>
  );
}

export default function SuspensePage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-8">Loading Layout Demo Page</h1>

        <div className="space-y-4">
          <div className="p-4 bg-green-100 rounded-lg text-black">
            <p>This content loads immediately</p>
          </div>
          <SlowComponent />
        </div>
        <div className="mt-8">
          <a
            href="/suspense-vs-layout/suspense"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            View Suspense Example
          </a>
        </div>
      </main>
    </div>
  );
}
