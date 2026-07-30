"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="container-px mx-auto max-w-7xl pb-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-xl2 bg-navy-900 px-8 py-16 text-center md:px-16"
      >
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/20 blur-[100px]" />
        <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-navy-500/30 blur-[100px]" />
        <h2 className="relative font-display text-3xl font-bold text-white md:text-4xl">
          Need a Reliable Logistics Partner?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-navy-300">
          Tell us your route, volume, and timeline — we'll put together a quote within one business day.
        </p>
        <div className="relative mt-8 flex justify-center">
          <Button href="/contact" size="lg">
            Request Free Quote
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
