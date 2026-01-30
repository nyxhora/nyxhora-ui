import { Metadata } from "next";
import { DocsLayoutWrapper } from "@/components/ui/docs-layout-wrapper";

export const metadata: Metadata = {
    title: {
        template: "%s | NyxhoraUI Documentation",
        default: "NyxhoraUI Documentation - Modern React UI Components",
    },
    description: "Comprehensive documentation for NyxhoraUI - A collection of beautifully designed, accessible, and customizable React UI components for Next.js applications.",
    keywords: [
        "React components",
        "UI library",
        "Next.js components",
        "Tailwind CSS",
        "TypeScript",
        "accessible components",
        "modern UI",
        "NyxhoraUI",
        "component library",
        "web development",
    ],
    openGraph: {
        title: "NyxhoraUI Documentation",
        description: "Build beautiful interfaces with modern, accessible React components.",
        type: "website",
        siteName: "NyxhoraUI",
    },
    twitter: {
        card: "summary_large_image",
        title: "NyxhoraUI Documentation",
        description: "Build beautiful interfaces with modern, accessible React components.",
    },
};

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <DocsLayoutWrapper>{children}</DocsLayoutWrapper>;
}
