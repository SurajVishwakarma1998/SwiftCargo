import { Compass } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-navy-950 pt-20">
      <div className="container-px mx-auto max-w-lg text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl2 bg-orange-500">
          <Compass className="h-8 w-8 text-white" />
        </div>
        <p className="mt-8 font-display text-7xl font-bold text-white">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-white">
          This route doesn't exist
        </h1>
        <p className="mt-3 text-navy-300">
          The page you're looking for may have moved. Head back to the
          homepage or track a shipment instead.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" size="lg">
            Back to Home
          </Button>
          <Button href="/tracking" variant="outline-light" size="lg">
            Track Shipment
          </Button>
        </div>
      </div>
    </section>
  );
}
