"use client";

import { motion } from "framer-motion";
import {
  Factory,
  HeartPulse,
  ShoppingBag,
  Car,
  Laptop,
  HardHat,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

// Icons are resolved here from a serializable slug rather than passed as a
// prop, since function values (like component references) can't cross the
// Server Component -> Client Component boundary.
const INDUSTRY_ICONS: Record<string, LucideIcon> = {
  manufacturing: Factory,
  healthcare: HeartPulse,
  retail: ShoppingBag,
  automotive: Car,
  ecommerce: Laptop,
  construction: HardHat,
  "food-beverage": UtensilsCrossed,
};

export interface IndustryCardData {
  slug: string;
  title: string;
  description: string;
}

export function IndustryCard({ industry, index = 0 }: { industry: IndustryCardData; index?: number }) {
  const Icon = INDUSTRY_ICONS[industry.slug] ?? Factory;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-xl2 border border-navy-100 bg-white p-7 transition-colors hover:border-navy-900"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 text-orange-600 transition-colors group-hover:bg-navy-900 group-hover:text-orange-400">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-base font-semibold text-navy-900">{industry.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-600">{industry.description}</p>
    </motion.div>
  );
}
