import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SoftGradientBackgroundProps {
  children: ReactNode;
  className?: string;
  variant?: "subtle" | "warm" | "cool";
}

export function SoftGradientBackground({
  children,
  className,
  variant = "subtle",
}: SoftGradientBackgroundProps) {
  const variantClasses = {
    subtle: "from-white via-gray-50/30 to-white",
    warm: "from-white via-blue-50/20 to-white",
    cool: "from-white via-gray-50/50 to-blue-50/20",
  };

  return (
    <div
      className={cn(
        "bg-gradient-to-b",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
