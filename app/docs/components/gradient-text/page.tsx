
import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { GradientText } from "@/registry/ui/gradient-text";
import { CodeBlockWrapper, DocsHeader, DocsPreview } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata = generateComponentMetadata({
    name: "Gradient Text",
    description: "A customizable text component with gradient fill.",
    category: "Effects",
});


export default function GradientTextDocsPage() {
    const faqSchema = generateComponentFAQSchema("Gradient Text", getDefaultComponentFAQs("Gradient Text"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Gradient Text", url: "https://ui.nyxhora.com/docs/components/gradient-text" },
    ]);

    
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
            {/* Header */}
            <DocsHeader title="Gradient Text" description="A customizable text component with gradient fill." />

            {/* Preview */}
            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="flex flex-col gap-8 items-center justify-center p-10">
                        <GradientText>Gradient Text</GradientText>

                        <div className="space-y-2 text-center">
                            <p className="text-sm text-muted-foreground">Custom Colors</p>
                            <GradientText
                                colors={["#ff7e5f", "#feb47b"]}
                                className="text-6xl"
                            >
                                Sunset
                            </GradientText>
                        </div>

                        <div className="space-y-2 text-center">
                            <p className="text-sm text-muted-foreground">Animated</p>
                            <GradientText
                                className="text-6xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400"
                                animationSpeed={3}
                            >
                                Animated
                            </GradientText>
                        </div>
                    </div>
                }
                code={`<GradientText>Gradient Text</GradientText>

<GradientText 
    colors={["#ff7e5f", "#feb47b"]} 
    className="text-6xl"
>
    Sunset
</GradientText>

<GradientText 
    className="text-6xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400"
    animationSpeed={3}
>
    Animated
</GradientText>`}
            />

            {/* Installation */}
            <DocsInstallation name={"gradient-text"} />

            {/* Usage */}
            <CodeBlockWrapper
                title="Usage"
                code={`import { GradientText } from "@/registry/ui/gradient-text";

export default function Example() {
  return (
    <GradientText className="text-4xl">
      Your Gradient Text
    </GradientText>
  );
}`}
                language="tsx"
            />
        </div>
        </>
    );
}
