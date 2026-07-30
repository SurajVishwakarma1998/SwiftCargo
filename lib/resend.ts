import { Resend } from "resend";

// Lazily instantiated so the app can build without RESEND_API_KEY set,
// and only throws if an email actually needs to be sent without one.
export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is not set. Add it to your environment to enable the contact form email delivery."
    );
  }
  return new Resend(apiKey);
}
