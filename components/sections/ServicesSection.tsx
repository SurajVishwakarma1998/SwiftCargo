import { SERVICES } from "@/constants/services";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/Button";

export function ServicesSection() {
  const featured = SERVICES.slice(0, 6);
  return (
    <section className="container-px mx-auto max-w-7xl py-24">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionTitle
          eyebrow="What We Do"
          title="End-to-end freight, warehousing, and distribution"
          description="From a single pallet to a dedicated fleet, our services scale with what your business needs to move."
        />
        <Button href="/services" variant="outline" className="shrink-0">
          View All Services
        </Button>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((service, i) => (
          <ServiceCard
            key={service.slug}
            service={{ slug: service.slug, title: service.title, shortDescription: service.shortDescription }}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
