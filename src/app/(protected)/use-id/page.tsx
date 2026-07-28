import type { Metadata } from 'next';
import { DemoShell } from '@/components/demo/demo-shell';
import { SettingsForm } from './settings-form';

export const metadata: Metadata = {
  title: 'useId Demo',
  description:
    'Generating stable, unique, hydration-safe IDs for accessible form fields with the React useId hook',
};

export default function UseIdPage() {
  return (
    <DemoShell
      title="useId"
      docHref="https://react.dev/reference/react/useId"
      docLabel="react.dev/reference/react/useId"
      description={
        <>
          <code>useId</code> returns a unique ID string that is stable across
          the server render and the client hydration, so it never causes a
          hydration mismatch. It is designed for wiring accessibility
          attributes — pairing a <code>&lt;label htmlFor&gt;</code> with an
          input&rsquo;s <code>id</code>, or connecting an input to its help text
          and error via <code>aria-describedby</code>. Because the same
          component below is rendered twice, each instance gets its own set of
          IDs automatically, with no manual counters or globals.
        </>
      }
    >
      <div className="grid gap-6 md:grid-cols-2">
        <SettingsForm legend="Primary account" />
        <SettingsForm legend="Backup account" />
      </div>
    </DemoShell>
  );
}
