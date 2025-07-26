'use client'

import { useEffect, useState } from "react";
import { Link as LinkIcon, Feather, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { CommonFooter } from "@/components/common-footer";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { Input } from "@/components/ui/input";
import IntroSection from "@/components/sections/intro";
import StepsSection from "@/components/sections/steps";
import { ArrowDown } from "lucide-react";
import FinalSection from "@/components/sections/final";
import WorkSection from "@/components/sections/work";

const SEOAnimator = ({ children }: { children: React.ReactNode }) => (
  <LazyMotion features={domAnimation}>{children}</LazyMotion>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const cardVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300 } }
};

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmPage, setConfirmPage] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [showDomainHint, setShowDomainHint] = useState(true);

  return (
    <>
      {loading && (
        <div className="mx-auto flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
          <div className="flex flex-col items-center gap-4">
            <Feather className="h-50 w-50 text-purple-600 animate-pulse" />
            <div className="text-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Yusr (يُسْر) Solutions
              </h1>
              <p className="text-gray-600 dark:text-gray-300">Web & Marketing Solutions</p>
            </div>
          </div>
        </div>
      )}
      <>
        {confirmPage === false && (
          <div className="min-h-screen flex flex-col">
            <Navbar />

            <motion.main
              className="w-full bg-gray-100 dark:bg-gray-900 flex flex-col items-center gap-8 py-8 px-4 sm:px-6 md:px-8 flex-1"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* All sections will be perfectly centered */}
              <IntroSection />
              <StepsSection />
              <WorkSection />
              <FinalSection />
            </motion.main>

            <CommonFooter />
          </div>
        )}
      </>
    </>
  );
}