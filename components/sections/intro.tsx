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
                className="mx-auto flex flex-col gap-8 py-12 px-4 w-full"
                variants={containerVariants}
                aria-labelledby="main-heading"
            >
                <div className="mx-auto text-center mb-6 w-full">
                    <motion.div
                        id="main-heading"
                        className="text-4xl sm:text-4xl font-bold mb-4 -py-5"
                        variants={itemVariants}
                        itemProp="headline"
                    >
                        <span className="block mb-2 bg-gradient-to-r from-purple-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent pb-0.5"> {/* Added padding-bottom */}
                            Why You Can't Reach Your Potential
                        </span>
                        <span className="text-2xl sm:text-3xl font-normal block bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent pb-2"> {/* Added padding-bottom */}
                            6 Things Stopping You From Helping <span className="text-purple-600 dark:text-purple-400">More Muslims</span>
                        </span>
                    </motion.div>
                </div>

                {/* Responsive Grid Layout */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 w-full max-w-6xl mx-auto"
                    variants={itemVariants}
                    transition={{ delay: 0.6 }}
                >
                    {/* Simple Problem Cards */}
                    {[
                        {
                            icon: Clock,
                            title: "Spending hours on repetitive tasks",
                            description: "Your agency spends <strong class='text-purple-600 dark:text-purple-400'>countless hours</strong> filling pilgrim personal details across multiple systems",
                            color: "bg-gradient-to-br from-purple-500 to-indigo-500",
                            titleColor: "bg-gradient-to-br from-purple-400 to-indigo-400 bg-clip-text text-transparent",
                            border: "border-l-purple-500",
                            numColor: "bg-purple-500"
                        },
                        {
                            icon: BookOpen,
                            title: "Quirky document management",
                            description: "<strong class='text-indigo-600 dark:text-indigo-300'>Chasing documents</strong> trying to know who submitted what and when",
                            color: "bg-gradient-to-br from-indigo-500 to-blue-500",
                            titleColor: "bg-gradient-to-br from-indigo-400 to-blue-400 bg-clip-text text-transparent",
                            border: "border-l-indigo-500",
                            numColor: "bg-indigo-500"
                        },
                        {
                            icon: MessageSquare,
                            title: "Too Many Inquiries",
                            description: "Pilgrims <strong class='text-blue-600 dark:text-blue-300'>constantly asking</strong> for flight times, hotel names, and schedule details",
                            color: "bg-gradient-to-br from-blue-500 to-cyan-500",
                            titleColor: "bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent",
                            border: "border-l-blue-500",
                            numColor: "bg-blue-500"
                        },
                        {
                            icon: Calendar,
                            title: "Running around to find important information",
                            description: "Relying on paper or calls back home can be <strong class='text-cyan-600 dark:text-cyan-300'>unreliable and potentially dangerous</strong> in an emergency",
                            color: "bg-gradient-to-br from-cyan-500 to-teal-500",
                            titleColor: "bg-gradient-to-br from-cyan-400 to-teal-400 bg-clip-text text-transparent",
                            border: "border-l-cyan-500",
                            numColor: "bg-cyan-500"
                        },
                        {
                            icon: Tag,
                            title: "Slow Pilgrim Enrollment",
                            description: "Rapid scaling is difficult without making changes that <strong class='text-teal-600 dark:text-teal-300'>eat into profit margins</strong>",
                            color: "bg-gradient-to-br from-teal-500 to-emerald-500",
                            titleColor: "bg-gradient-to-br from-teal-400 to-emerald-400 bg-clip-text text-transparent",
                            border: "border-l-teal-500",
                            numColor: "bg-teal-500"
                        },
                        {
                            icon: TableProperties,
                            title: "Lack of Centralized Control",
                            description: "Spreadsheets make it <strong class='text-emerald-600 dark:text-emerald-300'>harder to solve data-driven problems</strong> for future packages and profitability",
                            color: "bg-gradient-to-br from-emerald-500 to-green-500",
                            titleColor: "bg-gradient-to-br from-emerald-400 to-green-400 bg-clip-text text-transparent",
                            border: "border-l-emerald-500",
                            numColor: "bg-emerald-500"
                        }
                    ].map((item, idx) => {
                        const IconComponent = item.icon;
                        return (
                            <Card
                                key={idx}
                                className={`h-full border-l-4 ${item.border} border-t-0 border-r-0 border-b-0 rounded-r-lg shadow-lg group hover:shadow-xl transition-all duration-300`}
                            >
                                <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.numColor} text-white font-bold text-lg`}>
                                            {idx + 1}
                                        </div>
                                        <div className={`p-2 rounded-lg ${item.color} text-white`}>
                                            <IconComponent className="w-5 h-5" />
                                        </div>
                                        <CardTitle className={`text-lg font-extrabold md:text-xl ${item.titleColor}`}>{item.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p
                                        className="text-gray-700 dark:text-gray-300 pl-2"
                                        dangerouslySetInnerHTML={{ __html: item.description }}
                                    />
                                </CardContent>
                            </Card>
                        )
                    })}
                </motion.div>

                <motion.div
                    className="text-center mt-8 bg-gradient-to-r from-indigo-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 max-w-6xl mx-auto border border-indigo-100 dark:border-gray-700"
                    variants={itemVariants}
                    transition={{ delay: 1 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <motion.div
                        className="mb-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        <motion.h2
                            className="leading-[3] py-5 align-bottom inline-block text-3xl sm:text-5xl sm:leading-[0.5] font-bold mb-6 bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent"
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, delay: 1.3 }}
                        >
                            Transform Your Pilgrim Management
                        </motion.h2>
                        <motion.h3
                            className="leading-[4] py-5 text-3xl sm:text-5xl sm:leading-[0.5] font-bold mb-6 bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent"
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, delay: 1.3 }}
                        >
                            ان شاء الله
                        </motion.h3>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.7 }}
                    >
                        {[
                            {
                                icon: FileX,
                                title: "Eliminate Costly Errors",
                                description: "Stop <strong class='text-purple-400 dark:text-purple-400'>wasting time</strong> manually inputting pilgrim details across conflicting systems"
                            },
                            {
                                icon: FolderCheck,
                                title: "Flawless Document Management",
                                description: "Manage pilgrim paperwork with modern tech for <strong class='text-purple-400 dark:text-purple-400'>instant organization</strong>"
                            },
                            {
                                icon: Smartphone,
                                title: "Instant Information Access",
                                description: "Give pilgrims <strong class='text-purple-400 dark:text-purple-400'>24/7 self-service access</strong> to their personalized details"
                            },
                            {
                                icon: ShieldAlert,
                                title: "Critical Info On-Hand",
                                description: "<strong class='text-purple-400 dark:text-purple-400'>Securely store</strong> medical details, passports & emergency contacts"
                            },
                            {
                                icon: BarChart4,
                                title: "Scale Pilgrim Volume",
                                description: "Handle more pilgrims with your existing team <strong class='text-purple-400 dark:text-purple-400'>without constant hiring</strong>"
                            },
                            {
                                icon: GanttChartSquare,
                                title: "Total Operational Control",
                                description: "Centralize all pilgrim data for <strong class='text-purple-400 dark:text-purple-400'>smarter, data-driven decisions</strong>"
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.8 + idx * 0.1 }}
                            >
                                <Card className="bg-white dark:bg-gray-800 p-7 rounded-xl shadow-lg hover:shadow-xl transition-all border-0 h-full flex flex-col">
                                    <CardContent className="flex flex-col items-center text-center p-0">
                                        <div className="bg-indigo-100 dark:bg-indigo-900/40 p-4 rounded-2xl mb-5">
                                            <item.icon className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
                                        </div>

                                        {/* Fixed gradient title with descender support */}
                                        <CardTitle className="relative text-2xl font-extrabold mb-4">
                                            <span className="bg-gradient-to-r from-emerald-200 to-teal-500 dark:from-indigo-200 dark:to-pink-200 bg-clip-text text-transparent pb-[0.15em]">
                                                {item.title}
                                            </span>
                                        </CardTitle>

                                        <div
                                            className="text-lg text-gray-700 dark:text-gray-300 mb-2"
                                            dangerouslySetInnerHTML={{ __html: item.description }}
                                        />
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.section>
        </>
    )
}