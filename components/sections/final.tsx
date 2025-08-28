import { motion } from 'framer-motion'
import { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import { Button } from '../ui/button';
import { MessageCircle, Calendar, ChevronDown, Mail, BadgeCheck, Info, Compass, Heart } from 'lucide-react';
import {
    XCircle, CheckCircle, DollarSign, Clock, AlertCircle, Turtle,
    ShieldOff, Headphones, Zap, Search, PiggyBank, Gauge, Code,
    LifeBuoy, ArrowRight, EyeOff, MessageSquare, UserX, Award, CreditCard, Users, Globe, ArrowUpRight, Check, Share2, Volume2
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
    Volume2: Volume2
}

export default function FinalSection() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "planning-session" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])

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
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                                    Need a hand? We're here for you.
                                </h3>
                                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                    If you ever get stuck figuring out your playbook, or just need some help with your next move, we'd love to assist. We can work with you to create a plan that fits your agency's unique needs, inSha'Allah.
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
                            <div className="flex flex-col items-center gap-6 mb-4 mt-4 max-w-4xl mx-auto">
                                {/* Book Call */}
                                <motion.div
                                    className="w-full lg:w-1/2 flex flex-col items-center"
                                    whileHover={{ y: -2 }}
                                >
                                    <p className="mt-2 text-md text-gray-500 dark:text-gray-400 text-center">Below is where you can book your meeting ان شاء الله</p>
                                    <p className="mt-2 text-md text-gray-500 dark:text-gray-400 text-center">If this is loading, please be patient</p>
                                </motion.div>
                            </div>


                            <Cal namespace="planning-session"
                                calLink="yusr.solutions/planning-session"
                                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                                config={{ "layout": "month_view" }}
                            />

                            {/* Benefits footer */}
                            <div className="mt-0 mb-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl border border-emerald-200 dark:border-emerald-700 max-w-2xl mx-auto">
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div className="text-emerald-800 dark:text-emerald-200 font-bold flex items-center gap-2">
                                        <ArrowRight className="w-5 h-5" />
                                        <span>Connect with Us</span>
                                    </div>
                                    <div className="text-emerald-800 dark:text-emerald-200 font-bold flex items-center gap-2">
                                        <ArrowRight className="w-5 h-5" />
                                        <span>Bring Traffic</span>
                                    </div>
                                    <div className="text-emerald-800 dark:text-emerald-200 font-bold flex items-center gap-2">
                                        <ArrowRight className="w-5 h-5" />
                                        <span>Scale your Agency</span>
                                    </div>
                                </div>
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