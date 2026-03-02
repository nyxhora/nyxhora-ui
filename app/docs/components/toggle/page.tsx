import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata = generateComponentMetadata({
    name: "Toggle",
    description: "A two-state button that can be either on or off.",
    category: "Form",
});


export default function ToggleDocsPage() {
    const faqSchema = generateComponentFAQSchema("Toggle", getDefaultComponentFAQs("Toggle"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Toggle", url: "https://ui.nyxhora.com/docs/components/toggle" },
    ]);

    
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
            <DocsHeader
                title="Toggle"
                description="A two-state button that can be either on or off."
            />
            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
            <CodeBlockWrapper
                title="Installation"
                language="bash"
                code={`npx shadcn@latest add toggle`}
            />
        </div>
        </>
    );
}

