import {
  Truck,
  Plane,
  Ship,
  Warehouse,
  Network,
  Workflow,
} from "lucide-react";
import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    slug: "road-transport",
    title: "Road Transport",
    shortDescription:
      "Full truckload and part-load freight across India's national and state highway network.",
    overview:
      "Our road transport fleet covers every major industrial corridor in India, from full-truckload dedicated runs to shared part-load consignments. Every vehicle is GPS-tracked and every driver is trained on secure-handling protocols, so you always know where your shipment is and when it will arrive.",
    icon: Truck,
    features: [
      "Full truckload (FTL) and part-load (PTL) options",
      "GPS-enabled fleet with live location sharing",
      "Temperature-controlled vehicles for sensitive cargo",
      "Dedicated route planning for time-critical loads",
      "Proof-of-delivery captured digitally at drop-off",
    ],
    benefits: [
      "Lower cost per shipment on shared-load routes",
      "Predictable transit windows across 500+ pin codes",
      "Reduced damage through standardised loading protocols",
    ],
    faqs: [
      {
        question: "What is the difference between FTL and PTL?",
        answer:
          "FTL reserves an entire truck for one consignment and suits large, time-sensitive loads. PTL shares truck space with other shipments, which lowers cost for smaller volumes.",
      },
      {
        question: "Can I track a road shipment in real time?",
        answer:
          "Yes. Every FTL vehicle and most PTL routes carry GPS trackers, and you can follow progress from the Tracking page using your shipment ID.",
      },
      {
        question: "Do you handle fragile or high-value cargo?",
        answer:
          "Yes, we offer reinforced packaging support, insured transit, and dedicated FTL movement for fragile or high-value goods on request.",
      },
    ],
  },
  {
    slug: "air-freight",
    title: "Air Freight",
    shortDescription:
      "Time-critical domestic and international air cargo with priority handling.",
    overview:
      "When speed matters more than cost, our air freight network moves cargo through major Indian airports and onward to international hubs. We manage customs documentation, airport handling, and last-mile pickup so your shipment moves without friction from origin to destination.",
    icon: Plane,
    features: [
      "Next-flight-out options for urgent shipments",
      "Consolidated and dedicated cargo bookings",
      "Customs documentation and clearance support",
      "Airport-to-door and door-to-door service levels",
      "Priority handling for perishables and pharma",
    ],
    benefits: [
      "Fastest available transit for time-sensitive goods",
      "Predictable customs clearance through experienced brokers",
      "Nationwide airport coverage with onward road linkage",
    ],
    faqs: [
      {
        question: "How fast is domestic air freight?",
        answer:
          "Most metro-to-metro shipments are delivered within 24–48 hours of pickup, depending on flight availability and customs processing for international legs.",
      },
      {
        question: "Do you handle international shipments?",
        answer:
          "Yes, we manage export documentation, customs clearance, and freight forwarding for both import and export air cargo.",
      },
      {
        question: "Is there a weight or size limit?",
        answer:
          "Air freight is well-suited to shipments under 500kg; larger volumes are quoted individually based on aircraft and route availability.",
      },
    ],
  },
  {
    slug: "ocean-freight",
    title: "Ocean Freight",
    shortDescription:
      "Cost-efficient FCL and LCL ocean freight for high-volume, non-urgent cargo.",
    overview:
      "Our ocean freight desk arranges full-container-load and less-than-container-load bookings through India's major ports, coordinating with shipping lines, port agents, and customs house agents to keep large-volume cargo moving predictably.",
    icon: Ship,
    features: [
      "FCL and LCL container booking",
      "Port-to-port and door-to-door service",
      "Customs house agent coordination",
      "Container tracking and vessel schedule updates",
      "Bonded warehousing at major port cities",
    ],
    benefits: [
      "Lowest per-unit cost for high-volume cargo",
      "Established relationships across major shipping lines",
      "Reduced dwell time through proactive documentation",
    ],
    faqs: [
      {
        question: "What is the difference between FCL and LCL?",
        answer:
          "FCL books an entire container for one shipper, while LCL shares container space with other shippers' cargo, which reduces cost for smaller volumes.",
      },
      {
        question: "Which ports do you operate through?",
        answer:
          "We route cargo through Nhava Sheva (JNPT), Mundra, Chennai, and Kolkata, with onward road or rail linkage to inland destinations.",
      },
      {
        question: "How far in advance should I book?",
        answer:
          "We recommend booking 2–3 weeks ahead of the intended sailing date to secure space, particularly during peak season.",
      },
    ],
  },
  {
    slug: "warehousing",
    title: "Warehousing",
    shortDescription:
      "Secure, technology-enabled storage with inventory visibility across our facility network.",
    overview:
      "Our warehousing facilities combine secure storage with real-time inventory visibility, so stored goods are never a black box. Racking, climate control, and access-controlled zones are configured per client requirement, with barcode-driven inbound and outbound processing.",
    icon: Warehouse,
    features: [
      "Barcode-driven inbound and outbound processing",
      "Climate-controlled and ambient storage zones",
      "24/7 CCTV monitoring and access control",
      "Cycle counting and inventory reconciliation",
      "Pick-pack-ship fulfilment for e-commerce clients",
    ],
    benefits: [
      "Reduced carrying cost through flexible space allocation",
      "Real-time stock visibility for better planning",
      "Faster order fulfilment through co-located dispatch",
    ],
    faqs: [
      {
        question: "Can I get real-time inventory visibility?",
        answer:
          "Yes, stock levels are updated as goods move in and out, and reporting can be shared on a schedule that fits your operations.",
      },
      {
        question: "Do you offer short-term storage?",
        answer:
          "Yes, we support both short-term seasonal storage and long-term dedicated space, priced by pallet position or square footage.",
      },
      {
        question: "Is climate-controlled storage available?",
        answer:
          "Yes, select facilities offer temperature and humidity-controlled zones suited to pharmaceuticals, food, and electronics.",
      },
    ],
  },
  {
    slug: "distribution",
    title: "Distribution",
    shortDescription:
      "Last-mile and regional distribution networks that get goods to their final destination.",
    overview:
      "Our distribution network covers metro, tier-2, and tier-3 destinations across India, combining regional hubs with a last-mile delivery fleet to close the gap between warehouse and end customer efficiently.",
    icon: Network,
    features: [
      "Regional hub-and-spoke distribution model",
      "Last-mile delivery fleet including two-wheelers",
      "Cash-on-delivery collection and reconciliation",
      "Failed-delivery re-attempt management",
      "Delivery proof captured with geo-tagged photos",
    ],
    benefits: [
      "Wider reach into tier-2 and tier-3 markets",
      "Higher first-attempt delivery success rates",
      "Lower last-mile cost through route optimisation",
    ],
    faqs: [
      {
        question: "Do you cover rural and tier-3 destinations?",
        answer:
          "Yes, our hub-and-spoke network extends into tier-2 and tier-3 towns through regional distribution partners.",
      },
      {
        question: "Can you collect cash on delivery?",
        answer:
          "Yes, COD collection and reconciliation is available and settled on a weekly cycle by default.",
      },
      {
        question: "What happens on a failed delivery attempt?",
        answer:
          "Failed attempts are automatically scheduled for re-delivery, and you receive a notification with the reason and next attempt date.",
      },
    ],
  },
  {
    slug: "supply-chain-management",
    title: "Supply Chain Management",
    shortDescription:
      "End-to-end supply chain design and execution across procurement, transport, and delivery.",
    overview:
      "Beyond single-mode transport, our supply chain management practice designs and operates the full flow of goods for enterprise clients — from procurement logistics through warehousing to final delivery — with a single point of accountability.",
    icon: Workflow,
    features: [
      "Network design and route optimisation",
      "Multi-modal transport orchestration (road, air, ocean)",
      "Vendor and carrier management",
      "Demand-driven inventory planning",
      "Dedicated account management and reporting",
    ],
    benefits: [
      "Single point of accountability across the full supply chain",
      "Lower total logistics cost through network optimisation",
      "Better forecasting through consolidated data visibility",
    ],
    faqs: [
      {
        question: "Is this suited to smaller businesses?",
        answer:
          "Supply chain management engagements typically suit businesses moving consistent volume across multiple modes, but we scope engagements individually.",
      },
      {
        question: "How is this different from booking individual shipments?",
        answer:
          "Instead of managing each shipment separately, we take ownership of the network design and day-to-day execution, reporting on cost and performance as a whole.",
      },
      {
        question: "Do you provide dedicated account management?",
        answer:
          "Yes, every supply chain management client is assigned a dedicated account manager and a regular performance review cadence.",
      },
    ],
  },
];

export const HOME_SERVICES = [
  { slug: "road-transport", title: "Road Freight" },
  { slug: "air-freight", title: "Air Freight" },
  { slug: "warehousing", title: "Warehousing" },
  { slug: "distribution", title: "Express Delivery" },
  { slug: "supply-chain-management", title: "Supply Chain Solutions" },
  { slug: "distribution", title: "Last Mile Delivery" },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}
