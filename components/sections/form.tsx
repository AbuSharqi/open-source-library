import {
    Layout, CheckCircle, ExternalLink, MessageCircle, Plus, ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion'
import DemoScreenshot from '@/lib/images/app-demo-screenshot.png'
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

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

export default function FormSection() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    // Check localStorage on component mount
    useEffect(() => {
        const submitted = localStorage.getItem('formSubmitted');
        if (submitted === 'true') {
            setFormSubmitted(true);
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Formspree endpoint - replace with your actual Formspree ID
            const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                localStorage.setItem('formSubmitted', 'true');
                setFormSubmitted(true);
            }
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.section
            className="mx-auto w-full py-5 px-4 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800"
            variants={containerVariants}
            aria-labelledby="our-work-heading"
        >
            <div className="max-w-6xl mx-auto">
                {/* Demo Site Showcase */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-5"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Image Preview */}
                    <Link
                        href="https://https://yusr-solutions.github.io/app-demo/"
                        target="_blank"
                        rel="noopener noreferrer"
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

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                                {/* Content overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                                    <h3 className="text-xl md:text-2xl font-bold">Pilgrim Path Demo</h3>
                                    <p className="text-gray-200 mt-1">Pilgrim Journey Hub</p>
                                    <p className="text-gray-200 mt-1">(For Demonstration Purposes Only)</p>
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
                                Your Future App ان شاء الله
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                This demo showcases how we can make the exact system we use to make your workflow seemless. It includes:
                            </p>

                            {formSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-700"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <CheckCircle className="w-12 h-12 text-emerald-500 mb-4" />
                                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                            Access Granted!
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                                            Thank you for your submission. You can now access the demo.
                                        </p>
                                        <a
                                            href="https://https://yusr-solutions.github.io/app-demo/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none bg-gradient-to-r from-purple-600 to-teal-500 text-white hover:from-purple-700 hover:to-teal-600 h-11 px-6 py-3 w-full max-w-xs"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Go to App Demo
                                        </a>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-700"
                                >
                                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                                        Get Access to Demo
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                                        Please provide your details to access the full demo
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                                placeholder="Your name"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                                placeholder="+1 (555) 123-4567"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none bg-gradient-to-r from-purple-600 to-teal-500 text-white hover:from-purple-700 hover:to-teal-600 h-11 px-6 py-3 mt-2"
                                        >
                                            {isLoading ? (
                                                <span className="flex items-center">
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Processing...
                                                </span>
                                            ) : (
                                                <span className="flex items-center">
                                                    <ArrowRight className="w-4 h-4 mr-2" />
                                                    Access Demo
                                                </span>
                                            )}
                                        </button>

                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                            By submitting, you agree to receive occasional updates about our products and services.
                                        </p>
                                    </form>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="mt-5 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                        Like what you see?
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        We want to build something even better, just for <span className='font-bold'>your agency, ان شاء الله</span>
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="cursor-pointer bg-gradient-to-r from-purple-600 to-teal-500 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
                        onClick={() => document.getElementById('encourage')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <span className="flex items-center justify-center">
                            There's one more thing we want to tell you...
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </span>
                    </motion.button>
                </motion.div>
            </div>
        </motion.section>
    )
}