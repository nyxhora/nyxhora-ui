import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { GeistBackground } from "@/registry/ui/geist-background";
import { CodeBlockWrapper, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata = generateComponentMetadata({
    name: "Geist Background",
    description: "A mesmerizing flickering background effect with noise mask and conic gradients, inspired by Vercel's Geist design.",
    category: "Effects",
});


export default function GeistBackgroundDocsPage() {
    const faqSchema = generateComponentFAQSchema("Geist Background", getDefaultComponentFAQs("Geist Background"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Geist Background", url: "https://ui.nyxhora.com/docs/components/geist-background" },
    ]);

    
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
            <DocsHeader
                title="Geist Background"
                description="A mesmerizing flickering background effect with noise mask and conic gradients, inspired by Vercel's Geist design."
            />

            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="w-full h-[500px] overflow-hidden rounded-lg border">
                        <GeistBackground title="Geist" />
                    </div>
                }
                code={`import { GeistBackground } from "@/components/ui/geist-background";

export function GeistBackgroundDemo() {
  return (
    <div className="h-[500px] w-full overflow-hidden rounded-lg">
      <GeistBackground title="Geist" />
    </div>
  );
}`}
            />

            <DocsInstallation name="geist-background" />

            <CodeBlockWrapper
                title="Usage"
                code={`import { GeistBackground } from "@/components/ui/geist-background"

export default function MyComponent() {
  return (
    <GeistBackground className="h-screen" title="Geist">
        {/* Optional children */}
    </GeistBackground>
  )
}`}
                language="tsx"
            />

            <DocsProps
                props={[
                    {
                        name: "children",
                        type: "ReactNode",
                        description: "Optional content to render inside the background container.",
                    },
                    {
                        name: "className",
                        type: "string",
                        description: "Additional CSS classes for the container.",
                    },
                    {
                        name: "title",
                        type: "string",
                        description: "Large title title text to display centered.",
                    },
                ]}
            />
        </div>
        </>
    );
}
