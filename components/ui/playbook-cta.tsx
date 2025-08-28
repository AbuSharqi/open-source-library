import { containerVariants } from "@/lib/motionVariants"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "./button"
import { Lightbulb } from "lucide-react"

export function BlogPlaybookCTA() {
    return (
        <motion.section
            className="mx-auto flex flex-col gap-3 py-0 px-4 w-full text-center mt-10"
            variants={containerVariants}
            aria-labelledby="main-heading"
        >
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl leading=[3] py-2 md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-blue-500 to-emerald-500"
            >
                Claim Your Free Umrah Marketing Playbook.
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Get a free playbook and more insights on how to grow your Umrah and Hajj business.
                </p>
            </motion.div>

            <Link href={'/'}>
                <Button
                    className='relative mt-10 cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none bg-gradient-to-r from-purple-600 to-teal-500 text-white hover:from-purple-700 hover:to-teal-600 h-11 px-6 py-3'
                >
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Access My Playbook Now
                </Button>
            </Link>
        </motion.section>
    )
}