import type { Metadata } from "next";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { SERVICES } from "@/constants/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Road, air, and ocean freight, warehousing, distribution, and supply chain management — explore SwiftCargo's full range of logistics services.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-950 pb-20 pt-40">
        <div className="container-px mx-auto max-w-4xl text-center">
          <span className="eyebrow justify-center">Our Services</span>
          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Every mode of freight, one accountable partner
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-300">
            Whether it's a single pallet or a multi-modal supply chain, our
            services are built to scale with your volume and timeline.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-24">
        <SectionTitle title="Choose the service that fits your shipment" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.slug}
              service={{ slug: service.slug, title: service.title, shortDescription: service.shortDescription }}
              index={i}
            />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
