import { motion } from 'framer-motion'
import { Globe, Rocket, BarChart4, CalendarCheck, UserCheck, ArrowRight, Clock } from 'lucide-react';
import Image from 'next/image';
import { Github, Link } from 'lucide-react';
import AuthorDate from '../ui/author-date';
import ArabicLandingPageImage from '@/lib/images/arabic-landing-page.png'
import QuranLandingPageImage from '@/lib/images/quran-landing-page.png'

interface GridItem {
    Image: string;
    Title: string;
    WebsiteURL: string;
    GithubURL: string;
}

const items: GridItem[] = [
    {
        Image: QuranLandingPageImage.src,
        Title: "Landing Page for Quran Educators",
        WebsiteURL: "https://abusharqi.github.io/arabic-landing-page-2/",
        GithubURL: "https://github.com/AbuSharqi/arabic-landing-page-2",
    },
    {
        Image: ArabicLandingPageImage.src,
        Title: "Landing Page for Arabic Educators",
        WebsiteURL: "https://abusharqi.github.io/arabic-landing-page/",
        GithubURL: "https://github.com/AbuSharqi/arabic-landing-page",
    }
];

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

interface GridItemProps {
    item: GridItem;
}

const GridCard: React.FC<GridItemProps> = ({ item }) => {
    return (
        <motion.div
            className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 w-full min-w-[280px] sm:min-w-[320px] md:min-w-[360px]"
            variants={itemVariants}
        >
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-slate-900">
                <Image
                    src={item.Image}
                    alt="Landscape Banner"
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-300 opacity-75 group-hover:opacity-100 group-hover:scale-110"
                />
            </div>
            <div className="p-4 flex flex-col items-center justify-center space-y-3">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                    {item.Title}
                </h3>
                <a
                    href={item.WebsiteURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                    <Link className="w-4 h-4 mr-2" />
                    View Website
                </a>
                <a
                    href={item.GithubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub Source
                </a>
            </div>
        </motion.div>
    );
};

export default function AssetsSection() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-transparent p-4">
            <div className="max-w-6xl w-full">
                <motion.section
                    className="mx-auto flex flex-col gap-8 py-12 px-4 w-full bg-slate-800 rounded-xl"
                    variants={containerVariants}
                    aria-labelledby="main-heading"
                >
                    <AuthorDate
                        dateTime={"2025-09-15"}
                        dateText={"September 9th, 2025"}
                    />
                    <div className="text-center w-full">
                        {/* Project Grid */}
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            {items.map((item, index) => (
                                <GridCard key={index} item={item} />
                            ))}
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
                                <span>How do I set this up?</span>
                                <ArrowRight className="w-5 h-5 ml-3" />
                            </button>
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}