import type { Metadata } from 'next';
import { LazyDemo } from './lazy-demo';

export const metadata: Metadata = {
    title: 'Dynamic Import Demo',
    description:
        'Code-splitting and lazy loading client components on demand with next/dynamic',
};

export default function DynamicImportPage() {
    return (
        <div className="container py-10 space-y-8">
            <section className="space-y-2">
                <h2 className="text-3xl font-bold">Dynamic Imports (next/dynamic)</h2>
                <p className="text-gray-600 max-w-2xl">
                    <code>next/dynamic</code> is Next.js&rsquo;s wrapper around{' '}
                    <code>React.lazy</code> and <code>Suspense</code>. It lets you defer
                    loading a component&rsquo;s JavaScript until it is actually needed,
                    splitting it into its own bundle chunk. This shrinks the initial page
                    payload and speeds up first load. Below, the chart widget&rsquo;s code is
                    only fetched when you click <strong>Load widget</strong>, and a{' '}
                    <code>loading</code> fallback is shown while the chunk downloads. It also
                    uses <code>ssr: false</code> so the component renders only in the browser.
                </p>
                <a
                    href="https://nextjs.org/docs/app/guides/lazy-loading"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-600 hover:text-primary-700 text-sm"
                >
                    nextjs.org/docs/app/guides/lazy-loading
                </a>
            </section>
            <section>
                <LazyDemo />
            </section>
        </div>
    );
}
