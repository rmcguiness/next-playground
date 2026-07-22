import type { Metadata } from 'next';
import { FeedbackForm } from './feedback-form';

export const metadata: Metadata = {
    title: 'useFormStatus Demo',
    description:
        'Reading the pending state of a parent form with the React useFormStatus hook',
};

export default function UseFormStatusPage() {
    return (
        <div className="container py-10 space-y-8">
            <section className="space-y-2">
                <h2 className="text-3xl font-bold">useFormStatus</h2>
                <p className="text-gray-600 max-w-2xl">
                    The <code>useFormStatus</code> hook lets a component read the
                    submission status of the <code>&lt;form&gt;</code> it is
                    rendered inside — without threading a <code>pending</code>{' '}
                    prop through the tree. It must be called from a component{' '}
                    <em>nested within</em> the form, not the one that renders the
                    form. Below, both the submit button and the textarea
                    subscribe to the same form&apos;s status independently: the
                    button shows a spinner and the field greys out while the
                    server action runs.
                </p>
                <a
                    href="https://react.dev/reference/react-dom/hooks/useFormStatus"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-600 hover:text-primary-700 text-sm"
                >
                    react.dev/reference/react-dom/hooks/useFormStatus
                </a>
            </section>
            <section>
                <FeedbackForm />
            </section>
        </div>
    );
}
