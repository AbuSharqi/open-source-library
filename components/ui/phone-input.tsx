import { useState, useRef, useEffect } from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './dropdown-menu';
import { Input } from './input';

// This is a list of common country codes. You can expand this as needed.
const countryCodes = [
    { code: '+1', country: 'United States', flag: '🇺🇸' },
    { code: '+1', country: 'Canada', flag: '🇨🇦' }, // Canada added here
    { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
    { code: '+91', country: 'India', flag: '🇮🇳' },
    { code: '+61', country: 'Australia', flag: '🇦🇺' },
    { code: '+20', country: 'Egypt', flag: '🇪🇬' },
    { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
    { code: '+971', country: 'UAE', flag: '�🇪' },
    { code: '+49', country: 'Germany', flag: '🇩🇪' },
    { code: '+33', country: 'France', flag: '🇫🇷' },
    { code: '+81', country: 'Japan', flag: '🇯🇵' },
    { code: '+86', country: 'China', flag: '🇨🇳' },
    { code: '+52', country: 'Mexico', flag: '🇲🇽' },
    { code: '+55', country: 'Brazil', flag: '🇧🇷' },
    { code: '+7', country: 'Russia', flag: '🇷🇺' },
    { code: '+34', country: 'Spain', flag: '🇪🇸' },
    { code: '+39', country: 'Italy', flag: '🇮🇹' },
    { code: '+82', country: 'South Korea', flag: '🇰🇷' },
    { code: '+90', country: 'Turkey', flag: '🇹🇷' },
    { code: '+27', country: 'South Africa', flag: '🇿🇦' },
    { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
    { code: '+46', country: 'Sweden', flag: '🇸🇪' },
    { code: '+47', country: 'Norway', flag: '🇳🇴' },
    { code: '+45', country: 'Denmark', flag: '🇩🇰' },
    { code: '+358', country: 'Finland', flag: '🇫🇮' },
    { code: '+32', country: 'Belgium', flag: '🇧🇪' },
    { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
    { code: '+43', country: 'Austria', flag: '🇦🇹' },
    { code: '+353', country: 'Ireland', flag: '🇮🇪' },
    { code: '+30', country: 'Greece', flag: '🇬🇷' },
    { code: '+48', country: 'Poland', flag: '🇵🇱' },
    { code: '+351', country: 'Portugal', flag: '🇵🇹' },
    { code: '+354', country: 'Iceland', flag: '🇮🇸' },
    { code: '+54', country: 'Argentina', flag: '🇦🇷' },
    { code: '+57', country: 'Colombia', flag: '🇨🇴' },
    { code: '+51', country: 'Peru', flag: '🇵🇪' },
    { code: '+56', country: 'Chile', flag: '🇨🇱' },
    { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
    { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
    { code: '+63', country: 'Philippines', flag: '🇵🇭' },
    { code: '+64', country: 'New Zealand', flag: '🇳🇿' },
    { code: '+65', country: 'Singapore', flag: '🇸🇬' },
    { code: '+66', country: 'Thailand', flag: '🇹🇭' },
    { code: '+84', country: 'Vietnam', flag: '🇻🇳' },
    { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
    { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
    { code: '+254', country: 'Kenya', flag: '🇰🇪' },
    { code: '+212', country: 'Morocco', flag: '🇲🇦' },
    { code: '+965', country: 'Kuwait', flag: '🇰🇼' },
    { code: '+974', country: 'Qatar', flag: '🇶🇦' },
    { code: '+968', country: 'Oman', flag: '🇴🇲' },
    { code: '+961', country: 'Lebanon', flag: '🇱🇧' },
    { code: '+964', country: 'Iraq', flag: '🇮🇶' },
    { code: '+98', country: 'Iran', flag: '🇮🇷' },
    { code: '+972', country: 'Palestine', flag: '🇵🇸' },
    { code: '+970', country: 'Palestine', flag: '🇵🇸' },
    { code: '+962', country: 'Jordan', flag: '🇯🇴' },
    { code: '+967', country: 'Yemen', flag: '🇾🇪' },
    { code: '+963', country: 'Syria', flag: '🇸🇾' },
    { code: '+213', country: 'Algeria', flag: '🇩🇿' },
    { code: '+216', country: 'Tunisia', flag: '🇹🇳' },
    { code: '+218', country: 'Libya', flag: '🇱🇾' },
    { code: '+249', country: 'Sudan', flag: '🇸🇩' },
    { code: '+251', country: 'Ethiopia', flag: '🇪🇹' },
    { code: '+252', country: 'Somalia', flag: '🇸🇴' },
    { code: '+242', country: 'Republic of the Congo', flag: '🇨🇬' },
    { code: '+243', country: 'DRC', flag: '🇨🇩' },
    { code: '+237', country: 'Cameroon', flag: '🇨🇲' },
    { code: '+233', country: 'Ghana', flag: '🇬🇭' },
    { code: '+221', country: 'Senegal', flag: '🇸🇳' },
    { code: '+220', country: 'Gambia', flag: '🇬🇲' },
    { code: '+225', country: 'Ivory Coast', flag: '🇨🇮' },
    { code: '+226', country: 'Burkina Faso', flag: '🇧🇫' },
    { code: '+227', country: 'Niger', flag: '🇳🇪' },
    { code: '+228', country: 'Togo', flag: '🇹🇬' },
    { code: '+229', country: 'Benin', flag: '🇧🇯' },
];

export const PhoneInput = (
    {
        countryCode,
        setCountryCode,
        phoneNumber,
        setPhoneNumber
    }:
        {
            countryCode: string,
            setCountryCode: (x: string) => void,
            phoneNumber: string,
            setPhoneNumber: (x: string) => void
        }
) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);

    // This function now calls the setPhoneNumber prop to update the parent's state
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.replace(/\D/g, ''); // Remove all non-digit characters

        // Apply the desired format (XXX) XXX-XXXX as the user types
        let formattedNumber = '';
        if (input.length > 0) {
            formattedNumber = '(' + input.substring(0, 3);
        }
        if (input.length >= 4) {
            formattedNumber += ') ' + input.substring(3, 6);
        }
        if (input.length >= 7) {
            formattedNumber += '-' + input.substring(6, 10);
        }

        setPhoneNumber(formattedNumber);
    };

    // Filter the country list based on the search term
    const filteredCountries = countryCodes.filter(country =>
        country.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.code.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex items-center space-x-2 w-full">
            {/* Shadcn Dropdown for Country Code */}
            <DropdownMenu onOpenChange={setIsOpen}>
                <DropdownMenuTrigger asChild>
                    <button className="flex justify-between items-center w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus-visible:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm">
                        <span className="flex items-center space-x-2">
                            <span>{selectedCountry?.flag}</span>
                            <span>{selectedCountry?.code}</span>
                        </span>
                        <svg className={`h-4 w-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full max-h-60 overflow-y-auto">
                    {/* Search Input */}
                    <div className="p-2 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800">
                        <Input
                            type="text"
                            placeholder="Search country..."
                            className="w-full text-sm rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-200"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    {filteredCountries.length > 0 ? (
                        filteredCountries.map((country) => (
                            <DropdownMenuItem
                                key={country.code + country.country}
                                onSelect={() => {
                                    setSelectedCountry(country);
                                    setIsOpen(false);
                                    setSearchTerm('');
                                }}
                                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <span className="text-xl leading-none">{country.flag}</span>
                                <span className="font-medium ml-2">{country.country}</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400 ml-auto">{country.code}</span>
                            </DropdownMenuItem>
                        ))
                    ) : (
                        <div className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
                            No results found.
                        </div>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Phone Number Input */}
            <div className="flex-grow">
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    required
                    autoComplete="tel"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus-visible:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
                    placeholder="e.g., (555) 123-4567"
                />
            </div>
        </div>
    );
};