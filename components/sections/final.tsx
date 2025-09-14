import { motion } from 'framer-motion'
import { useEffect } from 'react';
import { Button } from '../ui/button';
import { MessageCircle, Calendar, ChevronDown, Mail, BadgeCheck, Info, Compass, Heart } from 'lucide-react';
import {
    XCircle, CheckCircle, DollarSign, Clock, AlertCircle, Turtle,
    ShieldOff, Headphones, Zap, Search, PiggyBank, Gauge, Code,
    LifeBuoy, ArrowRight, EyeOff, MessageSquare, UserX, Award, CreditCard, Users, Globe, ArrowUpRight, Check, Share2, Volume2, Instagram
} from 'lucide-react';
import {
    LayoutTemplate,
    Video, CalendarCheck, Rocket
} from "lucide-react";

type IconKeys = keyof typeof icons;

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

const icons = {
    Calendar: Calendar,
    XCircle: XCircle,
    CheckCircle: CheckCircle,
    DollarSign: DollarSign,
    Clock: Clock,
    AlertCircle: AlertCircle,
    Turtle: Turtle,
    ShieldOff: ShieldOff,
    Headphones: Headphones,
    Zap: Zap,
    Search: Search,
    PiggyBank: PiggyBank,
    Gauge: Gauge,
    Code: Code,
    LifeBuoy: LifeBuoy,
    ArrowRight: ArrowRight,
    EyeOff: EyeOff,
    MessageSquare: MessageSquare,
    UserX: UserX,
    Award: Award,
    CreditCard: CreditCard,
    Users: Users,
    Globe: Globe,
    Volume2: Volume2,
    Instagram: Instagram,
}

export default function FinalSection() {
    return (
        <motion.section
            className="mx-auto w-full rounded-xl shadow-xl p-8 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700"
            variants={itemVariants}
            aria-labelledby="social-media-heading"
        >
            <div className="max-w-4xl mx-auto">
                <motion.section
                    className="mx-auto w-full rounded-xl shadow-xl p-8 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 min-h-[60vh] flex items-center justify-center"
                    variants={{}}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    aria-labelledby="contact-heading"
                >
                    <div className="max-w-4xl mx-auto w-full">
                        {/* Decorative Arabic pattern */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute top-10 left-10 opacity-5 dark:opacity-[0.03] text-6xl font-arabic">
                                ﷽
                            </div>
                            <div className="absolute bottom-10 right-10 opacity-5 dark:opacity-[0.03] text-6xl font-arabic">
                                ﷽
                            </div>
                        </div>

                        {/* Centered content */}
                        <motion.div
                            id='contact-section'
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {/* Section header */}
                            <div className="mb-10">
                                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                    I'd love to help you understand and utilize these open-sourced assets. Feel free to reach out!
                                </p>
                            </div>

                            {/* Closing note */}
                            <motion.div
                                className="max-w-3xl mx-auto px-6 py-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl shadow-sm"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <p className="text-3xl font-arabic mb-4 text-emerald-800 dark:text-emerald-200 leading-loose md:leading-normal">﴾ إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ ﴿</p>
                                <p className="text-lg text-emerald-700 dark:text-emerald-300 italic">
                                    "The believers are but a single brotherhood, so make peace and reconciliation between your brothers."
                                </p>
                                <p className="mt-2 text-slate-600 dark:text-slate-400">- Al-Hujurat (49:10)</p>
                            </motion.div>

                            {/* Contact options */}
                            <div className="flex flex-col items-center gap-6 mb-10 mt-10 max-w-4xl mx-auto">
                                {/* Instagram CTA */}
                                <motion.div
                                    className="w-full lg:w-1/2 flex flex-col items-center"
                                    whileHover={{ y: -1 }}
                                >
                                    <a
                                        href="https://www.instagram.com/abu.sharqi/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cursor-pointer bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center"
                                    >
                                        <Instagram className="w-16 h-16 lg:w-6 lg:h-6 mr-3" />
                                        <span>Reach out to me on Instagram!</span>
                                        <ArrowRight className="w-5 h-5 ml-3" />
                                    </a>
                                </motion.div>
                            </div>

                            <h1 className='font-bold text-emerald-200 mt-10 text-2xl'>
                                ان شاء الله
                            </h1>
                        </motion.div>
                    </div>

                    {/* Global styles for Arabic font */}
                    <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
        .font-arabic {
          font-family: 'Amiri', serif;
        }
      `}</style>
                </motion.section>
            </div>
        </motion.section>
    )
}