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

export default function LoadingLayoutPage() {
  return (
    <div className="min-h-screen ">
      <main className="p-8">
        <div className="py-3">
          <h1 className="font-bold text-2xl text-foreground mb-1">Skeleton Loading Demo Page</h1>
          <p className="text-foreground-1">This page demonstrates Next.js Loading Layout functionality</p>
        </div>

        <div className="space-y-4 ">
          <div className="rounded-lg p-4 bg-green-100 text-black">
            <p>This content loads immediately</p>
          </div>
          <SlowComponent />
        </div>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href="/suspense-vs-layout/suspense"
            className="rounded-lg px-4 py-3 shadow-lg text-foreground"
          >
            View Suspense Example
          </a>
          <a
            href="/suspense-vs-layout/skeleton-loading"
            className="rounded-md px-4 py-3 font-bold text-foreground"
          >
            Reload Page
          </a>
        </div>
      </main>
    </div>
  );
}
