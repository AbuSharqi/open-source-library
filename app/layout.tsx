import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DemoScreenshot from '@/lib/images/playbook-screenshot.png'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Umrah & Hajj Company Marketing Solutions | Yusr Solutions",
  description: "Transform your online presence and attract more pilgrims. We offer digital marketing, website, and social media solutions for Umrah and Hajj travel agencies, hotels, and taxi companies, Insha'Allah.",
  keywords: ["Umrah marketing", "Hajj marketing", "travel agency marketing", "pilgrim booking", "Islamic marketing", "digital marketing for Umrah", "Hajj company marketing", "Makkah hotel marketing", "Islamic travel"],
  openGraph: {
    title: "Umrah & Hajj Company Marketing Solutions",
    description: "Transform your online presence and attract more pilgrims. Get your free playbook now.",
    url: "https://www.yourdomain.com", // Replace with your actual domain
    type: "website",
    images: [
      {
        url: '/lib/images/playbook-screenshot.png', // Create a specific image for social sharing
        alt: "A graphic representing digital marketing for Umrah and Hajj companies.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Umrah & Hajj Company Marketing Solutions",
    description: "Transform your online presence and attract more pilgrims. Get your free playbook now.",
    images: ["/lib/images/playbook-screenshot.png"], // Ensure this image is high-quality
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}