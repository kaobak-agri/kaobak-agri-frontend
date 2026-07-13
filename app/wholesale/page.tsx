import { Download } from "lucide-react";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { PageIntro } from "@/components/brand/page-intro";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { wholesaleSegments } from "@/lib/data";

export default function WholesalePage() {
  return (
    <main>
      <PageIntro
        label="Wholesale"
        title="For cafes, hotels, retailers, and export buyers."
        copy="Consistent quality, flexible packaging, MOQ clarity, private label services, and origin documentation."
      />
      <section className="container-luxury section-y grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {wholesaleSegments.map((segment) => {
            const Icon = segment.icon;
            return (
              <Reveal key={segment.title}>
                <article className="border border-border bg-card p-8">
                  <Icon className="size-6 text-primary" />
                  <h2 className="mt-6 font-display text-3xl">{segment.title}</h2>
                  <p className="mt-4 text-muted-foreground">{segment.moq}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={0.1}>
          <div className="rounded-sm border border-border bg-secondary p-8">
            <h2 className="font-display text-3xl">Start a B2B conversation.</h2>
            <div className="mt-8">
              <InquiryForm label="Send wholesale inquiry" />
            </div>
            <Button variant="outline" className="mt-5 w-full">
              <Download data-icon="inline-start" />
              Download catalogue
            </Button>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
