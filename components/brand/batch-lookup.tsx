"use client";

import { FormEvent, useState } from "react";
import { PackageCheck, QrCode, Search } from "lucide-react";
import { CategoryBadge } from "@/components/brand/category-badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Product } from "@/lib/data";

function normalizeBatch(value: string) {
  return value.trim().toUpperCase().replace(/\s+/g, "");
}

export function BatchLookup({ products }: { products: Product[] }) {
  const [query, setQuery] = useState(products[0]?.trace.batch ?? "");
  const [selected, setSelected] = useState<Product | null>(products[0] ?? null);
  const [notFound, setNotFound] = useState(false);

  function lookup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalized = normalizeBatch(query);
    const match = products.find((product) => normalizeBatch(product.trace.batch) === normalized) ?? null;
    setSelected(match);
    setNotFound(!match);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
      <div className="luxury-card gold-line p-6 pt-9 sm:p-8 sm:pt-10">
        <Search className="mb-5 size-5 text-primary" />
        <p className="kicker">Batch lookup</p>
        <h2 className="mt-4 font-display text-3xl leading-tight">Enter the code printed on your pack.</h2>
        <form onSubmit={lookup} className="mt-7 grid gap-3">
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Batch code"
            placeholder="e.g. KBK-CF-0426"
            className="bg-card font-label uppercase tracking-[0.12em]"
          />
          <Button type="submit">Lookup batch</Button>
        </form>
        <p className="mt-4 text-xs leading-5 text-muted-foreground">
          Try <button type="button" className="font-semibold text-primary underline-offset-4 hover:underline" onClick={() => setQuery(products[0]?.trace.batch ?? "")}>{products[0]?.trace.batch}</button> for the featured coffee lot.
        </p>
        {notFound ? (
          <div role="status" className="mt-6 rounded-xl border border-[#e6c9ae] bg-[#f6e5d6] p-4 text-sm leading-6 text-[#7a4012]">
            We could not match that batch. Check the printed code or contact Kaobak for help.
          </div>
        ) : null}
      </div>

      <div className="rounded-xl border border-[var(--kbk-border-strong)] bg-card p-6 shadow-luxury sm:p-8">
        {selected ? (
          <>
            <div className="flex items-start justify-between gap-6 border-b border-dashed border-[var(--kbk-border-strong)] pb-6">
              <div>
                <CategoryBadge category={selected.category} />
                <h2 className="mt-4 font-display text-3xl leading-tight">{selected.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">Verified Kaobak origin record</p>
              </div>
              <div className="rounded-lg border border-border bg-secondary/60 p-3 text-primary">
                <QrCode className="size-8" />
              </div>
            </div>
            <dl className="mt-6 grid gap-4">
              {Object.entries(selected.trace).map(([key, value]) => (
                <div key={key} className="grid grid-cols-[96px_1fr] gap-4 border-b border-border pb-4 sm:grid-cols-[150px_1fr]">
                  <dt className="text-sm capitalize text-muted-foreground">{key}</dt>
                  <dd className="break-words text-sm font-semibold text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex items-center gap-3 rounded-lg bg-[#e8ecd9] p-4 text-sm font-semibold text-[#5f6c36]">
              <PackageCheck className="size-5 shrink-0" />
              Batch record verified against the Kaobak catalogue.
            </div>
          </>
        ) : (
          <div className="flex min-h-72 items-center justify-center text-center text-muted-foreground">
            Enter a valid batch code to reveal its origin record.
          </div>
        )}
      </div>
    </div>
  );
}
