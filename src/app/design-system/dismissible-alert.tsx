'use client';

import { useState } from 'react';
import { XCircle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/Alert';

/**
 * Client wrapper so the dismiss interaction lives in a Client Component —
 * an event handler like onDismiss cannot be passed from a Server Component.
 */
export function DismissibleAlert() {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return (
      <button
        onClick={() => setVisible(true)}
        className="text-sm text-primary hover:underline"
      >
        Restore dismissed alert
      </button>
    );
  }

  return (
    <Alert
      variant="error"
      icon={<XCircle className="h-4 w-4" />}
      onDismiss={() => setVisible(false)}
    >
      <AlertTitle>Error Alert</AlertTitle>
      <AlertDescription>
        This is an error alert message. Click the ✕ to dismiss it.
      </AlertDescription>
    </Alert>
  );
}
