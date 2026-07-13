import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { contact, navigation } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="container-luxury grid gap-14 py-16 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div className="flex flex-col gap-6">
          <Image
            src="/images/kaobak-logo-black.png"
            alt="Kaobak"
            width={150}
            height={150}
            className="h-24 w-auto object-contain"
          />
          <p className="max-w-sm text-sm leading-7 text-muted-foreground">
            Premium origin commerce for specialty coffee, wild forest honey,
            organic spices, luxury gifting, and export-grade products from
            Northeast India.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-primary">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <p className="kicker">Stay updated</p>
          <div className="flex gap-2">
            <Input placeholder="you@email.com" aria-label="Email address" />
            <Button size="icon" aria-label="Subscribe">
              <ArrowRight data-icon="inline-start" />
            </Button>
          </div>
          <p className="text-sm leading-7 text-muted-foreground">
            {contact.address.join(", ")}
            <br />
            <a className="text-primary" href={`tel:+91${contact.phone}`}>
              +91 {contact.phone}
            </a>
          </p>
        </div>
      </div>
      <div className="container-luxury flex flex-col gap-3 border-t border-border py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Kaobak. All rights reserved.</p>
        <p>Privacy Policy · Terms & Conditions</p>
      </div>
    </footer>
  );
}
