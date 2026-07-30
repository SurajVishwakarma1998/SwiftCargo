import { z } from "zod";

export const inquiryFormSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  company: z.string().min(2, "Enter your company name"),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .max(15, "Enter a valid phone number"),
  service: z.string().min(1, "Select a service"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

export type InquiryFormValues = z.infer<typeof inquiryFormSchema>;

export const trackingFormSchema = z.object({
  trackingNumber: z
    .string()
    .min(6, "Enter a valid tracking number")
    .max(20, "Enter a valid tracking number"),
});

export type TrackingFormValues = z.infer<typeof trackingFormSchema>;
