import type { Metadata } from 'next';
import { DemoShell } from '@/components/demo/demo-shell';
import { DeferredSearch } from './deferred-search';

export const metadata: Metadata = {
  title: 'useDeferredValue Demo',
  description:
    'Keeping the UI responsive during expensive re-renders with the React useDeferredValue hook',
};

export default function UseDeferredValuePage() {
  return (
    <DemoShell
      title="useDeferredValue"
      docHref="https://react.dev/reference/react/useDeferredValue"
      docLabel="react.dev/reference/react/useDeferredValue"
      description={
        <>
          The <code>useDeferredValue</code> hook lets a part of the UI lag behind
          a fast-changing value. The input below updates instantly on every
          keystroke, while the (artificially slow) result list re-renders with a{' '}
          <em>deferred</em> copy of the query in a background render. While the
          two values are out of sync, the stale list is dimmed — but typing never
          blocks. Toggle the deferral off to feel the difference.
        </>
      }
    >
      <DeferredSearch />
    </DemoShell>
  );
}
