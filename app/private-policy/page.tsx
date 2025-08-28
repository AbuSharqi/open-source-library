'use client'

import { motion } from 'framer-motion';
import { ShieldCheck, Mail, Phone, User, Server } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CommonFooter } from '@/components/common-footer';
import { Navbar } from '@/components/navbar';
import { containerVariants } from "@/lib/motionVariants";
import { Separator } from '@/components/ui/separator';

export default function PrivacyPolicyPage() {
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
                    className="mx-auto flex flex-col gap-8 py-0 px-4 w-full max-w-3xl"
                    variants={containerVariants}
                    aria-labelledby="main-heading"
                >
                    <div className="flex flex-col items-center text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-blue-500 to-emerald-500"
                        >
                            Privacy Policy
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                Last updated: August 24, 2025
                            </p>
                        </motion.div>
                    </div>
                </motion.section>

                <Separator className="w-full max-w-3xl bg-slate-200 opacity-25" />

                {/* Privacy Policy Content */}
                <div className="w-full max-w-3xl space-y-8 text-gray-300">
                    <Card className="bg-gray-800 border-gray-700">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-400">
                                <ShieldCheck className="h-6 w-6" />
                                1. Information We Collect
                            </h2>
                            <p className="mb-4">We collect the following types of information:</p>
                            
                            <h3 className="text-xl font-semibold mt-4 mb-2 flex items-center gap-2 text-green-400">
                                <User className="h-5 w-5" />
                                Personal Information You Provide:
                            </h3>
                            <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                                <li>Email addresses</li>
                                <li>Phone numbers (if provided for SMS communications)</li>
                                <li>First and last names</li>
                            </ul>
                            
                            <h3 className="text-xl font-semibold mt-4 mb-2 flex items-center gap-2 text-purple-400">
                                <Server className="h-5 w-5" />
                                Automatically Collected Information:
                            </h3>
                            <ul className="list-disc list-inside ml-4 space-y-2">
                                <li>IP addresses</li>
                                <li>Website usage data (pages visited, time spent, etc.)</li>
                                <li>Email engagement data (opens, clicks, etc.)</li>
                                <li>Cookies and other tracking technologies</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-400">
                                <Mail className="h-6 w-6" />
                                2. Why We Collect Your Information
                            </h2>
                            <p>We collect your information for the following purposes:</p>
                            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                                <li>To deliver the content and resources you requested</li>
                                <li>To send automated welcome emails and follow-up messages</li>
                                <li>To provide valuable content and promotional offers</li>
                                <li>To improve our services and communication</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-400">
                                3. How We Use Your Information
                            </h2>
                            <p>We use your information in the following ways:</p>
                            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                                <li>We use a third-party email marketing service (Omnisend) to manage our contact list and send automated emails on our behalf</li>
                                <li>We use your data to segment our audience and personalize communications</li>
                                <li>We will not sell or rent your personal information to third parties</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-400">
                                4. Consent and Legal Basis
                            </h2>
                            <h3 className="text-xl font-semibold mt-4 mb-2 text-green-400">
                                Email Consent (CAN-SPAM & GDPR):
                            </h3>
                            <p className="mb-4">By submitting your information, you give us explicit consent to send you emails. We follow GDPR requirements for "freely given, specific, informed, and unambiguous" consent through our opt-in processes.</p>
                            
                            <h3 className="text-xl font-semibold mt-4 mb-2 text-purple-400">
                                SMS Consent (TCPA):
                            </h3>
                            <p>For SMS communications, we require prior express written consent, which includes:</p>
                            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                                <li>Explicit consent to receive text messages from us</li>
                                <li>Clear disclosure of message frequency (e.g., "approx. 4 messages/month")</li>
                                <li>Notification that message and data rates may apply</li>
                                <li>Clear instructions for opting out (e.g., "Reply STOP to cancel")</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-400">
                                <Phone className="h-6 w-6" />
                                5. Right to Opt Out and Unsubscribe
                            </h2>
                            <h3 className="text-xl font-semibold mt-4 mb-2 text-green-400">
                                Email Communications:
                            </h3>
                            <p className="mb-4">Every marketing email we send contains a clear and conspicuous "unsubscribe" link. We honor all opt-out requests promptly.</p>
                            
                            <h3 className="text-xl font-semibold mt-4 mb-2 text-purple-400">
                                SMS Communications:
                            </h3>
                            <p>You can opt out of SMS communications by replying with a specific keyword like "STOP." We honor all opt-out requests within 10 business days as required by law.</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-400">
                                6. Contact Information
                            </h2>
                            <p>If you have questions about this privacy policy or wish to make requests regarding your data, please contact us at:</p>
                            <ul className="list-none ml-4 space-y-2 mt-2">
                                <li><strong>Business Name:</strong> [Your Business Name]</li>
                                <li><strong>Address:</strong> [Your Physical Address]</li>
                                <li><strong>Email:</strong> [Your Privacy Email Address]</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-400">
                                7. Other Important Information
                            </h2>
                            <h3 className="text-xl font-semibold mt-4 mb-2 text-green-400">
                                Data Security:
                            </h3>
                            <p className="mb-4">We use industry-standard security measures to protect your personal information from unauthorized access, alteration, or destruction.</p>
                            
                            <h3 className="text-xl font-semibold mt-4 mb-2 text-purple-400">
                                Third-Party Services:
                            </h3>
                            <p>We use third-party services including Omnisend for email marketing, and potentially Google Analytics for website analytics. These services have their own privacy policies governing how they handle your data.</p>
                            
                            <h3 className="text-xl font-semibold mt-4 mb-2 text-teal-400">
                                Policy Updates:
                            </h3>
                            <p>We may update this privacy policy from time to time. The most current version will always be posted on this page with the updated date.</p>
                        </CardContent>
                    </Card>
                </div>
            </motion.main>

            <CommonFooter />
        </div>
    );
};