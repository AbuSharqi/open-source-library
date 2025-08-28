'use client'

import { motion } from 'framer-motion';
import {
    CalendarDays, Lightbulb, TrendingUp, Handshake, ShieldCheck,
    Search, Users, Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CommonFooter } from '@/components/common-footer';
import { Navbar } from '@/components/navbar';
import { containerVariants } from "@/lib/motionVariants";
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import AuthorDate from '@/components/ui/author-date';
import { BlogPlaybookCTA } from '@/components/ui/playbook-cta';

export default function BlogPage() {
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
                    <div className="flex flex-col items-center text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl leading=[3] py-2 md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-blue-500 to-emerald-500"
                        >
                            How to Get More People to Know About Your Umrah Company
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                The journey to Makkah and Madinah begins with a search. Learn how to get your Umrah business to the top of Google and guide more pilgrims to your services.
                            </p>
                        </motion.div>

                        <AuthorDate dateTime="2025-08-24" dateText="August 24, 2025" />
                    </div>
                </motion.section>

                <Separator className="w-full max-w-2xl bg-slate-200 opacity-25" />

                <div className='text-white max-w-3xl mx-auto px-4 sm:px-6 md:px-8 space-y-6'>
                    <p>
                        You've built a trustworthy and reliable Umrah business, but how do you connect with the pilgrims who need your services? In today's digital world, visibility is everything. You need a strategy that goes beyond just a beautiful website. You need to be where your future customers are looking for you.
                    </p>
                    <p>
                        This guide will give you a clear map to increase your company's visibility, attract more potential pilgrims, and grow your business year-round. We'll break down the most effective marketing channels, from appearing on Google to building a community on social media.
                    </p>
                </div>

                {/* Marketing Pillars Section */}
                <section className="w-full max-w-3xl mb-16 md:mb-20">
                    <div className="flex flex-col gap-5">
                        <Card className="bg-gray-800 text-gray-100 rounded-2xl shadow-md border border-gray-700">
                            <CardContent className="p-6">
                                <h3 className="text-2xl font-bold mb-3 flex items-center gap-4 text-blue-400">
                                    <Search size={24} />
                                    1. Get Found on Google (SEO)
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    The first place most people look for anything is a search engine. Your goal is to be at the top of the list when they search for services you offer.
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                    <li><span className='font-bold'>Use Specific Keywords:</span> Think like a pilgrim and use phrases like "Umrah packages from [City]," "Hajj tour for families," or "best time to go for Umrah" in your website content.</li>
                                    <li><span className='font-bold'>Create Informative Pages:</span> Write detailed descriptions for each of your packages. Explain what's included and answer common questions like hotel proximity to the Haram or visa assistance.</li>
                                    <li><span className='font-bold'>Create a Google Business Profile:</span> This is free and helps your company appear on Google Maps and in local search results when people look for "Umrah travel agent near me."</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-800 text-gray-100 rounded-2xl shadow-md border border-gray-700">
                            <CardContent className="p-6">
                                <h3 className="text-2xl font-bold mb-3 flex items-center gap-4 text-green-400">
                                    <Users size={24} />
                                    2. Build a Community on Social Media
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    Social media isn't just for sharing photos; it's for building relationships and trust with your future customers.
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                    <li><span className='font-bold'>Share Authentic Content:</span> Post high-quality photos and videos from previous trips. Share testimonials and stories from pilgrims. This builds an emotional connection.</li>
                                    <li><span className='font-bold'>Engage with Your Audience:</span> Respond to every comment and message. Run live Q&A sessions on platforms like Facebook to answer common questions about the pilgrimage journey.</li>
                                    <li><span className='font-bold'>Use WhatsApp & Telegram:</span> Many pilgrims use these platforms. Create a broadcast list or a community group to share updates, travel tips, and new package deals directly.</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-800 text-gray-100 rounded-2xl shadow-md border border-gray-700">
                            <CardContent className="p-6">
                                <h3 className="text-2xl font-bold mb-3 flex items-center gap-4 text-purple-400">
                                    <Star size={24} />
                                    3. Cultivate Trust and Authority
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    In an industry built on trust, showing your authority is key. You are not just a travel agent; you are a spiritual guide and a trusted partner in a life-changing journey.
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                    <li><span className='font-bold'>Partner with Community Leaders:</span> Collaborate with local Imams or community leaders. Offer to co-host a free seminar on Hajj or Umrah preparation.</li>
                                    <li><span className='font-bold'>Gather Reviews:</span> Reviews are your most powerful marketing tool. After a trip, send a follow-up email asking pilgrims to leave a review on your Google Business Profile or Facebook page.</li>
                                    <li><span className='font-bold'>Be a Thought Leader:</span> Write valuable content on your blog. Think about topics like "What to Pack for Hajj" or "Your First Umrah: A Spiritual Guide." These articles build trust and demonstrate your expertise.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Call to Action Section */}
                <BlogPlaybookCTA />
            </motion.main>

            <CommonFooter />
        </div>
    );
};