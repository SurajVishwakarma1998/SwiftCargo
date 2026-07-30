"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Search, Package, MapPin, Flag, CalendarClock, CheckCircle2, Circle } from "lucide-react";
import { findShipment } from "@/lib/tracking-data";
import type { Shipment } from "@/types";
import { Input } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function TrackingCard() {
  const [value, setValue] = React.useState("");
  const [shipment, setShipment] = React.useState<Shipment | null>(null);
  const [touched, setTouched] = React.useState(false);

  function handleTrack(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    setShipment(findShipment(value || "SC784512369IN"));
  }

  return (
    <div className="mx-auto max-w-3xl">
      <Card className="p-6 md:p-8">
        <form onSubmit={handleTrack} className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-300" />
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter tracking number e.g. SC784512369IN"
              className="pl-11"
            />
          </div>
          <Button type="submit" size="lg">
            Track Shipment
          </Button>
        </form>
        {touched && !value && (
          <p className="mt-3 text-xs text-navy-500">
            Showing a demo shipment — enter your real tracking number for live status.
          </p>
        )}
      </Card>

      {shipment && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8"
        >
          <Card className="p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-navy-100 pb-6">
              <div>
                <p className="text-xs text-navy-500">Shipment ID</p>
                <p className="mt-1 font-display text-xl font-semibold text-navy-900">
                  {shipment.id}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
                <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
                {shipment.status}
              </span>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Detail icon={MapPin} label="Pickup" value={shipment.pickup} />
              <Detail icon={Flag} label="Destination" value={shipment.destination} />
              <Detail icon={CalendarClock} label="Estimated Delivery" value={shipment.estimatedDelivery} />
              <Detail icon={Package} label="Service" value={shipment.service} />
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-500">
                Shipment Timeline
              </h3>
              <ol className="mt-5 space-y-6 border-l border-navy-100 pl-6">
                {shipment.events.map((event) => (
                  <li key={event.status} className="relative">
                    <span className="absolute -left-[29px] top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-white">
                      {event.completed ? (
                        <CheckCircle2 className="h-5 w-5 text-orange-500" />
                      ) : (
                        <Circle className="h-5 w-5 text-navy-200" />
                      )}
                    </span>
                    <p
                      className={
                        event.completed
                          ? "text-sm font-semibold text-navy-900"
                          : "text-sm font-semibold text-navy-400"
                      }
                    >
                      {event.status}
                    </p>
                    <p className="mt-0.5 text-xs text-navy-500">
                      {event.location} · {event.timestamp}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Card>
        </motion.div>
      )}
    </div>
  );
}

function Detail({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-xs text-navy-500">
        <Icon className="h-4 w-4 text-orange-500" />
        {label}
      </div>
      <p className="mt-1.5 text-sm font-medium text-navy-900">{value}</p>
    </div>
  );
}
