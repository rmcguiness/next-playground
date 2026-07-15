'use client';

import { memo, useDeferredValue, useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Label } from '@/components/ui/Label';
import { cn } from '@/utils/cn';

const FRUITS = [
    'Apple', 'Apricot', 'Avocado', 'Banana', 'Blackberry', 'Blueberry',
    'Cherry', 'Clementine', 'Coconut', 'Cranberry', 'Date', 'Dragonfruit',
    'Elderberry', 'Fig', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
    'Kiwi', 'Kumquat', 'Lemon', 'Lime', 'Lychee', 'Mango', 'Melon',
    'Nectarine', 'Orange', 'Papaya', 'Passionfruit', 'Peach', 'Pear',
    'Persimmon', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberry',
    'Starfruit', 'Strawberry', 'Tangerine', 'Watermelon',
];

// Repeat the base list so filtering + rendering is genuinely heavy.
const ITEMS = Array.from({ length: 300 }, (_, i) => {
    const fruit = FRUITS[i % FRUITS.length];
    return `${fruit} #${Math.floor(i / FRUITS.length) + 1}`;
});

/**
 * Deliberately slow list: each item burns ~1ms of render time, so a full
 * render takes ~300ms. Without deferral, that cost runs synchronously on
 * every keystroke. memo() matters here — during an urgent re-render where
 * only `query` changed but `deferredQuery` hasn't yet, React can skip
 * re-rendering the list entirely and reuse the previous result.
 */
const SlowList = memo(function SlowList({ query }: { query: string }) {
    const matches = ITEMS.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <ul className="grid grid-cols-2 gap-1 sm:grid-cols-3">
            {matches.length === 0 && (
                <li className="col-span-full text-sm text-gray-400">
                    No fruit matches &ldquo;{query}&rdquo;.
                </li>
            )}
            {matches.map((item) => (
                <SlowItem key={item} text={item} />
            ))}
        </ul>
    );
});

function SlowItem({ text }: { text: string }) {
    // Artificial ~1ms of blocking work per item.
    const start = performance.now();
    while (performance.now() - start < 1) {
        // burn CPU to simulate an expensive component
    }
    return (
        <li className="rounded-md border border-gray-200 px-2 py-1 text-sm text-gray-700">
            {text}
        </li>
    );
}

export function DeferredSearch() {
    const [query, setQuery] = useState('');
    const [deferralEnabled, setDeferralEnabled] = useState(true);

    // deferredQuery "lags behind" query: React first re-renders urgently
    // with the old deferred value (fast, list is memoized), then re-renders
    // the list with the new value in the background. New keystrokes
    // interrupt the background render instead of waiting on it.
    const deferredQuery = useDeferredValue(query);
    const listQuery = deferralEnabled ? deferredQuery : query;
    const isStale = deferralEnabled && query !== deferredQuery;

    return (
        <div className="flex w-full max-w-2xl flex-col gap-4">
            <div className="flex flex-wrap items-end gap-4">
                <div className="flex flex-col gap-1.5">
                    <Label htmlFor="fruit-search">Search 300 slow items</Label>
                    <input
                        id="fruit-search"
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Try typing “berry” quickly"
                        autoComplete="off"
                        className="w-64 rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                    />
                </div>
                <label className="flex cursor-pointer items-center gap-2 py-2 text-sm text-gray-700">
                    <input
                        type="checkbox"
                        checked={deferralEnabled}
                        onChange={(e) => setDeferralEnabled(e.target.checked)}
                        className="h-4 w-4 accent-primary-600"
                    />
                    Defer list updates
                </label>
                <Badge variant={isStale ? 'warning' : 'success'}>
                    {isStale ? 'rendering in background…' : 'up to date'}
                </Badge>
            </div>
            <div
                className={cn(
                    'rounded-md border border-gray-200 p-4 transition-opacity duration-200',
                    isStale && 'opacity-50'
                )}
            >
                <SlowList query={listQuery} />
            </div>
        </div>
    );
}
