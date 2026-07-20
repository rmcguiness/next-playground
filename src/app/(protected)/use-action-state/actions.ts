'use server';

export type SignupState = {
    status: 'idle' | 'error' | 'success';
    message?: string;
    errors?: {
        username?: string;
        email?: string;
    };
    /** Echoed back so the form can stay populated after a failed submit. */
    values?: {
        username: string;
        email: string;
    };
};

const TAKEN_USERNAMES = ['ryan', 'admin', 'test'];

/**
 * Server action used with useActionState. It receives the previous state
 * as its first argument and the submitted FormData as its second, and
 * returns the next state. The artificial delay makes the pending state
 * (isPending) visible in the UI.
 */
export async function signup(
    _prevState: SignupState,
    formData: FormData
): Promise<SignupState> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const username = String(formData.get('username') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const values = { username, email };

    const errors: NonNullable<SignupState['errors']> = {};

    if (username.length < 3) {
        errors.username = 'Username must be at least 3 characters.';
    } else if (TAKEN_USERNAMES.includes(username.toLowerCase())) {
        errors.username = `"${username}" is already taken.`;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = 'Enter a valid email address.';
    }

    if (Object.keys(errors).length > 0) {
        return {
            status: 'error',
            message: 'Please fix the errors below.',
            errors,
            values,
        };
    }

    return {
        status: 'success',
        message: `Welcome, ${username}! Account created for ${email}.`,
        values,
    };
}
