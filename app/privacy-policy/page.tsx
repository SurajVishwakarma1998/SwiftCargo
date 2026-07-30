import type { Metadata } from "next";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Read how ${SITE.name} collects, uses, and protects your information.`,
};

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly, such as your name, company, email, phone number, and shipment details when you request a quote or submit an inquiry. We also collect limited technical data (like browser type and pages visited) through standard analytics tools.",
  },
  {
    title: "How We Use Your Information",
    body: "Your information is used to respond to inquiries, prepare quotes, process shipments, and improve our services. We do not sell your personal information to third parties.",
  },
  {
    title: "Cookies",
    body: "We use cookies to remember your preferences and understand how visitors use our site. You can control cookie preferences through the banner shown on your first visit or through your browser settings.",
  },
  {
    title: "Data Sharing",
    body: "We may share information with trusted service providers who help us operate our business, such as email delivery and mapping services, under agreements that protect your data.",
  },
  {
    title: "Data Security",
    body: "We apply reasonable technical and organisational measures to protect your information from unauthorised access, alteration, or disclosure.",
  },
  {
    title: "Your Rights",
    body: "You may request access to, correction of, or deletion of your personal information by contacting us using the details below.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this policy from time to time. Material changes will be reflected with an updated revision date on this page.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="pb-24 pt-40">
      <div className="container-px mx-auto max-w-3xl">
        <span className="eyebrow">Legal</span>
        <h1 className="mt-3 text-4xl font-bold text-navy-900">Privacy Policy</h1>
        <p className="mt-3 text-sm text-navy-500">Last updated: 30 July 2026</p>

        <div className="mt-10 space-y-10">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-navy-900">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-navy-600">{section.body}</p>
            </div>
          ))}

          <div>
            <h2 className="text-lg font-semibold text-navy-900">Contact Us</h2>
            <p className="mt-3 text-sm leading-relaxed text-navy-600">
              For privacy-related questions, contact us at{" "}
              <a href={`mailto:${SITE.email}`} className="font-medium text-orange-600">
                {SITE.email}
              </a>{" "}
              or {SITE.address}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
