import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Cinzel } from "next/font/google";

import "./globals.css";
import Header from "./components/header";
import Breadcrumb from "./components/breadcrumb";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const logoFont = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-logo",
});

export const metadata: Metadata = {
  title: "Música e Magia",
  description: "Pensamentos, código e café quente.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${logoFont.variable} antialiased`}
      >
        <Header />
        <Breadcrumb />
        {children}
      </body>
    </html>
  );
}
