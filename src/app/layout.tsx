import type { Metadata, Viewport } from "next";
import { Manjari } from "next/font/google";
import "./globals.css";
import { CartDrawer } from "@/components/cart/CartDrawer";

const manjari = Manjari({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

const siteUrl = "https://codegrid.shop";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CodeGrid | Premium Developer Streetwear & Tech Apparel Bangladesh",
    template: "%s | CodeGrid",
  },
  description:
    "CodeGrid is Bangladesh's premier developer streetwear and tech fashion brand. Shop high-quality programmer t-shirts, developer hoodies, jackets, caps, and custom tech gear.",
  keywords: [
    "CodeGrid",
    "CodeGrid Bangladesh",
    "Developer Streetwear",
    "Tech Clothing Bangladesh",
    "Programmer T-shirts",
    "Developer Hoodies",
    "CodeGrid Apparel",
    "Coding Fashion",
    "Tech Merch Dhaka",
    "Ecommerce Bangladesh",
    "Online Clothing Store BD",
  ],
  authors: [{ name: "CodeGrid", url: siteUrl }],
  creator: "CodeGrid",
  publisher: "CodeGrid",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "CodeGrid",
    title: "CodeGrid | Premium Developer Streetwear & Tech Apparel Bangladesh",
    description:
      "Wear your code with pride. Shop premium programmer hoodies, t-shirts, jackets, and developer merch across Bangladesh.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CodeGrid Developer Streetwear",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeGrid | Premium Developer Streetwear & Tech Apparel",
    description:
      "Wear your code with pride. Shop premium programmer hoodies, t-shirts, jackets & tech merch in Bangladesh.",
    images: ["/og-image.jpg"],
    creator: "@codegrid",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "ecommerce",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "CodeGrid",
      url: siteUrl,
      logo: `${siteUrl}/favicon.ico`,
      description:
        "CodeGrid is Bangladesh's premier developer streetwear and tech fashion brand.",
      sameAs: [
        "https://www.facebook.com/codegridbd",
        "https://www.instagram.com/codegridbd",
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "BD",
        addressLocality: "Dhaka",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "CodeGrid",
      description: "Developer Streetwear & Tech Apparel Store",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/main/shop?search={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "OnlineStore",
      "@id": `${siteUrl}/#store`,
      name: "CodeGrid Store",
      url: siteUrl,
      priceRange: "৳৳",
      currenciesAccepted: "BDT",
      paymentAccepted: "Cash, Mobile Banking",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manjari.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-black">
        {children}
        <CartDrawer />
      </body>
    </html>
  );
}
