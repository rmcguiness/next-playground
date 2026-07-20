import type { Metadata } from 'next';
import { SignupForm } from './signup-form';

export const metadata: Metadata = {
    title: 'useActionState Demo',
    description:
        'Managing form state with server actions using the React useActionState hook',
};

export default function UseActionStatePage() {
    return (
        <div className="container py-10 space-y-8">
            <section className="space-y-2">
                <h2 className="text-3xl font-bold">useActionState</h2>
                <p className="text-gray-600 max-w-2xl">
                    The <code>useActionState</code> hook connects a form to a server
                    action and keeps the action&apos;s latest return value as state. The
                    signup form below validates on the server: errors come back per
                    field, submitted values are echoed so the form isn&apos;t wiped, and
                    the built-in <code>isPending</code> flag drives the loading state —
                    no <code>useState</code> bookkeeping required. It also works before
                    JavaScript loads, since the form posts to the action natively.
                </p>
                <a
                    href="https://react.dev/reference/react/useActionState"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-600 hover:text-primary-700 text-sm"
                >
                    react.dev/reference/react/useActionState
                </a>
            </section>
            <section>
                <SignupForm />
            </section>
        </div>
    );
}
