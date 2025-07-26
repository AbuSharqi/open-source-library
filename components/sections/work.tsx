import {
    Layout, CheckCircle, ExternalLink, MessageCircle, Plus
} from 'lucide-react';
import { motion } from 'framer-motion'
import DemoScreenshot from '@/lib/demo-screenshot.png'
import Image from 'next/image';
import Link from 'next/link';

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

export default function WorkSection() {
    return (
        <motion.section
            className="mx-auto w-full py-16 px-4 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800"
            variants={containerVariants}
            aria-labelledby="our-work-heading"
        >
            <div className="max-w-6xl mx-auto">
                <motion.div className="text-center mb-12" variants={itemVariants}>
                    <motion.h2
                        id="our-work-heading"
                        className="text-3xl sm:text-4xl font-bold mb-4"
                        variants={itemVariants}
                    >
                        <span className="block mb-2 bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
                            Our Recent Work
                        </span>
                        <span className="text-xl sm:text-2xl font-normal text-gray-600 dark:text-gray-300">
                            See How We Transform Islamic Education Online
                        </span>
                    </motion.h2>
                    <motion.p
                        className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
                        variants={itemVariants}
                    >
                        Each website we create is custom-built to showcase an educator's unique value and connect them with serious students.
                    </motion.p>
                </motion.div>

                {/* Demo Site Showcase */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Image Preview */}
                    <Link
                        href="https://abusharqi.github.io/single-page-demo/"
                        target="_blank" // Opens in new tab
                        rel="noopener noreferrer" // Security best practice
                    >
                        <motion.div
                            className="cursor-pointer group relative rounded-xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="relative aspect-video w-full h-auto min-h-[300px]">
                                <Image
                                    src={DemoScreenshot}
                                    alt="Quranic Studies Academy Website Preview"
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                                    quality={90}
                                    priority={true}
                                />

                                {/* Gradient overlay - stronger at bottom for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                                {/* Content overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                                    <h3 className="text-xl md:text-2xl font-bold">Al-Hidaya Institute</h3>
                                    <p className="text-gray-200 mt-1">Professional Tajweed & Memorization Program</p>
                                    <p className="text-gray-200 mt-1>">(For Demonstration Purposes Only)</p>
                                </div>

                                {/* Hover effect */}
                                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />
                            </div>
                        </motion.div>
                    </Link>

                    {/* Content */}
                    <div>
                        <div className="mb-6">
                            <div className="inline-block bg-gradient-to-r from-purple-600 to-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                                Featured Project
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                                Your Future Website ان شاء الله
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                This demo showcases how we can build a Quran teaching business a professional easy-to-understand website. Key features include:
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                {[
                                    "Stunning homepage",
                                    "Detailed program descriptions",
                                    "Teacher credentials showcase",
                                    "Testimonials section",
                                    "Clear Payment Representation",
                                    "Mobile-responsive design",
                                ].map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 mr-2 flex-shrink-0" />
                                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://abusharqi.github.io/single-page-demo/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none bg-gradient-to-r from-purple-600 to-teal-500 text-white hover:from-purple-700 hover:to-teal-600 h-11 px-6 py-3"
                            >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Visit Live Demo
                            </a>

                            <Link
                                href={'#contact-section'}
                                className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const target = document.querySelector('#contact-section');
                                    if (target) {
                                        target.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                <a
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 h-11 px-6 py-3"
                                >
                                    <MessageCircle className="cursor-pointer w-4 h-4 mr-2" />
                                    Request Your Own
                                </a>
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Additional projects placeholder */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
                        More Projects Coming Soon with Allah's Permission
                    </h3>
                    <div className="flex justify-center gap-6">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl w-24 h-24 flex items-center justify-center">
                                <Plus className="w-8 h-8 text-gray-400" />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.section >
    )
}