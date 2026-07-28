import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import AppShell from "@/components/shell/app-shell";
import { headers } from "next/headers";
import { NonceProvider } from "@/context/NonceContext";
import { ThemeProvider } from "next-themes";
// import PlausibleProvider from "next-plausible";
// import Scripts from "./_scripts/scritps";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Next Playground",
  description:
    "A playground for Next.js to learn and experiment with new features",
  authors: [{ name: "ryanmcguiness" }],
  keywords: ["Next.js", "Playground", "Learn", "Experiment"],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get("x-nonce") ?? "";

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      {/* <Scripts nonce={nonce} /> */}
      <body>
        <NonceProvider nonce={nonce}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            nonce={nonce}
            enableSystem={true}
            disableTransitionOnChange={true}
          >
            <AppShell>{children}</AppShell>
          </ThemeProvider>
        </NonceProvider>
      </body>
    </html>
  );
}
