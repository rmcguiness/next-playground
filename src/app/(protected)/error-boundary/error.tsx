'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

// An error.tsx must be a Client Component. It receives the thrown error and a
// reset() function that re-renders the boundary's contents to try recovering.
export default function ErrorBoundary({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Report the error to an error-tracking service in a real app.
        console.error('Caught by error boundary:', error);
    }, [error]);

    return (
        <div className="container py-10">
            <Card variant="elevated" className="max-w-md border-red-200">
                <CardHeader>
                    <CardTitle className="text-red-600">Something went wrong</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-sm text-gray-700">{error.message}</p>
                    {error.digest && (
                        <p className="text-xs text-gray-400">Digest: {error.digest}</p>
                    )}
                    <Button onClick={() => reset()}>Try again</Button>
                </CardContent>
            </Card>
        </div>
    );
}
