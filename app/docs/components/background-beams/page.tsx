"use client";
import { Metadata } from "next";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";

export default function BackgroundBeamsDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Background Beams"
                description="Animated SVG background beams with gradient lighting effects. Perfect for hero sections and landing pages."
            />

            {/* Preview */}
            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="relative h-[300px] w-full rounded-lg bg-neutral-950 overflow-hidden flex items-center justify-center">
                        <BackgroundBeams />
                        <h2 className="relative z-10 text-3xl font-bold text-white">Beautiful Beams</h2>
                    </div>
                }
                code={`<div className="relative h-[300px] w-full bg-neutral-950 overflow-hidden">
  <BackgroundBeams />
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
      <BackgroundBeams className="absolute inset-0" />
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
                <h2 className="text-2xl font-bold">Examples</h2>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Hero Section</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[250px] w-full rounded-lg bg-neutral-950 overflow-hidden flex flex-col items-center justify-center">
                                <BackgroundBeams />
                                <h2 className="relative z-10 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
                                    Welcome to the Future
                                </h2>
                                <p className="relative z-10 text-neutral-400 mt-2">Build amazing things</p>
                            </div>
                        }
                        code={`<div className="relative h-screen w-full bg-neutral-950">
  <BackgroundBeams />
  <h2 className="relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
    Welcome to the Future
  </h2>
</div>`}
                    />
                </div>
            </section>

            {/* Props */}
            <DocsProps
                props={[
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
