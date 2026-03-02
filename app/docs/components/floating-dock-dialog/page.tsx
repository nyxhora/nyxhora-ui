import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import Content from "./_content";

export const metadata = generateComponentMetadata({
    name: "Floating Dock Dialog",
    description: "An enhanced floating dock with bottom sheet dialog workspace cards custom icons colors and spring physics",
    category: "Navigation",
});

export default function Page() {
    const faqSchema = generateComponentFAQSchema("Floating Dock Dialog", getDefaultComponentFAQs("Floating Dock Dialog"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Floating Dock Dialog", url: "https://ui.nyxhora.com/docs/components/floating-dock-dialog" },
    ]);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Content />
        </>
    );
}

