import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl2 border border-navy-100 bg-white p-6 shadow-card",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
