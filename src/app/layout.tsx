import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BrightMont Learning Center - Spring, TX",
  description: "Quality child-centered education for children ages 6 weeks to 6 years in Spring, Texas. Nurturing environment with experienced teachers and small class sizes.",
  keywords: "learning center, Spring TX, early childhood education, daycare, preschool, infant care, toddler program, pre-K, after school care, summer camp",
  authors: [{ name: "BrightMont Learning Center" }],
  creator: "BrightMont Learning Center",
  publisher: "BrightMont Learning Center",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://brightmontlearning.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brightmontlearning.com',
    title: 'BrightMont Learning Center - Spring, TX',
    description: 'Quality child-centered education for children ages 6 weeks to 6 years in Spring, Texas. Nurturing environment with experienced teachers and small class sizes.',
    siteName: 'BrightMont Learning Center',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'BrightMont Learning Center - Spring, Texas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrightMont Learning Center - Spring, TX',
    description: 'Quality child-centered education for children ages 6 weeks to 6 years in Spring, Texas.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "BrightMont Learning Center",
    "alternateName": "BrightMont School",
    "description": "Quality child-centered education for children ages 6 weeks to 6 years in Spring, Texas. Nurturing environment with experienced teachers and small class sizes.",
    "url": "https://brightmontlearning.com",
    "logo": "https://brightmontlearning.com/logo.svg",
    "image": "https://brightmontlearning.com/og-image.svg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "17710 S. Cypress Villas Dr",
      "addressLocality": "Spring",
      "addressRegion": "TX",
      "postalCode": "77379",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-281-251-3851",
      "contactType": "customer service",
      "email": "info@brightmontschool.com",
      "availableLanguage": "English"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.1319",
      "longitude": "-95.4681"
    },
    "openingHours": "Mo-Fr 06:30-18:00",
    "priceRange": "$$",
    "servesCuisine": "Educational Services",
    "areaServed": {
      "@type": "City",
      "name": "Spring",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    "educationalCredentialAwarded": "Early Childhood Development",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Educational Programs",
      "itemListElement": [
        {
          "@type": "EducationalOccupationalProgram",
          "name": "Infant Program",
          "description": "Nurturing care for infants 6 weeks to 18 months",
          "timeToComplete": "P18M"
        },
        {
          "@type": "EducationalOccupationalProgram",
          "name": "Toddler Program", 
          "description": "Development program for toddlers 18 months to 3 years",
          "timeToComplete": "P18M"
        },
        {
          "@type": "EducationalOccupationalProgram",
          "name": "Pre-K Program",
          "description": "Child-centered education for children 3 to 6 years",
          "timeToComplete": "P3Y"
        },
        {
          "@type": "EducationalOccupationalProgram", 
          "name": "School Age Program",
          "description": "After-school care for children 6+ years",
          "timeToComplete": "P1Y"
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/brightmontschool",
      "https://www.instagram.com/brightmontschool"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
