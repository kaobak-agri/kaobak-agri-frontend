import { impactMetrics } from "@/lib/data";
import { CountUp } from "@/components/motion/count-up";

export function StatRow() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
      {impactMetrics.map((metric) => (
        <div key={metric.label} className="luxury-card luxury-card-hover gold-line p-4 pt-6 md:p-7 md:pt-8">
          <p className="font-display text-3xl text-primary md:text-4xl">
            <CountUp value={metric.value} />
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  );
}
