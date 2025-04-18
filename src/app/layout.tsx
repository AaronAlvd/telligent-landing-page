import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/react'

import Footer from "./footer"
import Header from "./header"



import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Telligent | Mental Health Blog for Wellness, Self-Care & Personal Growth",
  description: "Telligent is a mental health blog sharing insights, stories, and resources to support emotional well-being, self-care, and personal growth.",
  icons: {
    icon: '/favicon_io/favicon-32x32.png',  // Use the path relative to the public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Telligent | Mental Health Blog for Wellness & Self-Care</title>
        <meta name="keywords" content="mental health, self-care, wellness, therapy, anxiety, depression, mindfulness, support" />
        <meta name="robots" content="index, follow" />
    
        {/* Open Graph for Facebook */}
        <meta property="og:title" content="The Telligent Agency: Relatable and Resourceful" />
        <meta property="og:description" content="Explore everyday content, social discourse, and beneficial resources, made to benefit mental and behavioral health." />
        <meta property="og:image" content="/preview-image.jpg" />
        <meta property="og:url" content="https://telligent.agency" />
        <meta property="og:type" content="website" />
    
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Telligent | Mental Health Blog for Wellness & Self-Care" />
        <meta name="twitter:description" content="Explore trusted mental health resources, expert insights, and personal stories at Telligent." />
        <meta name="twitter:image" content="/preview-image.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
