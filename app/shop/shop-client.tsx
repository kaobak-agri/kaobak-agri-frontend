"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { PageIntro } from "@/components/brand/page-intro";
import { ProductCard } from "@/components/brand/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { products } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = ["All", "Coffee", "Honey", "Spices", "Gifting", "Export"];

export function ShopClient() {
  const params = useSearchParams();
  const initialCategory = params.get("category") ?? "All";
  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState(params.get("search") ?? "");
  const [sort, setSort] = useState("featured");
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    const next = products
      .filter((product) => category === "All" || product.category === category)
      .filter((product) =>
        `${product.name} ${product.summary} ${product.origin}`
          .toLowerCase()
          .includes(deferredQuery.toLowerCase())
      );

    if (sort === "featured") return next;

    return next.toSorted((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }, [category, deferredQuery, sort]);

  return (
    <main>
      <PageIntro
        label="Shop"
        title="Every product has an origin story."
        copy="Our products are more than ingredients - they are journeys. Browse coffee, honey, spices, curated gifts, and export-grade lots with transparent origin, producer story, harvest information, and traceability."
      />
      <section className="container-luxury section-y">
        <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto_auto] lg:items-center">
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <Button
                key={item}
                data-testid={`category-${item.toLowerCase()}`}
                aria-pressed={item === category}
                variant={item === category ? "default" : "outline"}
                size="sm"
                onClick={() => setCategory(item)}
              >
                {item}
              </Button>
            ))}
          </div>
          <label className="relative block">
            <span className="sr-only">Search products</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search products"
              className="pl-11"
            />
          </label>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="min-h-12 rounded-sm border border-input bg-card px-4 text-sm text-foreground"
            aria-label="Sort products"
          >
            <option value="featured">Featured</option>
            <option value="name">Name A–Z</option>
          </select>
        </div>
        <div className="mb-5 flex items-center justify-between border-b border-border pb-4 text-sm text-muted-foreground">
          <p><strong className="text-foreground">{filtered.length}</strong> products</p>
          {deferredQuery ? <p className="line-clamp-1">Results for “{deferredQuery}”</p> : null}
        </div>
        <div className={cn("grid gap-3 sm:gap-4", filtered.length ? "grid-cols-2 md:grid-cols-2 lg:grid-cols-4" : "")}>
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} compact />
          ))}
          {!filtered.length ? (
            <div className="border border-border p-10">
              <p className="font-display text-3xl">No products matched.</p>
              <p className="mt-3 text-muted-foreground">Try a different category or search term.</p>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
