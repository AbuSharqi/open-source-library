'use client'

import { motion } from 'framer-motion';
import {
    CalendarDays, Lightbulb, TrendingUp, Handshake, ShieldCheck,
    ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CommonFooter } from '@/components/common-footer';
import { Navbar } from '@/components/navbar';
import { containerVariants } from "@/lib/motionVariants";
import Link from 'next/link';
import FormSection from '@/components/sections/form';
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
                            Beyond the Seasons: A Guide to Selling More Umrah Packages
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                The parts of the year when people have time off to travel is your prime time, but a successful travel company thrives year-round. Learn how to build a profitable, sustainable business by strategically leveraging the slow periods.
                            </p>
                        </motion.div>

                        <AuthorDate dateTime="2025-08-24" dateText="August 24, 2025" />
                    </div>
                </motion.section>

                <Separator className="w-full max-w-2xl bg-slate-200 opacity-25" />

                <div className='text-white max-w-3xl mx-auto px-4 sm:px-6 md:px-8 space-y-6'>
                    <p>
                        When we talk about being prepared for marketing in the Umrah and Hajj seasons, we often focus on the peak times when demand surges. But what about the off-season? How can you turn those quieter months into a time of growth and preparation? In this guide, we'll explore how to build an online marketing engine that keeps your business thriving year-round, even when the pilgrimage seasons are not in full swing.
                    </p>
                    <p>
                        The key to success during the off-season is to focus on building authority, cultivating partnerships, and being consistently present. This means creating valuable content, engaging with your audience, and establishing your brand as a trusted source of information and support.
                    </p>
                    <p>
                        Let's dive into some specific strategies you can implement to make the most of the off-season and set your business up for success when the pilgrimage seasons return.
                    </p>
                </div>

                {/* Marketing Strategy Section */}
                <section className="w-full max-w-3xl mb-16 md:mb-20">
                    <div className="flex flex-col gap-5">
                        <Card className="bg-gray-800 text-gray-100 rounded-2xl shadow-md border border-gray-700">
                            <CardContent className="p-6">
                                <h3 className="text-2xl font-bold mb-3 flex items-center gap-4 text-blue-400">
                                    <TrendingUp size={24} />
                                    1. Focus on Building Authority, Not Just Sales
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    The off-season is for nurturing relationships. Your goal is to become a trusted source of information and a spiritual guide, not just a travel agent.
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                    <li><span className='font-bold'>Blog Posts:</span> Create deep-dive content on spiritual preparation, visa requirements, or a guide to the best hotels for families in Makkah.</li>
                                    <li><span className='font-bold'>Targeted Email Campaigns:</span> Launch a "Countdown to Hajj" series of emails with historical stories, FAQs, and testimonials from previous pilgrims.</li>
                                    <li><span className='font-bold'>Faith-Based Webinars:</span> Host free webinars on topics like "Your First Umrah: A Step-by-Step Spiritual Guide" or "Navigating Hajj: Q&A with an Imam."</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-800 text-gray-100 rounded-2xl shadow-md border border-gray-700">
                            <CardContent className="p-6">
                                <h3 className="text-2xl font-bold mb-3 flex items-center gap-4 text-green-400">
                                    <Handshake size={24} />
                                    2. Cultivate Strategic Partnerships
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    Partner with the people and organizations your customers already trust. This is a powerful way to build credibility and reach new audiences.
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                    <li><span className='font-bold'>Collaborate with Imams & Community Leaders:</span> Offer to co-host a free Hajj or Umrah preparation workshop at a local mosque.</li>
                                    <li><span className='font-bold'>Partner with Niche Influencers:</span> Connect with Muslim content creators who focus on spirituality, family travel, or personal development. A positive review from a trusted voice is golden.</li>
                                    <li><span className='font-bold'>Engage on Community Platforms:</span> Be present and helpful on forums and platforms like WhatsApp where your potential customers are asking questions about travel and pilgrimage.</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-800 text-gray-100 rounded-2xl shadow-md border border-gray-700">
                            <CardContent className="p-6">
                                <h3 className="text-2xl font-bold mb-3 flex items-center gap-4 text-purple-400">
                                    <ShieldCheck size={24} />
                                    3. Be Consistently Present
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    Your efforts during the slow season are the foundation for your peak-season success. Building a strong brand and a loyal audience requires <span className='font-bold'>consistency</span>. A one-off blog post or email blast won't cut it.
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                    <li><span className='font-bold'>Consistent Content:</span> Commit to a regular publishing schedule, whether it's a weekly blog post, a bi-weekly newsletter, or daily social media engagement. This keeps your brand top-of-mind.</li>
                                    <li><span className='font-bold'>Consistent Messaging:</span> Ensure your brand's voice and values are reflected in all your communications. Consistency builds trust, and trust is what converts leads into customers.</li>
                                    <li><span className='font-bold'>Consistent Presence:</span> Just because it's the off-season doesn't mean your potential customers have stopped dreaming of their journey. Be present where they are, from search engines to social media, so you're the first name they think of when they're ready to book.</li>
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