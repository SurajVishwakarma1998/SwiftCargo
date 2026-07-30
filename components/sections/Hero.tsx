"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MapPinned, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pb-24 pt-40 md:pb-32 md:pt-48">
      {/* Backdrop: layered gradients + route-line motif standing in for photography */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="absolute -right-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-orange-500/20 blur-[120px]" />
        <div className="absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-navy-500/30 blur-[110px]" />
        <div className="route-line absolute inset-x-0 bottom-24 h-[2px] opacity-40" />
      </div>

      <div className="container-px mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            Pan-India Logistics Network
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Reliable Logistics Solutions Across India
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-navy-200"
          >
            We help businesses transport goods safely, quickly, and efficiently
            through road, air, and warehousing solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Button href="/contact" size="lg">
              Get Quote
            </Button>
            <Button href="/tracking" variant="outline-light" size="lg">
              Track Shipment
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-4"
          >
            {[
              { icon: ShieldCheck, label: "Insured Shipments" },
              { icon: MapPinned, label: "500+ Pin Codes" },
              { icon: Clock3, label: "24/7 Dispatch" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-navy-300">
                <Icon className="h-4 w-4 text-orange-400" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-xl2 border border-white/10 bg-gradient-to-b from-navy-800 to-navy-900 shadow-lift" />
          <div className="absolute inset-6 flex flex-col justify-between rounded-xl border border-white/10 bg-navy-950/60 p-6 backdrop-blur">
            <div className="flex items-center justify-between text-xs text-navy-400">
              <span>Live Shipment</span>
              <span className="flex items-center gap-1.5 text-orange-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400" />
                In Transit
              </span>
            </div>
            <div>
              <p className="text-xs text-navy-400">Route</p>
              <p className="mt-1 text-base font-semibold text-white">
                Bhiwandi → Bengaluru
              </p>
              <div className="route-line mt-4 h-[2px] w-full opacity-60" />
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs text-navy-300">
              <div>
                <p className="text-navy-500">Shipment ID</p>
                <p className="mt-1 font-medium text-white">SC784512369IN</p>
              </div>
              <div>
                <p className="text-navy-500">ETA</p>
                <p className="mt-1 font-medium text-white">2 Aug, 6:00 PM</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
