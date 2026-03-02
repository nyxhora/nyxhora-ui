
import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { ShinyCard, ShinyCardHeader, ShinyCardTitle, ShinyCardDescription, ShinyCardContent, ShinyCardFooter } from "@/registry/ui/shiny-card";
import { CodeBlockWrapper, DocsHeader, DocsPreview } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata = generateComponentMetadata({
    name: "Shiny Card",
    description: "A card component with a shimmering shiny border effect.",
    category: "Effects",
});


export default function ShinyCardDocsPage() {
    const faqSchema = generateComponentFAQSchema("Shiny Card", getDefaultComponentFAQs("Shiny Card"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Shiny Card", url: "https://ui.nyxhora.com/docs/components/shiny-card" },
    ]);

    
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
            {/* Header */}
            <DocsHeader title="Shiny Card" description="A card component with a shimmering shiny border effect." />

            {/* Preview */}
            <DocsPreview
                title="Preview"
                previewCode={
                    <ShinyCard className="w-[350px]">
                        <ShinyCardHeader>
                            <ShinyCardTitle>Shiny Card</ShinyCardTitle>
                            <ShinyCardDescription>A subtle shimmer effect.</ShinyCardDescription>
                        </ShinyCardHeader>
                        <ShinyCardContent>
                            <p className="text-sm text-neutral-400">
                                The border of this card has a passing shine animation, perfect for highlighting elements without being too distracting.
                            </p>
                        </ShinyCardContent>
                        <ShinyCardFooter>
                            <button className="text-sm text-blue-400">Action</button>
                        </ShinyCardFooter>
                    </ShinyCard>
                }
                code={`<ShinyCard className="w-[350px]">
  <div className="p-6">
    <h3 className="text-lg font-bold">Shiny Card</h3>
    <p className="text-neutral-400">The border of this card has a passing shine animation.</p>
  </div>
</ShinyCard>`}
            />

            {/* Installation */}
            <DocsInstallation name={"shiny-card"} />

            {/* Usage */}
            <CodeBlockWrapper
                title="Usage"
                code={`import { ShinyCard } from "@/registry/ui/shiny-card";

export default function Example() {
  return (
    <ShinyCard>
      Content goes here
    </ShinyCard>
  );
}`}
                language="tsx"
            />
        </div>
        </>
    );
}
