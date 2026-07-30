import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Reliable Logistics Solutions Across India",
  description:
    "SwiftCargo Logistics moves goods safely and efficiently through road, air, ocean freight, and warehousing — with real-time tracking across 500+ pin codes.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUs />
      <IndustriesSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
