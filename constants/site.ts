import type { NavLink } from "@/types";

export const SITE = {
  name: "SwiftCargo Logistics",
  shortName: "SwiftCargo",
  tagline: "Delivering Trust. Moving Businesses Forward.",
  description:
    "SwiftCargo Logistics helps Indian businesses move goods safely, quickly, and efficiently through road, air, and warehousing solutions — backed by real-time tracking and a nationwide network.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.swiftcargo.com",
  phone: "+91 98765 43210",
  phoneHref: "+919876543210",
  email: "hello@swiftcargo.com",
  address: "Plot 14, Logistics Park, Bhiwandi, Thane, Maharashtra 421302",
  hours: "Mon – Sat: 9:00 AM – 7:00 PM",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919876543210",
  social: {
    linkedin: "https://linkedin.com/company/swiftcargo",
    twitter: "https://twitter.com/swiftcargo",
    facebook: "https://facebook.com/swiftcargo",
    instagram: "https://instagram.com/swiftcargo",
  },
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Tracking", href: "/tracking" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_SERVICE_LINKS: NavLink[] = [
  { label: "Road Freight", href: "/services/road-transport" },
  { label: "Air Freight", href: "/services/air-freight" },
  { label: "Ocean Freight", href: "/services/ocean-freight" },
  { label: "Warehousing", href: "/services/warehousing" },
  { label: "Distribution", href: "/services/distribution" },
  { label: "Supply Chain Management", href: "/services/supply-chain-management" },
];
