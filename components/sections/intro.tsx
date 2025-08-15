import { motion } from 'framer-motion';
import {
    Clock, Award, MessageSquare, Calendar, Tag,
    Zap, Shield, ArrowUpRight, HeartHandshake, BookOpen,
    FileX, FolderCheck, Smartphone, ShieldAlert, BarChart4, GanttChartSquare,
    TableProperties,
    ArrowDownNarrowWide
} from 'lucide-react';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

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

export default function IntroSection() {
    return (
        <>
            {/* Value Proposition Section */}
            <motion.section
                className="mx-auto flex flex-col gap-8 py-0 px-4 w-full"
                variants={containerVariants}
                aria-labelledby="main-heading"
            >

                <div className="text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="leading-[3] py-2 align-bottom inline-block md:block text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-blue-500 to-emerald-500"
                    >
                        Scale Your Agency. Keep Your Profits.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-blue-300 to-emerald-300">
                            Why You Can't Reach Your Potential
                        </p>
                        <p className="text-xl text-gray-100 max-w-2xl mx-auto">
                        You have the potential—you just need the right path. My team and I found the exact reasons why so many travel agencies get stuck. Let's show you what's really going on ان شاء الله.
                        </p>
                    </motion.div>
                </div>
            </motion.section>
        </>
    )
}