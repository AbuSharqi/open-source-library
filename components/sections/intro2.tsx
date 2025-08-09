import { motion } from 'framer-motion'
import { Globe, Rocket, BarChart4, CalendarCheck, UserCheck, } from 'lucide-react';

export default function Intro2Section() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-transparent p-4 py-2">
            <div className="max-w-4xl w-full">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="leading-[3] py-2 align-bottom inline-block md:block text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-blue-500 to-emerald-500"
                    >
                        Revolutionize Your Travel Agency
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-blue-300 to-emerald-300">
                            An App Fixes All These Problems باذن الله
                        </p>
                        <p className="text-xl text-gray-100 max-w-2xl mx-auto">
                            Start scaling your travel agency with a modern tool not many implement into their administrative systems
                        </p>
                    </motion.div>
                </div>

                {/* Icon Grid */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mb-3">
                            <Rocket className="h-10 w-10 text-white" strokeWidth={1.5} />
                        </div>
                        <p className="text-center font-medium text-gray-100">Doors to Growth</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-3">
                            <Globe className="h-10 w-10 text-white" strokeWidth={1.5} />
                        </div>
                        <p className="text-center font-medium text-gray-100">Global Usage</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-3">
                            <BarChart4 className="h-10 w-10 text-white" strokeWidth={1.5} />
                        </div>
                        <p className="text-center font-medium text-gray-100">Productive Analytics</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center mb-3">
                            <CalendarCheck className="h-10 w-10 text-white" strokeWidth={1.5} />
                        </div>
                        <p className="text-center font-medium text-gray-100">Efficiency</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-emerald-500 flex items-center justify-center mb-3">
                            <UserCheck className="h-10 w-10 text-white" strokeWidth={1.5} />
                        </div>
                        <p className="text-center font-medium text-gray-100">Client Focus</p>
                    </div>
                </motion.div>

                {/* Quran Verse */}
                <motion.div
                    className="max-w-3xl mx-auto px-6 py-8 bg-slate-800 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-800"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <p className="text-3xl font-arabic mb-6 text-sky-300 leading-loose text-center font-bold">
                        إِنَّ ٱلصَّفَا وَٱلْمَرْوَةَ مِن شَعَآئِرِ ٱللَّهِ ۖ فَمَنْ حَجَّ ٱلْبَيْتَ أَوِ ٱعْتَمَرَ فَلَا جُنَاحَ عَلَيْهِ أَن يَطَّوَّفَ بِهِمَا ۚ وَمَن تَطَوَّعَ خَيْرًۭا فَإِنَّ ٱللَّهَ شَاكِرٌ عَلِيمٌ
                    </p>
                    <p className="text-lg text-sky-200 italic text-center">
                        "Indeed, as-Safa and al-Marwah are among the symbols of Allah. So whoever makes Hajj to the House or performs 'umrah - there is no blame upon him for walking between them. And whoever volunteers good - then indeed, Allah is appreciative and Knowing."
                    </p>
                    <p className="mt-4 text-slate-400 text-center">- Al-Baqarah (2:158)</p>
                </motion.div>
            </div>
        </div>
    );
}