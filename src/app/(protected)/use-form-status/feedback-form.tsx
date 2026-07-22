'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { cn } from '@/utils/cn';
import { Label } from '@/components/ui/Label';
import { SubmitButton } from './submit-button';
import { submitFeedback, type FeedbackState } from './actions';

const initialState: FeedbackState = { status: 'idle' };

/**
 * A second consumer of useFormStatus, this time to disable the textarea
 * while the form is submitting. This shows that any number of children can
 * subscribe to the same form's status independently.
 */
function FeedbackField() {
    const { pending } = useFormStatus();

    return (
        <div className="space-y-1">
            <Label htmlFor="feedback">Your feedback</Label>
            <textarea
                id="feedback"
                name="feedback"
                rows={4}
                disabled={pending}
                placeholder="Tell us what you think…"
                className={cn(
                    'w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
                    pending && 'opacity-60'
                )}
            />
        </div>
    );
}

export function FeedbackForm() {
    // useActionState is only here to surface the success message; the pending
    // UI is driven entirely by useFormStatus in the child components below.
    const [state, formAction] = useActionState(submitFeedback, initialState);

    return (
        <form action={formAction} className="flex w-full max-w-md flex-col gap-4">
            {state.status === 'success' && state.message && (
                <p
                    role="status"
                    className="rounded-md bg-green-50 px-3 py-2 text-sm text-green-700"
                >
                    {state.message}
                </p>
            )}

            <FeedbackField />
            <SubmitButton />

            <p className="text-xs text-gray-500">
                Both the button and the textarea read the form&apos;s pending
                state through <code>useFormStatus()</code> — no props are passed
                down to coordinate them.
            </p>
        </form>
    );
}
