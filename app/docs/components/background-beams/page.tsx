"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";

export default function BackgroundBeamsDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Background Beams"
                description="Animated SVG background beams with customizable gradient colors and animation speed. Perfect for hero sections and landing pages."
            />

            {/* Preview */}
            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="relative h-[300px] w-full rounded-lg bg-neutral-950 overflow-hidden flex items-center justify-center">
                        <BackgroundBeams colorScheme="cyan" />
                        <h2 className="relative z-10 text-3xl font-bold text-white">Beautiful Beams</h2>
                    </div>
                }
                code={`<div className="relative h-[300px] w-full bg-neutral-950">
  <BackgroundBeams colorScheme="cyan" />
  <h2 className="relative z-10 text-white">Beautiful Beams</h2>
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
                code={`import { BackgroundBeams } from "@/components/ui/background-beams"

export default function Hero() {
  return (
    <div className="relative h-screen w-full bg-neutral-950">
      <BackgroundBeams 
        colorScheme="purple"
        speed={1.5}
        beamOpacity={0.5}
      />
      <div className="relative z-10">
        {/* Your content here */}
      </div>
    </div>
  )
}`}
                language="tsx"
            />

            {/* Color Schemes */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Color Schemes</h2>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Purple</h3>
                        <div className="relative h-[150px] w-full rounded-lg bg-neutral-950 overflow-hidden flex items-center justify-center">
                            <BackgroundBeams colorScheme="purple" beamCount={30} />
                            <span className="relative z-10 text-white font-medium">Purple Theme</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Green</h3>
                        <div className="relative h-[150px] w-full rounded-lg bg-neutral-950 overflow-hidden flex items-center justify-center">
                            <BackgroundBeams colorScheme="green" beamCount={30} />
                            <span className="relative z-10 text-white font-medium">Green Theme</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Orange</h3>
                        <div className="relative h-[150px] w-full rounded-lg bg-neutral-950 overflow-hidden flex items-center justify-center">
                            <BackgroundBeams colorScheme="orange" beamCount={30} />
                            <span className="relative z-10 text-white font-medium">Orange Theme</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Pink</h3>
                        <div className="relative h-[150px] w-full rounded-lg bg-neutral-950 overflow-hidden flex items-center justify-center">
                            <BackgroundBeams colorScheme="pink" beamCount={30} />
                            <span className="relative z-10 text-white font-medium">Pink Theme</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Animation Examples */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Animation Options</h2>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Fast Animation (2x speed)</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[150px] w-full rounded-lg bg-neutral-950 overflow-hidden flex items-center justify-center">
                                <BackgroundBeams colorScheme="cyan" speed={2} beamCount={25} />
                                <span className="relative z-10 text-white font-medium">2x Speed</span>
                            </div>
                        }
                        code={`<BackgroundBeams colorScheme="cyan" speed={2} />`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Reverse Direction</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[150px] w-full rounded-lg bg-neutral-950 overflow-hidden flex items-center justify-center">
                                <BackgroundBeams colorScheme="purple" reverse beamCount={25} />
                                <span className="relative z-10 text-white font-medium">Reversed</span>
                            </div>
                        }
                        code={`<BackgroundBeams colorScheme="purple" reverse />`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Custom Colors</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[150px] w-full rounded-lg bg-neutral-950 overflow-hidden flex items-center justify-center">
                                <BackgroundBeams
                                    colorScheme="custom"
                                    customColors={{ start: "#FF0080", middle: "#7928CA", end: "#FF0080" }}
                                    beamCount={25}
                                />
                                <span className="relative z-10 text-white font-medium">Custom Gradient</span>
                            </div>
                        }
                        code={`<BackgroundBeams 
  colorScheme="custom" 
  customColors={{ 
    start: "#FF0080", 
    middle: "#7928CA", 
    end: "#FF0080" 
  }}
/>`}
                    />
                </div>
            </section>

            {/* Props */}
            <DocsProps
                props={[
                    {
                        name: "colorScheme",
                        type: "'cyan' | 'purple' | 'green' | 'orange' | 'pink' | 'custom'",
                        defaultValue: "cyan",
                        description: "Color theme preset for the beam gradients",
                    },
                    {
                        name: "customColors",
                        type: "{ start: string, middle: string, end: string }",
                        defaultValue: "undefined",
                        description: "Custom gradient colors (only used when colorScheme is 'custom')",
                    },
                    {
                        name: "speed",
                        type: "number",
                        defaultValue: "1",
                        description: "Animation speed multiplier (2 = 2x faster, 0.5 = half speed)",
                    },
                    {
                        name: "beamOpacity",
                        type: "number",
                        defaultValue: "0.4",
                        description: "Opacity of the animated beams (0 to 1)",
                    },
                    {
                        name: "beamCount",
                        type: "number",
                        defaultValue: "50",
                        description: "Number of animated beams to display (1 to 50)",
                    },
                    {
                        name: "reverse",
                        type: "boolean",
                        defaultValue: "false",
                        description: "Animate beams in reverse direction",
                    },
                    {
                        name: "strokeWidth",
                        type: "number",
                        defaultValue: "0.5",
                        description: "Width of the beam strokes",
                    },
                    {
                        name: "className",
                        type: "string",
                        defaultValue: "undefined",
                        description: "Additional CSS classes for the container",
                    },
                ]}
            />
        </div>
    );
}
