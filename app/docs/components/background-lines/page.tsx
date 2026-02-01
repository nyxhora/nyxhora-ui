"use client";
import { BackgroundLines } from "@/components/ui/background-lines";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";

export default function BackgroundLinesDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Background Lines"
                description="Animated lines radiating from center with customizable color schemes. Choose from vibrant, neon, pastel, and more themes."
            />

            {/* Preview */}
            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="relative h-[300px] w-full rounded-lg bg-black overflow-hidden flex items-center justify-center">
                        <BackgroundLines className="absolute inset-0" colorScheme="vibrant">
                            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                                <h2 className="text-3xl font-bold text-white">Dynamic Lines</h2>
                                <p className="text-neutral-400 mt-2">Radiating energy</p>
                            </div>
                        </BackgroundLines>
                    </div>
                }
                code={`<BackgroundLines colorScheme="vibrant">
  <div className="flex flex-col items-center justify-center h-full">
    <h2 className="text-white">Dynamic Lines</h2>
  </div>
</BackgroundLines>`}
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
                code={`import { BackgroundLines } from "@/components/ui/background-lines"

export default function Hero() {
  return (
    <BackgroundLines 
      colorScheme="neon"
      svgOptions={{ duration: 8 }}
      lineCount={15}
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-white">Your Content</h1>
      </div>
    </BackgroundLines>
  )
}`}
                language="tsx"
            />

            {/* Color Schemes */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Color Schemes</h2>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Neon</h3>
                        <div className="relative h-[150px] w-full rounded-lg bg-black overflow-hidden">
                            <BackgroundLines colorScheme="neon" lineCount={10}>
                                <div className="relative z-10 flex items-center justify-center h-full">
                                    <span className="text-white font-medium">Neon Colors</span>
                                </div>
                            </BackgroundLines>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Pastel</h3>
                        <div className="relative h-[150px] w-full rounded-lg bg-slate-900 overflow-hidden">
                            <BackgroundLines colorScheme="pastel" lineCount={10}>
                                <div className="relative z-10 flex items-center justify-center h-full">
                                    <span className="text-white font-medium">Pastel Colors</span>
                                </div>
                            </BackgroundLines>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Sunset</h3>
                        <div className="relative h-[150px] w-full rounded-lg bg-slate-950 overflow-hidden">
                            <BackgroundLines colorScheme="sunset" lineCount={10}>
                                <div className="relative z-10 flex items-center justify-center h-full">
                                    <span className="text-white font-medium">Sunset Colors</span>
                                </div>
                            </BackgroundLines>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Ocean</h3>
                        <div className="relative h-[150px] w-full rounded-lg bg-slate-950 overflow-hidden">
                            <BackgroundLines colorScheme="ocean" lineCount={10}>
                                <div className="relative z-10 flex items-center justify-center h-full">
                                    <span className="text-white font-medium">Ocean Colors</span>
                                </div>
                            </BackgroundLines>
                        </div>
                    </div>
                </div>
            </section>

            {/* Examples */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Options</h2>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Static (Non-Animated)</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[150px] w-full rounded-lg bg-black overflow-hidden">
                                <BackgroundLines colorScheme="monochrome" animated={false} lineCount={15}>
                                    <div className="relative z-10 flex items-center justify-center h-full">
                                        <span className="text-white font-medium">Static Lines</span>
                                    </div>
                                </BackgroundLines>
                            </div>
                        }
                        code={`<BackgroundLines colorScheme="monochrome" animated={false} />`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Thick Lines</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[150px] w-full rounded-lg bg-black overflow-hidden">
                                <BackgroundLines colorScheme="neon" strokeWidth={4} lineCount={8}>
                                    <div className="relative z-10 flex items-center justify-center h-full">
                                        <span className="text-white font-medium">Thick Strokes</span>
                                    </div>
                                </BackgroundLines>
                            </div>
                        }
                        code={`<BackgroundLines colorScheme="neon" strokeWidth={4} lineCount={8} />`}
                    />
                </div>
            </section>

            {/* Props */}
            <DocsProps
                props={[
                    {
                        name: "children",
                        type: "React.ReactNode",
                        defaultValue: "undefined",
                        description: "Content to render on top of the animated lines",
                    },
                    {
                        name: "colorScheme",
                        type: "'vibrant' | 'neon' | 'pastel' | 'monochrome' | 'sunset' | 'ocean' | 'custom'",
                        defaultValue: "vibrant",
                        description: "Color theme preset for the lines",
                    },
                    {
                        name: "customColors",
                        type: "string[]",
                        defaultValue: "undefined",
                        description: "Array of custom colors (used when colorScheme is 'custom')",
                    },
                    {
                        name: "svgOptions.duration",
                        type: "number",
                        defaultValue: "10",
                        description: "Animation duration in seconds for each line",
                    },
                    {
                        name: "strokeWidth",
                        type: "number",
                        defaultValue: "2.3",
                        description: "Width of the line strokes",
                    },
                    {
                        name: "animated",
                        type: "boolean",
                        defaultValue: "true",
                        description: "Whether to animate the lines",
                    },
                    {
                        name: "lineOpacity",
                        type: "number",
                        defaultValue: "1",
                        description: "Opacity of the lines (0 to 1)",
                    },
                    {
                        name: "lineCount",
                        type: "number",
                        defaultValue: "21",
                        description: "Number of lines to display (1 to 21)",
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
