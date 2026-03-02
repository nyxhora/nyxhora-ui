
import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { MagicText } from "@/registry/ui/magic-text";
import { CodeBlockWrapper, DocsHeader, DocsPreview } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata = generateComponentMetadata({
    name: "Magic Text",
    description: "A text component with a magical spinning gradient fill effect.",
    category: "Effects",
});


export default function MagicTextDocsPage() {
    const faqSchema = generateComponentFAQSchema("Magic Text", getDefaultComponentFAQs("Magic Text"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Magic Text", url: "https://ui.nyxhora.com/docs/components/magic-text" },
    ]);

    
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
            {/* Header */}
            <DocsHeader title="Magic Text" description="A text component with a magical spinning gradient fill effect." />

            {/* Preview */}
            <MagicText>Magic Text</MagicText>
            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="flex flex-col gap-4 items-center">
                        <MagicText>Magic Text</MagicText>
                        <MagicText className="text-xl px-6 py-2">Larger Magic Text</MagicText>
                        <MagicText gradientColor="conic-gradient(from 90deg at 50% 50%, #FF0080 0%, #7928CA 50%, #FF0080 100%)">
                            Custom Gradient
                        </MagicText>
                    </div>
                }
                code={`<MagicText>Magic Text</MagicText>
<MagicText className="text-xl px-6 py-2">Larger Magic Text</MagicText>
<MagicText gradientColor="conic-gradient(from 90deg at 50% 50%, #FF0080 0%, #7928CA 50%, #FF0080 100%)">
  Custom Gradient
</MagicText>`}
            />

            {/* Installation */}
            <DocsInstallation name={"magic-text"} />

            {/* Usage */}
            <CodeBlockWrapper
                title="Usage"
                code={`import { MagicText } from "@/registry/ui/magic-text";

export default function Example() {
  return (
    <MagicText>
      Magic Text content
    </MagicText>
  );
}`}
                language="tsx"
            />
        </div>
        </>
    );
}
