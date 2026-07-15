'use server';

/**
 * Simulates a slow server mutation (e.g. saving a message to a database).
 * The artificial delay makes the optimistic UI update visible.
 */
export async function sendMessage(message: string): Promise<{ text: string }> {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return { text: message };
}
