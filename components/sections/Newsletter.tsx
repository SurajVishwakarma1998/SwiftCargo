"use client";

import * as React from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Replace with a real subscription endpoint (e.g. Resend Audiences).
    setSubmitted(true);
    setEmail("");
  }

  if (submitted) {
    return (
      <p className="mt-4 flex items-center gap-2 text-sm text-orange-400">
        <Check className="h-4 w-4" /> You're subscribed. Thank you.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex max-w-xs gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="h-11 w-full rounded-lg border border-navy-700 bg-navy-900 px-4 text-sm text-white outline-none placeholder:text-navy-500 focus:border-orange-500"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-white transition-colors hover:bg-orange-600"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
