import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { Separator } from "@/registry/ui/separator";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata = generateComponentMetadata({
    name: "Separator",
    description: "Visually or semantically separates content.",
    category: "Display",
});


export default function SeparatorDocsPage() {
    const faqSchema = generateComponentFAQSchema("Separator", getDefaultComponentFAQs("Separator"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Separator", url: "https://ui.nyxhora.com/docs/components/separator" },
    ]);

    
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
            <DocsHeader title="Separator" description="Visually or semantically separates content." />

            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="w-full max-w-md">
                        <div className="space-y-1"><h4 className="text-sm font-medium">Radix Primitives</h4><p className="text-sm text-muted-foreground">An open-source UI component library.</p></div>
                        <Separator className="my-4" />
                        <div className="flex h-5 items-center space-x-4 text-sm"><div>Blog</div><Separator orientation="vertical" /><div>Docs</div><Separator orientation="vertical" /><div>Source</div></div>
                    </div>
                }
                code={`<Separator className="my-4" />

<div className="flex h-5 items-center space-x-4 text-sm">
  <div>Blog</div>
  <Separator orientation="vertical" />
  <div>Docs</div>
</div>`}
            />
            <DocsInstallation name="separator" />

            <CodeBlockWrapper
                title="Usage"
                code={`import { Separator } from "@/registry/ui/separator"

export default function MyComponent() {
  return <Separator />
}`}
                language="tsx"
            />

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                <DocsPreview
                    variant="Horizontal"
                    previewCode={<div className="w-full max-w-md"><p>Content above</p><Separator className="my-4" /><p>Content below</p></div>}
                    code={`<Separator className="my-4" />`}
                />

                <DocsPreview
                    variant="Vertical"
                    previewCode={<div className="flex h-5 items-center space-x-4 text-sm"><div>Item 1</div><Separator orientation="vertical" /><div>Item 2</div><Separator orientation="vertical" /><div>Item 3</div></div>}
                    code={`<Separator orientation="vertical" />`}
                />
            </section>
        </div>
        </>
    );
}
