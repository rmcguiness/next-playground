import { DemoShell } from '@/components/demo/demo-shell';
import { ServerButtonWrapper } from './components';

export default function PromiseModalPage() {
  const configIds = [1, 2, 3, 4, 5];
  return (
    <DemoShell
      title="Promise Modal"
      description="Open a modal and await its result like a promise, so the calling code resumes with the user's choice once it resolves."
    >
      <ServerButtonWrapper configIds={configIds} />
    </DemoShell>
  );
}
