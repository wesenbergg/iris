import type { Metadata } from "next";
import { Inter, Satisfy } from "next/font/google";
import "./globals.css";
import Link from "@/components/essentials/Link";
import { cn } from "@/utils/cn";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create color palette",
  description: "Generated by humble color enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
