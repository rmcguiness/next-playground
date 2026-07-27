import { NextResponse } from 'next/server';

/**
 * Route Handlers let you build API endpoints inside the App Router using the
 * Web Request/Response APIs. A `route.ts` file exports async functions named
 * after HTTP verbs (GET, POST, PUT, PATCH, DELETE, ...).
 *
 * Docs: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
 */

const MIN_SIDES = 2;
const MAX_SIDES = 100;

function rollDie(sides: number): number {
    return Math.floor(Math.random() * sides) + 1;
}

// GET /api/dice?sides=6 — reads a query param off the incoming Request URL.
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const sides = Number(searchParams.get('sides') ?? 6);

    if (!Number.isInteger(sides) || sides < MIN_SIDES || sides > MAX_SIDES) {
        return NextResponse.json(
            { error: `"sides" must be an integer between ${MIN_SIDES} and ${MAX_SIDES}.` },
            { status: 400 }
        );
    }

    return NextResponse.json({ sides, value: rollDie(sides) });
}

// POST /api/dice — reads a JSON body to roll several dice at once.
export async function POST(request: Request) {
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: 'Request body must be valid JSON.' }, { status: 400 });
    }

    const { sides = 6, count = 1 } = (body ?? {}) as { sides?: number; count?: number };

    if (!Number.isInteger(sides) || sides < MIN_SIDES || sides > MAX_SIDES) {
        return NextResponse.json(
            { error: `"sides" must be an integer between ${MIN_SIDES} and ${MAX_SIDES}.` },
            { status: 400 }
        );
    }
    if (!Number.isInteger(count) || count < 1 || count > 12) {
        return NextResponse.json(
            { error: '"count" must be an integer between 1 and 12.' },
            { status: 400 }
        );
    }

    const rolls = Array.from({ length: count }, () => rollDie(sides));
    const total = rolls.reduce((sum, n) => sum + n, 0);

    return NextResponse.json({ sides, count, rolls, total });
}
