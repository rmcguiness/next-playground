'use client';

import { useId, useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/utils/cn';

type SettingsFormProps = {
  /** Heading that distinguishes this instance from other copies on the page. */
  legend: string;
};

/**
 * A small form whose accessibility wiring is driven entirely by `useId`.
 *
 * A single `useId()` call produces a stable prefix; we derive every field's
 * `id` and its `aria-describedby` targets from that prefix. Rendering this
 * component more than once (see the page) yields a distinct prefix per
 * instance, so the IDs never collide — and they match between the server-
 * rendered HTML and the client, avoiding hydration warnings.
 */
export function SettingsForm({ legend }: SettingsFormProps) {
  const id = useId();
  const usernameId = `${id}-username`;
  const usernameHintId = `${id}-username-hint`;
  const emailId = `${id}-email`;
  const emailErrorId = `${id}-email-error`;

  const [email, setEmail] = useState('');
  const emailInvalid = email.length > 0 && !email.includes('@');

  return (
    <Card variant="elevated">
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <CardTitle>{legend}</CardTitle>
        <Badge variant="default">
          prefix: <code>{id}</code>
        </Badge>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-1.5">
          <label
            htmlFor={usernameId}
            className="text-sm font-medium text-foreground"
          >
            Username
          </label>
          <input
            id={usernameId}
            aria-describedby={usernameHintId}
            className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary"
            placeholder="ada-lovelace"
          />
          <p id={usernameHintId} className="text-xs text-foreground-muted">
            Shown publicly. Letters, numbers and dashes only.
          </p>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor={emailId}
            className="text-sm font-medium text-foreground"
          >
            Email
          </label>
          <input
            id={emailId}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={emailInvalid}
            aria-describedby={emailInvalid ? emailErrorId : undefined}
            className={cn(
              'w-full rounded-md border bg-surface px-3 py-2 text-sm text-foreground outline-none focus:ring-2',
              emailInvalid
                ? 'border-red-500 focus:ring-red-500'
                : 'border-border focus:ring-primary'
            )}
            placeholder="you@example.com"
          />
          {emailInvalid && (
            <p id={emailErrorId} className="text-xs text-red-500">
              Please include an &ldquo;@&rdquo; in the email address.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
