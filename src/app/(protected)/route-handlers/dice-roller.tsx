'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

type PostResult = { sides: number; count: number; rolls: number[]; total: number };

const SIDE_OPTIONS = [4, 6, 8, 12, 20] as const;

export function DiceRoller() {
    const [sides, setSides] = useState<number>(6);
    const [count, setCount] = useState<number>(2);
    const [getValue, setGetValue] = useState<number | null>(null);
    const [postResult, setPostResult] = useState<PostResult | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<'get' | 'post' | null>(null);

    // Calls the GET Route Handler with a query param.
    async function rollOne() {
        setLoading('get');
        setError(null);
        try {
            const res = await fetch(`/api/dice?sides=${sides}`);
            const data = await res.json();
            if (!res.ok) throw new Error(data.error ?? 'Request failed');
            setGetValue(data.value);
        } catch (e) {
            setError(e instanceof Error ? e.message : 'Something went wrong');
        } finally {
            setLoading(null);
        }
    }

    // Calls the POST Route Handler with a JSON body.
    async function rollMany() {
        setLoading('post');
        setError(null);
        try {
            const res = await fetch('/api/dice', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sides, count }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error ?? 'Request failed');
            setPostResult(data);
        } catch (e) {
            setError(e instanceof Error ? e.message : 'Something went wrong');
        } finally {
            setLoading(null);
        }
    }

    return (
        <Card variant="elevated" className="max-w-md">
            <CardHeader className="flex items-center justify-between">
                <CardTitle>Dice roller</CardTitle>
                <Badge variant="default">d{sides}</Badge>
            </CardHeader>
            <CardContent className="space-y-5">
                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">Sides</p>
                    <div className="flex flex-wrap gap-2">
                        {SIDE_OPTIONS.map((s) => (
                            <Button
                                key={s}
                                size="sm"
                                variant={s === sides ? 'primary' : 'outline'}
                                onClick={() => setSides(s)}
                            >
                                d{s}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">Dice to roll (POST): {count}</p>
                    <input
                        type="range"
                        min={1}
                        max={12}
                        value={count}
                        onChange={(e) => setCount(Number(e.target.value))}
                        className="w-full accent-primary-600"
                    />
                </div>

                <div className="flex gap-2">
                    <Button onClick={rollOne} isLoading={loading === 'get'}>
                        GET one
                    </Button>
                    <Button variant="secondary" onClick={rollMany} isLoading={loading === 'post'}>
                        POST many
                    </Button>
                </div>

                {error && <p className="text-sm text-destructive">{error}</p>}

                {getValue !== null && (
                    <div className="rounded-md bg-gray-50 p-3 text-sm">
                        <span className="text-gray-600">GET /api/dice?sides={sides} → </span>
                        <span className="text-2xl font-bold tabular-nums">{getValue}</span>
                    </div>
                )}

                {postResult && (
                    <div className="rounded-md bg-gray-50 p-3 text-sm space-y-1">
                        <p className="text-gray-600">
                            POST /api/dice → {postResult.count} × d{postResult.sides}
                        </p>
                        <p className="font-mono">[{postResult.rolls.join(', ')}]</p>
                        <p>
                            Total: <span className="font-bold tabular-nums">{postResult.total}</span>
                        </p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
