import { motion } from 'framer-motion';
import {
    BookOpen, Award, MessageSquare, Calendar, Tag, CreditCard,
    Zap, Shield, ArrowUpRight, HeartHandshake
} from 'lucide-react';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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
                    <motion.h1
                        id="main-heading"
                        className="text-3xl sm:text-4xl font-bold mb-4"
                        variants={itemVariants}
                        itemProp="headline"
                    >
                        <span className="block mb-2 bg-gradient-to-r from-purple-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent pb-0.5"> {/* Added padding-bottom */}
                            Why You Can't Reach Your Potential
                        </span>
                        <span className="text-2xl sm:text-3xl font-normal block bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent pb-2"> {/* Added padding-bottom */}
                            6 Things Stopping You From Reaching Your Audience
                        </span>
                    </motion.h1>
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
                            icon: BookOpen,
                            title: "Don't Know How You Teach",
                            description: "They can't see what makes your classes <strong class='text-purple-600 dark:text-purple-400'>special</strong>",
                            color: "bg-gradient-to-br from-purple-500 to-indigo-500",
                            border: "border-l-purple-500",
                            numColor: "bg-purple-500"
                        },
                        {
                            icon: Award,
                            title: "Hard time building trust",
                            description: "Students have a hard time finding <strong class='text-indigo-600 dark:text-indigo-300'>teaching certificates</strong>",
                            color: "bg-gradient-to-br from-indigo-500 to-blue-500",
                            border: "border-l-indigo-500",
                            numColor: "bg-indigo-500"
                        },
                        {
                            icon: MessageSquare,
                            title: "Good Reviews Get Lost",
                            description: "Happy student messages <strong class='text-blue-600 dark:text-blue-300'>disappear</strong> in social media",
                            color: "bg-gradient-to-br from-blue-500 to-cyan-500",
                            border: "border-l-blue-500",
                            numColor: "bg-blue-500"
                        },
                        {
                            icon: Calendar,
                            title: "Don't Know When You Teach",
                            description: "They leave when they don't know <strong class='text-cyan-600 dark:text-cyan-300'>when you teach</strong>",
                            color: "bg-gradient-to-br from-cyan-500 to-teal-500",
                            border: "border-l-cyan-500",
                            numColor: "bg-cyan-500"
                        },
                        {
                            icon: Tag,
                            title: "Price Not Clear",
                            description: "Students worry when they don't see <strong class='text-teal-600 dark:text-teal-300'>the cost</strong>",
                            color: "bg-gradient-to-br from-teal-500 to-emerald-500",
                            border: "border-l-teal-500",
                            numColor: "bg-teal-500"
                        },
                        {
                            icon: CreditCard,
                            title: "Sign Up Too Hard",
                            description: "Good students leave if <strong class='text-emerald-600 dark:text-emerald-300'>joining is difficult</strong>",
                            color: "bg-gradient-to-br from-emerald-500 to-green-500",
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
                                        <CardTitle className="text-lg md:text-xl">{item.title}</CardTitle>
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
                    className="text-center mt-8 bg-gradient-to-r from-indigo-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 max-w-4xl mx-auto border border-indigo-100 dark:border-gray-700"
                    variants={itemVariants}
                    transition={{ delay: 1 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl font-bold mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        <span className="bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">
                            A Website Fixes All These Problems باذن الله
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                    >
                        Start <span className="font-bold text-indigo-600 dark:text-indigo-400">speeding up your success</span> with your own website that:
                    </motion.p>

                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        {[
                            { icon: Zap, text: "Answers frequently asked questions anytime" },
                            { icon: Shield, text: "Lets people know your program is the best option" },
                            { icon: ArrowUpRight, text: "Increases the rate of visitors into students" },
                            { icon: HeartHandshake, text: "Makes interactions more meaningful and stronger" }
                        ].map((item, idx) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={idx} className="flex items-center bg-white dark:bg-gray-700 px-4 py-2 rounded-full shadow hover:scale-105 transition-transform">
                                    <IconComponent className="w-5 h-5 text-teal-500 mr-2" />
                                    <span className="font-medium text-gray-700 dark:text-gray-200">{item.text}</span>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>
            </motion.section>
        </>
    )
}