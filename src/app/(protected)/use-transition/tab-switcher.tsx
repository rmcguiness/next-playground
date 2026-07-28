'use client';

import { memo, useState, useTransition } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/utils/cn';

type Tab = 'home' | 'posts' | 'contact';

const TABS: { id: Tab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'posts', label: 'Posts (slow)' },
    { id: 'contact', label: 'Contact' },
];

export function TabSwitcher() {
    const [tab, setTab] = useState<Tab>('home');
    const [useTransitions, setUseTransitions] = useState(true);
    const [isPending, startTransition] = useTransition();

    const selectTab = (next: Tab) => {
        if (useTransitions) {
            startTransition(() => {
                setTab(next);
            });
        } else {
            setTab(next);
        }
    };

    return (
        <Card variant="elevated" className="max-w-2xl">
            <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                    <CardTitle>Tabbed navigation</CardTitle>
                    <label className="flex items-center gap-2 text-sm text-foreground-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={useTransitions}
                            onChange={(e) => setUseTransitions(e.target.checked)}
                            className="h-4 w-4"
                        />
                        Wrap updates in <code>startTransition</code>
                    </label>
                </div>
                <div className="flex items-center gap-2">
                    {TABS.map(({ id, label }) => (
                        <Button
                            key={id}
                            variant={tab === id ? 'primary' : 'outline'}
                            size="sm"
                            onClick={() => selectTab(id)}
                        >
                            {label}
                        </Button>
                    ))}
                    {isPending && <Badge variant="warning">Rendering…</Badge>}
                </div>
            </CardHeader>
            <CardContent
                className={cn(
                    'transition-opacity',
                    isPending && 'opacity-50'
                )}
            >
                {tab === 'home' && (
                    <p className="text-foreground-2">
                        Welcome! This tab renders instantly. Now try the slow one.
                    </p>
                )}
                {tab === 'posts' && <SlowPosts />}
                {tab === 'contact' && (
                    <p className="text-foreground-2">
                        Also instant. If you clicked here while &ldquo;Posts&rdquo; was still
                        rendering inside a transition, React abandoned that render and showed
                        this tab immediately.
                    </p>
                )}
            </CardContent>
        </Card>
    );
}

const SlowPosts = memo(function SlowPosts() {
    const items = [];
    for (let i = 0; i < 300; i++) {
        items.push(<SlowPost key={i} index={i} />);
    }
    return <ul className="space-y-1 max-h-64 overflow-y-auto">{items}</ul>;
});

function SlowPost({ index }: { index: number }) {
    // Artificially block for ~1ms per item (~300ms total) to simulate a
    // component tree that is expensive to render.
    const start = performance.now();
    while (performance.now() - start < 1) {
        // busy-wait
    }
    return (
        <li className="rounded bg-surface px-3 py-1.5 text-sm text-foreground-2">
            Post #{index + 1}
        </li>
    );
}
