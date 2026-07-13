import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SmoothStoryEffects } from "@/components/motion/smooth-story-effects";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaobak | Premium Northeast India Origin Commerce",
  description:
    "Specialty coffee, wild forest honey, organic spices, luxury gifting, and export-grade products rooted in Northeast India."
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
