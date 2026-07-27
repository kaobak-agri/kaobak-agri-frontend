"use client";

import india from "@svg-maps/india";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const northeastStateIds = new Set(["ar", "as", "mn", "ml", "mz", "nl", "sk", "tr"]);

type IndiaLocation = {
  id: string;
  name: string;
  path: string;
};

const sourcingPoints = [
  { name: "Nagaland", focus: "Coffee and spices" },
  { name: "Assam", focus: "Coffee and regional sourcing" },
  { name: "Meghalaya", focus: "Spices and producer clusters" }
];

export function IndiaSourcingMap() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-[#eef0e7]">
      <div className="flex flex-col gap-3 border-b border-border px-6 py-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="kicker">Sourcing footprint</p>
          <h2 className="mt-2 font-display text-3xl leading-none sm:text-4xl">
            India, with the Northeast highlighted
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          <span className="size-2.5 rounded-full bg-[#496253]" />
          Northeast India
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
        <div className="relative min-h-[420px] p-5 sm:min-h-[520px] sm:p-8">
          <motion.svg
            viewBox={india.viewBox}
            role="img"
            aria-labelledby="india-map-title india-map-description"
            className="h-full w-full drop-shadow-[0_20px_30px_rgba(38,53,43,0.12)]"
            initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.98 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <title id="india-map-title">Map of India with Northeast India highlighted</title>
            <desc id="india-map-description">
              India state boundaries with Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram,
              Nagaland, Sikkim, and Tripura highlighted. Nagaland is emphasized as Kaobak's home state.
            </desc>

            {india.locations.map((location: IndiaLocation) => {
              const isNortheast = northeastStateIds.has(location.id);
              const isNagaland = location.id === "nl";

              return (
                <path
                  key={location.id}
                  d={location.path}
                  aria-label={`${location.name}${isNagaland ? " — Kaobak home state" : isNortheast ? " — Northeast India" : ""}`}
                  vectorEffect="non-scaling-stroke"
                  className={cn(
                    "stroke-[#647268] stroke-[1.15] transition duration-300",
                    isNagaland
                      ? "fill-[#b38347] hover:fill-[#c49354]"
                      : isNortheast
                        ? "fill-[#496253] hover:fill-[#5b7565]"
                        : "fill-[#f8f3e9] hover:fill-[#ece6da]"
                  )}
                />
              );
            })}
          </motion.svg>

          <div className="pointer-events-none absolute bottom-6 left-6 rounded-lg border border-border bg-card/90 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground shadow-luxury backdrop-blur sm:bottom-8 sm:left-8">
            <span className="mr-2 inline-block size-2 rounded-full bg-[#b38347]" />
            Nagaland · Kaobak home
          </div>
        </div>

        <div className="grid content-center gap-3 border-t border-border bg-card p-5 lg:border-l lg:border-t-0">
          <div className="mb-2 rounded-xl bg-accent p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Highlighted region
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Eight Northeast states, connected to the rest of India through the eastern corridor.
            </p>
          </div>
          {sourcingPoints.map((point) => (
            <div
              key={point.name}
              className="group flex gap-3 rounded-xl border border-transparent p-3 transition duration-300 hover:border-primary/25 hover:bg-accent"
            >
              <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <MapPin className="size-4" />
              </span>
              <div>
                <p className="font-display text-xl leading-none">{point.name}</p>
                <p className="mt-1.5 text-xs leading-5 text-muted-foreground">{point.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="border-t border-border px-6 py-3 text-[10px] leading-4 text-muted-foreground">
        Map data by MapSVG, distributed through @svg-maps/india under CC BY 4.0.
      </p>
    </div>
  );
}
