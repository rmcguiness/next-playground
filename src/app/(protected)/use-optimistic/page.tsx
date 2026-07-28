import type { Metadata } from 'next';
import { DemoShell } from '@/components/demo/demo-shell';
import { MessageThread } from './message-thread';

export const metadata: Metadata = {
  title: 'useOptimistic Demo',
  description: 'Optimistic UI updates with the React 19 useOptimistic hook',
};

export default function UseOptimisticPage() {
  return (
    <DemoShell
      title="useOptimistic"
      docHref="https://react.dev/reference/react/useOptimistic"
      docLabel="react.dev/reference/react/useOptimistic"
      description={
        <>
          The <code>useOptimistic</code> hook shows a temporary, optimistic
          version of state while an async action is in flight. Below, each
          message appears instantly in a pending style, then switches to its
          confirmed style once the (artificially slow, 1.5s) server action
          resolves. If the action failed, React would automatically roll back to
          the last confirmed state.
        </>
      }
    >
      <MessageThread initialMessages={[]} />
    </DemoShell>
  );
}
