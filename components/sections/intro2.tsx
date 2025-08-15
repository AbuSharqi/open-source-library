import { motion } from 'framer-motion'
import { Globe, Rocket, BarChart4, CalendarCheck, UserCheck, ArrowRight, Clock } from 'lucide-react';

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

export default function Intro2Section() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-transparent p-4 py-2">
            <div className="max-w-4xl w-full">
                <motion.section
                    className="mx-auto flex flex-col gap-8 py-12 px-4 w-full bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl"
                    variants={containerVariants}
                    aria-labelledby="main-heading"
                    id='encourage'
                >
                    <div className="text-center max-w-3xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="py-2 text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-300 to-emerald-400"
                        >
                            This is your moment to grow.
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-8"
                        >
                            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                                Travel agencies like you need a professional technology partner to help you scale, reach your potential, all while being aligned with your values and goals.
                            </p>
                        </motion.div>

                        {/* Countdown Timer */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="bg-blue-800/30 backdrop-blur-sm p-6 rounded-xl border border-blue-600/30 mb-8 max-w-md mx-auto"
                        >
                            <div className="flex flex-col items-center text-center">
                                {/* Header with clock icon */}
                                <div className="flex justify-center items-center gap-4 mb-4">
                                    <Clock className="w-8 h-8 text-teal-400" />
                                    <h3 className="text-2xl font-bold text-white">Your Time is Now</h3>
                                </div>

                                {/* Limited spots counter */}
                                <div className="mb-6">
                                    <p className="text-blue-200 mb-4">
                                        We only have a limited number of spots for our early bird offer.
                                    </p>

                                    <div className="relative inline-block">
                                        {/* Number with animated background */}
                                        <div className="absolute inset-0 bg-teal-500/20 rounded-full animate-ping"></div>
                                        <div className="relative z-10 bg-gradient-to-br from-teal-500 to-emerald-500 text-white text-5xl font-bold w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                                            5
                                        </div>
                                    </div>

                                    <p className="text-teal-300 font-medium mt-4">
                                        Spots Remaining باذن الله
                                    </p>
                                </div>

                                {/* Motivational message */}
                                <p className="text-blue-200 italic">
                                    Don't let this opportunity pass. Our team is ready to help you succeed, باذن الله.
                                </p>
                            </div>
                        </motion.div>

                        {/* Icon Grid */}
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mb-3">
                                    <Rocket className="h-10 w-10 text-white" strokeWidth={1.5} />
                                </div>
                                <p className="text-center font-medium text-gray-100">The Door To Scaling</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-3">
                                    <Globe className="h-10 w-10 text-white" strokeWidth={1.5} />
                                </div>
                                <p className="text-center font-medium text-gray-100">Worldwide Usage</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-3">
                                    <BarChart4 className="h-10 w-10 text-white" strokeWidth={1.5} />
                                </div>
                                <p className="text-center font-medium text-gray-100">Productive Analytic Calculations</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center mb-3">
                                    <CalendarCheck className="h-10 w-10 text-white" strokeWidth={1.5} />
                                </div>
                                <p className="text-center font-medium text-gray-100">Efficiently Work On Admin Tasks</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-emerald-500 flex items-center justify-center mb-3">
                                    <UserCheck className="h-10 w-10 text-white" strokeWidth={1.5} />
                                </div>
                                <p className="text-center font-medium text-gray-100">Bring More Attendees</p>
                            </div>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 1 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <button
                                onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                                className="cursor-pointer bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center"
                            >
                                <span>Start Your Growth Journey</span>
                                <ArrowRight className="w-5 h-5 ml-3" />
                            </button>
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}