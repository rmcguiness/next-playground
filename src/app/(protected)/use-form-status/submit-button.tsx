'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/Button';

/**
 * A reusable submit button that reads the pending state of its *parent*
 * <form> via useFormStatus. The key idea: this component holds no props and
 * no state of its own — it simply asks the surrounding form whether a
 * submission is in flight. That is why useFormStatus must be called from a
 * component rendered *inside* the <form>, not the one that renders it.
 */
export function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" isLoading={pending} className="self-start">
            {pending ? 'Sending…' : 'Send feedback'}
        </Button>
    );
}
