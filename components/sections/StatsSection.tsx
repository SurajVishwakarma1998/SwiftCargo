import { STATS } from "@/constants/testimonials";
import { StatCard } from "@/components/cards/StatCard";

export function StatsSection() {
  return (
    <section className="relative -mt-16 z-10">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 rounded-xl2 bg-navy-900 p-6 shadow-lift md:grid-cols-4 md:p-8">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={{ label: stat.label, value: stat.value }} />
          ))}
        </div>
      </div>
    </section>
  );
}
