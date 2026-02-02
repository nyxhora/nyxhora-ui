import { GlowingEffect } from "@/registry/ui/glowing-effect";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export default function GlowingEffectDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Glowing Effect"
                description="An interactive glow effect that follows mouse movement with customizable colors, intensity, and animation styles."
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
                code={`<div className="relative rounded-xl border bg-neutral-950 p-6">
  <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} />
  <div className="relative z-10">
    <h3>Hover over me</h3>
  </div>
</div>`}
            />

            {/* Installation */}
            <DocsInstallation name="glowing-effect" />

            {/* Usage */}
            <CodeBlockWrapper
                title="Usage"
                code={`import { GlowingEffect } from "@/registry/ui/glowing-effect"

export default function GlowCard() {
  return (
    <div className="relative rounded-xl border bg-neutral-950 p-6">
      <GlowingEffect
        variant="purple"
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        intensity={1.5}
        animationStyle="bouncy"
      />
      <div className="relative z-10">
        {/* Your content */}
      </div>
    </div>
  )
}`}
                language="tsx"
            />

            {/* Color Variants */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Color Variants</h2>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {(["purple", "blue", "green", "orange", "pink", "rainbow"] as const).map((variant) => (
                        <div key={variant} className="space-y-2">
                            <h3 className="text-lg font-semibold capitalize">{variant}</h3>
                            <div className="relative h-[100px] w-full rounded-xl border border-neutral-800 bg-neutral-950 p-4 overflow-hidden">
                                <GlowingEffect
                                    variant={variant}
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                />
                                <div className="relative z-10 flex items-center justify-center h-full">
                                    <span className="text-white font-medium capitalize">{variant}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Animation Styles */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Animation Styles</h2>

                <div className="grid gap-4 md:grid-cols-3">
                    {(["smooth", "snappy", "bouncy"] as const).map((style) => (
                        <div key={style} className="space-y-2">
                            <h3 className="text-lg font-semibold capitalize">{style}</h3>
                            <div className="relative h-[100px] w-full rounded-xl border border-neutral-800 bg-neutral-950 p-4 overflow-hidden">
                                <GlowingEffect
                                    variant="blue"
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    animationStyle={style}
                                />
                                <div className="relative z-10 flex items-center justify-center h-full">
                                    <span className="text-white font-medium capitalize">{style}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Intensity Examples */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Intensity Levels</h2>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">High Intensity (2x)</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[120px] w-full max-w-sm mx-auto rounded-xl border border-neutral-800 bg-neutral-950 p-4 overflow-hidden">
                                <GlowingEffect
                                    variant="pink"
                                    spread={50}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    intensity={2}
                                    blur={5}
                                />
                                <div className="relative z-10 flex items-center justify-center h-full">
                                    <span className="text-white font-medium">High Intensity + Blur</span>
                                </div>
                            </div>
                        }
                        code={`<GlowingEffect variant="pink" intensity={2} blur={5} />`}
                    />
                </div>
            </section>

            {/* Props */}
            <DocsProps
                props={[
                    {
                        name: "variant",
                        type: "'default' | 'white' | 'purple' | 'blue' | 'green' | 'orange' | 'pink' | 'rainbow' | 'custom'",
                        defaultValue: "default",
                        description: "Color theme preset for the glow effect",
                    },
                    {
                        name: "customColors",
                        type: "{ primary, secondary, tertiary, quaternary: string }",
                        defaultValue: "undefined",
                        description: "Custom colors (used when variant is 'custom')",
                    },
                    {
                        name: "animationStyle",
                        type: "'smooth' | 'snappy' | 'bouncy'",
                        defaultValue: "smooth",
                        description: "Style of the glow movement animation",
                    },
                    {
                        name: "intensity",
                        type: "number",
                        defaultValue: "1",
                        description: "Intensity multiplier for the glow effect (0.5 to 2)",
                    },
                    {
                        name: "blur",
                        type: "number",
                        defaultValue: "0",
                        description: "Blur amount in pixels for the glow",
                    },
                    {
                        name: "spread",
                        type: "number",
                        defaultValue: "20",
                        description: "Size of the glow spread in degrees",
                    },
                    {
                        name: "proximity",
                        type: "number",
                        defaultValue: "0",
                        description: "Distance outside element that activates glow",
                    },
                    {
                        name: "inactiveZone",
                        type: "number",
                        defaultValue: "0.7",
                        description: "Center percentage that doesn't activate glow (0-1)",
                    },
                    {
                        name: "glow",
                        type: "boolean",
                        defaultValue: "false",
                        description: "Show static glow border when not hovering",
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
                        description: "Base duration of glow movement in seconds",
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
