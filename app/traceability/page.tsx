import { PackageCheck } from "lucide-react";
import { BatchLookup } from "@/components/brand/batch-lookup";
import { PageIntro } from "@/components/brand/page-intro";
import { Reveal } from "@/components/motion/reveal";
import { products, storyTimeline } from "@/lib/data";

export default function TraceabilityPage() {
  return (
    <main>
      <PageIntro
        label="Traceability"
        title="Batch-level proof for products with a journey."
        copy="Search by batch, inspect village details, understand harvest windows, and follow the product from crop to pack."
      />
      <section className="container-luxury section-y">
        <Reveal>
          <BatchLookup products={products} />
        </Reveal>
      </section>
      <section className="bg-secondary/65">
        <div className="container-luxury section-y">
          <p className="font-display text-4xl text-foreground">Product journey timeline</p>
          <div className="mt-8 grid gap-3 md:grid-cols-5">
            {storyTimeline.map((item, index) => (
              <div key={item} className="luxury-card flex items-center gap-4 p-4 md:min-h-36 md:flex-col md:items-start md:justify-between">
                <span className="font-display text-2xl text-primary">0{index + 1}</span>
                <div>
                  <PackageCheck className="mb-3 hidden size-5 text-primary md:block" />
                  <p className="font-label text-xs font-semibold uppercase leading-5 tracking-[0.12em]">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
