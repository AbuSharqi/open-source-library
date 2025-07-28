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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
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
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <motion.div
                        className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 border border-indigo-200 dark:border-gray-600 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
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
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                            Our Work Guarantee ان شاء الله
                                        </h4>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            We work for <span className="font-bold text-indigo-600 dark:text-indigo-400">quality, not quantity</span>.
                                            If more students don't come to your program <span className="font-bold">despite taking real action </span>
                                            towards getting more students, we will continue to work with you
                                            <span className="font-bold text-teal-300 dark:text-indigo-400"> for free</span> until you see results
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded-lg border border-indigo-100 dark:border-indigo-800">
                                    <div className="text-center">
                                        <p className="text-2xl font-arabic leading-relaxed text-gray-800 dark:text-gray-200 mb-2">
                                            وَأَحْسِنُوٓا۟ إِنَّ ٱللَّهَ يُحِبُّ ٱلْمُحْسِنِينَ
                                        </p>
                                        <p className="text-gray-700 dark:text-gray-300 italic mb-1">
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
                            className="mt-10 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border border-emerald-300/30 dark:border-emerald-500/30 rounded-xl p-8 text-center relative overflow-hidden"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            {/* Decorative elements */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400/50 to-emerald-400/0"></div>
                            <div className="absolute top-6 -left-10 w-20 h-20 rounded-full bg-emerald-400/10 blur-xl"></div>
                            <div className="absolute bottom-4 -right-8 w-24 h-24 rounded-full bg-emerald-400/10 blur-xl"></div>

                            <div className="relative z-10">
                                <div className="flex items-center justify-center mb-6">
                                    <div className="bg-emerald-500/10 p-3 rounded-full mr-3">
                                        <Rocket className="w-10 h-10 text-emerald-300" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                                        We want to <span className='text-emerald-300'>see you grow</span> باذن الله
                                    </h3>
                                </div>

                                <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-8">
                                    Our <span className="font-bold text-emerald-300">complete package</span> gives you everything you need:
                                </p>

                                {/* Package Details */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
                                    <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/20 hover:border-emerald-400/40 transition-all">
                                        <div className="flex items-center justify-center mb-3">
                                            <LayoutTemplate className="w-8 h-8 text-emerald-300 mr-2" />
                                            <h4 className="text-xl font-bold text-white">Professional Website</h4>
                                        </div>
                                        <ul className="text-left text-slate-300 space-y-2 mt-4">
                                            <li className="flex items-start">
                                                <Check className="w-5 h-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                                                <span>Showcase your teaching expertise</span>
                                            </li>
                                            <li className="flex items-start">
                                                <Check className="w-5 h-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                                                <span>Accept bookings & payments easily</span>
                                            </li>
                                            <li className="flex items-start">
                                                <Check className="w-5 h-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                                                <span>Display student testimonials</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/20 hover:border-emerald-400/40 transition-all">
                                        <div className="flex items-center justify-center mb-3">
                                            <Share2 className="w-8 h-8 text-emerald-300 mr-2" />
                                            <h4 className="text-xl font-bold text-white">Strategic Social Media Plan</h4>
                                        </div>
                                        <ul className="text-left text-slate-300 space-y-2 mt-4">
                                            <li className="flex items-start">
                                                <Check className="w-5 h-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                                                <span>Content strategy tailored to your audience</span>
                                            </li>
                                            <li className="flex items-start">
                                                <Check className="w-5 h-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                                                <span>Platform-specific engagement techniques</span>
                                            </li>
                                            <li className="flex items-start">
                                                <Check className="w-5 h-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                                                <span>Consistent branding across all platforms</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6">
                                    Together, these give you the power to:
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
                                    {[
                                        "Attract serious students consistently",
                                        "Establish yourself as an authority",
                                        "Grow your teaching business sustainably"
                                    ].map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            className="bg-emerald-500/10 backdrop-blur-sm rounded-lg p-4 border border-emerald-400/20 hover:border-emerald-400/40 transition-all"
                                            whileHover={{ y: -5 }}
                                        >
                                            <div className="text-white font-medium">{item}</div>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.button
                                    className="cursor-pointer bg-gradient-to-r from-emerald-400 to-emerald-500 text-slate-200 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 mt-2 flex items-center justify-center mx-auto"
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
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </motion.button>
                            </div>
                        </motion.div>

                        <div className="mt-8 text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            *Educators who complement social media with professional websites typically see increased student interest and enrollment.
                            Actual results vary and come with Allah's permission - we provide the means while He provides the growth.
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    id='contact-section'
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                        Ready to Reach More Students Starting Today?
                    </h3>

                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 max-w-xl mx-auto">
                        {/* Left Column: Message Buttons */}
                        <div className="flex flex-col gap-4 w-full sm:w-auto">
                            {/* Facebook Message Button */}
                            <a
                                href="https://m.me/61551850978373"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1"
                            >
                                <Button className="cursor-pointer w-full bg-[#1877F2] hover:bg-[#166FE5] text-white px-6 py-5 text-md font-semibold transition-all flex items-center justify-center gap-2">
                                    <MessageCircle className="w-5 h-5" />
                                    Message Us on Facebook
                                </Button>
                            </a>

                            {/* Email Label with Dropdown Indicator */}
                            <div className="flex-1 flex flex-col">
                                <div className="cursor-pointer w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 px-6 py-5 text-md font-semibold transition-all flex justify-center">
                                    <div className="flex items-center gap-2"> {/* Inner flex container */}
                                        <Mail className="w-5 h-5" />
                                        <span>Email Us</span>
                                        <ChevronDown className="w-4 h-4" />
                                    </div>
                                </div>
                                {/* Email Text Display */}
                                <div className="text-center mt-2 text-gray-600 dark:text-gray-200 font-bold">
                                    noelramadan06@gmail.com
                                </div>
                            </div>
                        </div>

                        {/* Vertical Divider - Center Aligned */}
                        <div className="hidden sm:flex flex-col items-center justify-center">
                            <div className="h-16 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>
                            <span className="text-gray-500 dark:text-gray-400 text-sm py-2">OR</span>
                            <div className="h-16 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>
                        </div>
                        <div className="sm:hidden my-2 text-gray-500 dark:text-gray-400 w-full text-center">OR</div>

                        {/* Book Call Button - Vertically Centered */}
                        <div className="w-full sm:w-auto flex items-center justify-center h-full">
                            <a
                                href="https://cal.com/yusr.solutions/free-discovery-call"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full"
                            >
                                <Button className="cursor-pointer w-full bg-gradient-to-r from-purple-600 to-teal-500 text-white px-6 py-5 text-md font-semibold hover:from-purple-700 hover:to-teal-600 transition-all flex items-center justify-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    Book a Discovery Call
                                </Button>
                            </a>
                        </div>
                    </div>

                    <div className="mt-4 text-gray-600 dark:text-gray-300">
                        Reach more students • Show your value • Grow your teaching
                    </div>

                    <div className="mt-8 flex flex-col items-center">
                        <p className="text-gray-500 dark:text-gray-400 mb-4">
                            Choose what works best for you:
                        </p>
                        <div className="flex gap-6">
                            <div className="flex items-center gap-2">
                                <MessageCircle className="w-4 h-4 text-[#1877F2]" />
                                <span>Quick questions</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-purple-500" />
                                <span>Detailed plan</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}