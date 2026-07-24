import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Gift,
  MapPin,
  PackageCheck,
  QrCode,
  ScanLine,
  Store
} from "lucide-react";
import { ProductCard } from "@/components/brand/product-card";
import { CategoryBadge } from "@/components/brand/category-badge";
import { ScrollCue } from "@/components/brand/scroll-cue";
import { StatRow } from "@/components/brand/stat-row";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  collections,
  originRegions,
  pillars,
  products,
  storyTimeline
} from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative min-h-screen overflow-hidden pt-28">
        <Image
          src="/images/kaobak-home-hero.png"
          alt="Coffee harvesting, wild honey collection, and spices in Northeast India highlands"
          fill
          priority
          sizes="100vw"
          className="hero-media object-cover brightness-[1.04] saturate-[0.94]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,243,233,0.82),rgba(248,243,233,0.28)_50%,transparent_74%),linear-gradient(0deg,rgba(244,239,228,0.54),transparent_44%)]" />
        <div className="container-luxury relative flex min-h-[calc(100vh-7rem)] items-end pb-16">
          <Reveal className="hero-copy-panel max-w-3xl">
            <p className="font-accent text-2xl text-primary sm:text-3xl">
              Specialty coffee. Wild forest honey. Organic spices.
            </p>
            <h1 className="headline-xl mt-6 max-w-5xl">
              From the highlands of Northeast India to the world.
            </h1>
            <p className="body-luxury mt-7 max-w-xl">
              Traceable, forest-friendly products from the highlands of Northeast India.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/shop">
                  Explore products
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Discover Kaobak</Link>
              </Button>
            </div>
          </Reveal>
        </div>
        <ScrollCue />
      </section>

      <section className="container-luxury -mt-10 relative z-10 pb-16">
        <div className="luxury-card grid grid-cols-2 gap-2 p-3 md:grid-cols-2 md:gap-3 md:p-4 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title}>
                <div className="soft-panel h-full p-3.5 sm:p-5">
                  <Icon className="mb-3 size-4 text-primary sm:mb-4 sm:size-5" />
                  <p className="font-label text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground sm:text-xs sm:tracking-[0.16em]">
                    {pillar.title}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground sm:mt-3 sm:text-sm sm:leading-6">
                    {pillar.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="collections" className="container-luxury section-y scroll-mt-24">
        <div className="luxury-card p-6 sm:p-8 lg:p-10">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="kicker">Product collections</p>
              <h2 className="headline-lg mt-4 max-w-2xl">
                Curated categories, each with a clear origin story.
              </h2>
            </Reveal>
            <Button asChild variant="outline">
              <Link href="/shop">
                View all products
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </div>
          <div className="mobile-card-rail mobile-card-rail--two-up gap-4 md:grid-cols-3 md:gap-5">
            {collections.map((collection, index) => (
              <Reveal key={collection.title} delay={index * 0.08}>
                <Link href={collection.href} className="group block h-full">
                  <article className="luxury-card luxury-card-hover flex h-full flex-col overflow-hidden">
                    <div className="relative m-1.5 aspect-square overflow-hidden rounded-lg md:m-3 md:aspect-[4/5] md:rounded-xl">
                      <Image
                        src={collection.image}
                        alt={collection.title}
                        fill
                        sizes="(max-width: 900px) 100vw, 33vw"
                        className="image-zoom object-cover"
                      />
                    </div>
                    <div className="gold-line flex flex-1 flex-col px-3 pb-4 pt-4 md:px-6 md:pb-6 md:pt-7">
                      <CategoryBadge category={collection.category} className="hidden md:inline-flex" />
                      <h3 className="font-display text-lg leading-tight md:mt-4 md:text-3xl md:leading-none">
                        {collection.title}
                      </h3>
                      <p className="mt-4 hidden text-sm leading-7 text-muted-foreground md:block">
                        {collection.copy}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-4 font-label text-[10px] font-semibold uppercase tracking-[0.12em] text-primary md:mt-5 md:gap-2 md:pt-0 md:text-xs md:tracking-[0.2em]">
                        Shop now <ArrowRight className="size-3" />
                      </span>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxury pb-16 sm:pb-24">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal className="luxury-card gold-line p-7 pt-10 sm:p-10">
            <p className="kicker">Product highlights</p>
            <h2 className="headline-lg mt-4">
              Commerce cards with origin built in.
            </h2>
            <p className="body-luxury mt-6">
              Our products are more than ingredients - they are journeys. Each
              card brings together product imagery, transparent pricing, region
              of origin, harvest information, producer story, and direct access
              to traceability.
            </p>
            <Button asChild className="mt-8" variant="outline">
              <Link href="/shop">Shop all products</Link>
            </Button>
          </Reveal>
          <div className="mobile-card-rail mobile-card-rail--two-up gap-4 md:grid-cols-3 md:gap-5">
            {products.slice(0, 3).map((product, index) => (
              <Reveal key={product.slug} delay={index * 0.08}>
                <ProductCard product={product} compact />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxury pb-16 sm:pb-24">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="luxury-card gold-line p-7 pt-10 sm:p-10">
            <p className="kicker">Our origins</p>
            <h2 className="headline-lg mt-4">Rooted in place. Designed for proof.</h2>
            <p className="body-luxury mt-6">
              Exceptional products begin in mountain villages, forest
              communities, and family farms where generations have perfected
              the art of growing with nature rather than against it.
            </p>
            <Button asChild className="mt-8" variant="outline">
              <Link href="/about#origins">Explore origins</Link>
            </Button>
          </Reveal>
          <div className="grid gap-3 md:grid-cols-3 md:gap-5">
            {originRegions.map((region, index) => (
              <Reveal key={region.region} delay={index * 0.08}>
                <article className="luxury-card luxury-card-hover h-full overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={region.image} alt={region.region} fill sizes="(max-width: 768px) 100vw, 22vw" className="image-zoom object-cover" />
                  </div>
                  <div className="p-5 md:p-6">
                    <div className="flex items-center gap-2 text-primary">
                      <MapPin className="size-4" />
                      <span className="font-label text-[10px] font-semibold uppercase tracking-[0.16em]">Sourcing region</span>
                    </div>
                    <Badge variant="outline" className="mt-4">{region.focus}</Badge>
                    <h3 className="mt-4 font-display text-2xl leading-none md:text-3xl">{region.region}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{region.detail}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxury pb-16 sm:pb-24">
        <div className="luxury-card overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <Reveal>
              <p className="kicker">Impact preview</p>
              <h2 className="headline-lg mt-4">
                Numbers that feel human, not decorative.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="body-luxury">
                True impact is measured by people, not numbers alone. Every
                jar of honey, pack of spices, and bag of coffee represents
                indigenous communities, farmer collectives, and women-led
                enterprises across Northeast India.
              </p>
            </Reveal>
          </div>
          <StatRow />
        </div>
      </section>

      <section className="container-luxury pb-16 sm:pb-24">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="luxury-card luxury-card-hover overflow-hidden">
            <div className="grid min-h-full lg:grid-cols-2">
              <div className="relative min-h-[360px]">
                <Image
                  src="/images/coffee.png"
                  alt="Traceable Kaobak coffee"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="gold-line p-7 pt-10 sm:p-10">
                <ScanLine className="mb-6 size-5 text-primary" />
                <p className="kicker">Traceability preview</p>
                <h2 className="mt-4 font-display text-4xl leading-none">
                  Batch-level proof without visual clutter.
                </h2>
                <div className="mt-8 rounded-xl border border-[#d2c5ae] bg-[#f7f3ec] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.7)]">
                  <div className="mb-4 flex items-center justify-between border-b border-dashed border-[#d2c5ae] pb-4">
                    <span className="font-label text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Origin receipt</span>
                    <QrCode className="size-7 text-primary" />
                  </div>
                  <div className="grid gap-3 text-sm">
                  {[
                    ["Batch", "KBK-CF-0426"],
                    ["Village", "Misty Ridge Cluster"],
                    ["Harvest", "March 2026"],
                    ["Process", "Washed, sun-dried"]
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between gap-5 border-b border-border pb-3">
                      <span className="text-muted-foreground">{label}</span>
                      <strong className="text-right text-foreground">{value}</strong>
                    </div>
                  ))}
                  </div>
                </div>
                <Button asChild className="mt-8" variant="outline">
                  <Link href="/traceability">Lookup a batch</Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="luxury-card gold-line p-7 pt-10 sm:p-10">
            <PackageCheck className="mb-6 size-5 text-primary" />
            <p className="kicker">Journey timeline</p>
            <div className="mt-8 grid gap-3 lg:gap-4">
              {storyTimeline.slice(0, 4).map((step, index) => (
                <div key={step} className="soft-panel grid min-w-0 grid-cols-[auto_1fr] items-center gap-3 p-4">
                  <span className="font-display text-2xl text-primary sm:text-3xl">0{index + 1}</span>
                  <p className="min-w-0 break-words font-label text-xs font-semibold uppercase leading-5 tracking-[0.12em] sm:text-sm sm:tracking-[0.16em]">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-luxury pb-16 sm:pb-24">
        <Reveal className="luxury-card overflow-hidden">
          <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
            <div className="relative min-h-[430px]">
              <Image
                src="/images/farmer.png"
                alt="Kaobak farmer story"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover"
              />
            </div>
            <div className="gold-line p-7 pt-10 sm:p-10">
              <Badge>Farmer stories</Badge>
              <h2 className="mt-5 font-display text-4xl leading-none">
                Real change. Real people. Real stories.
              </h2>
              <p className="body-luxury mt-6">
                Behind every harvest is a person, a place, and a decision to
                keep value closer to the community that creates it.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 md:gap-4">
                {[
                  "Women-led producer groups",
                  "Coffee harvest coordination",
                  "Spice drying and sorting",
                  "Livelihood impact tracking"
                ].map((item) => (
                  <div key={item} className="soft-panel min-w-0 break-words p-3 text-xs font-semibold leading-5 text-foreground sm:p-4 sm:text-sm">
                    {item}
                  </div>
                ))}
              </div>
              <Button asChild className="mt-8">
                <Link href="/about#origin-stories">Read origin stories</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-luxury pb-20 sm:pb-28">
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {[
            {
              title: "Wholesale programs",
              copy: "For cafes, hotels, retailers, and export buyers seeking origin-led products with MOQ clarity.",
              href: "/wholesale",
              icon: Store
            },
            {
              title: "Luxury gifting",
              copy: "Corporate hampers, festival boxes, tasting cards, and premium packaging with provenance.",
              href: "/gifting",
              icon: Gift
            }
          ].map((cta, index) => {
            const Icon = cta.icon;
            return (
              <Reveal key={cta.title} delay={index * 0.08}>
                <Link href={cta.href} className="group block">
                  <article className={cn("luxury-card luxury-card-hover gold-line p-7 pt-10 sm:p-10", index === 0 ? "bg-[#e5ebe6]" : "bg-[#faeed0]")}>
                    <Icon className="mb-7 size-6 text-primary" />
                    <h2 className="font-display text-4xl leading-none">{cta.title}</h2>
                    <p className="body-luxury mt-5">{cta.copy}</p>
                    <span className="mt-8 inline-flex items-center gap-2 font-label text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Start inquiry <ArrowRight className="size-3" />
                    </span>
                  </article>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}
