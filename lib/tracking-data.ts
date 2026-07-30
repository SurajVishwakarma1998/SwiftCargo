import type { Shipment } from "@/types";

// Demo shipment data used by the Tracking page. Replace with a real
// carrier/API integration when connecting to live shipment data.
export const DEMO_SHIPMENT: Shipment = {
  id: "SC784512369IN",
  status: "In Transit",
  pickup: "Bhiwandi, Maharashtra",
  destination: "Whitefield, Bengaluru, Karnataka",
  estimatedDelivery: "2 Aug 2026, by 6:00 PM",
  weight: "480 kg",
  service: "Road Freight — Full Truckload",
  events: [
    {
      status: "Order Placed",
      location: "SwiftCargo Portal",
      timestamp: "28 Jul 2026, 10:12 AM",
      completed: true,
    },
    {
      status: "Picked Up",
      location: "Bhiwandi Hub, Maharashtra",
      timestamp: "28 Jul 2026, 4:45 PM",
      completed: true,
    },
    {
      status: "In Transit",
      location: "Solapur Transit Point, Maharashtra",
      timestamp: "29 Jul 2026, 11:30 PM",
      completed: true,
    },
    {
      status: "Out for Delivery",
      location: "Whitefield Hub, Bengaluru",
      timestamp: "Expected 2 Aug 2026, 9:00 AM",
      completed: false,
    },
    {
      status: "Delivered",
      location: "Whitefield, Bengaluru",
      timestamp: "Expected 2 Aug 2026, by 6:00 PM",
      completed: false,
    },
  ],
};

export function findShipment(trackingNumber: string): Shipment | null {
  // Demo lookup: any non-empty tracking number returns the demo shipment.
  if (!trackingNumber.trim()) return null;
  return { ...DEMO_SHIPMENT, id: trackingNumber.toUpperCase() };
}
