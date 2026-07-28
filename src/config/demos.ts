import {
  Zap,
  Layers,
  LayoutGrid,
  Box,
  FileText,
  Sparkles,
  Timer,
  ClipboardList,
  Shuffle,
  Loader,
  Radio,
  Hourglass,
  LayoutTemplate,
  Package,
  Server,
  ShieldAlert,
  Images,
  Pin,
  MessageSquare,
  Palette,
  ListChecks,
  type LucideIcon,
} from "lucide-react";

export type Demo = {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

export type DemoGroup = {
  label: string;
  icon: LucideIcon;
  demos: Demo[];
};

/**
 * Single source of truth for every demo in the playground. Both the sidebar
 * navigation and the landing-page grid render from this list, so adding a new
 * demo here wires it into both places at once.
 */
export const DEMO_GROUPS: DemoGroup[] = [
  {
    label: "React Hooks",
    icon: Zap,
    demos: [
      {
        title: "useOptimistic",
        href: "/use-optimistic",
        description: "Show optimistic UI before the server responds.",
        icon: Sparkles,
      },
      {
        title: "useDeferredValue",
        href: "/use-deferred-value",
        description: "Defer expensive re-renders to keep input snappy.",
        icon: Timer,
      },
      {
        title: "useActionState",
        href: "/use-action-state",
        description: "Manage form state returned from server actions.",
        icon: ClipboardList,
      },
      {
        title: "useTransition",
        href: "/use-transition",
        description: "Mark slow state updates as non-blocking.",
        icon: Shuffle,
      },
      {
        title: "useFormStatus",
        href: "/use-form-status",
        description: "Read a parent form's pending state from a child.",
        icon: Loader,
      },
      {
        title: "useSyncExternalStore",
        href: "/use-sync-external-store",
        description: "Subscribe to external or browser stores safely.",
        icon: Radio,
      },
    ],
  },
  {
    label: "Next.js & Rendering",
    icon: Layers,
    demos: [
      {
        title: "Suspense Loading",
        href: "/suspense-vs-layout/suspense",
        description: "Stream server content with Suspense boundaries.",
        icon: Hourglass,
      },
      {
        title: "Skeleton Loading",
        href: "/suspense-vs-layout/skeleton-loading",
        description: "Show skeleton placeholders while data loads.",
        icon: LayoutTemplate,
      },
      {
        title: "Dynamic Import",
        href: "/dynamic-import",
        description: "Lazy-load heavy components with next/dynamic.",
        icon: Package,
      },
      {
        title: "Route Handlers",
        href: "/route-handlers",
        description: "Build API endpoints with a route.ts file.",
        icon: Server,
      },
      {
        title: "Error Boundaries",
        href: "/error-boundary",
        description: "Catch render errors with an error.tsx boundary.",
        icon: ShieldAlert,
      },
    ],
  },
  {
    label: "UI & Components",
    icon: LayoutGrid,
    demos: [
      {
        title: "Carousel",
        href: "/carousel",
        description: "An accessible image and content carousel.",
        icon: Images,
      },
      {
        title: "Sticky Components",
        href: "/sticky-components",
        description: "Sticky positioning patterns while scrolling.",
        icon: Pin,
      },
      {
        title: "Promise Modal",
        href: "/promise-modal",
        description: "Await a modal's result like a promise.",
        icon: MessageSquare,
      },
      {
        title: "Design System",
        href: "/design-system",
        description: "Components, tokens, gradients, and animations.",
        icon: Palette,
      },
      {
        title: "Next.js Quiz",
        href: "/test-form",
        description: "A form-driven quiz with validation.",
        icon: ListChecks,
      },
    ],
  },
  {
    label: "Three.js",
    icon: Box,
    demos: [
      {
        title: "3D Scene",
        href: "/threejs/demo1",
        description: "An interactive 3D scene built with Three.js.",
        icon: Box,
      },
    ],
  },
  {
    label: "Portfolios",
    icon: FileText,
    demos: [
      {
        title: "Resume",
        href: "/portfolios/demo1",
        description: "A portfolio and resume page example.",
        icon: FileText,
      },
    ],
  },
];

export const ALL_DEMOS: Demo[] = DEMO_GROUPS.flatMap((group) => group.demos);
