import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@/styles/base.css";
import NavBar from "@/components/navbar/NavBar";
import { headers } from "next/headers";
import PlausibleProvider from "next-plausible";
import Script from "next/script";
import { NonceProvider } from "@/context/NonceContext";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Next Playground",
  description: "A playground for Next.js to learn and experiment with new features",
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

function Scripts({ nonce }: { nonce: string }) {
  return (
    <Script
      async
      defer
      data-domain="next-playground-swart-alpha.vercel.app"
      src="https://plausible.io/js/script.js"
      nonce={nonce}
      strategy="afterInteractive"
    />
  );
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get("x-nonce") ?? "";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className="min-h-screen bg-gradient-to-f from-background to-background-light text-foreground"
        suppressHydrationWarning
      >
        <NonceProvider nonce={nonce}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main>
              <Scripts nonce={nonce} />
              <PlausibleProvider domain="next-playground-swart-alpha.vercel.app">
                <NavBar />
                <div className="pt-16">
                  {children}
                </div>
              </PlausibleProvider>
            </main>
          </ThemeProvider>
        </NonceProvider>
      </body>
    </html>
  );
}
