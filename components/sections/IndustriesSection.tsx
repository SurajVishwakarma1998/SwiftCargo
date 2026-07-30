import { INDUSTRIES } from "@/constants/industries";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { SectionTitle } from "@/components/shared/SectionTitle";

export function IndustriesSection() {
  const featured = INDUSTRIES.slice(0, 6);
  return (
    <section className="bg-navy-50/60 py-24">
      <div className="container-px mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Industries"
          title="Logistics tuned to how your industry actually moves"
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((industry, i) => (
            <IndustryCard
              key={industry.slug}
              industry={{ slug: industry.slug, title: industry.title, description: industry.description }}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
