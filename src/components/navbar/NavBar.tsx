"use server";

import { getUser } from "@/actions/auth-actions";
import CustomButton from "@/components/buttons/dynamic-nav-button";
import Link from "next/link";
import { ThemeSwitcher } from "../theme-switcher/theme-switcher";
import DropDown from "./components/drop-down";
import NavDrawer from "./components/nav-drawer";

// Outline (stroke) icon paths, keyed per group. Kept as data so the nav can be
// rendered from the NAV_GROUPS table below instead of repeating an inline SVG
// for every single link.
const ICON_PATHS = {
  bolt: "M13 10V3L4 14h7v7l9-11h-7z",
  rendering:
    "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  ui: "M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z",
  cube: "M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9",
  document:
    "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
} as const;

type IconKey = keyof typeof ICON_PATHS;

const NAV_GROUPS: {
  label: string;
  icon: IconKey;
  links: { href: string; label: string }[];
}[] = [
  {
    label: "React Hooks",
    icon: "bolt",
    links: [
      { href: "/use-optimistic", label: "useOptimistic" },
      { href: "/use-deferred-value", label: "useDeferredValue" },
      { href: "/use-action-state", label: "useActionState" },
      { href: "/use-transition", label: "useTransition" },
      { href: "/use-form-status", label: "useFormStatus" },
      { href: "/use-sync-external-store", label: "useSyncExternalStore" },
    ],
  },
  {
    label: "Next.js & Rendering",
    icon: "rendering",
    links: [
      { href: "/suspense-vs-layout/suspense", label: "Suspense Loading" },
      {
        href: "/suspense-vs-layout/skeleton-loading",
        label: "Skeleton Loading",
      },
      { href: "/dynamic-import", label: "Dynamic Import" },
      { href: "/route-handlers", label: "Route Handlers" },
      { href: "/error-boundary", label: "Error Boundaries" },
    ],
  },
  {
    label: "UI & Components",
    icon: "ui",
    links: [
      { href: "/carousel", label: "Carousel" },
      { href: "/sticky-components", label: "Sticky Components" },
      { href: "/promise-modal", label: "Promise Modal" },
      { href: "/styles-showcase", label: "Styles Showcase" },
      { href: "/design-system", label: "Design System" },
      { href: "/test-form", label: "Next.js Quiz" },
    ],
  },
  {
    label: "Three.js Demos",
    icon: "cube",
    links: [{ href: "/threejs/demo1", label: "Demo 1" }],
  },
  {
    label: "Portfolios",
    icon: "document",
    links: [{ href: "/portfolios/demo1", label: "Resume" }],
  },
];

function NavIcon({ icon }: { icon: IconKey }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mr-3 text-green-500 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={ICON_PATHS[icon]}
      />
    </svg>
  );
}

export default async function NavBar() {
  const { data } = await getUser();
  const isLoggedIn = data?.user;
  return (
    <nav className="bg-background shadow-lg p-4 fixed w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-green-600 text-background p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight hidden md:inline">
              Next<span className="text-green-500">Playground</span>
            </span>
          </Link>
        </div>

        {/* Right: ThemeSwitcher + Drawer */}
        <div className="flex items-center space-x-3">
          <ThemeSwitcher />
          <NavDrawer>
            {NAV_GROUPS.map((group) => (
              <DropDown key={group.label} label={group.label}>
                {group.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex items-center px-4 py-3 text-foreground-1 hover:bg-background-2"
                  >
                    <NavIcon icon={group.icon} />
                    {link.label}
                  </a>
                ))}
              </DropDown>
            ))}

            {/* Auth section */}
            <div className="border-t border-foreground-2/20 mt-4 pt-4">
              {isLoggedIn ? (
                <CustomButton
                  text="Sign Out"
                  className="flex w-full items-center px-4 py-2 hover:bg-red-50 transition duration-200 rounded-lg text-red-300 hover:text-red-500"
                />
              ) : (
                <div className="flex flex-col gap-2">
                  <CustomButton
                    text="Login"
                    endpt="/auth/login"
                    className="text-foreground bg-background hover:border-foreground hover:shadow-lg px-5 py-2 rounded-full transition duration-300 text-center"
                  />
                  <CustomButton
                    text="Sign Up"
                    endpt="/auth/signup"
                    className="text-background bg-linear-to-r from-green-600 to-green-500 hover:from-green-400 hover:to-green-300 px-5 py-2 rounded-full hover:shadow-sm transition duration-300 text-center"
                  />
                </div>
              )}
            </div>
          </NavDrawer>
        </div>
      </div>
    </nav>
  );
}
