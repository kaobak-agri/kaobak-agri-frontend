import Image from "next/image";
import { PageIntro } from "@/components/brand/page-intro";
import { StatRow } from "@/components/brand/stat-row";
import { Reveal } from "@/components/motion/reveal";
import { impactInitiatives } from "@/lib/data";

export default function ImpactPage() {
  return (
    <main>
      <PageIntro
        label="Impact"
        title="Impact that goes beyond commerce."
        copy="Every purchase contributes to something larger than itself: stronger rural livelihoods, sustainable farming, women-led enterprises, and protection for some of India's richest natural landscapes."
      />
      <section className="container-luxury section-y">
        <StatRow />
      </section>
      <section className="bg-secondary">
        <div className="container-luxury grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="headline-lg">Protecting nature while celebrating it.</h2>
            <p className="body-luxury mt-6">
              Exceptional products can only exist within healthy ecosystems. Our
              sourcing supports responsible farming, ethical forest harvesting,
              biodiversity conservation, and transparent supply chains that
              respect both people and the environment.
            </p>
            <div className="mt-10 grid gap-5">
              {impactInitiatives.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-center gap-5 border-b border-border pb-5">
                    <Icon className="size-5 text-primary" />
                    <p className="font-display text-3xl">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image src="/images/farmer.png" alt="Women-led producer group" fill sizes="50vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="container-luxury section-y">
        <p className="kicker">Timeline</p>
        <div className="mt-8 h-px bg-primary" data-gsap="storyline" />
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
          {["Village partnerships", "Quality infrastructure", "Women-led enterprise", "Export readiness"].map((item, index) => (
            <article key={item} className="border border-border bg-card p-4 md:p-6">
              <span className="font-display text-3xl text-primary md:text-4xl">0{index + 1}</span>
              <h2 className="mt-4 font-display text-xl leading-tight md:mt-5 md:text-3xl">{item}</h2>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
