import type { Metadata } from 'next';
import { BuggyCounter } from './buggy-counter';

export const metadata: Metadata = {
    title: 'Error Boundaries Demo',
    description:
        'Catching render-time errors in a route segment with an App Router error.tsx boundary',
};

export default function ErrorBoundaryPage() {
    return (
        <div className="container py-10 space-y-8">
            <section className="space-y-2">
                <h2 className="text-3xl font-bold">Error Boundaries (error.tsx)</h2>
                <p className="text-gray-600 max-w-2xl">
                    An <code>error.tsx</code> file placed in a route segment automatically
                    wraps that segment (and its children) in a React Error Boundary. When a
                    component throws during render, the boundary catches it and renders the
                    fallback UI instead of crashing the whole app. The fallback receives the{' '}
                    <code>error</code> plus a <code>reset()</code> function that re-renders the
                    segment to attempt recovery. The counter below throws once it reaches{' '}
                    <strong>5</strong> — trip it, then use &ldquo;Try again&rdquo; on the
                    fallback to reset.
                </p>
                <a
                    href="https://nextjs.org/docs/app/building-your-application/routing/error-handling"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-600 hover:text-primary-700 text-sm"
                >
                    nextjs.org/docs/app/building-your-application/routing/error-handling
                </a>
            </section>
            <section>
                <BuggyCounter />
            </section>
        </div>
    );
}
