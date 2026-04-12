"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/Sheet";

interface NavDrawerProps {
  children: React.ReactNode;
}

export default function NavDrawer({ children }: NavDrawerProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="flex items-center space-x-2 text-foreground bg-background-1 hover:bg-background-2 px-4 py-2 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500/50"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <span className="hidden sm:inline">Menu</span>
        </button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <div className="flex flex-col h-full mt-4">
          <div className="flex-1 overflow-y-auto">{children}</div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
