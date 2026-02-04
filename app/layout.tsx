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
    default: "Nyxhora UI- Composable UI for modern builders",
    template: "%s | NyxhoraUI",
  },
  metadataBase: new URL("https://ui.nyxhora.com"),
  description: "A collection of beautifully designed, accessible, and customizable React UI components built on shadcn/ui with Tailwind CSS and Framer Motion. Build premium web experiences with ease.",
  keywords: ["Next.js", "React", "Tailwind CSS", "UI Components", "Library", "Design System", "Framer Motion", "Accessible"],
  authors: [{ name: "Nyxhora Team" }],
  creator: "Nyxhora",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ui.nyxhora.com",
    title: "Nyxhora UI- Composable UI for modern builders",
    description: "Copy-paste UI components for Next.js. Beautiful, reusable, and built with Tailwind CSS.",
    siteName: "NyxhoraUI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nyxhora UIPreview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nyxhora UI- Composable Ui for modern builders",
    description: "Copy-paste UI components for Next.js. Beautiful, reusable, and built with Tailwind CSS.",
    creator: "@nyxhora",
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
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
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
              "@type": "SoftwareApplication",
              "name": "NyxhoraUI",
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
              },
              "description": "A comprehensive UI component library for Next.js and Tailwind CSS.",
              "author": {
                "@type": "Organization",
                "name": "Nyxhora Team",
                "url": "https://ui.nyxhora.com"
              }
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
