'use client';

import { useOptimistic, useRef, useState, startTransition } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { sendMessage } from './actions';

type Message = {
    text: string;
    pending?: boolean;
};

export function MessageThread({ initialMessages }: { initialMessages: Message[] }) {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const formRef = useRef<HTMLFormElement>(null);

    // useOptimistic returns the confirmed state plus any optimistic
    // updates applied while a transition/action is in flight. When the
    // action settles, React discards the optimistic state and re-renders
    // with the real `messages` state.
    const [optimisticMessages, addOptimisticMessage] = useOptimistic(
        messages,
        (currentMessages, newText: string) => [
            ...currentMessages,
            { text: newText, pending: true },
        ]
    );

    function handleSubmit(formData: FormData) {
        const text = formData.get('message');
        if (typeof text !== 'string' || text.trim() === '') return;

        formRef.current?.reset();
        startTransition(async () => {
            // Shows immediately with pending styling.
            addOptimisticMessage(text);
            // Slow server round-trip; confirmed state lands afterwards.
            const saved = await sendMessage(text);
            setMessages((prev) => [...prev, { text: saved.text }]);
        });
    }

    return (
        <div className="flex flex-col gap-4 w-full max-w-md">
            <ul className="flex flex-col gap-2 min-h-32 rounded-md border border-gray-200 p-4">
                {optimisticMessages.length === 0 && (
                    <li className="text-sm text-gray-400">No messages yet — send one below.</li>
                )}
                {optimisticMessages.map((message, index) => (
                    <li
                        key={index}
                        className={cn(
                            'rounded-md px-3 py-2 text-sm transition-opacity',
                            message.pending
                                ? 'bg-gray-100 text-gray-500 italic opacity-70'
                                : 'bg-primary-600 text-white'
                        )}
                    >
                        {message.text}
                        {message.pending && <span className="ml-2 text-xs">(sending…)</span>}
                    </li>
                ))}
            </ul>
            <form ref={formRef} action={handleSubmit} className="flex gap-2">
                <input
                    type="text"
                    name="message"
                    placeholder="Type a message"
                    autoComplete="off"
                    className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                />
                <Button type="submit">Send</Button>
            </form>
        </div>
    );
}
