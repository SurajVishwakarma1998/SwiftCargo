import type { Metadata } from "next";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { CTASection } from "@/components/sections/CTASection";
import { INDUSTRIES } from "@/constants/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "SwiftCargo serves manufacturing, healthcare, retail, automotive, e-commerce, construction, and food & beverage with tailored logistics solutions.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-navy-950 pb-20 pt-40">
        <div className="container-px mx-auto max-w-4xl text-center">
          <span className="eyebrow justify-center">Industries We Serve</span>
          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Logistics that understands your sector
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-300">
            Every industry moves freight differently. Our teams build routes,
            handling protocols, and SLAs around how your sector actually
            operates.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-24">
        <SectionTitle title="Sectors we support nationwide" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, i) => (
            <IndustryCard
              key={industry.slug}
              industry={{ slug: industry.slug, title: industry.title, description: industry.description }}
              index={i}
            />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
