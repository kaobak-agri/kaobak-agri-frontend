import Image from "next/image";
import { BookOpen } from "lucide-react";
import { CategoryBadge } from "@/components/brand/category-badge";
import { PageIntro } from "@/components/brand/page-intro";
import { Reveal } from "@/components/motion/reveal";
import { journalPosts } from "@/lib/data";

export default function JournalPage() {
  return (
    <main>
      <PageIntro
        label="Journal"
        title="Stories from the highlands."
        copy="Behind every harvest lies a remarkable story. Explore brewing techniques, regional recipes, farmer conversations, sustainable harvesting practices, and field journals that celebrate the people and landscapes behind every Kaobak product."
      />
      <section className="container-luxury section-y">
        <div className="grid gap-8 md:grid-cols-3 md:gap-5">
          {journalPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.08}>
              <article className="luxury-card luxury-card-hover group h-full overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden md:aspect-[4/5]">
                  <Image src={post.image} alt={post.title} fill sizes="33vw" className="image-zoom object-cover" />
                </div>
                <div className="p-5 sm:p-6">
                  <CategoryBadge category={post.category} />
                  <h2 className="mt-4 font-display text-2xl leading-tight md:mt-5 md:text-3xl">{post.title}</h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground md:mt-4 md:text-base">{post.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-label text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                    <BookOpen className="size-3" /> Editorial preview
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
