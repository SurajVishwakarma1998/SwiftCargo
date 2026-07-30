"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] items-center justify-center pt-20">
      <div className="container-px mx-auto max-w-md text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl2 bg-red-50">
          <AlertTriangle className="h-7 w-7 text-red-500" />
        </div>
        <h1 className="mt-6 text-2xl font-semibold text-navy-900">
          Something went wrong
        </h1>
        <p className="mt-3 text-navy-600">
          An unexpected error occurred while loading this page. You can try
          again or return to the homepage.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button onClick={reset} size="lg">
            Try Again
          </Button>
          <Button href="/" variant="outline" size="lg">
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
