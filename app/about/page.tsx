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
        copy="Kaobak exists to connect Northeast India’s exceptional coffee, honey, and spices to customers who value quality, origin, and impact."
      />
      <section className="container-luxury section-y grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <h2 className="headline-lg">Mission</h2>
          <p className="body-luxury mt-6">
            To build an origin-led commerce platform where every product carries
            traceability, every farmer has visibility, and every purchase moves
            value closer to the communities who create it.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image src="/images/farmer.png" alt="Kaobak team and mission" fill sizes="50vw" className="object-cover" />
          </div>
        </Reveal>
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
