import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { DocsHeader, DocsPreview, CodeBlockWrapper } from "@/components/ui/docs-documentation";
import { ScrollArea } from "@/registry/ui/scroll-area";

export const metadata = generateComponentMetadata({
    name: "Scroll Area",
    description: "Augments native scroll functionality for custom, cross-browser styling.",
    category: "Display",
});


export default function ScrollAreaDocsPage() {
    const faqSchema = generateComponentFAQSchema("Scroll Area", getDefaultComponentFAQs("Scroll Area"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Scroll Area", url: "https://ui.nyxhora.com/docs/components/scroll-area" },
    ]);

    
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
            <DocsHeader
                title="Scroll Area"
                description="Augments native scroll functionality for custom, cross-browser styling."
            />

            <DocsPreview
                title="Default"
                previewCode={
                    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
                        <div className="mb-4 text-sm font-medium leading-none">Tags</div>
                        {Array.from({ length: 50 }).map((_, i, a) => (
                            <div key={i} className="text-sm">
                                v1.2.0-beta.{a.length - i}
                            </div>
                        ))}
                    </ScrollArea>
                }
                code={`<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
  <div className="mb-4 text-sm font-medium leading-none">Tags</div>
  {tags.map((tag) => (
    <div key={tag} className="text-sm">
      {tag}
    </div>
  ))}
</ScrollArea>`}
            />

            <CodeBlockWrapper
                title="Installation"
                language="bash"
                code={`npx shadcn@latest add scroll-area`}
            />
        </div>
        </>
    );
}
