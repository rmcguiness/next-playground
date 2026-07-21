'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

// next/dynamic wraps React.lazy + Suspense for the App Router. The import
// callback is only executed when <HeavyWidget /> first renders, so its code is
// split into a separate chunk and fetched on demand. `ssr: false` keeps it out
// of the server-rendered HTML — useful for browser-only components. `loading`
// provides the fallback shown while the chunk is in flight.
const HeavyWidget = dynamic(() => import('./heavy-widget'), {
    ssr: false,
    loading: () => (
        <div className="flex h-40 items-center justify-center rounded-lg bg-gray-50 text-sm text-gray-500">
            Loading widget chunk…
        </div>
    ),
});

export function LazyDemo() {
    const [show, setShow] = useState(false);

    return (
        <Card variant="elevated" className="max-w-2xl">
            <CardHeader className="flex items-center justify-between gap-4">
                <CardTitle>On-demand chart widget</CardTitle>
                <Button
                    variant={show ? 'outline' : 'primary'}
                    size="sm"
                    onClick={() => setShow((v) => !v)}
                >
                    {show ? 'Hide widget' : 'Load widget'}
                </Button>
            </CardHeader>
            <CardContent>
                {show ? (
                    <HeavyWidget />
                ) : (
                    <p className="text-gray-600">
                        The widget&rsquo;s JavaScript has not been downloaded yet. Open your
                        browser&rsquo;s Network tab and click{' '}
                        <strong>Load widget</strong> — you&rsquo;ll see a new chunk fetched
                        only at that moment.
                    </p>
                )}
            </CardContent>
        </Card>
    );
}
