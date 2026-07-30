import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Card } from "@/components/ui/Card";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SwiftCargo Logistics for a freight quote, tracking help, or general inquiries. We respond within one business day.",
};

const CONTACT_DETAILS = [
  { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phoneHref}` },
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MapPin, label: "Office", value: SITE.address },
  { icon: Clock, label: "Business Hours", value: SITE.hours },
];

export default function ContactPage() {
  return (
    <section className="bg-navy-50/60 pb-24 pt-40">
      <div className="container-px mx-auto max-w-4xl text-center">
        <span className="eyebrow justify-center">Get In Touch</span>
        <h1 className="mt-4 text-4xl font-bold text-navy-900 md:text-5xl">
          Let's plan your next shipment
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-navy-600">
          Share a few details about what you need moved, and our team will
          respond with a quote within one business day.
        </p>
      </div>

      <div className="container-px mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <Card className="space-y-6">
            {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-900">
                  <Icon className="h-5 w-5 text-orange-400" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-navy-500">
                    {label}
                  </p>
                  {href ? (
                    <a href={href} className="mt-1 block text-sm font-medium text-navy-900 hover:text-orange-600">
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-medium text-navy-900">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </Card>

          <Card className="overflow-hidden p-0">
            <iframe
              title="SwiftCargo office location"
              src="https://www.google.com/maps?q=Bhiwandi%2C+Thane%2C+Maharashtra&output=embed"
              width="100%"
              height="260"
              loading="lazy"
              className="border-0"
            />
          </Card>
        </div>

        <Card className="p-6 md:p-8">
          <h2 className="text-xl font-semibold text-navy-900">Send an Inquiry</h2>
          <p className="mt-1 text-sm text-navy-600">
            Fields marked required help us quote accurately on the first pass.
          </p>
          <div className="mt-6">
            <InquiryForm />
          </div>
        </Card>
      </div>
    </section>
  );
}
