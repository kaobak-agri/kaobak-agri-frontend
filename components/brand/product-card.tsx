import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CategoryBadge } from "@/components/brand/category-badge";
import type { Product } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  const accent = {
    Coffee: "border-t-[#6b4226]",
    Tea: "border-t-[#486b4d]",
    Honey: "border-t-[#c9881c]",
    Spices: "border-t-[#6e7c3f]",
    Gifting: "border-t-[#c9762e]",
    Export: "border-t-[#36503e]"
  }[product.category];

  return (
    <Link href={`/contact?product=${encodeURIComponent(product.name)}`} className="group block h-full">
      <article className={cn("luxury-card luxury-card-hover flex h-full flex-col overflow-hidden border-t-[3px]", accent)}>
        <div
          className={cn(
            "relative overflow-hidden rounded-xl",
            compact ? "m-2 aspect-square md:m-3 md:aspect-[4/5]" : "m-3 aspect-[4/5]"
          )}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 900px) 100vw, 33vw"
            className="image-zoom object-cover"
          />
          <div className={cn("absolute", compact ? "left-3 top-3 md:left-4 md:top-4" : "left-4 top-4")}>
            <CategoryBadge category={product.category} />
          </div>
        </div>
        <div className={cn("gold-line flex flex-1 flex-col", compact ? "gap-2 px-3 pb-4 pt-4 md:gap-4 md:px-6 md:pb-6 md:pt-7" : "gap-4 px-6 pb-6 pt-7")}>
          <div className="flex items-start">
            <h3 className={cn("font-display leading-tight text-foreground", compact ? "text-lg md:text-2xl" : "text-2xl")}>
              {product.name}
            </h3>
          </div>
          <p className={cn("line-clamp-2 text-sm text-muted-foreground", compact ? "hidden leading-5 md:block md:leading-6" : "leading-6")}>
            {product.summary}
          </p>
          <span className={cn("mt-auto inline-flex items-center gap-2 font-label font-semibold uppercase text-primary", compact ? "pt-2 text-[10px] tracking-[0.14em] md:text-xs md:tracking-[0.2em]" : "text-xs tracking-[0.2em]")}>
            Enquire about the product
            <ArrowRight className="size-3" />
          </span>
        </div>
      </article>
    </Link>
  );
}
