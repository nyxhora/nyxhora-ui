"use client";
import { BackgroundLines } from "@/components/ui/background-lines";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";

export default function BackgroundLinesDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Background Lines"
                description="Animated lines radiating from center with colorful stroke animations. Creates a dynamic, energetic background effect."
            />

            {/* Preview */}
            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="relative h-[300px] w-full rounded-lg bg-black overflow-hidden flex items-center justify-center">
                        <BackgroundLines className="absolute inset-0">
                            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                                <h2 className="text-3xl font-bold text-white">Dynamic Lines</h2>
                                <p className="text-neutral-400 mt-2">Radiating energy</p>
                            </div>
                        </BackgroundLines>
                    </div>
                }
                code={`<BackgroundLines>
  <div className="flex flex-col items-center justify-center h-full">
    <h2 className="text-white">Dynamic Lines</h2>
    <p className="text-neutral-400">Radiating energy</p>
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
    <BackgroundLines svgOptions={{ duration: 10 }}>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-white">Your Content</h1>
      </div>
    </BackgroundLines>
  )
}`}
                language="tsx"
            />

            {/* Examples */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Custom Animation Duration</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[250px] w-full rounded-lg bg-black overflow-hidden">
                                <BackgroundLines svgOptions={{ duration: 5 }}>
                                    <div className="relative z-10 flex flex-col items-center justify-center h-full">
                                        <h2 className="text-2xl font-bold text-white">Faster Animation</h2>
                                        <p className="text-neutral-400 mt-2">5 second duration</p>
                                    </div>
                                </BackgroundLines>
                            </div>
                        }
                        code={`<BackgroundLines svgOptions={{ duration: 5 }}>
  <div className="flex flex-col items-center justify-center h-full">
    <h2 className="text-white">Faster Animation</h2>
  </div>
</BackgroundLines>`}
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
                        name: "className",
                        type: "string",
                        defaultValue: "undefined",
                        description: "Additional CSS classes for the container",
                    },
                    {
                        name: "svgOptions.duration",
                        type: "number",
                        defaultValue: "10",
                        description: "Animation duration in seconds for each line",
                    },
                ]}
            />
        </div>
    );
}
