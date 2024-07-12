import type { Metadata } from "next";

import { Sora as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

import "./globals.css";
import Navbar from "@/components/navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Yummy",
  description: "Ankara'nın en iyi dondurulmuş yoğurt dükkanı",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
