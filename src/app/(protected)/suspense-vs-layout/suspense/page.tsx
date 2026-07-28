import { Suspense } from "react";
import { DemoShell } from "@/components/demo/demo-shell";

async function SlowComponent() {
  // Simulate a slow data fetch
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div className="rounded-lg p-4 bg-blue-100 text-black">
      <h2 className="text-xl font-bold">Slow Loading Component</h2>
      <p>This content took 5 seconds to load</p>
    </div>
  );
}

export default function SuspensePage() {
  return (
    <DemoShell
      title="Suspense Loading"
      description="A Suspense boundary streams in slow server content while the rest of the page renders immediately and shows a fallback in its place."
    >
      <div className="space-y-4">
        <div className="rounded-lg p-4 bg-green-100 text-black">
          <p>This content loads immediately</p>
        </div>

        <Suspense
          fallback={
            <div className="rounded-lg p-4 bg-gray-100 skeleton text-black">
              <p>Suspense fallback component...</p>
            </div>
          }
        >
          <SlowComponent />
        </Suspense>
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="/suspense-vs-layout/skeleton-loading"
          className="rounded-md border border-border px-4 py-2 text-sm text-foreground-2 hover:bg-surface hover:text-foreground"
        >
          View Skeleton Loading Example
        </a>
        <a
          href="/suspense-vs-layout/suspense"
          className="rounded-md border border-border px-4 py-2 text-sm text-foreground-2 hover:bg-surface hover:text-foreground"
        >
          Reload Page
        </a>
      </div>
    </DemoShell>
  );
}
