'use client';

import { useMemo, useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/utils/cn';

// Pretend this component pulls in a large charting/formatting library that we
// would rather not ship in the initial JS bundle. It is only loaded (via
// next/dynamic) when the user actually asks to see it.
export default function HeavyWidget() {
    const [seed, setSeed] = useState(1);

    const bars = useMemo(() => {
        return Array.from({ length: 12 }, (_, i) => {
            const value = Math.abs(Math.sin(seed + i) * 100);
            return Math.round(value);
        });
    }, [seed]);

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2">
                <Badge variant="success">Loaded on demand</Badge>
                <span className="text-sm text-gray-600">
                    This subtree shipped in its own chunk.
                </span>
            </div>
            <div className="flex h-40 items-end gap-2 rounded-lg bg-gray-50 p-4">
                {bars.map((value, i) => (
                    <div key={i} className="flex flex-1 flex-col items-center gap-1">
                        <div
                            className={cn(
                                'w-full rounded-t bg-primary-500 transition-all',
                            )}
                            style={{ height: `${value}%` }}
                        />
                        <span className="text-[10px] text-gray-500">{value}</span>
                    </div>
                ))}
            </div>
            <button
                onClick={() => setSeed((s) => s + 1)}
                className="text-sm text-primary-600 hover:text-primary-700"
            >
                Randomize data
            </button>
        </div>
    );
}
