import type { TimelineItem } from "@/types";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-l border-navy-100 pl-8">
      {items.map((item) => (
        <li key={item.year} className="mb-10 last:mb-0">
          <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-orange-500" />
          <span className="eyebrow">{item.year}</span>
          <h3 className="mt-2 text-lg font-semibold text-navy-900">{item.title}</h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy-600">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
