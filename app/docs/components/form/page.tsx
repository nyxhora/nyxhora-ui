import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata = generateComponentMetadata({
    name: "Form",
    description: "Building forms with React Hook Form and Zod.",
    category: "Form",
});


export default function FormDocsPage() {
    const faqSchema = generateComponentFAQSchema("Form", getDefaultComponentFAQs("Form"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Form", url: "https://ui.nyxhora.com/docs/components/form" },
    ]);

    
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
            <DocsHeader
                title="Form"
                description="Building forms with React Hook Form and Zod."
            />

            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>

            <CodeBlockWrapper
                title="Installation"
                language="bash"
                code={`npx shadcn@latest add form`}
            />
        </div>
        </>
    );
}

