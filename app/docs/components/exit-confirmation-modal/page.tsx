import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import Content from "./_content";

export const metadata = generateComponentMetadata({
    name: "Exit Confirmation Modal",
    description: "A modal dialog that prompts users for confirmation when attempting to leave a page with unsaved changes",
    category: "Overlay",
});

export default function Page() {
    const faqSchema = generateComponentFAQSchema("Exit Confirmation Modal", getDefaultComponentFAQs("Exit Confirmation Modal"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Exit Confirmation Modal", url: "https://ui.nyxhora.com/docs/components/exit-confirmation-modal" },
    ]);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Content />
        </>
    );
}

