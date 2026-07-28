"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Code2 } from "lucide-react";
import Sidebar from "./sidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Mobile top bar */}
      <header className="fixed inset-x-0 top-0 z-20 flex h-14 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur md:hidden">
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="rounded-md p-1.5 text-foreground-2 hover:bg-surface"
        >
          <Menu size={20} />
        </button>
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-green-600 text-white">
            <Code2 size={14} />
          </span>
          <span>
            Next<span className="text-primary">Playground</span>
          </span>
        </Link>
      </header>

      <Sidebar open={open} onClose={() => setOpen(false)} />

      {/* Content */}
      <main className="min-h-screen pt-14 md:pl-64 md:pt-0">{children}</main>
    </div>
  );
}
