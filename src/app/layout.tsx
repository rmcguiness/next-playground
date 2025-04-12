import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/navbar";


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
      <body className="">
        <NavBar />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
