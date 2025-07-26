import {
    Layout, Type, Heading, Subtitles, Target, PackageCheck,
    BadgeCheck, Star, CreditCard, HelpCircle, XCircle, CheckCircle, ArrowDown
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardHeader, CardTitle } from '../ui/card';
import { LucideIcon } from 'lucide-react';

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
    Layout: Layout,
    Type: Type,
    Heading: Heading,
    Subtitles: Subtitles,
    Target: Target,
    PackageCheck: PackageCheck,
    BadgeCheck: BadgeCheck,
    Star: Star,
    CreditCard: CreditCard,
    HelpCircle: HelpCircle,
    XCircle: XCircle,
    CheckCircle: CheckCircle,
    ArrowDown: ArrowDown
};

// Then create the type based on the icons object
type IconKey = keyof typeof icons;

// Update your ProcessCardProps interface
interface ProcessCardProps {
    number: number;
    title: string;
    description: string;
    benefit: string;
    icon: IconKey; // Use the IconKey type here
    delay?: number;
    color?: string;
    fullWidth?: boolean;
}

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: delay * 0.2,
            duration: 0.5
        }
    })
};

export default function StepsSection() {
    const ProcessCard = ({
        number,
        title,
        description,
        benefit,
        icon,
        delay = 0,
        color,
        fullWidth = false
    }: ProcessCardProps) => {
        // Ensure icon exists in the icons object
        const LucideIcon = icons[icon];

        return (
            <motion.div
                variants={cardVariants}
                className={`${fullWidth ? '' : 'h-full'}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={delay}
            >
                <Card className={`h-full hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 overflow-hidden ${fullWidth ? 'lg:min-h-[200px]' : ''}`}>
                    <div className={`h-2 bg-gradient-to-r ${color}`}></div>
                    <CardHeader className="flex flex-row items-start gap-4 p-6">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-xl">{number}</span>
                        </div>
                        <div className="min-w-0">
                            <CardTitle className="flex items-center gap-2 text-lg font-bold">
                                <LucideIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                {title}
                            </CardTitle>
                            <p
                                className="text-gray-600 dark:text-gray-300 mt-2"
                                dangerouslySetInnerHTML={{ __html: description }}
                            />
                            <div className="mt-3">
                                <span className="inline-block bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 px-3 py-1 rounded-full text-sm font-semibold text-gray-800 dark:text-gray-200">
                                    {benefit}
                                </span>
                            </div>
                        </div>
                    </CardHeader>
                </Card>
            </motion.div>
        );
    };

    return (
        <motion.section
            aria-labelledby="process-heading"
            className="mx-auto w-full py-16 px-4 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800"
            variants={containerVariants}
        >
            <div className="max-w-6xl mx-auto">
                <motion.div className="text-center mb-12" variants={itemVariants}>
                    <motion.h2
                        id="process-heading"
                        className="text-3xl sm:text-4xl font-bold mb-4"
                        variants={itemVariants}
                    >
                        <span className="block mb-2 bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
                            Our Website Creation Process
                        </span>
                        <span className="text-xl sm:text-2xl font-normal text-gray-600 dark:text-gray-300">
                            Designed Specifically for Islamic Educators
                        </span>
                    </motion.h2>
                    <motion.p
                        className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
                        variants={itemVariants}
                    >
                        We focus on genuine improvements that enhance your online presence and teaching impact
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Step Cards with Qualitative Benefits */}
                    <ProcessCard
                        number={1}
                        title="Design That Speaks"
                        description="We create <strong class='text-purple-600 dark:text-purple-400'>clear, inviting interfaces</strong> where visitors instantly know where to click"
                        benefit="Improves visitor engagement"
                        icon="Layout"
                        delay={0.1}
                        color="from-purple-500 to-indigo-500"
                    />
                    <ProcessCard
                        number={2}
                        title="Strategic Words"
                        description="We carefully craft <strong class='text-indigo-600 dark:text-indigo-400'>effective messaging</strong> that connects with potential students"
                        benefit="Enhances communication"
                        icon="Type"
                        delay={0.2}
                        color="from-indigo-500 to-blue-500"
                    />
                    <ProcessCard
                        number={3}
                        title="Compelling Header"
                        description="We create <strong class='text-blue-600 dark:text-blue-400'>attention-grabbing headlines</strong> that make visitors stay"
                        benefit="Increases visitor retention"
                        icon="Heading"
                        delay={0.3}
                        color="from-blue-500 to-cyan-500"
                    />
                    <ProcessCard
                        number={4}
                        title="Clear Subtitle"
                        description="We expand on your promise with <strong class='text-cyan-600 dark:text-cyan-400'>supporting details</strong> that build trust"
                        benefit="Strengthens your credibility"
                        icon="Subtitles"
                        delay={0.4}
                        color="from-cyan-500 to-teal-500"
                    />
                    <ProcessCard
                        number={5}
                        title="Problem Solution"
                        description="We show deep understanding of <strong class='text-teal-600 dark:text-teal-400'>student struggles</strong> to build connection"
                        benefit="Builds stronger relationships"
                        icon="Target"
                        delay={0.5}
                        color="from-teal-500 to-emerald-500"
                    />
                    <ProcessCard
                        number={6}
                        title="Value Proposition"
                        description="We present your solution as <strong class='text-emerald-600 dark:text-emerald-400'>exactly what they need</strong>"
                        benefit="Clearly communicates your value"
                        icon="PackageCheck"
                        delay={0.6}
                        color="from-emerald-500 to-green-500"
                    />
                    <ProcessCard
                        number={7}
                        title="Proof & Credentials"
                        description="We showcase your <strong class='text-green-600 dark:text-green-400'>qualifications</strong> and program quality"
                        benefit="Establishes your authority"
                        icon="BadgeCheck"
                        delay={0.7}
                        color="from-green-500 to-lime-500"
                    />
                    <ProcessCard
                        number={8}
                        title="Student Testimonials"
                        description="We feature <strong class='text-lime-600 dark:text-lime-400'>success stories</strong> that build social proof"
                        benefit="Builds trust through experience"
                        icon="Star"
                        delay={0.8}
                        color="from-lime-500 to-yellow-500"
                    />
                    <ProcessCard
                        number={9}
                        title="Transparent Pricing"
                        description="We organize <strong class='text-yellow-600 dark:text-yellow-400'>easy-to-understand</strong> packages"
                        benefit="Reduces student hesitation"
                        icon="CreditCard"
                        delay={0.9}
                        color="from-yellow-500 to-amber-500"
                    />
                </div>

                {/* Pricing & FAQ Row */}
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mt-6">
                    <ProcessCard
                        number={10}
                        title="FAQ Section"
                        description="We anticipate and answer <strong class='text-amber-600 dark:text-amber-400'>all potential questions</strong>"
                        benefit="Saves you time on repeated inquiries"
                        icon="HelpCircle"
                        delay={1.0}
                        color="from-amber-500 to-orange-500"
                        fullWidth
                    />
                </div>

                {/* Comparison Section - Qualitative Only */}
                <motion.div
                    className="mt-16 text-center"
                    variants={itemVariants}
                    transition={{ delay: 1.2 }}
                    viewport={{ once: true }}
                >
                    <motion.h3 className="text-2xl sm:text-3xl font-bold mb-10">
                        <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
                            The Impact of Following This Process ان شاء الله
                        </span>
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Without Process */}
                        <motion.div
                            className="bg-gradient-to-br from-rose-50 to-orange-50 dark:from-rose-900/20 dark:to-orange-900/20 p-6 rounded-2xl border border-rose-200 dark:border-rose-800"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4 }}
                        >
                            <div className="text-rose-600 dark:text-rose-400 font-bold text-xl mb-4">Without Professional Guidance</div>
                            <ul className="space-y-3 text-left text-gray-700 dark:text-gray-300">
                                <li className="flex items-start">
                                    <XCircle className="w-5 h-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span><strong className="text-rose-600">Visitors quickly leave</strong> without engaging</span>
                                </li>
                                <li className="flex items-start">
                                    <XCircle className="w-5 h-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span><strong className="text-rose-600">Unclear messaging</strong> fails to connect with students</span>
                                </li>
                                <li className="flex items-start">
                                    <XCircle className="w-5 h-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span><strong className="text-rose-600">Few students enroll</strong> despite your expertise</span>
                                </li>
                                <li className="flex items-start">
                                    <XCircle className="w-5 h-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span><strong className="text-rose-600">Constant questions</strong> about pricing and process</span>
                                </li>
                                <li className="flex items-start">
                                    <XCircle className="w-5 h-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span><strong className="text-rose-600">Limited growth</strong> despite teaching quality</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* With Process */}
                        <motion.div
                            className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 p-6 rounded-2xl border border-teal-200 dark:border-teal-800"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-teal-600 dark:text-teal-400 font-bold text-xl mb-4">With Our Professional Process</div>
                            <ul className="space-y-3 text-left text-gray-700 dark:text-gray-300">
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span><strong className="text-teal-600">Visitors stay longer</strong> to explore your content</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span><strong className="text-teal-600">Clear messaging</strong> converts visitors into students</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span><strong className="text-teal-600">Consistent enrollment</strong> of committed students</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span><strong className="text-teal-600">Self-service options</strong> save you time</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span><strong className="text-teal-600">Sustainable growth</strong> that supports your mission</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Disclaimer & CTA */}
                    <motion.div
                        className="mt-12 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-8">
                            <p className="text-gray-600 dark:text-gray-300 italic">
                                These outcomes are based on implementing professional website best practices.
                                Actual results come with Allah's permission as we provide the means while He provides the results.
                            </p>
                        </div>

                        <motion.div
                            className="flex flex-col items-center"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                                Watch our video explanation to see how it works
                            </h3>
                            <ArrowDown className="w-8 h-8 text-teal-500 animate-bounce" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}