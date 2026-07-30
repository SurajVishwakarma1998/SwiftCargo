"use client";

import * as React from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Truck, PackageCheck, Building2, Smile, type LucideIcon } from "lucide-react";

// Icons are resolved here from a serializable label rather than passed as a
// prop, since function values (like component references) can't cross the
// Server Component -> Client Component boundary.
const STAT_ICONS: Record<string, LucideIcon> = {
  "Years Experience": Truck,
  "Successful Deliveries": PackageCheck,
  "Business Clients": Building2,
  "Customer Satisfaction": Smile,
};

export interface StatCardData {
  label: string;
  value: string;
}

function Counter({ value }: { value: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const numeric = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1200, bounce: 0 });
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (inView) motionValue.set(numeric);
  }, [inView, motionValue, numeric]);

  React.useEffect(() => {
    return spring.on("change", (v) => setDisplay(Math.round(v)));
  }, [spring]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function StatCard({ stat }: { stat: StatCardData }) {
  const Icon = STAT_ICONS[stat.label] ?? Truck;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-3 rounded-xl2 border border-white/10 bg-white/5 px-6 py-8 text-center backdrop-blur-sm"
    >
      <Icon className="h-7 w-7 text-orange-400" />
      <span className="font-display text-3xl font-bold text-white md:text-4xl">
        <Counter value={stat.value} />
      </span>
      <span className="text-sm text-navy-300">{stat.label}</span>
    </motion.div>
  );
}
