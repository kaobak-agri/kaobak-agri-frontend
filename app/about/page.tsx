import Image from "next/image";
import { PageIntro } from "@/components/brand/page-intro";
import { Reveal } from "@/components/motion/reveal";
import { values } from "@/lib/data";

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
            <Image src="/images/farmer.png" alt="Kaobak team and mission" fill sizes="50vw" className="object-cover" />
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
