import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ShoppingBag, Star } from "lucide-react";
import { ProductCard } from "@/components/brand/product-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/lib/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter((item) => item.slug !== product.slug && item.category === product.category)
    .slice(0, 3);

  return (
    <main>
      <section className="relative min-h-[78vh] overflow-hidden pt-28">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority
          sizes="100vw"
          className="hero-media object-cover brightness-[1.1] saturate-[0.9]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,243,233,0.9),rgba(248,243,233,0.5)_52%,transparent_74%),linear-gradient(0deg,rgba(244,239,228,0.66),transparent_46%)]" />
        <div className="container-luxury relative flex min-h-[calc(78vh-7rem)] items-end pb-16">
          <div className="hero-copy-panel max-w-3xl">
            <Button asChild variant="link">
              <Link href="/shop">
                <ArrowLeft data-icon="inline-start" />
                Back to products
              </Link>
            </Button>
            <div className="mt-7">
              <Badge>{product.category}</Badge>
            </div>
            <h1 className="headline-xl mt-6">{product.name}</h1>
            <p className="body-luxury mt-7 max-w-2xl">{product.summary}</p>
          </div>
        </div>
      </section>

      <section className="container-luxury grid gap-10 py-20 lg:grid-cols-[0.9fr_1fr]">
        <div className="grid gap-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-card">
            <Image src={product.image} alt={product.name} fill sizes="50vw" className="object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[product.image, "/images/kaobak-hero.png", "/images/farmer.png"].map((image) => (
              <div key={image} className="relative aspect-square overflow-hidden rounded-2xl">
                <Image src={image} alt="" fill sizes="15vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="luxury-card gold-line p-7 pt-10 lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-4xl leading-none">Every purchase begins with a story.</h2>
          <p className="mt-5 text-2xl text-primary">
            {product.price === null ? "Available on enquiry" : `₹${product.price}`}
          </p>
          <p className="body-luxury mt-7">{product.summary}</p>
          <div className="mt-6 flex gap-1 text-primary" aria-label="Rated five stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="size-4 fill-current" />
            ))}
          </div>
          {product.price === null ? (
            <Button asChild className="mt-8 w-full sm:w-auto" size="lg">
              <Link href={`/contact?product=${product.slug}`}>
                <ShoppingBag data-icon="inline-start" />
                Request availability
              </Link>
            </Button>
          ) : (
            <Button className="mt-8 w-full sm:w-auto" size="lg">
              <ShoppingBag data-icon="inline-start" />
              Add to cart
            </Button>
          )}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="container-luxury grid gap-12 py-20 lg:grid-cols-3">
          <div>
            <p className="kicker">Origin</p>
            <h2 className="mt-5 font-display text-3xl">{product.origin}</h2>
            <p className="body-luxury mt-5">{product.story}</p>
            <p className="body-luxury mt-5">
              This is where the product reveals its journey - from the soil it
              grows in to the hands that carefully prepare it.
            </p>
          </div>
          <div>
            <p className="kicker">Tasting notes</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {product.notes.map((note) => (
                <Badge key={note} variant="outline">{note}</Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="kicker">Traceability</p>
            <dl className="mt-6 grid gap-4 text-sm">
              {Object.entries(product.trace).map(([key, value]) => (
                <div key={key} className="grid grid-cols-[110px_1fr] gap-4 border-b border-border pb-3">
                  <dt className="capitalize text-muted-foreground">{key}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="container-luxury section-y">
        <h2 className="headline-lg mb-10">Related products</h2>
        <div className="mobile-card-rail mobile-card-rail--two-up gap-4 md:grid-cols-3 md:gap-5">
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} compact />
          ))}
        </div>
      </section>
    </main>
  );
}
