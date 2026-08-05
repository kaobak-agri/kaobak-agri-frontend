"use client";

import { useEffect, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function InquiryForm({ label = "Send inquiry" }: { label?: string }) {
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const product = new URLSearchParams(window.location.search).get("product");
    if (product) setMessage(`I am interested in ${product}.`);
  }, []);

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <Input required placeholder="Your name" aria-label="Your name" />
      <Input required type="email" placeholder="Email address" aria-label="Email address" />
      <Input placeholder="Phone or WhatsApp" aria-label="Phone or WhatsApp" />
      <Textarea
        required
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Tell us what you are looking for"
        aria-label="Message"
      />
      <Button type="submit">
        <Send data-icon="inline-start" />
        {sent ? "Inquiry noted" : label}
      </Button>
    </form>
  );
}
