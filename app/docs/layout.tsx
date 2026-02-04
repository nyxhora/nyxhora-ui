import { Metadata } from "next";
import { DocsLayoutWrapper } from "@/components/ui/docs-layout-wrapper";

export const metadata: Metadata = {
    title: {
        template: "%s | NyxhoraUI",
        default: "Nyxhora UI- Composable UI for modern builders",
    },
    description: "Comprehensive documentation for Nyxhora UI- A collection of beautifully designed, accessible, and customizable React UI components for web applications.",
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
        title: "NyxhoraUI",
        description: "Build beautiful interfaces with modern, accessible React components.",
        type: "website",
        siteName: "NyxhoraUI",
    },
    twitter: {
        card: "summary_large_image",
        title: "Nyxhora UI Documentation",
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
