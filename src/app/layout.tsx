import type { Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { constructMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { CommandProvider } from "@/components/features/command";
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

export const metadata = constructMetadata();

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable} dark`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <JsonLd />
        <CommandProvider>{children}</CommandProvider>
      </body>
    </html>
  );
}
