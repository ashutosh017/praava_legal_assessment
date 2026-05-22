"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Gavel, 
  FileText, 
  CheckSquare, 
  CreditCard, 
} from "lucide-react";
import { FloatingCard } from "./FloatingCard";

export const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-white selection:bg-blue-100 transition-colors duration-500 dark:bg-zinc-950 dark:selection:bg-blue-900/30">
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[120px] opacity-60 pointer-events-none dark:bg-blue-900/10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-orange-50 rounded-full blur-[100px] opacity-40 pointer-events-none dark:bg-orange-900/10" />

      <div className="absolute left-[-300px] top-[70%] -translate-y-1/2 flex flex-col gap-8 pointer-events-none z-0">
        <div className="h-24 w-[500px] bg-zinc-200/50 rounded-r-full dark:bg-zinc-800/50 origin-left -rotate-4" />
        <div className="h-24 w-[600px] bg-zinc-200/50 rounded-r-full dark:bg-zinc-800/50" />
        <div className="h-24 w-[800px] bg-zinc-200/50 rounded-r-full dark:bg-zinc-800/50" />
      </div>

      <div className="absolute right-[-300px] top-[30%] -translate-y-1/2 flex flex-col items-end gap-8 pointer-events-none z-0">
        <div className="h-24 w-[600px] bg-zinc-200/50 rounded-l-full dark:bg-zinc-800/50 origin-right rotate-2" />
        <div className="h-24 w-[800px] bg-zinc-200/50 rounded-l-full dark:bg-zinc-800/50" />
        <div className="h-24 w-[600px] bg-zinc-200/50 rounded-l-full dark:bg-zinc-800/50" />
      </div>


      <div className="flex flex-col h-full w-full">
        <div className="h-1/2 w-full flex items-center">
          <div className="container mx-auto px-6 md:px-12 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-8 max-w-4xl"
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extralight text-zinc-900 leading-[1.1] tracking-widest dark:text-white">
                A single platform to
                <br />
                <span className="font-black text-zinc-500 dark:text-zinc-400">
                  manage
                </span>{" "}
                every part of
                <br />
                your{" "}
                <span className="font-black text-zinc-500 dark:text-zinc-400">
                  legal work
                </span>
              </h1>

              <p className="text-xs md:text-lg text-blue-600 leading-loose max-w-[320px] md:max-w-xl dark:text-blue-400 font-medium">
                Track matters, cordinate schedules, manage clients, centralize documents, and handle communication — all in one system
              </p>
            </motion.div>
          </div>
        </div>

        <div className="h-1/2 w-full relative">
          <div className="container mx-auto px-6 md:px-12 h-full flex items-start justify-end">
            <div className="relative w-full lg:w-2/3 h-full">
              <FloatingCard
                label="Billing"
                icon={CreditCard}
                color="blue"
                rotation={5}
                className="top-[0%] right-[30%] z-20"
                delay={0.1}
              />

              <FloatingCard
                label="Matters"
                icon={Gavel}
                color="orange"
                rotation={-8}
                className="top-[35%] right-[50%] z-20"
                delay={0.2}
              />
              
              <FloatingCard 
                label="John Doe" 
                variant="portal" 
                rotation={-2} 
                className="z-30 right-[0%] top-[30%]"
                delay={0.4}
              />

              <FloatingCard
                label="Tasks"
                icon={CheckSquare}
                color="white"
                rotation={0}
                className="top-[70%] right-[55%] z-20 !text-orange-500 [&_svg]:!text-orange-500"
                delay={0.5}
              />

              <FloatingCard
                label="Documents"
                icon={FileText}
                color="white"
                rotation={-8}
                className="top-[65%] right-[5%] z-10 !text-orange-500 [&_svg]:!text-orange-500"
                delay={0.6}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
