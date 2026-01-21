"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface AccordionItemProps {
  id: string;
  question: string;
  whyThisMatters: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
}

export function AccordionItem({
  id,
  question,
  whyThisMatters,
  children,
  defaultOpen = false,
  onToggle,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle?.(newState);
  };

  const animationVariants = shouldReduceMotion
    ? {
        open: { height: "auto", opacity: 1 },
        collapsed: { height: 0, opacity: 0 },
      }
    : {
        open: { height: "auto", opacity: 1 },
        collapsed: { height: 0, opacity: 0 },
      };

  const transition = shouldReduceMotion
    ? { duration: 0.1 }
    : { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] };

  return (
    <div
      className={cn(
        "border border-gray-200 rounded-lg overflow-hidden",
        "transition-all duration-200",
        isOpen && "border-velto-blue/30 shadow-soft"
      )}
    >
      <button
        onClick={toggle}
        className="w-full px-6 py-4 text-left flex items-start justify-between gap-4 hover:bg-gray-50/50 transition-colors"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        id={`accordion-header-${id}`}
      >
        <div className="flex-1 min-w-0 space-y-1">
          <h3 className="font-semibold text-gray-900 text-base leading-snug">
            {question}
          </h3>
          <p className="text-sm text-gray-600">{whyThisMatters}</p>
        </div>
        <div className="flex-shrink-0 mt-1">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-velto-blue" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`accordion-content-${id}`}
            ref={contentRef}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={animationVariants}
            transition={transition}
            className="overflow-hidden"
            aria-labelledby={`accordion-header-${id}`}
          >
            <div className="px-6 pb-4 pt-2 border-t border-gray-100">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export function Accordion({ children, className }: AccordionProps) {
  return (
    <div className={cn("space-y-3", className)} role="region" aria-label="FAQ Accordion">
      {children}
    </div>
  );
}
