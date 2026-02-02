import { TextHoverEffect } from "@/registry/ui/text-hover-effect";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export default function TextHoverEffectDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Text Hover Effect"
                description="SVG text with animated stroke on load and a colorful gradient reveal effect on hover. Creates an engaging, interactive typography experience."
            />

            {/* Preview */}
            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="h-[200px] flex items-center justify-center">
                        <TextHoverEffect text="NYXHORA" />
                    </div>
                }
                code={`<TextHoverEffect text="NYXHORA" />`}
            />

            {/* Installation */}
            <DocsInstallation name="text-hover-effect" />

            {/* Usage */}
            <CodeBlockWrapper
                title="Usage"
                code={`import { TextHoverEffect } from "@/registry/ui/text-hover-effect"

export default function Hero() {
  return (
    <div className="h-[200px] flex items-center justify-center">
      <TextHoverEffect text="HOVER ME" />
    </div>
  )
}`}
                language="tsx"
            />

            {/* Examples */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Different Text</h3>
                    <ComponentPreview
                        preview={
                            <div className="h-[150px] flex items-center justify-center">
                                <TextHoverEffect text="DESIGN" />
                            </div>
                        }
                        code={`<TextHoverEffect text="DESIGN" />`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">With Smooth Transition</h3>
                    <ComponentPreview
                        preview={
                            <div className="h-[150px] flex items-center justify-center">
                                <TextHoverEffect text="SMOOTH" duration={0.15} />
                            </div>
                        }
                        code={`<TextHoverEffect text="SMOOTH" duration={0.15} />`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Short Text</h3>
                    <ComponentPreview
                        preview={
                            <div className="h-[150px] flex items-center justify-center">
                                <TextHoverEffect text="UI" />
                            </div>
                        }
                        code={`<TextHoverEffect text="UI" />`}
                    />
                </div>
            </section>

            {/* Props */}
            <DocsProps
                props={[
                    {
                        name: "text",
                        type: "string",
                        defaultValue: "required",
                        description: "The text to display with the hover effect",
                    },
                    {
                        name: "duration",
                        type: "number",
                        defaultValue: "0",
                        description: "Transition duration in seconds for the gradient mask movement (0 for instant)",
                    },
                ]}
            />

            {/* Notes */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Styling Notes</h2>
                <div className="p-4 rounded-lg bg-muted space-y-2">
                    <p className="text-sm text-muted-foreground">
                        • The component uses SVG text with a <code className="text-primary">viewBox</code> of <code className="text-primary">0 0 300 100</code>.
                        This means short text will appear larger, long text will appear smaller.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        • The text uses Helvetica font by default for a clean, modern look.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        • The gradient colors are: yellow → red → blue → cyan → violet.
                    </p>
                </div>
            </section>
        </div>
    );
}
