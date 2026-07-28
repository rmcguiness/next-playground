import type { Metadata } from 'next';
import { DemoShell } from '@/components/demo/demo-shell';
import { LazyDemo } from './lazy-demo';

export const metadata: Metadata = {
  title: 'Dynamic Import Demo',
  description:
    'Code-splitting and lazy loading client components on demand with next/dynamic',
};

export default function DynamicImportPage() {
  return (
    <DemoShell
      title="Dynamic Imports (next/dynamic)"
      docHref="https://nextjs.org/docs/app/guides/lazy-loading"
      docLabel="nextjs.org/docs/app/guides/lazy-loading"
      description={
        <>
          <code>next/dynamic</code> is Next.js&rsquo;s wrapper around{' '}
          <code>React.lazy</code> and <code>Suspense</code>. It lets you defer
          loading a component&rsquo;s JavaScript until it is actually needed,
          splitting it into its own bundle chunk. This shrinks the initial page
          payload and speeds up first load. Below, the chart widget&rsquo;s code
          is only fetched when you click <strong>Load widget</strong>, and a{' '}
          <code>loading</code> fallback is shown while the chunk downloads. It
          also uses <code>ssr: false</code> so the component renders only in the
          browser.
        </>
      }
    >
      <LazyDemo />
    </DemoShell>
  );
}
