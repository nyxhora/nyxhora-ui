import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { GradientBackground } from "@/registry/ui/gradient-background";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata = generateComponentMetadata({
    name: "Gradient Background",
    description: "A configurable, positioned gradient blur effect for backgrounds.",
    category: "Effects",
});


export default function GradientBackgroundDocsPage() {
    const faqSchema = generateComponentFAQSchema("Gradient Background", getDefaultComponentFAQs("Gradient Background"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Gradient Background", url: "https://ui.nyxhora.com/docs/components/gradient-background" },
    ]);

    
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
            {/* <GradientBackground className="fixed top-0 left-0 w-full h-full" intensity="low" /> */}
            <DocsHeader
                title="Gradient Background"
                description="A configurable, positioned gradient blur effect for backgrounds."
            />

            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="relative w-full h-64 border rounded-lg overflow-hidden bg-background">
                        <GradientBackground position="center" intensity="medium" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xl font-bold z-10">Centered Gradient</span>
                        </div>
                    </div>
                }
                code={`<div className="relative w-full h-64 overflow-hidden">
  <GradientBackground position="center" intensity="medium" />
  {/* Content */}
</div>`}
            />

            <DocsInstallation name="gradient-background" />

            <CodeBlockWrapper
                title="Usage"
                code={`import { GradientBackground } from "@/registry/ui/gradient-background"

export default function HeroSection() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
       <GradientBackground position="center" intensity="high" />
       
       <div className="relative z-10">
          <h1>My Hero Title</h1>
       </div>
    </div>
  )
}`}
                language="tsx"
            />

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                <DocsPreview
                    title="Positions"
                    previewCode={
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="relative h-40 border rounded-lg overflow-hidden flex items-center justify-center">
                                <GradientBackground position="left" intensity="medium" />
                                <span className="z-10 font-mono text-sm">position="left"</span>
                            </div>
                            <div className="relative h-40 border rounded-lg overflow-hidden flex items-center justify-center">
                                <GradientBackground position="center" intensity="medium" />
                                <span className="z-10 font-mono text-sm">position="center"</span>
                            </div>
                            <div className="relative h-40 border rounded-lg overflow-hidden flex items-center justify-center">
                                <GradientBackground position="right" intensity="medium" />
                                <span className="z-10 font-mono text-sm">position="right"</span>
                            </div>
                        </div>
                    }
                    code={`<GradientBackground position="left" />
<GradientBackground position="center" />
<GradientBackground position="right" />`}
                />

                <DocsPreview
                    title="Intensities"
                    previewCode={
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="relative h-40 border rounded-lg overflow-hidden flex items-center justify-center">
                                <GradientBackground position="center" intensity="low" />
                                <span className="z-10 font-mono text-sm">intensity="low"</span>
                            </div>
                            <div className="relative h-40 border rounded-lg overflow-hidden flex items-center justify-center">
                                <GradientBackground position="center" intensity="medium" />
                                <span className="z-10 font-mono text-sm">intensity="medium"</span>
                            </div>
                            <div className="relative h-40 border rounded-lg overflow-hidden flex items-center justify-center">
                                <GradientBackground position="center" intensity="high" />
                                <span className="z-10 font-mono text-sm">intensity="high"</span>
                            </div>
                        </div>
                    }
                    code={`<GradientBackground intensity="low" />
<GradientBackground intensity="medium" />
<GradientBackground intensity="high" />`}
                />

            </section>

            <DocsProps
                props={[
                    {
                        name: "position",
                        type: '"left" | "center" | "right"',
                        description: "Horizontal position of the gradient blob (default: 'center').",
                    },
                    {
                        name: "intensity",
                        type: '"low" | "medium" | "high"',
                        description: "Opacity and blur intensity (default: 'medium').",
                    },
                    {
                        name: "className",
                        type: "string",
                        description: "Additional CSS classes",
                    },
                    {
                        name: "children",
                        type: "ReactNode",
                        description: "Optional children to render inside the wrapper (though usually this component is used as a background layer).",
                    }
                ]}
            />
        </div>
        </>
    );
}
