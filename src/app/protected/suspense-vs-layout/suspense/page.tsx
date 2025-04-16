import { Suspense } from "react";

async function SlowComponent() {
  // Simulate a slow data fetch
  await new Promise(resolve => setTimeout(resolve, 5000));

  return (
    <div className="card p-4 bg-blue-100 text-black">
      <h2 className="text-xl font-bold">Slow Loading Component</h2>
      <p>This content took 5 seconds to load</p>
    </div>
  );
}

export default function SuspensePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <main className="layout-container p-8 page-section">
        <div className="page-header">
          <h1>Suspense Demo Page</h1>
          <p className="text-slate-600">This page demonstrates React.js Suspense functionality</p>
        </div>

        <div className="space-y-4 animate-fade-in">
          <div className="card p-4 bg-green-100 text-black">
            <p>This content loads immediately</p>
          </div>

          <Suspense fallback={
            <div className="card p-4 bg-gray-100 skeleton text-black">
              <p>Suspense fallback component...</p>
            </div>
          }>
            <SlowComponent />
          </Suspense>
        </div>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href="/protected/suspense-vs-layout/skeleton-loading"
            className="btn-secondary"
          >
            View Skeleton Loading Example
          </a>
          <a
            href="/protected/suspense-vs-layout/suspense"
            className="btn-primary"
          >
            Reload Page
          </a>
        </div>
      </main>
    </div>
  );
}
