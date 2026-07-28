import type { Metadata } from 'next';
import { TabSwitcher } from './tab-switcher';

export const metadata: Metadata = {
    title: 'useTransition Demo',
    description:
        'Keeping the UI responsive during slow state updates with the React useTransition hook',
};

export default function UseTransitionPage() {
    return (
        <div className="container py-10 space-y-8">
            <section className="space-y-2">
                <h2 className="text-3xl font-bold">useTransition</h2>
                <p className="text-gray-600 max-w-2xl">
                    The <code>useTransition</code> hook lets you mark a state update as a{' '}
                    <em>transition</em> — a non-urgent update that React can render in the
                    background without blocking the UI. Below, the &ldquo;Posts&rdquo; tab is
                    artificially slow to render. With transitions enabled, clicking it keeps
                    the tab bar responsive and shows a pending indicator while React prepares
                    the new tab; you can even change your mind mid-render and click another
                    tab. Toggle transitions off to feel the UI freeze instead.
                </p>
                <a
                    href="https://react.dev/reference/react/useTransition"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-600 hover:text-primary-700 text-sm"
                >
                    react.dev/reference/react/useTransition
                </a>
            </section>
            <section>
                <TabSwitcher />
            </section>
        </div>
    );
}
