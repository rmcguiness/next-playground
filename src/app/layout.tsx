import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/navbar";
import Head from "next/head";
import PlausibleProvider from "next-plausible";


export const metadata: Metadata = {
  title: "Next Playground",
  description: "A playground for Next.js to learn and experiment with new features",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={""}>
      <Head>
        <script
          defer
          data-domain="next-playground-swart-alpha.vercel.app"
          src="https://plausible.io/js/script.js"
        ></script>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A playground for Next.js to learn and experiment with new features" />
        <meta name="author" content="ryanmcguiness" />
        <meta name="keywords" content="Next.js, Playground, Learn, Experiment" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
      </Head>
      <body className="bg-gradient-to-b min-h-screen from-slate-50 to-slate-100">
        <NavBar />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
