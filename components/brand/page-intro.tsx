import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

const pageHeroImages: Record<string, string> = {
  Shop:
    "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785132742/Every_product_has_an_origin_story_ebxyhu.jpg",
  Traceability:
    "https://res.cloudinary.com/dmot064z/image/upload/f_jpg,q_auto:good/v1785132936/Batch-level_proof_for_products_with_a_journey_knkypb.heic",
  Wholesale:
    "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785156643/For_cafes_hotels_retailers_and_export_buyers_jv3xp3.png",
  Gifting:
    "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785136017/Coffee_honey_spices_and_story_cards_ruvaql.png",
  About:
    "https://res.cloudinary.com/dmot064z/image/upload/f_jpg,q_auto:good/v1785156098/A_kuxury_origin_brand_built_from_patience_uwldhn.heic",
  Contact:
    "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785132999/Lets_connect_xcybtz.jpg"
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
    <section className="relative min-h-[76vh] overflow-hidden pt-28">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-media object-cover brightness-[0.88] contrast-[1.04] saturate-[1.04]"
      />
      <div className="hero-vignette absolute inset-0" />
      <div className="container-luxury relative flex min-h-[calc(76vh-7rem)] items-end pb-14 sm:pb-16">
        <Reveal className="hero-copy-overlay max-w-3xl">
          <p className="hero-kicker">{label}</p>
          <h1 className="hero-title mt-5">{title}</h1>
          <p className="hero-body mt-6 max-w-2xl">{copy}</p>
        </Reveal>
      </div>
    </section>
  );
}
