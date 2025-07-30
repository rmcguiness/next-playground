import { Suspense } from "react";

async function SlowComponent() {
  // Simulate a slow data fetch
  await new Promise(resolve => setTimeout(resolve, 5000));

  return (
    <div className="rounded-lg p-4 bg-blue-100 text-black">
      <h2 className="text-xl font-bold">Slow Loading Component</h2>
      <p>This content took 5 seconds to load</p>
    </div>
  );
}

export default function SuspensePage() {
  return (
    <div className="min-h-screen ">
      <main className="p-8">
        <div className="py-3">
          <h1 className="font-bold text-2xl text-foreground mb-1">Suspense Demo Page</h1>
          <p className="text-foreground-1">This page demonstrates React.js Suspense functionality</p>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg p-4 bg-green-100 text-black">
            <p>This content loads immediately</p>
          </div>

          <Suspense fallback={
            <div className="rounded-lg p-4 bg-gray-100 skeleton text-black">
              <p>Suspense fallback component...</p>
            </div>
          }>
            <SlowComponent />
          </Suspense>
        </div>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href="/suspense-vs-layout/skeleton-loading"
            className="rounded-lg px-4 py-3 shadow-lg text-foreground"
          >
            View Skeleton Loading Example
          </a>
          <a
            href="/suspense-vs-layout/suspense"
            className="rounded-md px-4 py-3 font-bold text-foreground"
          >
            Reload Page
          </a>
        </div>
      </main>
    </div>
  );
}
