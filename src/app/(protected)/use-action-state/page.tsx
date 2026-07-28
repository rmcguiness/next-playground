import type { Metadata } from 'next';
import { DemoShell } from '@/components/demo/demo-shell';
import { SignupForm } from './signup-form';

export const metadata: Metadata = {
  title: 'useActionState Demo',
  description:
    'Managing form state with server actions using the React useActionState hook',
};

export default function UseActionStatePage() {
  return (
    <DemoShell
      title="useActionState"
      docHref="https://react.dev/reference/react/useActionState"
      docLabel="react.dev/reference/react/useActionState"
      description={
        <>
          The <code>useActionState</code> hook connects a form to a server action
          and keeps the action&apos;s latest return value as state. The signup
          form below validates on the server: errors come back per field,
          submitted values are echoed so the form isn&apos;t wiped, and the
          built-in <code>isPending</code> flag drives the loading state — no{' '}
          <code>useState</code> bookkeeping required. It also works before
          JavaScript loads, since the form posts to the action natively.
        </>
      }
    >
      <SignupForm />
    </DemoShell>
  );
}
