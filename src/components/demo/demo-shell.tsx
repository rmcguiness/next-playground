import { ExternalLink } from "lucide-react";
import { cn } from "@/utils/cn";

type DemoShellProps = {
  /** Page heading. */
  title: string;
  /** Short intro shown under the title. Accepts inline JSX (code, em, links). */
  description?: React.ReactNode;
  /** Optional documentation link. */
  docHref?: string;
  docLabel?: string;
  /** Content column width. `wide`/`full` suit canvases or galleries. */
  size?: "default" | "wide" | "full";
  className?: string;
  children: React.ReactNode;
};

const SIZES = {
  default: "max-w-4xl",
  wide: "max-w-6xl",
  full: "max-w-none",
} as const;

/**
 * Consistent page frame for every demo: a centered, padded content column
 * with a standardized title / description / reference-link header.
 */
export function DemoShell({
  title,
  description,
  docHref,
  docLabel,
  size = "default",
  className,
  children,
}: DemoShellProps) {
  return (
    <div className={cn("mx-auto px-6 py-10 md:py-14", SIZES[size])}>
      <header className="mb-8 space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl leading-relaxed text-foreground-muted">
            {description}
          </p>
        )}
        {docHref && (
          <a
            href={docHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
          >
            <ExternalLink size={14} />
            {docLabel ?? "Reference"}
          </a>
        )}
      </header>
      <div className={className}>{children}</div>
    </div>
  );
}
