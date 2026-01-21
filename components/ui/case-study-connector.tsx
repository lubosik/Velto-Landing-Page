"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export function CaseStudyConnector() {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-2"
      >
        <div className="text-sm text-gray-500 font-medium mb-2">
          See it in action
        </div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center"
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            className="text-velto-blue"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 10 C30 10, 20 20, 20 30 C20 40, 30 50, 30 50 M30 10 C30 10, 40 20, 40 30 C40 40, 30 50, 30 50"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              className="opacity-60"
            />
            <path
              d="M30 45 L25 50 L30 55 L35 50 Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
        <div className="text-xs text-gray-400 mt-2 text-center max-w-xs">
          Case study: How SAO transformed a real business
        </div>
      </motion.div>
    </div>
  );
}
