import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "outlined";
  padding?: "none" | "sm" | "md" | "lg";
  onClick?: () => void;
}

export function Card({
  children,
  className,
  variant = "default",
  padding = "md",
  onClick,
}: CardProps) {
  const variantClasses = {
    default: "bg-white border border-gray-100",
    elevated: "bg-white shadow-soft-lg border border-gray-50",
    outlined: "bg-white border-2 border-gray-200",
  };

  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6 sm:p-8",
    lg: "p-8 sm:p-10",
  };

  return (
    <div
      className={cn(
        "rounded-lg transition-all duration-200",
        variantClasses[variant],
        paddingClasses[padding],
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      {children}
    </div>
  );
}
