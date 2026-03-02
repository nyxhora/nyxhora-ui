import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { SpotlightText } from "@/registry/ui/spotlight-text";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata = generateComponentMetadata({
    name: "Spotlight Text",
    description: "Text that acts as a stencil, revealing a fluid, interactive background spotlight effect.",
    category: "Effects",
});


export default function SpotlightTextDocsPage() {
    const faqSchema = generateComponentFAQSchema("Spotlight Text", getDefaultComponentFAQs("Spotlight Text"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Spotlight Text", url: "https://ui.nyxhora.com/docs/components/spotlight-text" },
    ]);

    
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
            <DocsHeader
                title="Spotlight Text"
                description="Text that acts as a stencil, revealing a fluid, interactive background spotlight effect."
            />

            <DocsPreview
                title="Preview"
                previewCode={<SpotlightText text="Spotlight" />}
                code={`<SpotlightText text="Spotlight" />`}
            />

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Custom Colors</h2>
                <ComponentPreview
                    preview={<SpotlightText text="Neon" spotlightColors={["#f0f", "#0ff", "#ff0"]} />}
                    code={`<SpotlightText 
  text="Neon" 
  spotlightColors={["#f0f", "#0ff", "#ff0"]} 
/>`}
                />
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Custom Container</h2>
                <ComponentPreview
                    preview={<SpotlightText text="Explore" containerClassName="rounded-xl border border-white/20 h-60" className="text-6xl" />}
                    code={`<SpotlightText 
  text="Explore" 
  containerClassName="rounded-xl border border-white/20 h-60" 
  className="text-6xl" 
/>`}
                />
            </section>

            <DocsInstallation name={"spotlight-text"} />

            <DocsProps
                props={[
                    {
                        name: "text",
                        type: "string",
                        defaultValue: "-",
                        description: "The text to display.",
                    },
                    {
                        name: "spotlightColors",
                        type: "string[]",
                        defaultValue: "['#3b82f6', '#ef4444', '#22c55e']",
                        description: "Array of 3 colors for the spotlight shapes.",
                    },
                    {
                        name: "containerClassName",
                        type: "string",
                        defaultValue: "-",
                        description: "Class for the outer container.",
                    },
                    {
                        name: "className",
                        type: "string",
                        defaultValue: "-",
                        description: "Class for the text element.",
                    },
                ]}
            />
        </div>
        </>
    );
}
