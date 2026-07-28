import type { Metadata } from 'next';
import { DemoShell } from '@/components/demo/demo-shell';
import { BuggyCounter } from './buggy-counter';

export const metadata: Metadata = {
  title: 'Error Boundaries Demo',
  description:
    'Catching render-time errors in a route segment with an App Router error.tsx boundary',
};

export default function ErrorBoundaryPage() {
  return (
    <DemoShell
      title="Error Boundaries (error.tsx)"
      docHref="https://nextjs.org/docs/app/building-your-application/routing/error-handling"
      docLabel="nextjs.org/docs/app/building-your-application/routing/error-handling"
      description={
        <>
          An <code>error.tsx</code> file placed in a route segment automatically
          wraps that segment (and its children) in a React Error Boundary. When a
          component throws during render, the boundary catches it and renders the
          fallback UI instead of crashing the whole app. The fallback receives the{' '}
          <code>error</code> plus a <code>reset()</code> function that re-renders
          the segment to attempt recovery. The counter below throws once it
          reaches <strong>5</strong> — trip it, then use &ldquo;Try again&rdquo; on
          the fallback to reset.
        </>
      }
    >
      <BuggyCounter />
    </DemoShell>
  );
}
