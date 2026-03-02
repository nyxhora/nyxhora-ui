import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata = generateComponentMetadata({
    name: "Resizable",
    description: "Accessible resizable panel groups and layouts.",
    category: "Display",
});


export default function ResizableDocsPage() {
    const faqSchema = generateComponentFAQSchema("Resizable", getDefaultComponentFAQs("Resizable"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Resizable", url: "https://ui.nyxhora.com/docs/components/resizable" },
    ]);

    
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
            <DocsHeader
                title="Resizable"
                description="Accessible resizable panel groups and layouts."
            />
            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
            <CodeBlockWrapper
                title="Installation"
                language="bash"
                code={`npx shadcn@latest add resizable`}
            />
        </div>
        </>
    );
}

