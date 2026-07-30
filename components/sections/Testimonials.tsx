import { TESTIMONIALS } from "@/constants/testimonials";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { SectionTitle } from "@/components/shared/SectionTitle";

export function Testimonials() {
  return (
    <section className="container-px mx-auto max-w-7xl py-24">
      <SectionTitle
        eyebrow="Client Stories"
        title="Trusted by teams who can't afford supply chain surprises"
        align="center"
        className="mx-auto"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard key={t.name} testimonial={t} index={i} />
        ))}
      </div>
    </section>
  );
}
