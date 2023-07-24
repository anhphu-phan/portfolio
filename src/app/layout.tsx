import "@styles/globals.css";
import React from "react";
import type { Metadata } from "next";

import { inter } from "@/fonts";

export const metadata: Metadata = {
  title: "Anh Phu Phan Portfolio",
  description: "Anh Phu Phan's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
