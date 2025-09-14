import { useEffect, useState } from "react"
import { Feather, X, Menu } from "lucide-react"
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="mx-auto rounded-md relative top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <nav>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-5 items-center justify-between h-16">
                        {/* Left side - Logo */}
                        <div
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => router.push('/')}
                        >
                            <Feather className="w-6 h-6 text-purple-600" />
                            <span className="mr-5 font-semibold text-lg bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Yusr Solutions
                            </span>
                        </div>

                        {/* Right side - Desktop Menu */}
                        <div className="hidden md:flex items-center gap-6">
                            <Button
                                className="cursor-pointer text-slate-400"
                                onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                                variant="secondary"
                            >
                                Contact Us
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-600 dark:text-gray-300 hover:text-purple-600"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    {isMenuOpen && (
                        <div className="md:hidden pb-4">
                            <div className="flex flex-col gap-4 mt-4">
                                <Button
                                    className="cursor-pointer text-slate-400"
                                    onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                                    variant="secondary"
                                >
                                    Contact Us
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}