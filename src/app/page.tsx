import Link from "next/link";
import { Github, ArrowRight } from "lucide-react";
import { DEMO_GROUPS, ALL_DEMOS } from "@/config/demos";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14 md:py-20">
      {/* Hero */}
      <section className="max-w-2xl">
        <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground-2">
          {ALL_DEMOS.length} interactive demos
        </span>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
          Next<span className="text-primary">Playground</span>
        </h1>
        <p className="mt-4 text-lg text-foreground-muted">
          A hands-on playground for modern React and Next.js — hooks, rendering
          patterns, and UI building blocks, each with a live, minimal example.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link
            href={ALL_DEMOS[0].href}
            className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
          >
            Start exploring
            <ArrowRight size={16} />
          </Link>
          <a
            href="https://github.com/rmcguiness/next-playground"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground-2 transition-colors hover:bg-surface hover:text-foreground"
          >
            <Github size={16} />
            View source
          </a>
        </div>
      </section>

      {/* Demo grid */}
      <div className="mt-16 space-y-12">
        {DEMO_GROUPS.map((group) => {
          const GroupIcon = group.icon;
          return (
            <section key={group.label}>
              <div className="mb-4 flex items-center gap-2">
                <GroupIcon size={16} className="text-primary" />
                <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground-2">
                  {group.label}
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.demos.map((demo) => {
                  const Icon = demo.icon;
                  return (
                    <Link
                      key={demo.href}
                      href={demo.href}
                      className="group rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex h-9 w-9 items-center justify-center rounded-md bg-surface text-foreground-2 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                          <Icon size={18} />
                        </span>
                        <ArrowRight
                          size={16}
                          className="text-foreground-subtle opacity-0 transition-opacity group-hover:opacity-100"
                        />
                      </div>
                      <h3 className="mt-4 font-medium text-foreground">
                        {demo.title}
                      </h3>
                      <p className="mt-1 text-sm text-foreground-muted">
                        {demo.description}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
