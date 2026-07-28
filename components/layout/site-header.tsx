"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const primaryLinks = [
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Traceability", href: "/traceability" },
  { label: "Wholesale", href: "/wholesale" },
  { label: "Gifting", href: "/gifting" },
  { label: "Contact", href: "/contact" }
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`) || (href === "/shop" && pathname.startsWith("/products"));
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    runSearch();
  }

  function runSearch() {
    const value = query.trim();
    router.push(value ? `/shop?search=${encodeURIComponent(value)}` : "/shop");
    setSearchOpen(false);
    setOpen(false);
  }

  const navClass = (active: boolean) =>
    cn(
      "relative rounded-full px-3 py-2 transition duration-300 hover:bg-secondary/70 hover:text-primary",
      active
        ? "bg-secondary text-primary after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-6 after:-translate-x-1/2 after:bg-[var(--kbk-accent)]"
        : "text-muted-foreground"
    );

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-40 border-b transition-all duration-500",
        scrolled
          ? "border-border bg-[rgba(247,243,236,0.94)] shadow-[0_12px_36px_rgba(42,36,32,0.08)] backdrop-blur-2xl"
          : "border-transparent bg-[rgba(247,243,236,0.88)] backdrop-blur-xl"
      )}
    >
      <div className={cn("container-luxury flex items-center justify-between gap-5 transition-all duration-500", scrolled ? "min-h-16" : "min-h-20")}>
        <Link
          href="/"
          className="group flex flex-col items-center"
          aria-label="Kaobak home"
        >
          <Image
            src="/images/kaobak-logo-black.png"
            alt="Kaobak"
            width={132}
            height={132}
            priority
            className={cn("w-auto object-contain transition-all duration-500 group-hover:opacity-80", scrolled ? "h-12" : "h-16")}
          />
          <span className="mt-1 font-accent text-[10px] leading-none tracking-[0.11em] text-primary/80 transition-colors duration-300 group-hover:text-primary">
            Harvesting Possibilities
          </span>
        </Link>

        <nav className="hidden items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.12em] lg:flex">
          {primaryLinks.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isActive(pathname, item.href) ? "page" : undefined} className={navClass(isActive(pathname, item.href))}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center justify-end lg:flex">
          <form onSubmit={submitSearch} className="flex items-center">
            <div className={cn("overflow-hidden transition-all duration-300", searchOpen ? "mr-2 w-56 opacity-100" : "w-0 opacity-0")}>
              <Input ref={searchRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products" aria-label="Search products" className="h-10 min-h-10 bg-card" />
            </div>
            <Button type="button" variant="ghost" size="icon" aria-label={searchOpen ? "Submit search" : "Open search"} onClick={searchOpen ? runSearch : () => setSearchOpen(true)}>
              <Search data-icon="inline-start" />
            </Button>
            {searchOpen ? (
              <Button type="button" variant="ghost" size="icon" aria-label="Close search" onClick={() => setSearchOpen(false)}>
                <X data-icon="inline-start" />
              </Button>
            ) : null}
          </form>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <Button asChild variant="ghost" size="icon">
            <Link href="/shop" aria-label="Shop products">
              <ShoppingBag data-icon="inline-start" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle menu">
            {open ? <X data-icon="inline-start" /> : <Menu data-icon="inline-start" />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-[rgba(247,243,236,0.98)] px-5 py-5 backdrop-blur-2xl lg:hidden">
          <div className="mx-auto max-w-md">
            <form onSubmit={submitSearch} className="relative mb-5">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products" aria-label="Search products" className="bg-card pl-11" />
            </form>
            <nav className="grid grid-cols-2 gap-2">
              {primaryLinks.map((item) => (
                <Link key={item.href} href={item.href} aria-current={isActive(pathname, item.href) ? "page" : undefined} className={cn("rounded-xl px-3 py-3 font-display text-xl transition", isActive(pathname, item.href) ? "bg-secondary text-primary" : "bg-card text-foreground")} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
