'use client'

import { useEffect, useState } from "react";
import { Link as LinkIcon, Feather, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { CommonFooter } from "@/components/common-footer";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { Input } from "@/components/ui/input";
import IntroSection from "@/components/sections/intro";
import Intro2Section from "@/components/sections/intro2";
import { ArrowDown } from "lucide-react";
import FinalSection from "@/components/sections/final";
import FormSection from "@/components/sections/form";
import { containerVariants, itemVariants, cardVariants } from "@/lib/motionVariants";

const SEOAnimator = ({ children }: { children: React.ReactNode }) => (
  <LazyMotion features={domAnimation}>{children}</LazyMotion>
);

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
              {/*<motion.section
                className="w-full"
                variants={itemVariants}
                aria-label="Demo video"
              >
                <div className="max-w-4xl mx-auto"> {/* Constrained container
                  <div className="relative aspect-video rounded-xl shadow-xl overflow-hidden mx-4 md:mx-0"> {/* Responsive margins
                    <iframe
                      src="https://www.youtube.com/embed/ga9CbPZgOYI"
                      title="App Process Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      frameBorder="0"
                    />
                  </div>
                </div>
              </motion.section>*/}
              <FormSection />
              {/*<Intro2Section />*/}
              <FinalSection />
            </motion.main>

            <CommonFooter />
          </div>
        )}
      </>
    </>
  );
}