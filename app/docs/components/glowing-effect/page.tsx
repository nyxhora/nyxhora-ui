"use client";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";

export default function GlowingEffectDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Glowing Effect"
                description="An interactive glow effect that follows mouse movement. Creates a colorful border glow that responds to cursor position."
            />

            {/* Preview */}
            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="relative h-[200px] w-full max-w-md mx-auto rounded-xl border border-neutral-800 bg-neutral-950 p-6 overflow-hidden">
                        <GlowingEffect
                            spread={40}
                            glow={true}
                            disabled={false}
                            proximity={64}
                            inactiveZone={0.01}
                        />
                        <div className="relative z-10 flex flex-col items-center justify-center h-full">
                            <h3 className="text-xl font-semibold text-white">Hover over me</h3>
                            <p className="text-neutral-400 mt-2 text-sm">Move your cursor around the card</p>
                        </div>
                    </div>
                }
                code={`<div className="relative rounded-xl border border-neutral-800 bg-neutral-950 p-6">
  <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} />
  <div className="relative z-10">
    <h3 className="text-white">Hover over me</h3>
  </div>
</div>`}
            />

            {/* Installation */}
            <CodeBlockWrapper
                title="Requirements"
                code={`npm install motion`}
                language="cmd"
            />

            {/* Usage */}
            <CodeBlockWrapper
                title="Usage"
                code={`import { GlowingEffect } from "@/components/ui/glowing-effect"

export default function GlowCard() {
  return (
    <div className="relative rounded-xl border bg-neutral-950 p-6">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="relative z-10">
        {/* Your content here */}
      </div>
    </div>
  )
}`}
                language="tsx"
            />

            {/* Examples */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Variants</h2>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">White Variant</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[150px] w-full max-w-sm mx-auto rounded-xl border border-neutral-800 bg-neutral-950 p-6 overflow-hidden">
                                <GlowingEffect
                                    variant="white"
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                />
                                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                                    <h3 className="text-lg font-semibold text-white">White Glow</h3>
                                </div>
                            </div>
                        }
                        code={`<GlowingEffect variant="white" spread={40} glow={true} disabled={false} />`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">With Blur</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[150px] w-full max-w-sm mx-auto rounded-xl border border-neutral-800 bg-neutral-950 p-6 overflow-hidden">
                                <GlowingEffect
                                    blur={10}
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                />
                                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                                    <h3 className="text-lg font-semibold text-white">Blurred Glow</h3>
                                </div>
                            </div>
                        }
                        code={`<GlowingEffect blur={10} spread={40} glow={true} disabled={false} />`}
                    />
                </div>
            </section>

            {/* Props */}
            <DocsProps
                props={[
                    {
                        name: "blur",
                        type: "number",
                        defaultValue: "0",
                        description: "Blur amount in pixels for the glow effect",
                    },
                    {
                        name: "inactiveZone",
                        type: "number",
                        defaultValue: "0.7",
                        description: "Percentage of the element's center that doesn't activate the glow (0-1)",
                    },
                    {
                        name: "proximity",
                        type: "number",
                        defaultValue: "0",
                        description: "Distance in pixels outside the element that still activates the glow",
                    },
                    {
                        name: "spread",
                        type: "number",
                        defaultValue: "20",
                        description: "Size of the glow spread in degrees",
                    },
                    {
                        name: "variant",
                        type: "'default' | 'white'",
                        defaultValue: "default",
                        description: "Color variant of the glow effect",
                    },
                    {
                        name: "glow",
                        type: "boolean",
                        defaultValue: "false",
                        description: "Whether to show a static glow border when not hovering",
                    },
                    {
                        name: "disabled",
                        type: "boolean",
                        defaultValue: "true",
                        description: "Disable the interactive glow effect",
                    },
                    {
                        name: "movementDuration",
                        type: "number",
                        defaultValue: "2",
                        description: "Duration of the glow movement animation in seconds",
                    },
                    {
                        name: "borderWidth",
                        type: "number",
                        defaultValue: "1",
                        description: "Width of the glow border in pixels",
                    },
                ]}
            />
        </div>
    );
}
