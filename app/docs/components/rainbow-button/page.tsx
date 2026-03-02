import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { RainbowButton } from "@/registry/ui/rainbow-button";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata = generateComponentMetadata({
    name: "Rainbow Button",
    description: "A stunning animated button with rainbow gradient border, text, and glow effects. The gradient animates on hover for an eye-catching call-to-action.",
    category: "Effects",
});


export default function RainbowButtonDocsPage() {
    const faqSchema = generateComponentFAQSchema("Rainbow Button", getDefaultComponentFAQs("Rainbow Button"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Rainbow Button", url: "https://ui.nyxhora.com/docs/components/rainbow-button" },
    ]);

    
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
            <DocsHeader
                title="Rainbow Button"
                description="A stunning animated button with rainbow gradient border, text, and glow effects. The gradient animates on hover for an eye-catching call-to-action."
            />

            {/* Preview */}
            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="relative w-full rounded-lg overflow-hidden bg-neutral-950 p-12 flex items-center justify-center">
                        <RainbowButton>
                            Try Nyxhora UI ✨
                        </RainbowButton>
                    </div>
                }
                code={`<RainbowButton>Try Nyxhora UI ✨</RainbowButton>`}
            />

            {/* Installation */}
            <DocsInstallation name="rainbow-button" />

            {/* Usage */}
            <CodeBlockWrapper
                title="Usage"
                code={`import { RainbowButton } from "@/registry/ui/rainbow-button"

export default function CTA() {
  return (
    <div className="bg-neutral-950 p-8">
      <RainbowButton 
        size="lg"
        onClick={() => console.log("Clicked!")}
      >
        Get Started Now!
      </RainbowButton>
    </div>
  )
}`}
                language="tsx"
            />

            {/* Size Variations */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Sizes</h2>

                <div className="grid gap-6 md:grid-cols-3">
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Small</h3>
                        <div className="relative h-[100px] w-full rounded-lg overflow-hidden bg-neutral-950 flex items-center justify-center">
                            <RainbowButton size="sm">Small Button</RainbowButton>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Medium (Default)</h3>
                        <div className="relative h-[100px] w-full rounded-lg overflow-hidden bg-neutral-950 flex items-center justify-center">
                            <RainbowButton size="md">Medium Button</RainbowButton>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Large</h3>
                        <div className="relative h-[100px] w-full rounded-lg overflow-hidden bg-neutral-950 flex items-center justify-center">
                            <RainbowButton size="lg">Large Button</RainbowButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* Examples */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Call to Action</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative w-full rounded-lg overflow-hidden bg-neutral-950 p-8 flex items-center justify-center">
                                <RainbowButton size="lg">
                                    Join Nyxhora Today! 🚀
                                </RainbowButton>
                            </div>
                        }
                        code={`<RainbowButton size="lg">Join Nyxhora Today! 🚀</RainbowButton>`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Subscribe Button</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative w-full rounded-lg overflow-hidden bg-neutral-950 p-8 flex items-center justify-center">
                                <RainbowButton>
                                    Subscribe for Updates 📧
                                </RainbowButton>
                            </div>
                        }
                        code={`<RainbowButton>Subscribe for Updates 📧</RainbowButton>`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Fast Animation</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative w-full rounded-lg overflow-hidden bg-neutral-950 p-8 flex items-center justify-center">
                                <RainbowButton animationDuration={1}>
                                    Quick Rainbow! ⚡
                                </RainbowButton>
                            </div>
                        }
                        code={`<RainbowButton animationDuration={1}>Quick Rainbow! ⚡</RainbowButton>`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Thick Border</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative w-full rounded-lg overflow-hidden bg-neutral-950 p-8 flex items-center justify-center">
                                <RainbowButton borderWidth={3}>
                                    Bold Border 💪
                                </RainbowButton>
                            </div>
                        }
                        code={`<RainbowButton borderWidth={3}>Bold Border 💪</RainbowButton>`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Disabled State</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative w-full rounded-lg overflow-hidden bg-neutral-950 p-8 flex items-center justify-center">
                                <RainbowButton disabled>
                                    Disabled Button
                                </RainbowButton>
                            </div>
                        }
                        code={`<RainbowButton disabled>Disabled Button</RainbowButton>`}
                    />
                </div>
            </section>

            {/* Fun Examples */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Fun with Nyxhora</h2>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="relative rounded-lg overflow-hidden bg-neutral-950 p-6 flex items-center justify-center">
                        <RainbowButton>Ship it! 🚢</RainbowButton>
                    </div>
                    <div className="relative rounded-lg overflow-hidden bg-neutral-950 p-6 flex items-center justify-center">
                        <RainbowButton>Build Something Cool 🛠️</RainbowButton>
                    </div>
                    <div className="relative rounded-lg overflow-hidden bg-neutral-950 p-6 flex items-center justify-center">
                        <RainbowButton>Copy that Component 📋</RainbowButton>
                    </div>
                    <div className="relative rounded-lg overflow-hidden bg-neutral-950 p-6 flex items-center justify-center">
                        <RainbowButton>Star on GitHub ⭐</RainbowButton>
                    </div>
                </div>
            </section>

            {/* Props */}
            <DocsProps
                props={[
                    {
                        name: "children",
                        type: "React.ReactNode",
                        defaultValue: "-",
                        description: "Button text/content (required)",
                    },
                    {
                        name: "onClick",
                        type: "() => void",
                        defaultValue: "undefined",
                        description: "Click handler function",
                    },
                    {
                        name: "disabled",
                        type: "boolean",
                        defaultValue: "false",
                        description: "Whether the button is disabled",
                    },
                    {
                        name: "size",
                        type: "'sm' | 'md' | 'lg'",
                        defaultValue: "md",
                        description: "Button size variant",
                    },
                    {
                        name: "borderWidth",
                        type: "number",
                        defaultValue: "1.5",
                        description: "Border width in pixels",
                    },
                    {
                        name: "animationDuration",
                        type: "number",
                        defaultValue: "3",
                        description: "Animation duration in seconds",
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
