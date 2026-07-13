import Image from "next/image";
import { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

type EditorialHeroProps = {
  title: string;
  copy: string;
  image: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  children?: ReactNode;
};

export function EditorialHero({
  title,
  copy,
  image,
  primary,
  secondary,
  children
}: EditorialHeroProps) {
  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-28">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover brightness-[1.08] saturate-[0.92]"
        data-parallax
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,243,233,0.88),rgba(248,243,233,0.5)_50%,transparent_73%),linear-gradient(0deg,rgba(244,239,228,0.68),transparent_44%)]" />
      <div className="container-luxury relative flex min-h-[calc(92vh-7rem)] items-end pb-16">
        <Reveal className="hero-copy-panel max-w-3xl">
          <h1 className="headline-xl">{title}</h1>
          <p className="body-luxury mt-7 max-w-2xl">{copy}</p>
          {(primary || secondary) ? (
            <div className="mt-9 flex flex-wrap gap-3">
              {primary ? (
                <Button asChild size="lg">
                  <a href={primary.href}>{primary.label}</a>
                </Button>
              ) : null}
              {secondary ? (
                <Button asChild variant="outline" size="lg">
                  <a href={secondary.href}>{secondary.label}</a>
                </Button>
              ) : null}
            </div>
          ) : null}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
