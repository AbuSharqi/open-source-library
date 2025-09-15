import { motion } from 'framer-motion';
import {
    Clock, Award, MessageSquare, Calendar, Tag,
    Zap, Shield, ArrowUpRight, HeartHandshake, BookOpen,
    FileX, FolderCheck, Smartphone, ShieldAlert, BarChart4, GanttChartSquare,
    TableProperties,
    ArrowDownNarrowWide
} from 'lucide-react';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import AuthorDate from '../ui/author-date';

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
                className="mx-auto flex flex-col gap-8 px-4 w-full"
                variants={containerVariants}
                aria-labelledby="main-heading"
            >
                <div className="text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="py-2 leading-[2] text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-300 to-emerald-400"
                    >
                        This is your moment to grow, باذن الله.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="text-xl text-gray-100 max-w-2xl mx-auto">
                            See what works for you - landing pages I've built for different educator niches. Take what you need, make changes as needed.
                        </p>
                        <p className="text-md text-gray-100 max-w-2xl mx-auto mt-5 font-bold">
                           (Don't worry if your niche is not present, you can always work with what's available and customize it to fit your needs!)
                        </p>
                    </motion.div>
                </div>
            </motion.section>
        </>
    )
}