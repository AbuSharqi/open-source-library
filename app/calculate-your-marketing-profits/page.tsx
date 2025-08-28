'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    BarChart4, TableProperties
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CommonFooter } from '@/components/common-footer';
import { Navbar } from '@/components/navbar';
import { containerVariants } from "@/lib/motionVariants";
import Link from 'next/link';

export default function Page() {
    const [profitPerBooking, setProfitPerBooking] = useState(500);
    const [monthlySpend, setMonthlySpend] = useState(2000);
    const [monthlyVisitors, setMonthlyVisitors] = useState(1000);
    const [conversionRate, setConversionRate] = useState(1);
    const [showResults, setShowResults] = useState(false);

    // Calculate results
    const currentBookings = monthlyVisitors * (conversionRate / 100);
    const currentRevenue = currentBookings * profitPerBooking;
    const currentNetProfit = currentRevenue - monthlySpend;
    const currentROI = monthlySpend > 0 ? (currentNetProfit / monthlySpend) * 100 : 0;

    // Improved scenario (2x conversion rate)
    const improvedConversionRate = conversionRate * 2;
    const improvedBookings = monthlyVisitors * (improvedConversionRate / 100);
    const improvedRevenue = improvedBookings * profitPerBooking;
    const improvedNetProfit = improvedRevenue - monthlySpend;
    const improvedROI = monthlySpend > 0 ? (improvedNetProfit / monthlySpend) * 100 : 0;

    const handleCalculate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setShowResults(true);
    };

    const handleReset = () => {
        setProfitPerBooking(500);
        setMonthlySpend(2000);
        setMonthlyVisitors(1000);
        setConversionRate(1);
        setShowResults(false);
    };

    return (
        // The main page container with a dark background and a transition for a smooth change
        <div className="min-h-screen flex flex-col bg-gray-900 transition-colors duration-300">
            <Navbar />

            <motion.main
                className="w-full flex flex-col items-center gap-12 py-12 px-4 sm:px-6 md:px-8 flex-1"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Value Proposition Section */}
                <motion.section
                    className="mx-auto flex flex-col gap-8 py-0 px-4 w-full"
                    variants={containerVariants}
                    aria-labelledby="main-heading"
                >
                    <div className="flex flex-col items-center text-center">
                        {/* H1 heading with a gradient that works on any background */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-blue-500 to-emerald-500"
                        >
                            Calculate Your Umrah Marketing ROI
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                Ready to see how your <span className='font-bold'>digital marketing</span> can transform your business? Use our calculator to discover the potential return on investment (ROI) from attracting more <span className='font-bold'>Hajj and Umrah leads</span>, securing <span className='font-bold'>direct bookings</span>, and turning your <span className='font-bold'>online presence</span> into a profitable engine, Insha'Allah.
                            </p>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Calculator Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20 w-full max-w-6xl">
                    {/* Calculator Form */}
                    {/* The card is styled for a dark background with light text */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-gray-800 text-gray-100 rounded-2xl p-8 border border-gray-700 shadow-lg"
                    >
                        <div className="mb-8">
                            <h2 className="leading-[3] py-2 text-2xl font-bold flex items-center gap-3 text-blue-400">
                                <BarChart4 className="text-blue-400" size={28} />
                                Marketing ROI Calculator
                            </h2>
                            <p className="text-gray-400 mt-2">
                                See how improving your conversion rate can boost your profits ان شاء الله
                            </p>
                        </div>

                        <form onSubmit={handleCalculate} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="profit">
                                    Average Profit per Booking ($)
                                </Label>
                                <div>
                                    <Input
                                        id="profit"
                                        type="number"
                                        step="0.1"
                                        value={profitPerBooking}
                                        onChange={(e) => setProfitPerBooking(Number(e.target.value))}
                                        required
                                    />
                                </div>
                                <p className="text-sm text-gray-400">e.g., $500 per person on an Umrah package</p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="spend">
                                    Current Monthly Marketing Spend ($)
                                </Label>
                                <div>
                                    <Input
                                        id="spend"
                                        type="number"
                                        step="0.1"
                                        value={monthlySpend}
                                        onChange={(e) => setMonthlySpend(Number(e.target.value))}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="visitors">
                                    Average Monthly Website Visitors
                                </Label>
                                <div>
                                    <Input
                                        id="visitors"
                                        type="number"
                                        step="0.1"
                                        value={monthlyVisitors}
                                        onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                                        required
                                    />
                                </div>
                                <p className="text-sm text-gray-400">Suggested: 1,000 if you're not sure</p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="conversion">
                                    Current Website Conversion Rate (%)
                                </Label>
                                <div>
                                    <Input
                                        id="conversion"
                                        type="number"
                                        step="0.1"
                                        value={conversionRate}
                                        onChange={(e) => setConversionRate(Number(e.target.value))}
                                        required
                                    />
                                </div>
                                <p className="text-sm text-gray-400">Percentage of visitors who become customers</p>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <Button
                                    variant='secondary'
                                    className='bg-slate-200 text-slate-900'
                                    type="submit"
                                >
                                    Calculate
                                </Button>
                                <Button
                                    type="button"
                                    onClick={handleReset}
                                    variant="outline"
                                >
                                    Reset
                                </Button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Results Panel */}
                    {/* The card is styled for a dark background with light text */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-gray-800 text-gray-100 rounded-2xl p-8 border border-gray-700 shadow-lg"
                    >
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold flex items-center gap-3 text-teal-400">
                                <BarChart4 className="text-teal-400" size={28} />
                                Projected Results
                            </h2>
                            <p className="text-gray-400 mt-2">
                                {showResults ? "Your potential with improved marketing" : "Enter your numbers to see projections"}
                            </p>
                        </div>

                        {!showResults ? (
                            <div className="flex flex-col items-center justify-center h-64 text-center p-6 rounded-2xl bg-gray-700 border border-dashed border-gray-600">
                                <TableProperties className="text-gray-500 mb-4" size={48} />
                                <h3 className="text-2xl font-semibold mb-2 text-gray-200">See Your Potential</h3>
                                <p className="text-gray-400 max-w-sm">Fill out the form to calculate how much you could increase your profits with better marketing.</p>
                            </div>
                        ) : (
                            <div className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Card className="rounded-xl shadow-md bg-gray-700 border-gray-600 text-gray-200">
                                        <CardContent className="p-6">
                                            <h3 className="text-sm font-medium text-gray-400 mb-2 tracking-wide uppercase">Current Net Profit</h3>
                                            <p className="text-4xl font-extrabold text-gray-100">${currentNetProfit.toLocaleString()}</p>
                                            <div className="flex items-center mt-3">
                                                <span className="text-sm text-gray-400">ROI: </span>
                                                <span className={`ml-2 text-sm font-bold ${currentROI >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                                    {currentROI.toFixed(1)}%
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card className="bg-blue-950/40 border border-blue-900/50 rounded-xl shadow-md text-gray-200">
                                        <CardContent className="p-6">
                                            <h3 className="text-sm font-medium text-gray-400 mb-2 tracking-wide uppercase">Potential Net Profit</h3>
                                            <p className="text-4xl font-extrabold text-blue-400">${improvedNetProfit.toLocaleString()}</p>
                                            <div className="flex items-center mt-3">
                                                <span className="text-sm text-gray-400">ROI: </span>
                                                <span className={`ml-2 text-sm font-bold ${improvedROI >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                                    {improvedROI.toFixed(1)}%
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                <Card className="bg-gradient-to-br from-indigo-600 to-purple-800 border-0 rounded-2xl shadow-xl">
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-bold text-white mb-3">What This Means For You</h3>
                                        <p className="text-indigo-200 mb-3 leading-relaxed">
                                            Based on your current numbers, your business is projected to earn a net profit of <span className="font-semibold text-white">${currentNetProfit.toLocaleString()}</span> each month.
                                        </p>
                                        <p className="text-indigo-200 leading-relaxed">
                                            By improving your conversion rate to <span className="font-semibold text-white">{improvedConversionRate}%</span> with our marketing strategies, you could increase your monthly profit to a projected <span className="font-semibold text-white">${improvedNetProfit.toLocaleString()}</span>.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-gray-800 text-gray-100 rounded-2xl shadow-md border border-gray-700">
                                    <CardContent className="p-6 text-center">
                                        <h3 className="text-2xl font-bold mb-3 text-gray-100">Ready to See Results?</h3>
                                        <p className="text-gray-400 mb-6 max-w-prose mx-auto">
                                            Our team specializes in helping Umrah and Hajj businesses like yours optimize their marketing strategies to achieve these projections.
                                        </p>
                                        <Link
                                            href='/#contact-section'
                                        >
                                            <Button className="w-full md:w-auto px-8 py-3 font-bold rounded-lg transition-all transform hover:scale-[1.01] bg-slate-200 text-slate-900">
                                                Schedule a Consultation
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            </div>
                        )}
                    </motion.div>
                </section>
            </motion.main>

            <CommonFooter />
        </div>
    );
};