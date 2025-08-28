import {
    Layout, CheckCircle, ExternalLink, MessageCircle, Plus, ArrowRight,
    Phone
} from 'lucide-react';
import { motion } from 'framer-motion'
import DemoScreenshot from '@/lib/images/playbook-screenshot.png'
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { PhoneInput } from '../ui/phone-input';

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

type Identifier = {
    type: "email" | "phone";
    id: string;
    channels: {
        email?: {
            status: string;
        };
        sms?: {
            status: string;
        };
    };
    email?: string;
    phone?: string;
};

export default function FormSection() {
    // State for general form inputs
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    // Separate state for the country code and phone number
    const [countryCode, setCountryCode] = useState('+1');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [error, setError] = useState('');

    // Check localStorage on component mount
    useEffect(() => {
        const submitted = localStorage.getItem('formSubmitted2');
        if (submitted === 'true') {
            setIsSubmitted(true);
        }
    }, []);

    // frontend
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Normalize and clean email and phone number
        const cleanedEmail = email.trim().toLowerCase();
        const fullPhoneNumber = `${countryCode}${phoneNumber.replace(/\D/g, '')}`;

        // Regex for basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Check if both email and phone are empty
        const isEmailEmpty = !cleanedEmail;
        const isPhoneEmpty = fullPhoneNumber.trim() === countryCode.trim();

        if (isEmailEmpty && isPhoneEmpty) {
            setError('Please enter a valid email or phone number to subscribe.');
            setIsLoading(false);
            return;
        }

        // New: Error check for invalid email format
        if (!isEmailEmpty && !emailRegex.test(cleanedEmail)) {
            setError('Please enter a valid email address.');
            setIsLoading(false);
            return;
        }

        if (!agreeToTerms) {
            setError('You must agree to receive messages and our Privacy Policy');
            setIsLoading(false);
            return;
        }

        try {
            const formspreeData = {
                firstName: firstName,
                lastName: lastName,
                email: cleanedEmail,
                phone: fullPhoneNumber
            };

            // NEW: Restructure the API payload to match the Mailchimp format.
            // The Mailchimp API requires an email address and merge fields for first/last names.
            // We'll also include the "tags" array as you had before.
            const apiData = {
                email_address: cleanedEmail,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                },
                tags: ["Playbook Lead"]
            };

            // No need for the complex Identifier type definition anymore.

            console.log("Attempting to submit form data...");
            console.log("Formspree Payload:", formspreeData);
            // NEW: The payload sent to your backend now has the Mailchimp structure.
            console.log("Mailchimp Payload:", apiData);

            const [formspreeResponse, mailchimpResponse] = await Promise.all([
                fetch("https://formspree.io/f/mvgqlngz", {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formspreeData)
                }),
                // The fetch call to your backend endpoint remains the same.
                fetch('/api/subscribe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(apiData),
                })
            ]);

            console.log('Formspree response status:', formspreeResponse.status);
            // NEW: Renamed for clarity.
            console.log('Mailchimp API response status:', mailchimpResponse.status);

            if (formspreeResponse.ok && mailchimpResponse.ok) {
                setFirstName('');
                setLastName('');
                setEmail('');
                setCountryCode('+1');
                setPhoneNumber('');
                setIsSubmitted(true);
                localStorage.setItem('formSubmitted2', 'true');
                console.log("Form submission successful!");
            } else {
                let combinedErrorMessage = 'Submission failed. Please try again.';
                if (!formspreeResponse.ok) {
                    const formspreeError = await formspreeResponse.json();
                    console.error('Formspree error:', formspreeError);
                    combinedErrorMessage += ` Formspree Error: ${formspreeError.error || 'Something went wrong.'}`;
                }
                if (!mailchimpResponse.ok) {
                    const contentType = mailchimpResponse.headers.get("content-type");
                    if (contentType && contentType.indexOf("application/json") !== -1) {
                        // NEW: Renamed for clarity.
                        const mailchimpError = await mailchimpResponse.json();
                        console.error('Mailchimp API error:', mailchimpError);
                        // NEW: Updated error message to reflect the new API.
                        combinedErrorMessage += ` API Error: ${mailchimpError.title || 'Something went wrong.'}`;
                    } else {
                        const errorText = await mailchimpResponse.text();
                        console.error('Mailchimp API non-JSON error:', errorText);
                        combinedErrorMessage += ` API Error: Unexpected server response.`;
                    }
                }
                setError(combinedErrorMessage);
            }
        } catch (error: any) {
            console.error('Form submission caught an unexpected error:', error);
            setError(error.message || 'An unexpected error occurred. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.section
            className="mx-auto w-full -py-10 px-4 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800"
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
                    <motion.div
                        className="group relative rounded-xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800"
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="relative aspect-video w-full h-auto min-h-[300px]">
                            <Image
                                src={DemoScreenshot}
                                alt="Demo Preview"
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
                                <p className="text-xl md:text-2xl font-bold">Playbook Preview</p>
                                <p className="text-gray-200 mt-1">A Glimpse of the Journey</p>
                            </div>
                            {/* Hover effect */}
                            <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />
                        </div>
                    </motion.div>
                    {/* Content */}
                    <div>
                        <div>
                            <div className="mb-6">
                                <div className="inline-block bg-gradient-to-r from-purple-600 to-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                                    Exclusive Playbook
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                                    Get the Digital Marketing Playbook
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    Inside this playbook, my team and I reveal the exact reasons why so many <span className='font-bold'>Umrah and Hajj service providers</span>—from hotels and travel agencies to taxi companies—get stuck. We’ll show you the proven path to attracting pilgrims online, building a trusted brand, and turning your <span className='font-bold'>online presence</span> into your #1 asset for getting more <span className='font-bold'>direct bookings</span>, Insha'Allah.
                                </p>
                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-8 border border-emerald-200 dark:border-emerald-700"
                                    >
                                        <div className="flex flex-col items-center text-center">
                                            <CheckCircle className="w-12 h-12 text-emerald-500 mb-4" />
                                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                                Success! Your Playbook is Ready.
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                                Thank you for your submission. Check your email for access to Your Playbook.
                                            </p>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-700"
                                    >
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                                            Get Instant Access to Your Playbook
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                                            Please provide your details to get instant access.
                                        </p>
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div>
                                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    value={firstName}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                                                    required
                                                    autoComplete="given-name"
                                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus-visible:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                                    placeholder="Your first name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    value={lastName}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                                                    required
                                                    autoComplete="family-name"
                                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus-visible:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                                    placeholder="Your last name"
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
                                                    value={email}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                                    required
                                                    autoComplete="email"
                                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus-visible:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                                    placeholder="your.email@example.com"
                                                />
                                            </div>
                                            <PhoneInput
                                                countryCode={countryCode}
                                                setCountryCode={(x: string) => setCountryCode(x)}
                                                phoneNumber={phoneNumber}
                                                setPhoneNumber={(x: string) => setPhoneNumber(x)}
                                            />
                                            <input type="hidden" name="_gotcha" className="hidden" />
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
                                                        Get My Playbook
                                                    </span>
                                                )}
                                            </button>
                                            <div className="flex items-start space-x-2">
                                                <input
                                                    type="checkbox"
                                                    id="agreeToTerms"
                                                    checked={agreeToTerms}
                                                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                                                    className="mt-1 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                                    required
                                                />
                                                <label htmlFor="agreeToTerms" className="text-sm text-gray-700 dark:text-gray-300">
                                                    I agree to receive messages and acknowledge that I have read and agree to the{' '}
                                                    <Link href="/privacy-policy" className="text-purple-600 hover:text-purple-700 underline">
                                                        Privacy Policy
                                                    </Link>
                                                </label>
                                            </div>
                                            {error && (
                                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4" role="alert">
                                                    <span className="block sm:inline">{error}</span>
                                                </div>
                                            )}
                                        </form>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}