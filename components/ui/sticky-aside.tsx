import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface StickyAsideProps {
  children: ReactNode;
  className?: string;
  topOffset?: number;
}

export function StickyAside({
  children,
  className,
  topOffset = 6,
}: StickyAsideProps) {
  return (
    <aside
      className={cn(
        "hidden lg:block",
        "lg:sticky",
        "lg:self-start",
        "lg:max-h-[calc(100vh-6rem)]",
        "lg:overflow-y-auto",
        className
      )}
      style={{
        top: `${topOffset}rem`,
      }}
    >
      {children}
    </aside>
  );
}
