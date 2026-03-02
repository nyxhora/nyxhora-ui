import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import Content from "./_content";

export const metadata = generateComponentMetadata({
    name: "Calendar",
    description: "A date field component that allows users to enter and edit dates with an accessible calendar picker interface",
    category: "Form",
});

export default function Page() {
    const faqSchema = generateComponentFAQSchema("Calendar", getDefaultComponentFAQs("Calendar"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Calendar", url: "https://ui.nyxhora.com/docs/components/calendar" },
    ]);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Content />
        </>
    );
}

