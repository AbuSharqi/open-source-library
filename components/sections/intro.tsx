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
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="leading-[3] py-1 align-bottom inline-block md:block text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-blue-500 to-emerald-500"
                    >
                        Umrah & Hajj Company Marketing Solutions
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="text-xl text-gray-100 max-w-2xl mx-auto">
                        Discover the digital marketing solutions for Umrah & Hajj service providers, from <span className='font-bold'>travel agencies to hotels and taxi companies</span>, who want to transform their <span className='font-bold'>online presence</span> to attract more <span className='font-bold'>pilgrims</span> and get <span className='font-bold'>direct bookings, Insha'Allah.</span>
                        </p>
                    </motion.div>
                </div>
            </motion.section>
        </>
    )
}