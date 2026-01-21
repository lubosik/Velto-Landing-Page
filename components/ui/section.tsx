"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "narrow" | "wide";
  withAnimation?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

export function Section({
  children,
  className,
  id,
  variant = "default",
  withAnimation = true,
}: SectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const maxWidthClasses = {
    default: "max-w-5xl",
    narrow: "max-w-3xl",
    wide: "max-w-7xl",
  };

  const Component = withAnimation ? motion.section : "section";

  const props = withAnimation
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        variants: shouldReduceMotion ? reducedMotionVariants : containerVariants,
      }
    : {};

  return (
    <Component
      id={id}
      className={cn(
        "w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20",
        "mx-auto",
        maxWidthClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
