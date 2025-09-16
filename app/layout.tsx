import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
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
  title: "Open-Source Resources for Educators",
  description: "Explore some ready-to-use tools and content to inspire your students, in sha Allah.",
  keywords: ["open-source education", "educator resources", "free teaching tools", "educational content", "teacher open source", "learning materials", "Islamic education"],
  openGraph: {
    title: "Open-Source for Educators | Free Resources to Empower Teaching",
    description: "Unlock your teaching potential with our free, open-source resources designed for educators. Explore ready-to-use tools and content to inspire your students, Insha'Allah.",
    url: "https://www.yourdomain.com", // Replace with your actual domain
    type: "website",
    images: [
      {
        url: '/lib/images/arabic-landing-page.png', // Create a specific image for social sharing
        alt: "A graphic representing open-source educational resources.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Open-Source for Educators | Free Resources to Empower Teaching",
    description: "Unlock your teaching potential with our free, open-source resources designed for educators. Explore ready-to-use tools and content to inspire your students, Insha'Allah.",
    images: ["/lib/images/arabic-landing-page.png"], // Ensure this image is high-quality
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