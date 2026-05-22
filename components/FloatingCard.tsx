"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon, User } from "lucide-react";
import { cn } from "./utils";

interface FloatingCardProps {
  label: string;
  icon?: LucideIcon;
  color?: "blue" | "orange" | "dark" | "white" | "gray";
  rotation?: number;
  className?: string;
  variant?: "pill" | "portal";
  delay?: number;
}

export const FloatingCard: React.FC<FloatingCardProps> = ({
  label,
  icon: Icon,
  color = "white",
  rotation = 0,
  className,
  variant = "pill",
  delay = 0,
}) => {
  const colorClasses = {
    blue: "bg-blue-600 text-white",
    orange: "bg-orange-500 text-white",
    dark: "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900",
    white: "bg-white text-zinc-900 border border-zinc-200 shadow-sm dark:bg-zinc-800 dark:text-white dark:border-zinc-700",
    gray: "bg-zinc-100 text-zinc-600 border border-zinc-200 dark:bg-zinc-800/50 dark:text-zinc-400 dark:border-zinc-700",
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: Math.random() * 2,
    },
  };

  if (variant === "portal") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: rotation }}
        animate={{ opacity: 1, y: [0, -8, 0], rotate: rotation }}
        transition={{ 
          opacity: { duration: 0.6, delay },
          rotate: { duration: 0.6, delay },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 }
        }}
        whileHover={{ scale: 1.05, rotate: rotation + 2, transition: { duration: 0.15, delay: 0 } }}
        className={cn(
          "absolute px-6 py-2 rounded-full shadow-2xl bg-white border border-zinc-100 flex items-stretch gap-4 min-w-[400px] h-[72px] dark:bg-zinc-900 dark:border-zinc-800",
          className
        )}
      >
        <div className="w-1 bg-orange-500 rounded-full shrink-0 my-1" />

        <div className="flex items-center gap-3 w-full">
          <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 dark:bg-zinc-800">
            <User size={20} className="text-zinc-600 dark:text-zinc-400" />
          </div>

          <div className="flex flex-col gap-0.5 justify-center">
            <p className="font-black text-sm text-zinc-900 dark:text-white leading-none">
              John Doe - Portal
            </p>
            <p className="text-[11px] text-zinc-600 dark:text-zinc-400 font-medium leading-tight">
              Hey! could you review a document for me?
            </p>
            <p className="text-[9px] text-zinc-400 font-medium leading-none">
              <span className="underline decoration-zinc-300 dark:decoration-zinc-700">MAT-2233</span> — 2h ago
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: rotation }}
      animate={{ opacity: 1, scale: 1, rotate: rotation, y: [0, -12, 0] }}
      transition={{ 
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        rotate: { duration: 0.5, delay },
        y: { duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: Math.random() }
      }}
      whileHover={{ scale: 1.1, rotate: rotation - 2, zIndex: 50, transition: { duration: 0.15, delay: 0 } }}
      className={cn(
        "absolute px-10 py-5 rounded-full flex items-center justify-start gap-6 font-black whitespace-nowrap text-2xl shadow-xl transition-shadow hover:shadow-2xl cursor-default min-w-[400px]",
        colorClasses[color],
        className
      )}
    >
      {Icon && <Icon size={28} className={cn(color === "white" ? "text-blue-600" : "text-white", "dark:text-inherit")} />}
      <span>{label}</span>
    </motion.div>
  );
};
