'use client'

import React from 'react';
import { motion } from 'framer-motion';
import {
    FileText, Wrench
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CommonFooter } from '@/components/common-footer';
import { Navbar } from '@/components/navbar';
import { containerVariants } from "@/lib/motionVariants";
import Link from 'next/link';

export default function ResourcesPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900 transition-colors duration-300">
            <Navbar />

            <motion.main
                className="w-full flex flex-col items-center gap-12 py-12 px-4 sm:px-6 md:px-8 flex-1"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Header Section */}
                <motion.section
                    className="mx-auto flex flex-col gap-8 py-0 px-4 w-full"
                    variants={containerVariants}
                    aria-labelledby="main-heading"
                >
                    <div className="text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl leading=[3] py-2 md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-blue-500 to-emerald-500"
                        >
                           Umrah Marketing Tools
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Discover the essential tools and resources you need to build, grow, and optimize your Umrah business. This collection is designed to help you streamline your marketing efforts and connect with more pilgrims.
                            </p>
                        </motion.div>
                    </div>
                </motion.section>

                <div className="w-full max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Left Section: Blog Posts */}
                    <motion.section
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <Card className="bg-gray-800 text-gray-100 border border-gray-700">
                            <CardHeader className="flex flex-row items-center space-x-4">
                                <FileText className="h-6 w-6 text-blue-400" />
                                <div>
                                    <CardTitle className="text-2xl font-bold">Blog Posts</CardTitle>
                                    <CardDescription className="text-gray-400 mt-1">
                                        Learn about SEO, marketing, and business growth with our expert guides.
                                    </CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                        {/* You can list your blog posts here with descriptions */}
                        <ul className="space-y-6 text-gray-300">
                            <li>
                                <Link href="/blog/how-to-grow-umrah-company" className="text-lg text-teal-400 hover:text-teal-300 transition-colors">
                                    How to Get More People to Know About Your Umrah Company
                                </Link>
                                <p className="text-sm text-gray-400 mt-1">A comprehensive guide covering SEO, social media, and community building to help you reach more pilgrims.</p>
                            </li>
                            <li>
                                <Link href="/blog/sell-umrah-packages" className="text-lg text-teal-400 hover:text-teal-300 transition-colors">
                                    How to Sell More Umrah Packages Using The Internet
                                </Link>
                                <p className="text-sm text-gray-400 mt-1">Discover proven digital strategies to attract more pilgrims and boost your sales.</p>
                            </li>
                            {/* Add more list items for your blog posts */}
                        </ul>
                    </motion.section>

                    {/* Right Section: Tools */}
                    <motion.section
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="space-y-6"
                    >
                        <Card className="bg-gray-800 text-gray-100 border border-gray-700">
                            <CardHeader className="flex flex-row items-center space-x-4">
                                <Wrench className="h-6 w-6 text-emerald-400" />
                                <div>
                                    <CardTitle className="text-2xl font-bold">Tools</CardTitle>
                                    <CardDescription className="text-gray-400 mt-1">
                                        Use free tools to enhance your Umrah business operations and marketing strategies.
                                    </CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                        {/* You can list your tools here with descriptions */}
                        <ul className="space-y-6 text-gray-300">
                            <li>
                                <Link href="/calculate-your-marketing-profits" className="text-lg text-teal-400 hover:text-teal-300 transition-colors">
                                    See Your Potential Profit from Online Marketing
                                </Link>
                                <p className="text-sm text-gray-400 mt-1">Use this tool to forecast your potential profit from new marketing campaigns.</p>
                            </li>
                            {/* Add more list items for your tools */}
                        </ul>
                    </motion.section>
                </div>
            </motion.main>

            <CommonFooter />
        </div>
    );
};