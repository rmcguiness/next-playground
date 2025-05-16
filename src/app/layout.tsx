import type { Metadata, Viewport } from "next";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import { headers } from "next/headers";
import PlausibleProvider from "next-plausible";
import { NonceProvider } from "@/context/NonceContext";
import { ThemeProvider } from "next-themes";
import Scripts from "./_scripts/scritps";

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
        <Scripts nonce={nonce} />
      </head>
      <body className="min-h-screen bg-background">

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          nonce={nonce}
          enableSystem={true}
          disableTransitionOnChange={true}
        >

          <PlausibleProvider domain="next-playground-swart-alpha.vercel.app">

            <NonceProvider nonce={nonce}>
              <NavBar />
              <main>
                <div className="pt-16">
                  {children}
                </div>
              </main>
            </NonceProvider>
          </PlausibleProvider>
        </ThemeProvider>

      </body>
    </html >
  );
}
