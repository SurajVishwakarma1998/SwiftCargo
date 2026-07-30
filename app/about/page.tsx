import type { Metadata } from "next";
import { Target, Eye, HeartHandshake, ShieldCheck, Award, Users2 } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Timeline } from "@/components/shared/Timeline";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/sections/CTASection";
import { TIMELINE, TEAM } from "@/constants/testimonials";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SwiftCargo Logistics has moved freight across India for over a decade. Learn our story, mission, values, and the team behind our network.",
};

const VALUES = [
  { icon: ShieldCheck, title: "Reliability", description: "We commit to timelines we can actually keep, every time." },
  { icon: HeartHandshake, title: "Partnership", description: "We treat every client relationship as long-term, not transactional." },
  { icon: Award, title: "Accountability", description: "One point of contact owns your shipment from pickup to delivery." },
];

const CERTIFICATIONS = [
  "ISO 9001:2015 Certified",
  "GST Registered Transport Operator",
  "IATA Accredited Cargo Agent",
  "Member, All India Transporters Welfare Association",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-950 pb-20 pt-40">
        <div className="container-px mx-auto max-w-4xl text-center">
          <span className="eyebrow justify-center">Our Story</span>
          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            A decade of moving India's businesses forward
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-300">
            SwiftCargo started with one truck and a simple idea: logistics
            should be predictable. Today we run a nationwide network built on
            that same idea.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-8">
            <Target className="h-7 w-7 text-orange-500" />
            <h2 className="mt-4 text-xl font-semibold text-navy-900">Our Mission</h2>
            <p className="mt-3 text-sm leading-relaxed text-navy-600">
              To give every business, regardless of size, access to logistics
              infrastructure that's reliable, transparent, and built to scale
              with them.
            </p>
          </Card>
          <Card className="p-8">
            <Eye className="h-7 w-7 text-orange-500" />
            <h2 className="mt-4 text-xl font-semibold text-navy-900">Our Vision</h2>
            <p className="mt-3 text-sm leading-relaxed text-navy-600">
              To be the logistics partner Indian businesses default to when
              they need goods moved without worry — from the first mile to the
              last.
            </p>
          </Card>
        </div>

        <div className="mt-12">
          <SectionTitle eyebrow="Core Values" title="What guides how we operate" />
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-xl2 border border-navy-100 p-6">
                <Icon className="h-6 w-6 text-orange-500" />
                <h3 className="mt-3 font-semibold text-navy-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-50/60 py-24">
        <div className="container-px mx-auto max-w-4xl">
          <SectionTitle eyebrow="Milestones" title="Our journey so far" align="center" className="mx-auto" />
          <div className="mt-12">
            <Timeline items={TIMELINE} />
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-24">
        <SectionTitle eyebrow="Leadership" title="The team behind the network" align="center" className="mx-auto" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <Card key={member.name} className="text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 text-lg font-semibold text-white">
                {member.initials}
              </span>
              <h3 className="mt-4 font-semibold text-navy-900">{member.name}</h3>
              <p className="text-xs font-medium uppercase tracking-wide text-orange-600">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy-600">{member.bio}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-navy-50/60 py-24">
        <div className="container-px mx-auto max-w-5xl">
          <SectionTitle
            eyebrow="Certifications & Achievements"
            title="Recognised standards, verified operations"
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-3 rounded-xl border border-navy-100 bg-white px-5 py-4"
              >
                <Users2 className="h-5 w-5 shrink-0 text-orange-500" />
                <span className="text-sm font-medium text-navy-800">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
