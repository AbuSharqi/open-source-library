import {
    Layout, Type, Heading, Subtitles, Target, PackageCheck,
    BadgeCheck, Star, CreditCard, HelpCircle, XCircle, CheckCircle, ArrowDown, Rocket,
    GitMerge, Smartphone, ShieldCheck, Handshake
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
    ArrowDown: ArrowDown,
    Rocket: Rocket,
    Smartphone: Smartphone,
    GitMerge: GitMerge,
    ShieldCheck: ShieldCheck,
    Handshake: Handshake
};

// Then create the type based on the icons object
type IconKey = keyof typeof icons;

// Update your ProcessCardProps interface
interface ProcessCardProps {
    number: number;
    title: string;
    description: string;
    titleColor: string;
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
        titleColor,
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
                            <CardTitle className={`flex items-center gap-2 text-lg font-bold ${titleColor}`}>
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
            className="mx-auto w-full py-16 px-4 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
            variants={containerVariants}
        >
            <div className="max-w-6xl mx-auto">
                <motion.div className="text-center mb-12" variants={itemVariants}>
                    <motion.h2
                        id="process-heading"
                        className="text-3xl sm:text-4xl font-bold mb-4"
                        variants={itemVariants}
                    >
                        <span className="block mb-2 bg-gradient-to-r from-teal-600 to-blue-500 bg-clip-text text-transparent">
                            Our App Development Approach
                        </span>
                        <span className="text-xl sm:text-2xl font-normal text-gray-600 dark:text-gray-300">
                            Designed Specifically for Hajj & Umrah Agencies
                        </span>
                    </motion.h2>
                    <motion.p
                        className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
                        variants={itemVariants}
                    >
                        We focus on genuine improvements that enhance your operational efficiency and pilgrim experience
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Step 1: Design that Speaks */}
                    <ProcessCard
                        number={1}
                        title="Design That Speaks"
                        description="We create <strong class='text-teal-600 dark:text-teal-400'>clear, inviting interfaces</strong> where pilgrims instantly know where to go and how to interact"
                        titleColor="bg-gradient-to-br text-teal-600 dark:text-teal-400 bg-clip-text text-transparent"
                        benefit="Improves pilgrim engagement"
                        icon="Layout"
                        delay={0.1}
                        color="from-teal-500 to-teal-600"
                    />

                    {/* Step 2: Problem Solution */}
                    <ProcessCard
                        number={2}
                        title="Problem Solution"
                        description="We use <strong class='text-blue-600 dark:text-blue-400'>modern app technology</strong> to ease pilgrim struggles and build an easy-going connection"
                        titleColor="bg-gradient-to-br text-blue-600 dark:text-blue-400 bg-clip-text text-transparent"
                        benefit="Reduces pilgrim friction"
                        icon="Smartphone"
                        delay={0.2}
                        color="from-blue-500 to-blue-600"
                    />

                    {/* Step 3: Seamless Integration */}
                    <ProcessCard
                        number={3}
                        title="Seamless Integration"
                        description="We build your custom app to work smoothly with <strong class='text-green-600 dark:text-green-400'>existing workflows</strong>, making adjustments easy and efficient"
                        titleColor="bg-gradient-to-br text-green-600 dark:text-green-400 bg-clip-text text-transparent"
                        benefit="Enhances team productivity"
                        icon="GitMerge"
                        delay={0.3}
                        color="from-green-500 to-green-600"
                    />

                    {/* Step 4: Robust Security & Privacy */}
                    <ProcessCard
                        number={4}
                        title="Robust Security & Privacy"
                        description="We prioritize <strong class='text-teal-600 dark:text-teal-400'>protection of pilgrim data</strong> with top-tier security measures"
                        titleColor="bg-gradient-to-br text-teal-600 dark:text-teal-400 bg-clip-text text-transparent"
                        benefit="Ensures trust and compliance"
                        icon="ShieldCheck"
                        delay={0.4}
                        color="from-teal-500 to-blue-500"
                    />

                    {/* Step 5: Ongoing Partnership */}
                    <ProcessCard
                        number={5}
                        title="Ongoing Partnership & Growth"
                        description="We offer <strong class='text-blue-600 dark:text-blue-400'>continuous support</strong> and updates to ensure your app evolves with your needs"
                        titleColor="bg-gradient-to-br text-blue-600 dark:text-blue-400 bg-clip-text text-transparent"
                        benefit="Future-proofs your investment"
                        icon="Handshake"
                        delay={0.5}
                        color="from-blue-500 to-green-500"
                    />
                </div>

                {/* Impact Statement */}
                <motion.div
                    className="mt-16 text-center"
                    variants={itemVariants}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.h3 className="text-2xl sm:text-3xl font-bold mb-10">
                        <span className="bg-gradient-to-r from-teal-600 to-blue-500 bg-clip-text text-transparent">
                            The Transformational Impact of Our App Solution
                        </span>
                        <span className="block mt-2 text-3xl text-emerald-600">إن شاء الله</span>
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Without App Solution */}
                        <motion.div
                            className="bg-gradient-to-br from-rose-50 to-orange-50 dark:from-rose-900/20 dark:to-orange-900/20 p-6 rounded-2xl border border-rose-200 dark:border-rose-800"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: .5 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-rose-600 dark:text-rose-400 font-bold text-xl mb-4">Without An App Solution</div>
                            <ul className="space-y-4 text-left text-gray-700 dark:text-gray-300">
                                <li className="flex items-start">
                                    <XCircle className="w-5 h-5 text-rose-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-rose-600">Administrative Overload:</strong> Your team buried under paperwork and manual tasks, leading to burnout
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <XCircle className="w-5 h-5 text-rose-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-rose-600">Increased Error Risk:</strong> Costly mistakes in documents and bookings due to manual processes
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <XCircle className="w-5 h-5 text-rose-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-rose-600">Fragmented Communication:</strong> Information scattered across emails and messages, causing delays
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <XCircle className="w-5 h-5 text-rose-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-rose-600">Limited Scalability:</strong> Growth requires proportional staff increases, cutting into profits
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <XCircle className="w-5 h-5 text-rose-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-rose-600">Reactive Operations:</strong> Constantly solving problems instead of proactive management
                                    </div>
                                </li>
                            </ul>
                        </motion.div>

                        {/* With App Solution */}
                        <motion.div
                            className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 p-6 rounded-2xl border border-teal-200 dark:border-teal-800"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-teal-600 dark:text-teal-400 font-bold text-xl mb-4">With Our App Solution</div>
                            <ul className="space-y-4 text-left text-gray-700 dark:text-gray-300">
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-teal-600">Streamlined Efficiency:</strong> Automate repetitive tasks and free your team for higher-value service
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-teal-600">Enhanced Accuracy:</strong> Digital validation ensures precise documents and regulatory compliance
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-teal-600">Empowered Pilgrims:</strong> 24/7 access to information reduces inquiries and improves experience
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-teal-600">Sustainable Growth:</strong> Scale operations without proportional staff increases
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-teal-600">Strategic Command:</strong> Real-time data enables proactive decisions and competitive advantage
                                    </div>
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* CTA */}

                    <motion.div
                        className="mt-12 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: .5 }}
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
                                See what your app can look like ان شاء الله with our <strong>live demo</strong>
                            </h3>
                            <ArrowDown className="w-8 h-8 text-teal-500 animate-bounce" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}