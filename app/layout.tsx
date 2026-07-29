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
        url: "/images/kaobak-logo-black.png",
        type: "image/png"
      }
    ],
    shortcut: "/images/kaobak-logo-black.png",
    apple: "/images/kaobak-logo-black.png"
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
