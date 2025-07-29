import { motion } from 'framer-motion'
import { Button } from '../ui/button';
import { MessageCircle, Calendar, ChevronDown, Mail, BadgeCheck } from 'lucide-react';
import {
    XCircle, CheckCircle, DollarSign, Clock, AlertCircle, Turtle,
    ShieldOff, Headphones, Zap, Search, PiggyBank, Gauge, Code,
    LifeBuoy, ArrowRight, EyeOff, MessageSquare, UserX, Award, CreditCard, Users, Globe, ArrowUpRight, Check, Share2
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
    Globe: Globe
}

export default function FinalSection() {
    return (
        <motion.section
            className="mx-auto w-full rounded-xl shadow-xl p-8 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700"
            variants={itemVariants}
            aria-labelledby="social-media-heading"
        >
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    id="social-media-heading"
                    className="text-2xl sm:text-3xl font-bold text-center mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="block bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent mb-2">
                        Is Social Media Really Enough for Your Teaching?
                    </span>
                    <span className="text-lg font-normal text-gray-600 dark:text-gray-300">
                        Most Teachers Use <span className='font-bold'>Only</span> Social Media To Share Important Program Details - <span className='font-bold'>But This Will</span> <span className='font-bold text-amber-500'>Hold You Back</span>
                    </span>
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                    {/* Social Media Limitations Column */}
                    <motion.div
                        className="bg-gradient-to-br from-rose-50 to-orange-50 dark:from-rose-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-rose-200 dark:border-rose-800"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <XCircle className="w-8 h-8 text-rose-500" />
                            <h3 className="text-xl font-bold text-rose-600 dark:text-rose-400">
                                The Social Media Only Trap
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            {[
                                {
                                    icon: "EyeOff",
                                    title: "Limited Visibility",
                                    description: "Your posts get lost in crowded feeds quickly"
                                },
                                {
                                    icon: "MessageSquare",
                                    title: "Hard to Stand Out",
                                    description: "Difficult to show your special teaching skills"
                                },
                                {
                                    icon: "Calendar",
                                    title: "No Clear Schedule",
                                    description: "Students can't easily see when you teach"
                                },
                                {
                                    icon: "DollarSign",
                                    title: "Missed Opportunities",
                                    description: "No easy way for students to find out how to pay"
                                },
                                {
                                    icon: "UserX",
                                    title: "Uncommitted Messages",
                                    description: "People reach out but don't follow through"
                                }
                            ].map((item, idx) => {
                                const Icon = icons[item.icon as IconKeys];
                                return (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Icon className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</h4>
                                            <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>

                    {/* Our Solution Column */}
                    <motion.div
                        className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-800"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle className="w-8 h-8 text-teal-500" />
                            <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400">
                                The Website Solution باذن الله
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            {[
                                {
                                    icon: "Search",
                                    title: "24/7 Visibility",
                                    description: "Your skills can always be seen, and in the best way"
                                },
                                {
                                    icon: "Award",
                                    title: "Show Your Skills",
                                    description: "Display your special teaching methods clearly"
                                },
                                {
                                    icon: "Clock",
                                    title: "Easy Scheduling",
                                    description: "Students see the times that you are available to teach easy"
                                },
                                {
                                    icon: "Globe",
                                    title: "Visible Payment Methods",
                                    description: "Esay way for students to find out how to pay"
                                },
                                {
                                    icon: "Users",
                                    title: "Attract Serious Students",
                                    description: "Only motivated students will reach out to you"
                                }
                            ].map((item, idx) => {
                                const Icon = icons[item.icon as IconKeys];
                                return (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Icon className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</h4>
                                            <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                </div>

                {/* Missed Opportunity Calculator */}
                <div className="mb-6 w-full mx-auto px-4 py-12 bg-gradient-to-r dark:from-slate-800 dark:to-slate-900 rounded-xl p-8 border border-slate-600">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                                The Potential You Might Be Missing
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 max-w-md">
                                Many educators see significant growth when they complement social media with a professional website
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                            <div className="flex flex-col gap-2">
                                <div className="text-center">
                                    <span className="text-sm text-gray-600 dark:text-gray-300">Typical Growth for Educators</span>
                                    <div className="text-xl font-bold text-teal-600 dark:text-teal-400 mt-1">
                                        Significant Increase in Serious Students
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Existing "What we promise you" section */}
                        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 rounded-lg p-6 border border-teal-200 dark:border-teal-700">
                            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                                What we guarantee for you باذن الله
                            </h4>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
                                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                                    <Users className="w-10 h-10 mx-auto text-teal-500 mb-2" />
                                    <h5 className="font-semibold">More Committed Students</h5>
                                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                                        Attract students serious about learning
                                    </p>
                                </div>

                                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                                    <ArrowUpRight className="w-10 h-10 mx-auto text-teal-500 mb-2" />
                                    <h5 className="font-semibold">Sustainable Growth</h5>
                                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                                        Consistent enrollment month after month
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* New Content & Social Media Strategy Section */}
                        <motion.div
                            className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg p-6 border border-amber-200 dark:border-amber-700"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            <div className="flex flex-col md:flex-row items-start gap-6">
                                <div className="text-center md:text-left flex-1">
                                    <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                                        <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                            People will join your class <br /> ان شاء الله
                                        </span>
                                    </h4>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        A <span className="font-bold text-amber-600 dark:text-amber-400">in-depth content strategy</span> will build your social media and ensure you get the audience you need باذن الله
                                    </p>

                                    <div className="bg-amber-100 dark:bg-amber-900/30 rounded-lg p-4 mb-4">
                                        <p className="text-amber-800 dark:text-amber-200 text-sm">
                                            <span className="font-semibold">Note: </span>
                                            Your involvement is providing your own relevant content. We do <strong>everything else for you</strong>
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex-1">
                                    <div className="space-y-4">
                                        {[
                                            {
                                                icon: <LayoutTemplate className="w-8 h-8 text-amber-600 dark:text-amber-400" />,
                                                title: "Strategy Development",
                                                description: "We will choose for you the <strong>perfect strategy</strong> just for <strong>your audience</strong>"
                                            },
                                            {
                                                icon: <Video className="w-8 h-8 text-amber-600 dark:text-amber-400" />,
                                                title: "Content Creation",
                                                description: "We will <strong>transform your raw content</strong> into polished, <strong>engaging masterpieces</strong>"
                                            },
                                            {
                                                icon: <CalendarCheck className="w-8 h-8 text-amber-600 dark:text-amber-400" />,
                                                title: "Basic Management",
                                                description: "We will <strong>schedule posts</strong> to <strong>build your community</strong>"
                                            }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <div className="mt-1">{item.icon}</div>
                                                <div>
                                                    <h5 className="font-bold text-gray-800 dark:text-white">{item.title}</h5>
                                                    <p
                                                        className="text-gray-600 dark:text-gray-300 text-sm"
                                                        dangerouslySetInnerHTML={{ __html: item.description }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    {
                                        title: "Increased Visibility",
                                        description: "Get your website and business seen by more potential students"
                                    },
                                    {
                                        title: "Professional Image",
                                        description: "Polished content enhances your credibility and authority"
                                    },
                                    {
                                        title: "Targeted Growth",
                                        description: "Strategic approach ensures you reach the right audience"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg border border-amber-100 dark:border-amber-900/50">
                                        <h5 className="font-bold text-amber-700 dark:text-amber-300">{item.title}</h5>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Work Guarantee Section */}
                        <motion.div
                            className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-indigo-200 dark:border-indigo-700"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            <div className="flex items-start gap-3">
                                <BadgeCheck className="w-8 h-8 text-indigo-500 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                                <div className="-ml-2 sm:ml-0"> {/* Added negative margin on mobile */}
                                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                        Our Work Guarantee ان شاء الله
                                    </h4>
                                    <p className="text-gray-700 dark:text-gray-300 relative left-[-8px] sm:left-0"> {/* Shift text left on mobile */}
                                        We work for <span className="font-bold text-indigo-600 dark:text-indigo-400">quality, not quantity</span>.
                                        If more students don't come to your program <span className="font-bold">despite taking real action </span>
                                        towards getting more students, we will continue to work with you
                                        <span className="font-bold text-teal-300 dark:text-indigo-400"> for free</span> until you see results
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded-lg border border-indigo-100 dark:border-indigo-800">
                                <div className="text-center">
                                    <p className="text-3xl font-arabic text-gray-800 dark:text-indigo-200 mb-2 leading-loose md:leading-normal">
                                        ﴾وَأَحْسِنُوٓا۟ إِنَّ ٱللَّهَ يُحِبُّ ٱلْمُحْسِنِينَ اللَّهِ﴿
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 italic mt-4">
                                        "And do good; indeed, Allah loves the doers of good."
                                    </p>
                                    <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
                                        Surah Al-Baqarah (2:195)
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Closing Deal Section */}
                    <motion.div
                        className="mt-10 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border border-emerald-300/30 dark:border-emerald-500/30 rounded-xl p-6 sm:p-8 text-center relative overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400/50 to-emerald-400/0"></div>
                        <div className="absolute top-6 -left-10 w-20 h-20 rounded-full bg-emerald-400/10 blur-xl"></div>
                        <div className="absolute bottom-4 -right-8 w-24 h-24 rounded-full bg-emerald-400/10 blur-xl"></div>

                        <div className="relative z-10">
                            {/* Header - Stacked on mobile */}
                            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
                                <div className="bg-emerald-500/10 p-2 sm:p-3 rounded-full mb-3 sm:mb-0 sm:mr-3">
                                    <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-300" />
                                </div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                                    We want to <span className='text-emerald-300'>see you grow</span> باذن الله
                                </h3>
                            </div>

                            <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
                                Our <span className="font-bold text-emerald-300">complete package</span> gives you everything you need:
                            </p>

                            {/* Package Details - Stacked on mobile */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mb-6 sm:mb-8">
                                {/* Professional Website Card */}
                                <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-400/20 hover:border-emerald-400/40 transition-all">
                                    <div className="flex flex-col sm:flex-row items-center justify-center mb-3">
                                        <LayoutTemplate className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-300 sm:mr-2 mb-2 sm:mb-0" />
                                        <h4 className="text-lg sm:text-xl font-bold text-white text-center sm:text-left">
                                            Professional Website
                                        </h4>
                                    </div>
                                    <ul className="text-left text-sm sm:text-base text-slate-300 space-y-2 mt-3 sm:mt-4">
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                                            <span>Showcase your teaching expertise</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                                            <span>Accept bookings & payments easily</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                                            <span>Display student testimonials</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Social Media Plan Card */}
                                <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-400/20 hover:border-emerald-400/40 transition-all">
                                    <div className="flex flex-col sm:flex-row items-center justify-center mb-3">
                                        <Share2 className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-300 sm:mr-2 mb-2 sm:mb-0" />
                                        <h4 className="text-lg sm:text-xl font-bold text-white text-center sm:text-left">
                                            Strategic Social Media Plan
                                        </h4>
                                    </div>
                                    <ul className="text-left text-sm sm:text-base text-slate-300 space-y-2 mt-3 sm:mt-4">
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                                            <span>Content strategy tailored to your audience</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                                            <span>Platform-specific engagement techniques</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                                            <span>Consistent branding across all platforms</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Benefits Section */}
                            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-4 sm:mb-6 px-2">
                                Together, these give you the power to:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto mb-6 sm:mb-8">
                                {[
                                    "Attract serious students",
                                    "Establish authority",
                                    "Grow sustainably"
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="bg-emerald-500/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-emerald-400/20 hover:border-emerald-400/40 transition-all"
                                        whileHover={{ y: -3 }}
                                    >
                                        <div className="text-sm sm:text-base text-white font-medium text-center">
                                            {item}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <motion.button
                                className="cursor-pointer bg-gradient-to-r from-emerald-400 to-emerald-500 text-slate-200 font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 mt-2 flex items-center justify-center mx-auto text-sm sm:text-base"
                                whileHover={{ scale: 1.01 }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const target = document.querySelector('#contact-section');
                                    if (target) {
                                        target.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                <span>Get Started Today</span>
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                            </motion.button>
                        </div>
                    </motion.div>

                    <div className="mt-8 text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        *Educators who complement social media with professional websites typically see increased student interest and enrollment.
                        Actual results vary and come with Allah's permission - we provide the means while He provides the growth.
                    </div>
                </div>

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
                                    Ready to Reach More Students Starting Today?
                                </h3>
                                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                    Everyone is different. Let's make a plan that works for you ان شاء الله
                                </p>
                            </div>

                            {/* Contact options */}
                            <div className="flex flex-col items-center gap-6 mb-8 max-w-4xl mx-auto">
                                {/* Book Call */}
                                <motion.div
                                    className="w-full lg:w-1/2 flex flex-col items-center"
                                    whileHover={{ y: -2 }}
                                >
                                    <a
                                        href="https://cal.com/yusr.solutions/free-discovery-call"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full"
                                    >
                                        <div className="cursor-pointer w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white px-6 py-5 rounded-xl text-md font-semibold transition-all flex flex-col items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                                            <div className="bg-white/20 p-3 rounded-full">
                                                <Calendar className="w-6 h-6" />
                                            </div>
                                            <span>Book a Discovery Call</span>
                                        </div>
                                    </a>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">Help Us Discover Your Vision ان شاء الله</p>
                                </motion.div>
                            </div>

                            {/* Benefits footer */}
                            <div className="mt-12 mb-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl border border-emerald-200 dark:border-emerald-700 max-w-2xl mx-auto">
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div className="text-emerald-800 dark:text-emerald-200 font-bold flex items-center gap-2">
                                        <ArrowRight className="w-5 h-5" />
                                        <span>Reach more students</span>
                                    </div>
                                    <div className="text-emerald-800 dark:text-emerald-200 font-bold flex items-center gap-2">
                                        <ArrowRight className="w-5 h-5" />
                                        <span>Show your value</span>
                                    </div>
                                    <div className="text-emerald-800 dark:text-emerald-200 font-bold flex items-center gap-2">
                                        <ArrowRight className="w-5 h-5" />
                                        <span>Grow your teaching</span>
                                    </div>
                                </div>
                            </div>

                            {/* Closing note */}
                            <motion.div
                                className="max-w-3xl mx-auto px-6 py-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl shadow-sm"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <p className="text-3xl font-arabic mb-4 text-emerald-800 dark:text-emerald-200 leading-loose md:leading-normal">﴾ فَإِذَا قُضِيَتِ الصَّلَاةُ فَانْتَشِرُوا فِي الْأَرْضِ وَابْتَغُوا مِنْ فَضْلِ اللَّهِ﴿</p>
                                <p className="text-lg text-emerald-700 dark:text-emerald-300 italic">
                                    "And when the prayer has been concluded, disperse within the land and seek from the bounty of Allāh..."
                                </p>
                                <p className="mt-2 text-slate-600 dark:text-slate-400">- Al-Jumu'ah (62:10)</p>
                            </motion.div>
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