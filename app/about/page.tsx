import Image from "next/image";
import Link from "next/link";
import { BookOpen, MapPin, PackageCheck } from "lucide-react";
import { CategoryBadge } from "@/components/brand/category-badge";
import { IndiaSourcingMap } from "@/components/brand/india-sourcing-map";
import { PageIntro } from "@/components/brand/page-intro";
import { StatRow } from "@/components/brand/stat-row";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import {
  impactInitiatives,
  journalPosts,
  originRegions,
  storyTimeline,
  values
} from "@/lib/data";

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        label="About"
        title="A luxury origin brand built from patience, proof, and place."
        copy="Kaobak exists to celebrate the extraordinary landscapes and communities of Northeast India. Every bean, every drop of honey, and every spice carries the patience of nature, the dedication of its growers, and the story of its place."
      />
      <section className="container-luxury section-y grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="kicker">About Kaobak</p>
          <h2 className="headline-lg mt-4">Where every seed begins a story</h2>
          <p className="body-luxury mt-6">
            The word Kaobak represents the moment a seed breaks through the
            soil to begin its journey towards becoming a thriving plant. It is
            a symbol of patience, resilience, and new beginnings. That
            philosophy shapes everything we do.
          </p>
          <p className="body-luxury mt-5">
            Kaobak is an origin-led premium food brand dedicated to showcasing
            the exceptional coffee, wild forest honey, and spices of Northeast
            India. We work directly with farmers, producer groups, and
            indigenous communities to bring products that are authentic,
            traceable, and naturally exceptional.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785132789/Where_every_seed_begins_a_story_mkmesu.heic"
              alt="A Kaobak seedling beginning its journey in Northeast India"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>
      <section className="container-luxury pb-16 sm:pb-24">
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal className="luxury-card gold-line p-7 pt-10 sm:p-10">
            <p className="kicker">Mission</p>
            <h2 className="mt-4 font-display text-4xl leading-none">Creating value at the source</h2>
            <p className="body-luxury mt-6">
              Our mission is to build an origin-first commerce platform where
              every product carries complete traceability, every producer
              receives the recognition they deserve, and every purchase
              strengthens rural communities.
            </p>
            <p className="body-luxury mt-5">
              By connecting consumers directly with the people behind every
              harvest, we create a transparent supply chain built on trust,
              fairness, and exceptional quality.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="luxury-card gold-line p-7 pt-10 sm:p-10">
            <p className="kicker">Vision</p>
            <h2 className="mt-4 font-display text-4xl leading-none">Changing how the world experiences origin</h2>
            <p className="body-luxury mt-6">
              We envision a future where Northeast India is recognised globally
              for producing some of the world's finest coffee, honey, and
              spices. A future where origin becomes the hallmark of quality,
              transparency becomes the standard, and communities prosper
              through sustainable trade.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="origins" className="container-luxury pb-16 sm:pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <Reveal className="luxury-card gold-line p-7 pt-10 sm:p-10">
            <p className="kicker">Our origins</p>
            <h2 className="headline-lg mt-4">Rooted in origin. Driven by purpose.</h2>
            <p className="body-luxury mt-6">
              At Kaobak, customers deserve to know more than just what they are
              buying. They deserve to know who grew it, where it came from, how
              it was harvested, why it tastes different, and how their purchase
              creates impact.
            </p>
            <p className="body-luxury mt-5">
              Our Origins is where every product reveals its complete journey -
              from the soil it grows in to the hands that carefully prepare it.
              Because authenticity should never be hidden.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="rounded-sm border border-border bg-card p-5 sm:p-8">
            <IndiaSourcingMap />
            <div className="mt-6 grid gap-4">
              {originRegions.map((region) => (
                <div key={region.region} className="grid overflow-hidden rounded-xl border border-border bg-secondary/35 sm:grid-cols-[150px_1fr]">
                  <div className="relative min-h-36 sm:min-h-full">
                    <Image src={region.image} alt={region.region} fill sizes="(max-width: 640px) 100vw, 150px" className="object-cover" />
                  </div>
                  <div className="p-5">
                    <CategoryBadge
                      category={
                        region.focus.toLowerCase().includes("honey")
                          ? "Honey"
                          : region.focus.toLowerCase().includes("spices") ||
                              region.focus.toLowerCase().includes("ginger")
                            ? "Spices"
                            : "Coffee"
                      }
                    />
                    <h3 className="mt-3 font-display text-2xl leading-tight">{region.region}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{region.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="impact" className="bg-secondary">
        <div className="container-luxury section-y">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <Reveal>
              <p className="kicker">Impact</p>
              <h2 className="headline-lg mt-4">Impact that goes beyond commerce.</h2>
              <p className="body-luxury mt-6">
                Every purchase contributes to something larger than itself:
                stronger rural livelihoods, sustainable farming, women-led
                enterprises, and protection for some of India's richest natural
                landscapes.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <StatRow />
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {impactInitiatives.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <article className="luxury-card h-full p-5">
                    <Icon className="size-5 text-primary" />
                    <h3 className="mt-5 font-display text-2xl leading-tight">{item.title}</h3>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="traceability-story" className="container-luxury section-y">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="luxury-card gold-line p-7 pt-10 sm:p-10">
            <PackageCheck className="mb-6 size-5 text-primary" />
            <p className="kicker">Traceability</p>
            <h2 className="headline-lg mt-4">Batch-level proof for products with a journey.</h2>
            <p className="body-luxury mt-6">
              Search by batch, inspect village details, understand harvest
              windows, and follow the product from crop to pack.
            </p>
            <Button asChild className="mt-8" variant="outline">
              <Link href="/traceability">Open batch lookup</Link>
            </Button>
          </Reveal>

          <Reveal delay={0.1} className="luxury-card p-7 sm:p-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src="https://res.cloudinary.com/dmot064z/image/upload/f_jpg,q_auto:good/v1785156824/IMG_3245_Original_iufloa.heic"
                alt="Batch-level product traceability documentation"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            <p className="mt-8 font-display text-4xl text-foreground">The production journey</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {storyTimeline.map((item, index) => (
                <div key={item} className="soft-panel flex items-center gap-4 p-4">
                  <span className="font-display text-2xl text-primary">0{index + 1}</span>
                  <div>
                    <MapPin className="mb-2 size-4 text-primary" />
                    <p className="font-label text-xs font-semibold uppercase leading-5 tracking-[0.12em]">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="origin-stories" className="container-luxury pb-16 sm:pb-24">
        <Reveal className="mb-8">
          <p className="kicker">Origin stories</p>
          <h2 className="headline-lg mt-4">Stories from the highlands.</h2>
          <p className="body-luxury mt-6 max-w-3xl">
            Behind every harvest lies a remarkable story. Explore brewing
            techniques, regional recipes, farmer conversations, sustainable
            harvesting practices, and field journals that celebrate the people
            and landscapes behind every Kaobak product.
          </p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {journalPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.08}>
              <article className="luxury-card luxury-card-hover group h-full overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="image-zoom object-cover" />
                </div>
                <div className="p-5 sm:p-6">
                  <CategoryBadge category={post.category} />
                  <h3 className="mt-4 font-display text-2xl leading-tight md:mt-5">{post.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-label text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                    <BookOpen className="size-3" /> Story preview
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ivory text-[#181818]">
        <div className="container-luxury section-y">
          <p className="font-accent text-3xl text-[#364833]">Values</p>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-5">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article key={value.title} className="border border-[#d8cdbd] p-4 md:p-6">
                  <Icon className="size-5 text-[#b89052] md:size-6" />
                  <h2 className="mt-4 font-display text-xl leading-tight md:mt-6 md:text-3xl">{value.title}</h2>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
