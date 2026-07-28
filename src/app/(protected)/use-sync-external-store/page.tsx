import type { Metadata } from 'next';
import { DemoShell } from '@/components/demo/demo-shell';
import { StoreDemo } from './store-demo';

export const metadata: Metadata = {
  title: 'useSyncExternalStore Demo',
  description:
    'Subscribing React components to external, non-React stores (browser APIs) with the useSyncExternalStore hook',
};

export default function UseSyncExternalStorePage() {
  return (
    <DemoShell
      title="useSyncExternalStore"
      docHref="https://react.dev/reference/react/useSyncExternalStore"
      docLabel="react.dev/reference/react/useSyncExternalStore"
      description={
        <>
          The <code>useSyncExternalStore</code> hook lets a component read and
          subscribe to a store that lives <em>outside</em> React — a browser API,
          a global singleton, a third-party state library. You give it a{' '}
          <code>subscribe</code> function (React calls it to be notified of
          changes) and a <code>getSnapshot</code> function (React calls it to read
          the current value). The optional <code>getServerSnapshot</code> supplies
          a value during server rendering so the markup matches on hydration.
          Below, two components subscribe to real browser state: your
          online/offline status and the viewport width.
        </>
      }
    >
      <StoreDemo />
    </DemoShell>
  );
}
