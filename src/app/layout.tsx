import "@styles/globals.css";
import React from "react";
import type { Metadata } from "next";

import { inter } from "@/fonts";
import { Footer, Navbar } from "@/components";
import clsx from "clsx";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Anh Phu Phan Portfolio",
  description: "Anh Phu Phan's Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={clsx(inter.className, "relative flex min-h-screen flex-col")}>
        <Navbar />
        <main className="space-y-40 pt-16">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
