'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

const THRESHOLD = 5;

export function BuggyCounter() {
    const [count, setCount] = useState(0);

    // Throwing during render is what an error.tsx boundary is designed to catch.
    // (Throwing inside the onClick handler would NOT be caught by the boundary.)
    if (count >= THRESHOLD) {
        throw new Error(`Counter exceeded the safe limit of ${THRESHOLD}.`);
    }

    const remaining = THRESHOLD - count;

    return (
        <Card variant="elevated" className="max-w-md">
            <CardHeader className="flex items-center justify-between">
                <CardTitle>Buggy counter</CardTitle>
                <Badge variant={remaining <= 1 ? 'warning' : 'default'}>
                    {remaining} left
                </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-4xl font-bold tabular-nums">{count}</p>
                <p className="text-sm text-gray-600">
                    Incrementing to {THRESHOLD} throws during render. The nearest{' '}
                    <code>error.tsx</code> boundary will take over.
                </p>
                <div className="flex gap-2">
                    <Button onClick={() => setCount((c) => c + 1)}>Increment</Button>
                    <Button variant="outline" onClick={() => setCount(0)}>
                        Reset
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
