import type { Metadata } from 'next';
import { DemoShell } from '@/components/demo/demo-shell';
import { TabSwitcher } from './tab-switcher';

export const metadata: Metadata = {
  title: 'useTransition Demo',
  description:
    'Keeping the UI responsive during slow state updates with the React useTransition hook',
};

export default function UseTransitionPage() {
  return (
    <DemoShell
      title="useTransition"
      docHref="https://react.dev/reference/react/useTransition"
      docLabel="react.dev/reference/react/useTransition"
      description={
        <>
          The <code>useTransition</code> hook lets you mark a state update as a{' '}
          <em>transition</em> — a non-urgent update that React can render in the
          background without blocking the UI. Below, the &ldquo;Posts&rdquo; tab
          is artificially slow to render. With transitions enabled, clicking it
          keeps the tab bar responsive and shows a pending indicator while React
          prepares the new tab; you can even change your mind mid-render and click
          another tab. Toggle transitions off to feel the UI freeze instead.
        </>
      }
    >
      <TabSwitcher />
    </DemoShell>
  );
}
