import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { HoverRevealText } from "@/registry/ui/hover-reveal-text";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata = generateComponentMetadata({
    name: "Hover Reveal Text",
    description: "An interactive text effect where characters blur and reveal as you hover, with a beautiful spreading effect to neighboring characters. Perfect for secret codes, teasers, and fun interactions.",
    category: "Effects",
});


export default function HoverRevealTextDocsPage() {
    const faqSchema = generateComponentFAQSchema("Hover Reveal Text", getDefaultComponentFAQs("Hover Reveal Text"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Hover Reveal Text", url: "https://ui.nyxhora.com/docs/components/hover-reveal-text" },
    ]);

    
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
            <DocsHeader
                title="Hover Reveal Text"
                description="An interactive text effect where characters blur and reveal as you hover, with a beautiful spreading effect to neighboring characters. Perfect for secret codes, teasers, and fun interactions."
            />

            {/* Preview */}
            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="relative w-full rounded-lg overflow-hidden bg-neutral-950 py-8">
                        <HoverRevealText
                            text="NYXHORA"
                            fontSize={3}
                            helperText="Glide to reveal the magic ✨"
                        />
                    </div>
                }
                code={`<HoverRevealText
  text="NYXHORA"
  fontSize={3}
  helperText="Glide to reveal the magic ✨"
/>`}
            />

            {/* Installation */}
            <DocsInstallation name="hover-reveal-text" />

            {/* Usage */}
            <CodeBlockWrapper
                title="Usage"
                code={`import { HoverRevealText } from "@/registry/ui/hover-reveal-text"

export default function SecretCode() {
  return (
    <div className="bg-neutral-950 min-h-screen flex items-center justify-center">
      <HoverRevealText
        text="SECRET123"
        fontSize={2.5}
        blurAmount={10}
        spreadRadius={4}
        helperText="Hover to reveal secret code"
      />
    </div>
  )
}`}
                language="tsx"
            />

            {/* Examples */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Fun Message</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative w-full rounded-lg overflow-hidden bg-neutral-950 py-6">
                                <HoverRevealText
                                    text="AWESOME!"
                                    fontSize={2.5}
                                    helperText="Swipe through to see the fun 🎉"
                                />
                            </div>
                        }
                        code={`<HoverRevealText text="AWESOME!" helperText="Swipe through" />`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Secret Code</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative w-full rounded-lg overflow-hidden bg-neutral-950 py-6">
                                <HoverRevealText
                                    text="42069"
                                    fontSize={4}
                                    helperText="The secret code is..."
                                    blurAmount={12}
                                />
                            </div>
                        }
                        code={`<HoverRevealText text="42069" fontSize={4} blurAmount={12} />`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Wide Spread Effect</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative w-full rounded-lg overflow-hidden bg-neutral-950 py-6">
                                <HoverRevealText
                                    text="HELLOWORLD"
                                    fontSize={2}
                                    spreadRadius={7}
                                    helperText="Watch the wave effect!"
                                />
                            </div>
                        }
                        code={`<HoverRevealText text="HELLOWORLD" spreadRadius={7} />`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Minimal Style</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative w-full rounded-lg overflow-hidden bg-neutral-950 py-6">
                                <HoverRevealText
                                    text="MINIMAL"
                                    fontSize={2.5}
                                    background="none"
                                    showHelperText={false}
                                />
                            </div>
                        }
                        code={`<HoverRevealText text="MINIMAL" background="none" showHelperText={false} />`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Nyxhora Vibes</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative w-full rounded-lg overflow-hidden bg-neutral-950 py-6">
                                <HoverRevealText
                                    text="UIMAGIC"
                                    fontSize={3}
                                    color="#a855f7"
                                    background="gradient"
                                    helperText="Purple magic awaits 💜"
                                />
                            </div>
                        }
                        code={`<HoverRevealText text="UIMAGIC" color="#a855f7" background="gradient" />`}
                    />
                </div>
            </section>

            {/* Props */}
            <DocsProps
                props={[
                    {
                        name: "text",
                        type: "string",
                        defaultValue: "-",
                        description: "The text to display (required)",
                    },
                    {
                        name: "fontSize",
                        type: "number",
                        defaultValue: "3",
                        description: "Font size in rem units",
                    },
                    {
                        name: "color",
                        type: "string",
                        defaultValue: "#ffffff",
                        description: "Text color",
                    },
                    {
                        name: "blurAmount",
                        type: "number",
                        defaultValue: "8",
                        description: "Blur amount for inactive characters in pixels",
                    },
                    {
                        name: "spreadRadius",
                        type: "number",
                        defaultValue: "5",
                        description: "Number of neighboring characters affected by hover",
                    },
                    {
                        name: "background",
                        type: "'none' | 'dark' | 'gradient'",
                        defaultValue: "dark",
                        description: "Background style for the text container",
                    },
                    {
                        name: "showHelperText",
                        type: "boolean",
                        defaultValue: "true",
                        description: "Whether to show helper text above",
                    },
                    {
                        name: "helperText",
                        type: "string",
                        defaultValue: "Glide to reveal",
                        description: "Helper text content",
                    },
                    {
                        name: "className",
                        type: "string",
                        defaultValue: "undefined",
                        description: "Additional CSS classes",
                    },
                ]}
            />
        </div>
        </>
    );
}
