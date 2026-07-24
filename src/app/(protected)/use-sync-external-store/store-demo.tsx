'use client';

import { useSyncExternalStore } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/utils/cn';
import { onlineStatusStore, windowWidthStore } from './stores';

function useOnlineStatus() {
    return useSyncExternalStore(
        onlineStatusStore.subscribe,
        onlineStatusStore.getSnapshot,
        onlineStatusStore.getServerSnapshot,
    );
}

function useWindowWidth() {
    return useSyncExternalStore(
        windowWidthStore.subscribe,
        windowWidthStore.getSnapshot,
        windowWidthStore.getServerSnapshot,
    );
}

function widthBucket(width: number) {
    if (width === 0) return 'measuring…';
    if (width < 640) return 'sm';
    if (width < 768) return 'md';
    if (width < 1024) return 'lg';
    return 'xl';
}

export function StoreDemo() {
    const isOnline = useOnlineStatus();
    const width = useWindowWidth();

    return (
        <div className="grid gap-6 sm:grid-cols-2 max-w-2xl">
            <Card variant="elevated">
                <CardHeader>
                    <CardTitle>Network status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                        <span
                            className={cn(
                                'inline-block h-3 w-3 rounded-full',
                                isOnline ? 'bg-green-500' : 'bg-red-500',
                            )}
                        />
                        <Badge variant={isOnline ? 'success' : 'warning'}>
                            {isOnline ? 'Online' : 'Offline'}
                        </Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                        Subscribes to the browser&rsquo;s <code>online</code> /{' '}
                        <code>offline</code> events. Toggle your network (or DevTools
                        offline mode) to watch it update.
                    </p>
                </CardContent>
            </Card>

            <Card variant="elevated">
                <CardHeader>
                    <CardTitle>Viewport width</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold tabular-nums">
                            {width === 0 ? '—' : `${width}px`}
                        </span>
                        <Badge variant="info">{widthBucket(width)}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                        Subscribes to the window <code>resize</code> event. Drag the
                        browser edge to resize and this re-renders in sync.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
