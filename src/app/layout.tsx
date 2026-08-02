import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Engineering Portfolio Platform",
    template: "%s | Engineering Portfolio Platform",
  },
  description:
    "Production-grade Engineering Portfolio Platform built with Next.js, TypeScript, and modern web technologies.",
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable} dark`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
