"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollCue() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#collections"
      className={cn(
        "absolute bottom-7 right-8 hidden items-center gap-2 rounded-full border border-white/60 bg-[rgba(247,243,236,0.8)] px-4 py-2 font-label text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground backdrop-blur-md transition duration-500 sm:flex",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      )}
    >
      Explore <ChevronDown className="size-3 animate-bounce" />
    </a>
  );
}
