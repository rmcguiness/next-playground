import type { Metadata } from 'next';
import { DeferredSearch } from './deferred-search';

export const metadata: Metadata = {
    title: 'useDeferredValue Demo',
    description:
        'Keeping the UI responsive during expensive re-renders with the React useDeferredValue hook',
};

export default function UseDeferredValuePage() {
    return (
        <div className="container py-10 space-y-8">
            <section className="space-y-2">
                <h2 className="text-3xl font-bold">useDeferredValue</h2>
                <p className="text-gray-600 max-w-2xl">
                    The <code>useDeferredValue</code> hook lets a part of the UI lag behind a
                    fast-changing value. The input below updates instantly on every keystroke,
                    while the (artificially slow) result list re-renders with a{' '}
                    <em>deferred</em> copy of the query in a background render. While the two
                    values are out of sync, the stale list is dimmed — but typing never blocks.
                    Toggle the deferral off to feel the difference.
                </p>
                <a
                    href="https://react.dev/reference/react/useDeferredValue"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-600 hover:text-primary-700 text-sm"
                >
                    react.dev/reference/react/useDeferredValue
                </a>
            </section>
            <section>
                <DeferredSearch />
            </section>
        </div>
    );
}
