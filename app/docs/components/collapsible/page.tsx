import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata = generateComponentMetadata({
    name: "Collapsible",
    description: "An interactive component which expands/collapses a panel.",
    category: "Display",
});

// import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/registry/ui/collapsible";

export default function CollapsibleDocsPage() {
    const faqSchema = generateComponentFAQSchema("Collapsible", getDefaultComponentFAQs("Collapsible"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Collapsible", url: "https://ui.nyxhora.com/docs/components/collapsible" },
    ]);

    
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
            <DocsHeader
                title="Collapsible"
                description="An interactive component which expands/collapses a panel."
            />
            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
            <CodeBlockWrapper
                title="Installation"
                language="bash"
                code={`npx shadcn@latest add collapsible`}
            />
        </div>
        </>
    );
}

