import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SmoothStoryEffects } from "@/components/motion/smooth-story-effects";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaobak | Premium Northeast India Origin Commerce",
  description:
    "Specialty coffee, wild forest honey, organic spices, luxury gifting, and export-grade products rooted in Northeast India.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "48x48"
      },
      {
        url: "/favicon-48.png",
        type: "image/png",
        sizes: "48x48"
      },
      {
        url: "/icon-192.png",
        type: "image/png",
        sizes: "192x192"
      }
    ],
    shortcut: "/favicon.ico",
    apple: {
      url: "/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180"
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothStoryEffects />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
