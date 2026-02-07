import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/ui/navbar";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/registry/ui/sonner";
import { ExitIntentProvider } from "@/registry/providers/exit-intent-provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Orbitron } from "next/font/google";
import { ColorThemeProvider } from "@/registry/providers/color-theme-provider";
const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nyxhora UI - Modern React Component Library | Tailwind CSS & Framer Motion",
    template: "%s | Nyxhora UI - React Components",
  },
  metadataBase: new URL("https://ui.nyxhora.com"),
  description: "70+ beautiful, accessible React UI components for Next.js. Copy-paste components built with Tailwind CSS, Framer Motion, and Radix UI. Free and open source alternative to shadcn/ui with stunning animations.",
  keywords: [
    // Primary keywords
    "React UI component library",
    "Next.js component library",
    "Tailwind CSS components",
    "shadcn alternative",
    "Copy paste UI components",
    "React components 2024",
    "React components 2025",
    "Modern UI library",
    "Free React components",
    // Technology keywords
    "Framer Motion components",
    "Animated React components",
    "TypeScript UI components",
    "Radix UI components",
    "Accessible React components",
    // Feature keywords
    "Dark mode components",
    "Responsive UI components",
    "Open source component library",
    "React design system",
    // Component keywords
    "React button component",
    "React modal dialog",
    "React toast notifications",
    "React navbar component",
    "React card component",
    // Long-tail keywords
    "Best React UI library Next.js",
    "Beautiful animated buttons React",
    "Copy paste React components free",
    "SaaS dashboard components",
    "Landing page React components",
    // Brand
    "Nyxhora UI",
    "nyxhora",
  ],
  authors: [{ name: "Nyxhora Team", url: "https://ui.nyxhora.com" }],
  creator: "Nyxhora",
  publisher: "Nyxhora",
  category: "Technology",
  classification: "Web Development",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ui.nyxhora.com",
    title: "Nyxhora UI - 70+ Modern React Components | Tailwind CSS & Framer Motion",
    description: "Copy-paste React UI components for Next.js. Beautiful, accessible, and animated. Built with Tailwind CSS and Framer Motion. Free and open source.",
    siteName: "Nyxhora UI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nyxhora UI - Modern React Component Library",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nyxhora UI - 70+ React Components with Animations",
    description: "Copy-paste UI components for Next.js. Beautiful, accessible, and built with Tailwind CSS. Free and open source.",
    creator: "@nyxhora",
    site: "@nyxhora",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/Icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/Icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
      { url: "/apple-touch-icon-120x120.png", sizes: "120x120" },
    ],
    shortcut: ["/favicon.ico"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://ui.nyxhora.com",
  },

  other: {
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://ui.nyxhora.com/#organization",
                  "name": "Nyxhora",
                  "url": "https://ui.nyxhora.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://ui.nyxhora.com/Icon-512.png",
                    "width": 512,
                    "height": 512
                  },
                  "sameAs": [
                    "https://github.com/nyxhora",
                    "https://twitter.com/nyxhora"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://ui.nyxhora.com/#website",
                  "url": "https://ui.nyxhora.com",
                  "name": "Nyxhora UI",
                  "description": "70+ beautiful, accessible React UI components for Next.js with Tailwind CSS and Framer Motion animations.",
                  "publisher": { "@id": "https://ui.nyxhora.com/#organization" },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://ui.nyxhora.com/docs/components?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://ui.nyxhora.com/#software",
                  "name": "Nyxhora UI",
                  "applicationCategory": "DeveloperApplication",
                  "applicationSubCategory": "UI Component Library",
                  "operatingSystem": "Web, Cross-platform",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                  },
                  "description": "A comprehensive React UI component library featuring 70+ accessible, customizable components with built-in Framer Motion animations. Free and open source alternative to shadcn/ui.",
                  "author": { "@id": "https://ui.nyxhora.com/#organization" },
                  "softwareRequirements": "React 18+, Next.js 14+, Tailwind CSS 3+",
                  "featureList": [
                    "70+ UI Components",
                    "Framer Motion Animations",
                    "Tailwind CSS Styling",
                    "Radix UI Accessibility",
                    "TypeScript Support",
                    "Dark Mode",
                    "Copy-Paste Installation",
                    "Server-Side Rendering",
                    "App Router Compatible"
                  ],
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "ratingCount": "150",
                    "bestRating": "5"
                  }
                },
                {
                  "@type": "SoftwareSourceCode",
                  "@id": "https://ui.nyxhora.com/#sourcecode",
                  "name": "Nyxhora UI",
                  "codeRepository": "https://github.com/nyxhora/ui",
                  "programmingLanguage": ["TypeScript", "JavaScript", "React", "CSS"],
                  "runtimePlatform": "Node.js",
                  "license": "https://opensource.org/licenses/MIT",
                  "targetProduct": { "@id": "https://ui.nyxhora.com/#software" }
                }
              ]
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          storageKey="nyxhora-theme"
        >
          <ColorThemeProvider>

            <NextTopLoader
              color="#2563eb"
              initialPosition={0.08}
              crawlSpeed={200}
              height={4}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={200}
              shadow="0 0 10px #2563eb,0 0 5px #2563eb"
              zIndex={99999}
            />
            <Toaster />
            <ExitIntentProvider isBeforeUnloadActive={false}>
              <main className="flex-1 pt-16 min-h-screen">
                <Navbar />
                {children}
              </main>
            </ExitIntentProvider>
          </ColorThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
