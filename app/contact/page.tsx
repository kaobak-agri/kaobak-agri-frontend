import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { PageIntro } from "@/components/brand/page-intro";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/data";

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        label="Contact"
        title="Let’s connect."
        copy="Visit, call, locate us, or send an inquiry for products, gifting, wholesale, export, and sourcing partnerships."
      />
      <section className="container-luxury section-y grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-sm border border-border bg-card p-8">
          <Image
            src="/images/kaobak-logo-white.png"
            alt="Kaobak"
            width={160}
            height={160}
            className="mb-10 h-28 w-auto object-contain"
          />
          <div className="grid gap-6 text-muted-foreground">
            <p className="flex gap-4">
              <Mail className="size-5 text-primary" />
              {contact.email}
            </p>
            <p className="flex gap-4">
              <Phone className="size-5 text-primary" />
              +91 {contact.phone}
            </p>
            <p className="flex gap-4">
              <MapPin className="size-5 shrink-0 text-primary" />
              <span>{contact.address.join(", ")}</span>
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href={`https://wa.me/91${contact.phone}`}>WhatsApp</a>
            </Button>
            <Button asChild variant="outline">
              <a href={contact.mapUrl} target="_blank" rel="noreferrer">
                Open Google Maps
              </a>
            </Button>
          </div>
        </div>
        <div className="rounded-sm border border-border bg-secondary p-8">
          <h2 className="font-display text-3xl">Send a message.</h2>
          <div className="mt-8">
            <InquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
}
