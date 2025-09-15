'use client'

// hey!

import { useEffect, useState } from "react";
import { Link as LinkIcon, Feather, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { CommonFooter } from "../components/common-footer";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import IntroSection from "../components/sections/intro";
import { ArrowDown } from "lucide-react";
import FinalSection from "../components/sections/final";
import { containerVariants, itemVariants, cardVariants } from "../lib/motionVariants";
import AssetsSection from "../components/sections/assets";

const SEOAnimator = ({ children }: { children: React.ReactNode }) => (
  <LazyMotion features={domAnimation}>{children}</LazyMotion>
);

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Navbar />

      <motion.main
        className="w-full bg-gray-100 dark:bg-gray-900 flex flex-col items-center gap-8 py-8 px-4 sm:px-6 md:px-8 flex-1"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* All sections will be perfectly centered */}
        <IntroSection />
        <AssetsSection />
        <FinalSection />
      </motion.main>

      <CommonFooter />
    </div>
  );
}