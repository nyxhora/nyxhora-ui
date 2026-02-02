import { Spotlight } from "@/registry/ui/spotlight";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export default function SpotlightDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Spotlight"
                description="An animated spotlight effect that creates a dramatic lighting sweep. Perfect for hero sections and feature highlights."
            />

            {/* Preview */}
            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="relative h-[300px] w-full rounded-lg bg-black/[0.96] overflow-hidden flex items-center justify-center antialiased bg-grid-white/[0.02]">
                        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
                        <div className="relative z-10 text-center">
                            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                                Spotlight Effect
                            </h2>
                            <p className="text-neutral-400 mt-2">Dramatic lighting for your content</p>
                        </div>
                    </div>
                }
                code={`<div className="relative h-screen w-full bg-black/[0.96]">
  <Spotlight className="-top-40 left-0 md:left-60" fill="white" />
  <div className="relative z-10">
    <h2>Spotlight Effect</h2>
  </div>
</div>`}
            />

            {/* Installation */}
            <DocsInstallation name="spotlight" />

            {/* Usage */}
            <CodeBlockWrapper
                title="Usage"
                code={`import { Spotlight } from "@/registry/ui/spotlight"

export default function Hero() {
  return (
    <div className="relative h-screen w-full bg-black/[0.96] antialiased">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white">Your Headline</h1>
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
                    <h3 className="text-lg font-semibold">Colored Spotlight</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[200px] w-full rounded-lg bg-slate-950 overflow-hidden flex items-center justify-center">
                                <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#818cf8" />
                                <div className="relative z-10 text-center">
                                    <h3 className="text-xl font-bold text-white">Purple Spotlight</h3>
                                </div>
                            </div>
                        }
                        code={`<Spotlight className="-top-40 left-60" fill="#818cf8" />`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Right-Side Spotlight</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[200px] w-full rounded-lg bg-zinc-950 overflow-hidden flex items-center justify-center">
                                <Spotlight className="-top-40 right-0 md:right-60 md:-top-20" fill="#22d3ee" />
                                <div className="relative z-10 text-center">
                                    <h3 className="text-xl font-bold text-white">Cyan from Right</h3>
                                </div>
                            </div>
                        }
                        code={`<Spotlight className="-top-40 right-0 md:right-60" fill="#22d3ee" />`}
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
                        description: "CSS classes for positioning the spotlight (use top, left, right, etc.)",
                    },
                    {
                        name: "fill",
                        type: "string",
                        defaultValue: "white",
                        description: "Fill color for the spotlight effect",
                    },
                ]}
            />

            {/* Note */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Styling Notes</h2>
                <div className="p-4 rounded-lg bg-muted">
                    <p className="text-sm text-muted-foreground">
                        The spotlight uses CSS <code className="text-primary">animate-spotlight</code> keyframes.
                        Make sure your Tailwind config includes this animation for the full effect.
                        Position the spotlight using Tailwind classes like <code className="text-primary">-top-40 left-60</code>.
                    </p>
                </div>
            </section>
        </div>
    );
}
