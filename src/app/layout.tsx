import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import { Fira_Code as firaCode, Inter } from "next/font/google";
import React from "react";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const fontCode = firaCode({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-code",
});

export const metadata: Metadata = {
  title: "IMDb Clone",
  description: "A replica of IMDb for Movies & TV shows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/favicon.ico"
        />
      </head>
      <body
        className={`${fontSans.variable} ${fontCode.variable} font-sans antialiased`}
      >
        {/* Header */}
        <Header />
        {children}
      </body>
    </html>
  );
}
