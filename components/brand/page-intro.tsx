import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

const pageHeroImages: Record<string, string> = {
  Shop: "/images/coffee.png",
  Traceability: "/images/coffee.png",
  Wholesale: "/images/spices.png",
  Gifting: "/images/honey.png",
  About: "/images/farmer.png",
  Contact: "/images/kaobak-home-hero.png"
};

export function PageIntro({
  label,
  title,
  copy
}: {
  label: string;
  title: string;
  copy: string;
}) {
  const image = pageHeroImages[label] ?? "/images/kaobak-home-hero.png";

  return (
    <section className="relative min-h-[78vh] overflow-hidden pt-28">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-media object-cover brightness-[1.1] saturate-[0.9]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,243,233,0.9),rgba(248,243,233,0.54)_48%,transparent_72%),linear-gradient(0deg,rgba(244,239,228,0.72),transparent_42%)]" />
      <div className="container-luxury relative flex min-h-[calc(78vh-7rem)] items-end pb-16">
        <Reveal className="hero-copy-panel max-w-3xl">
          <p className="kicker">{label}</p>
          <h1 className="headline-xl mt-6">{title}</h1>
          <p className="body-luxury mt-8 max-w-3xl">{copy}</p>
        </Reveal>
      </div>
    </section>
  );
}
