import type { Metadata } from 'next';
import { DiceRoller } from './dice-roller';

export const metadata: Metadata = {
    title: 'Route Handlers Demo',
    description:
        'Building API endpoints in the App Router with a route.ts file exporting GET and POST handlers',
};

export default function RouteHandlersPage() {
    return (
        <div className="container py-10 space-y-8">
            <section className="space-y-2">
                <h2 className="text-3xl font-bold">Route Handlers (route.ts)</h2>
                <p className="text-gray-600 max-w-2xl">
                    A <code>route.ts</code> file lets you build API endpoints inside the App
                    Router using the standard Web <code>Request</code>/<code>Response</code>{' '}
                    APIs. You export async functions named after HTTP verbs —{' '}
                    <code>GET</code>, <code>POST</code>, <code>PUT</code>, and so on — and Next
                    maps them to the folder&rsquo;s URL. Here, <code>/api/dice</code> exposes a{' '}
                    <code>GET</code> that reads a <code>?sides=</code> query param and a{' '}
                    <code>POST</code> that reads a JSON body to roll several dice at once. The
                    widget below calls both with <code>fetch</code>.
                </p>
                <a
                    href="https://nextjs.org/docs/app/building-your-application/routing/route-handlers"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-600 hover:text-primary-700 text-sm"
                >
                    nextjs.org/docs/app/building-your-application/routing/route-handlers
                </a>
            </section>
            <section>
                <DiceRoller />
            </section>
        </div>
    );
}
