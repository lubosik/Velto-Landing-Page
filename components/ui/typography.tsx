import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function Heading1({ children, className, as: Component = "h1" }: TypographyProps) {
  return (
    <Component
      className={cn(
        "text-3xl sm:text-4xl lg:text-5xl font-bold",
        "text-gray-900 tracking-tight",
        "mb-4",
        className
      )}
    >
      {children}
    </Component>
  );
}

export function Heading2({ children, className, as: Component = "h2" }: TypographyProps) {
  return (
    <Component
      className={cn(
        "text-2xl sm:text-3xl lg:text-4xl font-bold",
        "text-gray-900 tracking-tight",
        "mb-3",
        className
      )}
    >
      {children}
    </Component>
  );
}

export function Heading3({ children, className, as: Component = "h3" }: TypographyProps) {
  return (
    <Component
      className={cn(
        "text-xl sm:text-2xl font-semibold",
        "text-gray-900",
        "mb-2",
        className
      )}
    >
      {children}
    </Component>
  );
}

export function BodyLarge({ children, className, as: Component = "p" }: TypographyProps) {
  return (
    <Component
      className={cn(
        "text-lg sm:text-xl",
        "text-gray-700 leading-relaxed",
        className
      )}
    >
      {children}
    </Component>
  );
}

export function Body({ children, className, as: Component = "p" }: TypographyProps) {
  return (
    <Component
      className={cn(
        "text-base",
        "text-gray-600 leading-relaxed",
        className
      )}
    >
      {children}
    </Component>
  );
}

export function BodySmall({ children, className, as: Component = "p" }: TypographyProps) {
  return (
    <Component
      className={cn(
        "text-sm",
        "text-gray-600 leading-relaxed",
        className
      )}
    >
      {children}
    </Component>
  );
}
