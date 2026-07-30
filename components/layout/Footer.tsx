import Link from "next/link";
import { Truck, MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { SITE, NAV_LINKS, FOOTER_SERVICE_LINKS } from "@/constants/site";
import { NewsletterForm } from "@/components/sections/Newsletter";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
                <Truck className="h-5 w-5 text-white" />
              </span>
              <span className="font-display text-lg font-bold text-white">
                {SITE.shortName}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-300">
              {SITE.description}
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Linkedin, href: SITE.social.linkedin, label: "LinkedIn" },
                { icon: Twitter, href: SITE.social.twitter, label: "Twitter" },
                { icon: Facebook, href: SITE.social.facebook, label: "Facebook" },
                { icon: Instagram, href: SITE.social.instagram, label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-700 text-navy-300 transition-colors hover:border-orange-500 hover:text-orange-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-300 transition-colors hover:text-orange-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-navy-300 transition-colors hover:text-orange-400"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-300 transition-colors hover:text-orange-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Stay Updated
            </h3>
            <p className="mt-4 text-sm text-navy-300">
              Get network updates and capacity alerts in your inbox, monthly.
            </p>
            <NewsletterForm />

            <ul className="mt-6 space-y-3 text-sm text-navy-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                {SITE.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-orange-400" />
                <a href={`tel:${SITE.phoneHref}`} className="hover:text-orange-400">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-orange-400" />
                <a href={`mailto:${SITE.email}`} className="hover:text-orange-400">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 py-6 text-xs text-navy-400 md:flex-row">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p>Registered logistics operator · India</p>
        </div>
      </div>
    </footer>
  );
}
