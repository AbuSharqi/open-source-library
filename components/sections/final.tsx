import { motion } from 'framer-motion'
import { Button } from '../ui/button';
import { MessageCircle, Calendar, ChevronDown, Mail } from 'lucide-react';
import {
    XCircle, CheckCircle, DollarSign, Clock, AlertCircle, Turtle,
    ShieldOff, Headphones, Zap, Search, PiggyBank, Gauge, Code,
    LifeBuoy, ArrowRight, EyeOff, MessageSquare, UserX, Award, CreditCard, Users, Globe, ArrowUpRight
} from 'lucide-react';

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
                <motion.div
                    className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 border border-indigo-200 dark:border-gray-600 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
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

                    <div className="bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 rounded-lg p-6 border border-teal-200 dark:border-teal-700">
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                            What we promise for you باذن الله :
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

                    <div className="mt-6 text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        *Educators who complement social media with professional websites typically see increased student interest and enrollment.
                        Actual results vary and come with Allah's permission - we provide the means while He provides the growth.
                    </div>
                </motion.div>

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
                                    Book a Free Discovery Call
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