import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, TrendingUp } from "lucide-react";
import { SERVICES, getServiceBySlug } from "@/constants/services";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { FAQ } from "@/components/shared/FAQ";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <>
      <section className="bg-navy-950 pb-20 pt-40">
        <div className="container-px mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl2 bg-orange-500">
            <Icon className="h-7 w-7 text-white" />
          </div>
          <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">{service.title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-300">
            {service.shortDescription}
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" size="lg">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-4xl py-24">
        <SectionTitle title="Overview" />
        <p className="mt-4 text-base leading-relaxed text-navy-600">{service.overview}</p>
      </section>

      <section className="bg-navy-50/60 py-24">
        <div className="container-px mx-auto max-w-5xl grid gap-12 md:grid-cols-2">
          <div>
            <SectionTitle title="Features" />
            <ul className="mt-6 space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-navy-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle title="Benefits" />
            <ul className="mt-6 space-y-4">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm text-navy-700">
                  <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-3xl py-24">
        <SectionTitle title="Frequently Asked Questions" align="center" className="mx-auto" />
        <div className="mt-10">
          <FAQ items={service.faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
