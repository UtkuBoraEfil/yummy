import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sora }  from "next/font/google";
import "./globals.css";

const sora = Sora({ weight: ['400', '700'], subsets: ['latin'] });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.className}`}>{children}</body>
    </html>
  );
}