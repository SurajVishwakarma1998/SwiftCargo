"use client";

import { motion } from "framer-motion";
import { Users, Radar, ShieldCheck, IndianRupee, Headset, Network } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";

const REASONS = [
  { icon: Users, title: "Professional Team", description: "Trained drivers, warehouse staff, and account managers who know freight." },
  { icon: Radar, title: "Real-time Tracking", description: "GPS-enabled visibility on every FTL shipment, from pickup to delivery." },
  { icon: ShieldCheck, title: "Secure Delivery", description: "Standardised handling protocols and insured transit as standard." },
  { icon: IndianRupee, title: "Affordable Pricing", description: "Transparent, volume-based pricing with no hidden surcharges." },
  { icon: Headset, title: "24/7 Support", description: "A dispatch and support desk that's reachable around the clock." },
  { icon: Network, title: "Nationwide Network", description: "Coverage across 500+ pin codes through regional hubs and partners." },
];

export function WhyChooseUs() {
  return (
    <section className="container-px mx-auto max-w-7xl py-24">
      <SectionTitle
        eyebrow="Why SwiftCargo"
        title="Built for businesses that can't afford delays"
        description="Every part of our network is designed around one goal: predictable, secure delivery you can plan your business around."
      />

      <div className="mt-12 grid gap-px overflow-hidden rounded-xl2 border border-navy-100 bg-navy-100 sm:grid-cols-2 lg:grid-cols-3">
        {REASONS.map(({ icon: Icon, title, description }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-white p-8"
          >
            <Icon className="h-6 w-6 text-orange-500" />
            <h3 className="mt-4 text-base font-semibold text-navy-900">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
