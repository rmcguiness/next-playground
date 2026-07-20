'use client';

import { useActionState } from 'react';
import { Button } from '@/components/ui/Button';
import { Label } from '@/components/ui/Label';
import { cn } from '@/utils/cn';
import { signup, type SignupState } from './actions';

const initialState: SignupState = { status: 'idle' };

export function SignupForm() {
    // useActionState wires a server action to form state:
    // - `state` is whatever the action last returned (validation errors,
    //   success message, echoed values)
    // - `formAction` is passed to <form action={...}>
    // - `isPending` is true while the action is in flight
    const [state, formAction, isPending] = useActionState(signup, initialState);

    return (
        <form action={formAction} className="flex w-full max-w-md flex-col gap-4">
            {state.status !== 'idle' && state.message && (
                <p
                    role="status"
                    className={cn(
                        'rounded-md px-3 py-2 text-sm',
                        state.status === 'success'
                            ? 'bg-green-50 text-green-700'
                            : 'bg-red-50 text-red-600'
                    )}
                >
                    {state.message}
                </p>
            )}

            <div className="space-y-1">
                <Label
                    htmlFor="username"
                    required
                    variant={state.errors?.username ? 'error' : 'default'}
                    error={state.errors?.username}
                >
                    Username
                </Label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="off"
                    defaultValue={state.values?.username}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                />
            </div>

            <div className="space-y-1">
                <Label
                    htmlFor="email"
                    required
                    variant={state.errors?.email ? 'error' : 'default'}
                    error={state.errors?.email}
                >
                    Email
                </Label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="off"
                    defaultValue={state.values?.email}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                />
            </div>

            <Button type="submit" isLoading={isPending} className="self-start">
                {isPending ? 'Creating account…' : 'Create account'}
            </Button>

            <p className="text-xs text-gray-500">
                Tip: usernames <code>ryan</code>, <code>admin</code>, and <code>test</code>{' '}
                are taken — try one to see server-side validation errors survive the
                round-trip while your input is preserved.
            </p>
        </form>
    );
}
