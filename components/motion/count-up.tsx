"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";

function parseMetric(value: string) {
  const numeric = Number(value.replace(/[^\d.]/g, ""));
  const prefix = value.trim().startsWith("₹") ? "₹" : "";
  const suffix = value.replace(/[0-9.,₹]/g, "");
  return { numeric: Number.isFinite(numeric) ? numeric : 0, prefix, suffix };
}

export function CountUp({ value }: { value: string }) {
  const { numeric, prefix, suffix } = useMemo(() => parseMetric(value), [value]);
  const motionValue = useMotionValue(numeric);
  const rounded = useTransform(motionValue, (latest) =>
    `${prefix}${Math.round(latest).toLocaleString("en-IN")}${suffix}`
  );
  const finalDisplay = `${prefix}${numeric.toLocaleString("en-IN")}${suffix}`;
  const [display, setDisplay] = useState(finalDisplay);
  const [animating, setAnimating] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    return rounded.on("change", setDisplay);
  }, [rounded]);

  useEffect(() => {
    if (!inView || reduceMotion || hasAnimated.current) return;
    hasAnimated.current = true;
    motionValue.set(0);
    setDisplay(`${prefix}0${suffix}`);
    setAnimating(true);
    const controls = animate(motionValue, numeric, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1]
    });
    return () => controls.stop();
  }, [inView, motionValue, numeric, prefix, reduceMotion, suffix]);

  return (
    <span ref={ref} className="relative inline-grid">
      <span className={animating ? "invisible" : undefined}>{finalDisplay}</span>
      {animating ? (
        <motion.span className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {display}
        </motion.span>
      ) : null}
    </span>
  );
}
