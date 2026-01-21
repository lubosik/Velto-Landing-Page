import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { StickyAside } from "../ui/sticky-aside";

interface TwoColumnLayoutProps {
  main: ReactNode;
  aside: ReactNode;
  className?: string;
  reverse?: boolean;
}

export function TwoColumnLayout({
  main,
  aside,
  className,
  reverse = false,
}: TwoColumnLayoutProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12",
        reverse && "lg:grid-flow-dense",
        className
      )}
    >
      <div
        className={cn(
          "lg:col-span-7",
          reverse && "lg:col-start-6"
        )}
      >
        {main}
      </div>
      <div
        className={cn(
          "lg:col-span-5",
          reverse && "lg:col-start-1 lg:row-start-1"
        )}
      >
        <StickyAside>{aside}</StickyAside>
      </div>
    </div>
  );
}
