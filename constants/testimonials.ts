import { Truck, PackageCheck, Building2, Smile } from "lucide-react";
import type { Stat, Testimonial, TeamMember, TimelineItem } from "@/types";

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rohan Mehta",
    position: "Operations Head",
    company: "Vertex Manufacturing",
    review:
      "SwiftCargo replaced three regional vendors for us. One dashboard, one point of contact, and our on-time delivery rate has held above 97% for over a year now.",
    initials: "RM",
  },
  {
    name: "Ananya Rao",
    position: "Supply Chain Manager",
    company: "Novapharm Labs",
    review:
      "Cold-chain compliance is non-negotiable for us. Their temperature-controlled fleet and documentation have never let us down across two years of shipments.",
    initials: "AR",
  },
  {
    name: "Karan Sethi",
    position: "Founder",
    company: "Urban Threads Retail",
    review:
      "As a growing D2C brand, warehousing and last-mile used to eat our week. SwiftCargo's fulfilment team now handles it end to end, and returns dropped noticeably.",
    initials: "KS",
  },
  {
    name: "Priya Nair",
    position: "Logistics Director",
    company: "Coastline Foods",
    review:
      "Their route planning cut our regional distribution costs by double digits in the first quarter, without any drop in delivery consistency.",
    initials: "PN",
  },
];

export const STATS: Stat[] = [
  { label: "Years Experience", value: "10+", icon: Truck },
  { label: "Successful Deliveries", value: "5000+", icon: PackageCheck },
  { label: "Business Clients", value: "250+", icon: Building2 },
  { label: "Customer Satisfaction", value: "98%", icon: Smile },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2014",
    title: "Founded in Bhiwandi",
    description:
      "SwiftCargo began with a single truck route connecting Mumbai's industrial belt to regional distribution points.",
  },
  {
    year: "2017",
    title: "Warehousing network launched",
    description:
      "Opened our first dedicated warehousing facility, adding storage and fulfilment to our transport offering.",
  },
  {
    year: "2019",
    title: "Air and ocean freight added",
    description:
      "Expanded into air and ocean freight forwarding to serve clients with import and export requirements.",
  },
  {
    year: "2022",
    title: "Real-time tracking platform",
    description:
      "Rolled out GPS-based tracking across the fleet, giving clients live visibility into every shipment.",
  },
  {
    year: "2026",
    title: "Nationwide coverage",
    description:
      "Grew to 500+ serviceable pin codes with a network of regional hubs across India.",
  },
];

export const TEAM: TeamMember[] = [
  {
    name: "Arvind Kapoor",
    role: "Founder & CEO",
    bio: "20 years in freight and distribution, built SwiftCargo from a single-truck operation to a nationwide network.",
    initials: "AK",
  },
  {
    name: "Meera Iyer",
    role: "COO",
    bio: "Oversees daily operations across the fleet, warehousing network, and regional distribution hubs.",
    initials: "MI",
  },
  {
    name: "Sanjay Bhatt",
    role: "Head of Technology",
    bio: "Leads the tracking platform and internal logistics systems that keep shipments visible end to end.",
    initials: "SB",
  },
  {
    name: "Divya Menon",
    role: "Head of Client Success",
    bio: "Manages key accounts and onboarding, making sure every client has a dedicated point of contact.",
    initials: "DM",
  },
];
