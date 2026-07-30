import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  icon: LucideIcon;
  features: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export interface Industry {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  review: string;
  initials: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export type ShipmentStatus =
  | "Order Placed"
  | "Picked Up"
  | "In Transit"
  | "Out for Delivery"
  | "Delivered";

export interface ShipmentEvent {
  status: ShipmentStatus;
  location: string;
  timestamp: string;
  completed: boolean;
}

export interface Shipment {
  id: string;
  status: ShipmentStatus;
  pickup: string;
  destination: string;
  estimatedDelivery: string;
  weight: string;
  service: string;
  events: ShipmentEvent[];
}
