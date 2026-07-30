"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/types";

export function TestimonialCard({ testimonial, index = 0 }: { testimonial: Testimonial; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="flex h-full flex-col rounded-xl2 border border-navy-100 bg-white p-7 shadow-card"
    >
      <Quote className="h-7 w-7 text-orange-300" />
      <p className="mt-4 flex-1 text-sm leading-relaxed text-navy-700">
        {testimonial.review}
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-navy-100 pt-5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-white">
          {testimonial.initials}
        </span>
        <div>
          <p className="text-sm font-semibold text-navy-900">{testimonial.name}</p>
          <p className="text-xs text-navy-500">
            {testimonial.position}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
