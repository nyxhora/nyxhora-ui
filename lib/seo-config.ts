// SEO Configuration and Utilities for Nyxhora UI
// This file provides centralized SEO configuration and helper functions

import { Metadata } from "next";
import { docsConfig, DocsNavItem } from "./docs-config";

// =============================================================================
// SEO KEYWORDS - Comprehensive list for AI discoverability
// =============================================================================

export const SEO_KEYWORDS = {
    primary: [
        "React UI component library",
        "Next.js component library",
        "Tailwind CSS components",
        "shadcn alternative",
        "Copy paste UI components",
        "React components 2026",
        "Modern UI library",
        "Free React components",
        "AI-friendly React components",
        "best React UI library 2026",
    ],
    secondary: [
        "Framer Motion components",
        "Animated React components",
        "React animation library",
        "TypeScript UI components",
        "Radix UI components",
        "Accessible React components",
        "Dark mode components",
        "Responsive UI components",
        "Open source component library",
        "React design system",
    ],
    longTail: [
        "Best React UI library for Next.js",
        "Beautiful animated buttons React",
        "React toast notifications Sonner",
        "React modal dialog component",
        "Tailwind CSS card component",
        "React navbar component with animation",
        "React loading spinner component",
        "Gradient background React component",
        "React tooltip component accessible",
        "Next.js 15 UI components",
        "React 19 component library",
        "Copy paste React components free",
        "Modern web app UI components",
        "SaaS dashboard React components",
        "Landing page React components",
    ],
    categories: {
        form: ["React button component", "React input component", "React select dropdown", "React checkbox component", "React form components"],
        display: ["React card component", "React badge component", "React avatar component", "React skeleton loader", "React progress bar"],
        overlay: ["React modal dialog", "React sheet component", "React tooltip component", "React toast notifications", "Dynamic island React"],
        navigation: ["React navbar component", "React tabs component", "React footer component", "React dock component"],
        effects: ["React animation library", "Background effects React", "Particle effects React", "Glow effect React", "Spotlight effect React"],
    },
};

// All keywords combined for metadata
export const ALL_KEYWORDS = [
    ...SEO_KEYWORDS.primary,
    ...SEO_KEYWORDS.secondary,
    ...SEO_KEYWORDS.longTail,
    "Nyxhora UI",
    "nyxhora",
    "ui.nyxhora.com",
];

// =============================================================================
// STRUCTURED DATA SCHEMAS
// =============================================================================

export const ORGANIZATION_SCHEMA = {
    "@type": "Organization",
    "@id": "https://ui.nyxhora.com/#organization",
    name: "Nyxhora",
    url: "https://ui.nyxhora.com",
    logo: {
        "@type": "ImageObject",
        url: "https://ui.nyxhora.com/Icon-512.png",
        width: 512,
        height: 512,
    },
    sameAs: [
        "https://github.com/nyxhora",
        "https://twitter.com/nyxhora",
    ],
};

export const WEBSITE_SCHEMA = {
    "@type": "WebSite",
    "@id": "https://ui.nyxhora.com/#website",
    url: "https://ui.nyxhora.com",
    name: "Nyxhora UI",
    description: "A modern React UI component library with 70+ beautiful, accessible components built with Tailwind CSS and Framer Motion.",
    publisher: { "@id": "https://ui.nyxhora.com/#organization" },
    potentialAction: {
        "@type": "SearchAction",
        target: {
            "@type": "EntryPoint",
            urlTemplate: "https://ui.nyxhora.com/docs/components?search={search_term_string}",
        },
        "query-input": "required name=search_term_string",
    },
};

export const SOFTWARE_APPLICATION_SCHEMA = {
    "@type": "SoftwareApplication",
    "@id": "https://ui.nyxhora.com/#software",
    name: "Nyxhora UI",
    applicationCategory: "DeveloperApplication",
    applicationSubCategory: "UI Component Library",
    operatingSystem: "Web, Cross-platform",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
    },
    description: "A comprehensive UI component library for React and Next.js featuring 70+ accessible, customizable components with built-in animations.",
    author: { "@id": "https://ui.nyxhora.com/#organization" },
    programmingLanguage: ["TypeScript", "JavaScript", "React", "CSS"],
    runtimePlatform: "Node.js",
    softwareRequirements: "React 18+, Next.js 14+, Tailwind CSS 3+, TypeScript 5+",
    featureList: [
        "70+ UI Components",
        "Framer Motion Animations",
        "Tailwind CSS Styling",
        "Radix UI Accessibility",
        "TypeScript Support",
        "Dark Mode",
        "Copy-Paste Installation",
        "Server-Side Rendering",
    ],
};

export const SOFTWARE_SOURCE_CODE_SCHEMA = {
    "@type": "SoftwareSourceCode",
    "@id": "https://ui.nyxhora.com/#sourcecode",
    name: "Nyxhora UI",
    codeRepository: "https://github.com/nyxhora/ui",
    programmingLanguage: {
        "@type": "ComputerLanguage",
        name: "TypeScript",
    },
    runtimePlatform: "Node.js",
    targetProduct: { "@id": "https://ui.nyxhora.com/#software" },
};

// Complete graph for root layout
export function getRootStructuredData() {
    return {
        "@context": "https://schema.org",
        "@graph": [
            ORGANIZATION_SCHEMA,
            WEBSITE_SCHEMA,
            SOFTWARE_APPLICATION_SCHEMA,
            SOFTWARE_SOURCE_CODE_SCHEMA,
        ],
    };
}

// =============================================================================
// COMPONENT-SPECIFIC SEO HELPERS
// =============================================================================

interface ComponentMetadataOptions {
    name: string;
    description: string;
    category?: string;
    keywords?: string[];
}

/**
 * Generate SEO-optimized metadata for a component documentation page
 */
export function generateComponentMetadata(options: ComponentMetadataOptions): Metadata {
    const { name, description, category = "React", keywords = [] } = options;

    const title = `${name} Component - ${category} ${name} | Nyxhora UI`;
    const fullDescription = `${description}. Copy-paste ${name} component for React & Next.js. Built with Tailwind CSS, Radix UI, and Framer Motion. Free and open source.`;

    const componentKeywords = [
        `${name.toLowerCase()} component`,
        `react ${name.toLowerCase()}`,
        `nextjs ${name.toLowerCase()}`,
        `tailwind ${name.toLowerCase()}`,
        `${name.toLowerCase()} ui`,
        ...keywords,
        ...SEO_KEYWORDS.primary.slice(0, 5),
    ];

    const slug = name.toLowerCase().replace(/\s+/g, "-");
    const pageUrl = `https://ui.nyxhora.com/docs/components/${slug}`;

    return {
        title,
        description: fullDescription,
        keywords: componentKeywords,
        openGraph: {
            title,
            description: fullDescription,
            type: "article",
            url: pageUrl,
            siteName: "Nyxhora UI",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description: fullDescription,
        },
        alternates: {
            canonical: pageUrl,
        },
    };
}

/**
 * Generate FAQPage structured data for a component
 */
export function generateComponentFAQSchema(componentName: string, faqs: { question: string; answer: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };
}

/**
 * Generate BreadcrumbList structured data
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

/**
 * Generate ItemList schema for component catalog
 */
export function generateComponentCatalogSchema() {
    const allComponents = docsConfig
        .filter((cat) => cat.title !== "Getting Started" && cat.title !== "Utilities")
        .flatMap((cat) => cat.items);

    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Nyxhora UI Components",
        description: "Complete catalog of React UI components available in Nyxhora UI library",
        numberOfItems: allComponents.length,
        itemListElement: allComponents.map((item: DocsNavItem, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.title,
            description: item.description,
            url: `https://ui.nyxhora.com${item.href}`,
        })),
    };
}

/**
 * Generate TechArticle schema for documentation pages
 */
export function generateTechArticleSchema(options: {
    title: string;
    description: string;
    url: string;
    dateModified?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: options.title,
        description: options.description,
        url: options.url,
        dateModified: options.dateModified || new Date().toISOString(),
        author: { "@id": "https://ui.nyxhora.com/#organization" },
        publisher: { "@id": "https://ui.nyxhora.com/#organization" },
        isAccessibleForFree: true,
        inLanguage: "en-US",
    };
}

// =============================================================================
// DEFAULT COMPONENT FAQs (reusable templates)
// =============================================================================

export function getDefaultComponentFAQs(componentName: string) {
    return [
        {
            question: `How do I install the ${componentName} component?`,
            answer: `You can install the ${componentName} component using the shadcn CLI: npx shadcn@latest add "https://ui.nyxhora.com/r/${componentName.toLowerCase().replace(/\s+/g, "-")}.json". Alternatively, copy the component code directly from the documentation.`,
        },
        {
            question: `Is the ${componentName} component accessible?`,
            answer: `Yes, the ${componentName} component is built with accessibility in mind using Radix UI primitives. It supports keyboard navigation, screen readers, and follows WCAG guidelines.`,
        },
        {
            question: `Can I customize the ${componentName} component?`,
            answer: `Absolutely! The ${componentName} component is fully customizable using Tailwind CSS classes. You can modify colors, sizes, animations, and more by editing the component code or passing custom className props.`,
        },
        {
            question: `Does the ${componentName} component work with Next.js?`,
            answer: `Yes, all Nyxhora UI components including ${componentName} are fully compatible with Next.js 14+ (including Next.js 15), supporting both the App Router and Pages Router.`,
        },
    ];
}
