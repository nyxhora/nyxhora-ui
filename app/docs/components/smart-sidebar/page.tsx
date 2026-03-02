import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import Content from "./_content";

export const metadata = generateComponentMetadata({
    name: "Smart Sidebar",
    description: "A modern dual-pane navigation system with primary icon sidebar and expandable secondary content panel for desktop apps",
    category: "Navigation",
});

export default function Page() {
    const faqSchema = generateComponentFAQSchema("Smart Sidebar", getDefaultComponentFAQs("Smart Sidebar"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Smart Sidebar", url: "https://ui.nyxhora.com/docs/components/smart-sidebar" },
    ]);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Content />
        </>
    );
}

