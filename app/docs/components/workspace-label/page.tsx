import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import Content from "./_content";

export const metadata = generateComponentMetadata({
    name: "Workspace Label",
    description: "A workspace switcher component with member avatars pending request notifications and keyboard shortcuts",
    category: "Navigation",
});

export default function Page() {
    const faqSchema = generateComponentFAQSchema("Workspace Label", getDefaultComponentFAQs("Workspace Label"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Workspace Label", url: "https://ui.nyxhora.com/docs/components/workspace-label" },
    ]);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Content />
        </>
    );
}

