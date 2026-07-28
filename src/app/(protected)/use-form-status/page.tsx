import type { Metadata } from 'next';
import { DemoShell } from '@/components/demo/demo-shell';
import { FeedbackForm } from './feedback-form';

export const metadata: Metadata = {
  title: 'useFormStatus Demo',
  description:
    'Reading the pending state of a parent form with the React useFormStatus hook',
};

export default function UseFormStatusPage() {
  return (
    <DemoShell
      title="useFormStatus"
      docHref="https://react.dev/reference/react-dom/hooks/useFormStatus"
      docLabel="react.dev/reference/react-dom/hooks/useFormStatus"
      description={
        <>
          The <code>useFormStatus</code> hook lets a component read the submission
          status of the <code>&lt;form&gt;</code> it is rendered inside — without
          threading a <code>pending</code> prop through the tree. It must be
          called from a component <em>nested within</em> the form, not the one
          that renders the form. Below, both the submit button and the textarea
          subscribe to the same form&apos;s status independently: the button shows
          a spinner and the field greys out while the server action runs.
        </>
      }
    >
      <FeedbackForm />
    </DemoShell>
  );
}
