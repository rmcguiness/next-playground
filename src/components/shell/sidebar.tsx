"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Code2, Github, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { DEMO_GROUPS, ALL_DEMOS, type Demo } from "@/config/demos";
import { ThemeSwitcher } from "@/components/theme-switcher/theme-switcher";

function NavItem({
  demo,
  active,
  onNavigate,
}: {
  demo: Demo;
  active: boolean;
  onNavigate?: () => void;
}) {
  const Icon = demo.icon;
  return (
    <Link
      href={demo.href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
        active
          ? "bg-surface text-foreground font-medium"
          : "text-foreground-2 hover:text-foreground hover:bg-surface"
      )}
    >
      <Icon
        size={16}
        className={cn(
          "shrink-0 transition-colors",
          active
            ? "text-primary"
            : "text-foreground-subtle group-hover:text-foreground-2"
        )}
      />
      <span className="truncate">{demo.title}</span>
    </Link>
  );
}

export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return ALL_DEMOS.filter(
      (d) =>
        d.title.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      {/* Mobile overlay */}
      <div
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden",
          open ? "block" : "hidden"
        )}
      />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-border bg-background",
          "transform transition-transform duration-200 ease-out md:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between px-4">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-green-600 text-white">
              <Code2 size={16} />
            </span>
            <span>
              Next<span className="text-primary">Playground</span>
            </span>
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-md p-1.5 text-foreground-2 hover:bg-surface md:hidden"
          >
            <X size={18} />
          </button>
        </div>

        {/* Search */}
        <div className="px-4 pb-3">
          <div className="relative">
            <Search
              size={15}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-foreground-subtle"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search demos…"
              className="w-full rounded-md border border-border bg-surface py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-foreground-subtle focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 pb-4">
          {filtered ? (
            <div className="space-y-1">
              <p className="px-3 pb-1 pt-2 text-xs font-medium uppercase tracking-wider text-foreground-subtle">
                {filtered.length} result{filtered.length === 1 ? "" : "s"}
              </p>
              {filtered.map((demo) => (
                <NavItem
                  key={demo.href}
                  demo={demo}
                  active={pathname === demo.href}
                  onNavigate={onClose}
                />
              ))}
              {filtered.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-foreground-subtle">
                  No demos match “{query}”.
                </p>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              {DEMO_GROUPS.map((group) => (
                <div key={group.label} className="space-y-1">
                  <p className="px-3 pb-1 text-xs font-medium uppercase tracking-wider text-foreground-subtle">
                    {group.label}
                  </p>
                  {group.demos.map((demo) => (
                    <NavItem
                      key={demo.href}
                      demo={demo}
                      active={pathname === demo.href}
                      onNavigate={onClose}
                    />
                  ))}
                </div>
              ))}
            </div>
          )}
        </nav>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-border px-4 py-3">
          <a
            href="https://github.com/rmcguiness/next-playground"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-foreground-2 hover:text-foreground"
          >
            <Github size={16} />
            GitHub
          </a>
          <ThemeSwitcher />
        </div>
      </aside>
    </>
  );
}
