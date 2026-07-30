import * as React from "react";
import { cn } from "@/lib/utils";

export function Label({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "mb-1.5 block text-sm font-medium text-navy-800",
        className
      )}
      {...props}
    />
  );
}

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { hasError?: boolean }
>(function Input({ className, hasError, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={cn(
        "h-11 w-full rounded-lg border bg-white px-4 text-sm text-navy-900 outline-none transition-colors placeholder:text-navy-300",
        hasError
          ? "border-red-400 focus:border-red-500"
          : "border-navy-200 focus:border-orange-500",
        className
      )}
      {...props}
    />
  );
});

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & { hasError?: boolean }
>(function Textarea({ className, hasError, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full rounded-lg border bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors placeholder:text-navy-300",
        hasError
          ? "border-red-400 focus:border-red-500"
          : "border-navy-200 focus:border-orange-500",
        className
      )}
      {...props}
    />
  );
});

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement> & { hasError?: boolean }
>(function Select({ className, hasError, children, ...props }, ref) {
  return (
    <select
      ref={ref}
      className={cn(
        "h-11 w-full rounded-lg border bg-white px-4 text-sm text-navy-900 outline-none transition-colors",
        hasError
          ? "border-red-400 focus:border-red-500"
          : "border-navy-200 focus:border-orange-500",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
});

export function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-500">{message}</p>;
}
