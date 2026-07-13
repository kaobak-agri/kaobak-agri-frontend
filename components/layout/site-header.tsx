"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Search, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const storyLinks = [
  { label: "Our origins", href: "/origins" },
  { label: "Impact", href: "/impact" },
  { label: "Traceability", href: "/traceability" },
  { label: "Journal", href: "/journal" }
];

const primaryLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Wholesale", href: "/wholesale" },
  { label: "Gifting", href: "/gifting" },
  { label: "About", href: "/about" },
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
  const storyActive = storyLinks.some((item) => isActive(pathname, item.href));

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
        <Link href="/" className="group flex items-center" aria-label="Kaobak home">
          <Image
            src="/images/kaobak-logo-black.png"
            alt="Kaobak"
            width={132}
            height={132}
            priority
            className={cn("w-auto object-contain transition-all duration-500 group-hover:opacity-80", scrolled ? "h-12" : "h-16")}
          />
        </Link>

        <nav className="hidden items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.12em] lg:flex">
          <Link href="/shop" aria-current={isActive(pathname, "/shop") ? "page" : undefined} className={navClass(isActive(pathname, "/shop"))}>Shop</Link>
          <div className="group relative">
            <button type="button" aria-haspopup="menu" className={cn(navClass(storyActive), "flex items-center gap-1")}>
              Our story <ChevronDown className="size-3 transition duration-300 group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="rounded-xl border border-border bg-card p-2 shadow-luxury">
                {storyLinks.map((item) => (
                  <Link key={item.href} href={item.href} aria-current={isActive(pathname, item.href) ? "page" : undefined} className={cn("block rounded-lg px-4 py-3 text-xs tracking-[0.08em] transition hover:bg-secondary hover:text-primary", isActive(pathname, item.href) ? "bg-secondary text-primary" : "text-muted-foreground")}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {primaryLinks.slice(1).map((item) => (
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
            <p className="kicker mb-3 mt-6">Our story</p>
            <nav className="grid grid-cols-2 gap-2">
              {storyLinks.map((item) => (
                <Link key={item.href} href={item.href} aria-current={isActive(pathname, item.href) ? "page" : undefined} className={cn("rounded-xl border border-border px-3 py-3 text-sm font-semibold transition", isActive(pathname, item.href) ? "bg-secondary text-primary" : "text-muted-foreground")} onClick={() => setOpen(false)}>
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
