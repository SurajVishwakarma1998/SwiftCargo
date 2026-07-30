import {
  Factory,
  HeartPulse,
  ShoppingBag,
  Car,
  Laptop,
  HardHat,
  UtensilsCrossed,
} from "lucide-react";
import type { Industry } from "@/types";

export const INDUSTRIES: Industry[] = [
  {
    slug: "manufacturing",
    title: "Manufacturing",
    description:
      "Raw material inbound and finished goods outbound logistics tuned to production schedules.",
    icon: Factory,
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description:
      "Temperature-controlled, time-critical transport for pharmaceuticals and medical equipment.",
    icon: HeartPulse,
  },
  {
    slug: "retail",
    title: "Retail",
    description:
      "Store replenishment and distribution networks built for consistent shelf availability.",
    icon: ShoppingBag,
  },
  {
    slug: "automotive",
    title: "Automotive",
    description:
      "Just-in-time parts delivery and finished vehicle logistics for OEMs and dealers.",
    icon: Car,
  },
  {
    slug: "ecommerce",
    title: "E-commerce",
    description:
      "Pick-pack-ship fulfilment and last-mile delivery built for online order volumes.",
    icon: Laptop,
  },
  {
    slug: "construction",
    title: "Construction",
    description:
      "Heavy and oversized material movement coordinated around site timelines.",
    icon: HardHat,
  },
  {
    slug: "food-beverage",
    title: "Food & Beverage",
    description:
      "Cold-chain and ambient distribution that keeps perishables within specification.",
    icon: UtensilsCrossed,
  },
];
