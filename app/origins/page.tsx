import Image from "next/image";
import { MapPin } from "lucide-react";
import { CategoryBadge } from "@/components/brand/category-badge";
import { IndiaSourcingMap } from "@/components/brand/india-sourcing-map";
import { PageIntro } from "@/components/brand/page-intro";
import { Reveal } from "@/components/motion/reveal";
import { originRegions, storyTimeline } from "@/lib/data";

export default function OriginsPage() {
  return (
    <main>
      <PageIntro
        label="Our origins"
        title="Rooted in origin. Driven by purpose."
        copy="Kaobak exists to celebrate the extraordinary landscapes and communities of Northeast India. Every bean, every drop of honey, and every spice carries the patience of nature, the dedication of its growers, and the story of its place."
      />
      <section className="container-luxury section-y grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image src="/images/farmer.png" alt="Northeast India producer" fill sizes="45vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-sm border border-border bg-card p-8 md:p-12">
            <p className="body-luxury mb-8">
              At Kaobak, customers deserve to know more than just what they are
              buying. They deserve to know who grew it, where it came from, how
              it was harvested, why it tastes different, and how their purchase
              creates impact.
            </p>
            <IndiaSourcingMap />
            <div className="mt-8 grid gap-4">
              {originRegions.map((region) => (
                <div key={region.region} className="grid overflow-hidden rounded-xl border border-border bg-secondary/35 sm:grid-cols-[150px_1fr]">
                  <div className="relative min-h-36 sm:min-h-full">
                    <Image src={region.image} alt={region.region} fill sizes="(max-width: 640px) 100vw, 150px" className="object-cover" />
                  </div>
                  <div className="p-5">
                    <CategoryBadge category={region.focus.includes("honey") ? "Honey" : region.focus.includes("spices") || region.focus.includes("ginger") ? "Spices" : "Coffee"} />
                    <h2 className="mt-3 font-display text-2xl leading-tight">{region.region}</h2>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{region.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
      <section className="bg-secondary/65">
        <div className="container-luxury section-y">
          <p className="font-display text-4xl text-foreground">The production journey</p>
          <div className="mt-8 grid gap-3 md:grid-cols-5">
            {storyTimeline.map((item, index) => (
              <div key={item} className="luxury-card flex items-center gap-4 p-4 md:min-h-36 md:flex-col md:items-start md:justify-between">
                <span className="font-display text-2xl text-primary">0{index + 1}</span>
                <div>
                  <MapPin className="mb-3 hidden size-5 text-primary md:block" />
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
