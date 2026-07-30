"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Truck,
  Plane,
  Ship,
  Warehouse,
  Network,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

// Icons are resolved here from a serializable slug rather than passed as a
// prop, since function values (like component references) can't cross the
// Server Component -> Client Component boundary.
const SERVICE_ICONS: Record<string, LucideIcon> = {
  "road-transport": Truck,
  "air-freight": Plane,
  "ocean-freight": Ship,
  warehousing: Warehouse,
  distribution: Network,
  "supply-chain-management": Workflow,
};

export interface ServiceCardData {
  slug: string;
  title: string;
  shortDescription: string;
}

export function ServiceCard({ service, index = 0 }: { service: ServiceCardData; index?: number }) {
  const Icon = SERVICE_ICONS[service.slug] ?? Truck;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Link
        href={`/services/${service.slug}`}
        className="group flex h-full flex-col rounded-xl2 border border-navy-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-lift"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 transition-colors group-hover:bg-orange-500">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="mt-5 text-lg font-semibold text-navy-900">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
          {service.shortDescription}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600">
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    </motion.div>
  );
}
