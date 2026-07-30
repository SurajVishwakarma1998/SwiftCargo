import type { Metadata } from "next";
import { TrackingCard } from "@/components/tracking/TrackingCard";

export const metadata: Metadata = {
  title: "Track Shipment",
  description: "Track your SwiftCargo shipment in real time using your tracking number.",
};

export default function TrackingPage() {
  return (
    <section className="bg-navy-50/60 pb-24 pt-40">
      <div className="container-px mx-auto max-w-4xl text-center">
        <span className="eyebrow justify-center">Shipment Tracking</span>
        <h1 className="mt-4 text-4xl font-bold text-navy-900 md:text-5xl">
          Track your shipment
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-navy-600">
          Enter your tracking number below to see live status and delivery
          timeline.
        </p>
      </div>

      <div className="container-px mx-auto mt-12">
        <TrackingCard />
      </div>
    </section>
  );
}
