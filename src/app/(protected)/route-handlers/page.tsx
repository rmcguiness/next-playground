import type { Metadata } from 'next';
import { DemoShell } from '@/components/demo/demo-shell';
import { DiceRoller } from './dice-roller';

export const metadata: Metadata = {
  title: 'Route Handlers Demo',
  description:
    'Building API endpoints in the App Router with a route.ts file exporting GET and POST handlers',
};

export default function RouteHandlersPage() {
  return (
    <DemoShell
      title="Route Handlers (route.ts)"
      docHref="https://nextjs.org/docs/app/building-your-application/routing/route-handlers"
      docLabel="nextjs.org/docs/app/building-your-application/routing/route-handlers"
      description={
        <>
          A <code>route.ts</code> file lets you build API endpoints inside the App
          Router using the standard Web <code>Request</code>/<code>Response</code>{' '}
          APIs. You export async functions named after HTTP verbs —{' '}
          <code>GET</code>, <code>POST</code>, <code>PUT</code>, and so on — and
          Next maps them to the folder&rsquo;s URL. Here, <code>/api/dice</code>{' '}
          exposes a <code>GET</code> that reads a <code>?sides=</code> query param
          and a <code>POST</code> that reads a JSON body to roll several dice at
          once. The widget below calls both with <code>fetch</code>.
        </>
      }
    >
      <DiceRoller />
    </DemoShell>
  );
}
