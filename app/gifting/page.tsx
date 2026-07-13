import Image from "next/image";
import { Gift } from "lucide-react";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { PageIntro } from "@/components/brand/page-intro";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";

export default function GiftingPage() {
  return (
    <main>
      <PageIntro
        label="Gifting"
        title="Artisanal gift hampers with provenance."
        copy="Corporate gifting, festival hampers, luxury packaging, custom notes, tasting cards, and batch stories."
      />
      <section className="container-luxury section-y grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <Reveal>
          <div className="relative aspect-[5/4] overflow-hidden rounded-sm">
            <Image src="/images/kaobak-hero.png" alt="Kaobak gift hamper inspiration" fill sizes="50vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Badge>Luxury packaging</Badge>
          <h2 className="headline-lg mt-5">Coffee, honey, spices, and story cards in a memorable format.</h2>
          <div className="mt-8 grid gap-4">
            {["Corporate gifting", "Festival hampers", "Bulk inquiry", "Custom inserts"].map((item) => (
              <div key={item} className="flex items-center gap-4 border-b border-border pb-4">
                <Gift className="size-5 text-primary" />
                <p className="font-display text-3xl">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
      <section className="bg-secondary">
        <div className="container-luxury grid gap-10 py-20 lg:grid-cols-2">
          <h2 className="headline-lg">Plan a gifting program.</h2>
          <InquiryForm label="Send gifting inquiry" />
        </div>
      </section>
    </main>
  );
}
