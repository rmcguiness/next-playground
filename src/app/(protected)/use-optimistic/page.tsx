import type { Metadata } from 'next';
import { MessageThread } from './message-thread';

export const metadata: Metadata = {
    title: 'useOptimistic Demo',
    description: 'Optimistic UI updates with the React 19 useOptimistic hook',
};

export default function UseOptimisticPage() {
    return (
        <div className="container py-10 space-y-8">
            <section className="space-y-2">
                <h2 className="text-3xl font-bold">useOptimistic</h2>
                <p className="text-gray-600 max-w-2xl">
                    The <code>useOptimistic</code> hook shows a temporary, optimistic version of
                    state while an async action is in flight. Below, each message appears
                    instantly in a pending style, then switches to its confirmed style once the
                    (artificially slow, 1.5s) server action resolves. If the action failed, React
                    would automatically roll back to the last confirmed state.
                </p>
                <a
                    href="https://react.dev/reference/react/useOptimistic"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-600 hover:text-primary-700 text-sm"
                >
                    react.dev/reference/react/useOptimistic
                </a>
            </section>
            <section>
                <MessageThread initialMessages={[]} />
            </section>
        </div>
    );
}
