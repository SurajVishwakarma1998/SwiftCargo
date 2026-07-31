# SwiftCargo Logistics — Website

Production-ready marketing website for SwiftCargo Logistics, built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. This README is a full walkthrough: what's implemented, how to run it, how a visitor moves through the site, and the complete folder structure.

---

## 1. Quick Start

```bash
npm install
cp .env.example .env.local   # fill in the values (see section 4)
npm run dev
```

Open **http://localhost:3000**.

```bash
npm run build   # production build
npm run start   # run the production build locally
```

> **Known issue to fix before deploying:** `components/cards/IndustryCard.tsx` currently receives a Lucide icon component as a prop from a Server Component, which breaks static prerendering of `/industries` at build time. Resolve the icon inside the client component (e.g. look it up from the industry slug) rather than passing the component reference across the server/client boundary.

---

## 2. What's Implemented

### Pages (8, as specified)
| Page | Route | Status |
|---|---|---|
| Home | `/` | ✅ Hero, animated stats, services grid, why-choose-us, industries, testimonials, CTA |
| About | `/about` | ✅ Story, mission/vision, core values, timeline, leadership team, certifications |
| Services (overview) | `/services` | ✅ Grid of all 6 services |
| Service detail | `/services/[slug]` | ✅ Hero, overview, features, benefits, FAQ, CTA — one page per service |
| Industries | `/industries` | ✅ Card grid, 7 industries |
| Tracking | `/tracking` | ✅ Input + demo shipment result with timeline |
| Contact | `/contact` | ✅ Company info, embedded map, validated inquiry form |
| Privacy Policy | `/privacy-policy` | ✅ Static legal content |
| 404 | `app/not-found.tsx` | ✅ Branded not-found page |

### Core features
- **Sticky navbar** — transparent over the hero, solid white on scroll, full mobile menu.
- **Contact form → email**: React Hook Form + Zod validation, submits to `/api/contact`, which sends the inquiry via **Resend** with `replyTo` set to the visitor's email, so your client can just hit reply.
- **Shipment tracking UI**: fully built demo experience (input → status → pickup/destination/ETA → event timeline). Backed by `lib/tracking-data.ts` — **not** a live carrier integration (see section 6).
- **SEO**: per-page metadata, OpenGraph + Twitter cards, `sitemap.ts`, `robots.ts`, Organization JSON-LD schema in `app/layout.tsx`.
- **Motion**: Framer Motion page-load and scroll-reveal animations, animated stat counters, hover states on cards/buttons.
- **Bonus UI**: floating WhatsApp button, back-to-top button, cookie consent banner, footer newsletter signup (UI only — not wired to an ESP), `loading.tsx` and `error.tsx` boundaries.
- **Design system**: navy/orange/white palette defined as Tailwind tokens (`tailwind.config.ts`), Sora (display) + Inter (body) via `next/font/google`.

### Not yet implemented (flagged so nothing is assumed done)
- Lead/data persistence beyond email (see the "data management" note in section 6).
- Real photography — visuals are CSS/gradient compositions, not stock photos.
- CMS wiring — content is in static TypeScript files under `/constants`.
- Live shipment tracking API — currently demo data.
- Newsletter — form UI exists, not connected to an email service.

---

## 3. User Flow

**A prospective customer:**
1. Lands on `/` → sees the hero promise ("Reliable Logistics Solutions Across India") and two clear CTAs: **Get Quote** and **Track Shipment**.
2. Scrolls through trust signals — stats, services, why-choose-us, industries, testimonials — each reinforcing credibility before asking for contact info.
3. Either:
   - Clicks a **service card** → lands on `/services/[slug]` → reads features/benefits/FAQ → clicks **Request a Quote** → `/contact`, or
   - Clicks **Get Quote** directly from the navbar/hero/CTA sections → `/contact`.
4. On `/contact`, fills the inquiry form (name, company, email, phone, service, message) → submits → sees a success toast → your client receives an email with all the details and can reply directly.

**An existing customer:**
1. Goes to `/tracking` (from navbar or hero).
2. Enters a tracking number → sees shipment status, pickup/destination/ETA, and a step-by-step delivery timeline.

**Either type of visitor**, at any point, can:
- Tap the **floating WhatsApp button** for an instant chat instead of the form.
- Use **Back to Top** on long pages.
- Read `/privacy-policy` (linked from the footer and the cookie banner).

---

## 4. Environment Variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Purpose | Required for |
|---|---|---|
| `RESEND_API_KEY` | Sends the contact-form email | `/contact` form to actually deliver |
| `CONTACT_TO_EMAIL` | Inbox that receives inquiries | `/contact` form |
| `NEXT_PUBLIC_SITE_URL` | Production domain | metadata, sitemap.xml, JSON-LD |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Country code + number, no `+` | WhatsApp floating button |

Without `RESEND_API_KEY`, the site still builds and runs — the contact form will show a friendly error on submit until the key is added.

---

## 5. Folder Structure

```
swiftcargo/
├── app/                          # Route segments (Next.js App Router)
│   ├── about/page.tsx             About page
│   ├── api/contact/route.ts       Resend email API route
│   ├── contact/page.tsx           Contact page
│   ├── industries/page.tsx        Industries page
│   ├── privacy-policy/page.tsx    Privacy policy
│   ├── services/
│   │   ├── page.tsx               Services overview (all 6)
│   │   └── [slug]/page.tsx        Dynamic service detail page
│   ├── tracking/page.tsx          Shipment tracking page
│   ├── error.tsx                  Route-level error boundary
│   ├── globals.css                Tailwind layers + design tokens
│   ├── layout.tsx                 Root layout: fonts, metadata, JSON-LD, global chrome
│   ├── loading.tsx                Route-level loading state
│   ├── not-found.tsx              Custom 404
│   ├── page.tsx                   Homepage
│   ├── robots.ts                  robots.txt generator
│   └── sitemap.ts                 sitemap.xml generator
│
├── components/
│   ├── cards/                     ServiceCard, IndustryCard, StatCard, TestimonialCard
│   ├── forms/                     InquiryForm (React Hook Form + Zod)
│   ├── layout/                    Navbar, Footer, WhatsAppButton, BackToTop, CookieConsent
│   ├── sections/                  Hero, StatsSection, ServicesSection, WhyChooseUs,
│   │                               IndustriesSection, Testimonials, CTASection, Newsletter
│   ├── shared/                    SectionTitle, FAQ (accordion), Timeline
│   ├── tracking/                  TrackingCard (input + result + event timeline)
│   └── ui/                        Button, Card, Field (Input/Textarea/Select/Label)
│
├── constants/                     Static content — this is your CMS until one is wired up
│   ├── industries.ts               7 industries
│   ├── services.ts                 6 services incl. full detail-page copy (features/benefits/FAQ)
│   ├── site.ts                     Site name, contact info, nav links
│   └── testimonials.ts             Testimonials, stats, timeline, team bios
│
├── lib/
│   ├── resend.ts                   Lazily-instantiated Resend client
│   ├── tracking-data.ts            Demo shipment lookup — replace with a real API
│   ├── utils.ts                    cn() class-merge helper
│   └── validations.ts              Zod schemas (inquiry form, tracking form)
│
├── types/index.ts                 Shared TypeScript interfaces (Service, Industry, Shipment, etc.)
├── public/                        Static assets (favicon, OG image — add real brand assets here)
│
├── .env.example                   Template for required environment variables
├── next.config.ts                 Image remote patterns, ESLint config
├── tailwind.config.ts             Navy/orange design tokens, animations
├── tsconfig.json
└── package.json
```

---

## 6. Notes for Production Handoff

- **Lead/data management**: contact-form submissions are currently *only* an email — nothing is stored in a database. Before relying on this for real business, add a leads table (Vercel Postgres/Supabase, or your existing SQL Server API) so submissions have a persistent record, status tracking, and search — see the deployment guide PDF for the two implementation options.
- **Images**: swap CSS/gradient placeholders for real photography via `next/image`. `next.config.ts` already allow-lists `images.unsplash.com` as an example remote pattern — add your CDN/domain there.
- **Tracking data**: `/tracking` uses demo data from `lib/tracking-data.ts`. Replace `findShipment()` with a real carrier/API integration.
- **Newsletter**: UI-only in `components/sections/Newsletter.tsx` — wire it to Resend Audiences or your ESP of choice.
- **shadcn/ui**: form/button primitives in `components/ui/` are hand-built following shadcn conventions (cva variants, Tailwind tokens) — no CLI scaffold needed, but run `npx shadcn@latest init` later if you want the full component library.
- **Favicon/OG image**: replace `public/favicon.ico` and `public/og-image.jpg` placeholders with real brand assets.

---

## 7. Tech Stack Reference

Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · Lucide React · React Hook Form · Zod · Resend · next/font · next/image · App Router Metadata API
