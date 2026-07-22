'use server';

export type FeedbackState = {
    status: 'idle' | 'success';
    message?: string;
};

/**
 * A minimal server action for the useFormStatus demo. The artificial delay
 * keeps the form pending long enough to see the status-driven UI update.
 */
export async function submitFeedback(
    _prevState: FeedbackState,
    formData: FormData
): Promise<FeedbackState> {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const feedback = String(formData.get('feedback') ?? '').trim();

    return {
        status: 'success',
        message: feedback
            ? 'Thanks — your feedback was received.'
            : 'Submitted (empty feedback is fine for this demo).',
    };
}
