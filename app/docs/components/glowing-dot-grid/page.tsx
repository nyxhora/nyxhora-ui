import { GlowingDotGrid } from "@/registry/ui/glowing-dot-grid";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export default function GlowingDotGridDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Glowing Dot Grid"
                description="An interactive grid of dots that glow and expand on hover with beautiful proximity-based effects. Perfect for hero sections and interactive backgrounds."
            />

            {/* Preview */}
            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="relative h-[350px] w-full rounded-lg overflow-hidden">
                        <GlowingDotGrid
                            columns={14}
                            rows={8}
                            dotColor="#A9C9FF"
                            showVignette={true}
                        >
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-white mb-2">
                                    Hey, Nyxhora UI is awesome right? ✨
                                </h2>
                                <p className="text-white/70">Move your cursor around!</p>
                            </div>
                        </GlowingDotGrid>
                    </div>
                }
                code={`<GlowingDotGrid columns={14} rows={8} dotColor="#A9C9FF">
  <h2 className="text-3xl font-bold text-white">
    Hey, Nyxhora UI is awesome right? ✨
  </h2>
</GlowingDotGrid>`}
            />

            {/* Installation */}
            <DocsInstallation name="glowing-dot-grid" />

            {/* Usage */}
            <CodeBlockWrapper
                title="Usage"
                code={`import { GlowingDotGrid } from "@/registry/ui/glowing-dot-grid"

export default function Hero() {
  return (
    <div className="h-screen w-full">
      <GlowingDotGrid 
        columns={16}
        rows={10}
        dotColor="#A9C9FF"
        hoverScale={15}
        showVignette={true}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Your Hero Title</h1>
        </div>
      </GlowingDotGrid>
    </div>
  )
}`}
                language="tsx"
            />

            {/* Color Variations */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Color Variations</h2>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Cyan Theme</h3>
                        <div className="relative h-[180px] w-full rounded-lg overflow-hidden">
                            <GlowingDotGrid
                                columns={10}
                                rows={6}
                                dotColor="#22d3ee"
                            >
                                <span className="text-white font-medium">Cyan Dots</span>
                            </GlowingDotGrid>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Purple Theme</h3>
                        <div className="relative h-[180px] w-full rounded-lg overflow-hidden">
                            <GlowingDotGrid
                                columns={10}
                                rows={6}
                                dotColor="#a855f7"
                            >
                                <span className="text-white font-medium">Purple Dots</span>
                            </GlowingDotGrid>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Pink Theme</h3>
                        <div className="relative h-[180px] w-full rounded-lg overflow-hidden">
                            <GlowingDotGrid
                                columns={10}
                                rows={6}
                                dotColor="#ec4899"
                            >
                                <span className="text-white font-medium">Pink Dots</span>
                            </GlowingDotGrid>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Green Theme</h3>
                        <div className="relative h-[180px] w-full rounded-lg overflow-hidden">
                            <GlowingDotGrid
                                columns={10}
                                rows={6}
                                dotColor="#22c55e"
                            >
                                <span className="text-white font-medium">Green Dots</span>
                            </GlowingDotGrid>
                        </div>
                    </div>
                </div>
            </section>

            {/* Examples */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Dense Grid</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[200px] w-full rounded-lg overflow-hidden">
                                <GlowingDotGrid
                                    columns={20}
                                    rows={10}
                                    dotColor="#f59e0b"
                                    gap={1.5}
                                    dotSize={2}
                                >
                                    <span className="text-white font-medium">Dense Grid</span>
                                </GlowingDotGrid>
                            </div>
                        }
                        code={`<GlowingDotGrid columns={20} rows={10} gap={1.5} dotSize={2} />`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Large Glow Effect</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[200px] w-full rounded-lg overflow-hidden">
                                <GlowingDotGrid
                                    columns={8}
                                    rows={5}
                                    dotColor="#ef4444"
                                    hoverScale={20}
                                    dotSize={4}
                                >
                                    <span className="text-white font-medium">Big Glow!</span>
                                </GlowingDotGrid>
                            </div>
                        }
                        code={`<GlowingDotGrid hoverScale={20} dotSize={4} dotColor="#ef4444" />`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">No Vignette</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[200px] w-full rounded-lg overflow-hidden">
                                <GlowingDotGrid
                                    columns={12}
                                    rows={6}
                                    dotColor="#3b82f6"
                                    showVignette={false}
                                >
                                    <span className="text-white font-medium">Clean Look</span>
                                </GlowingDotGrid>
                            </div>
                        }
                        code={`<GlowingDotGrid showVignette={false} />`}
                    />
                </div>
            </section>

            {/* Props */}
            <DocsProps
                props={[
                    {
                        name: "columns",
                        type: "number",
                        defaultValue: "12",
                        description: "Number of columns in the grid",
                    },
                    {
                        name: "rows",
                        type: "number",
                        defaultValue: "8",
                        description: "Number of rows in the grid",
                    },
                    {
                        name: "dotColor",
                        type: "string",
                        defaultValue: "#A9C9FF",
                        description: "Color of the dots",
                    },
                    {
                        name: "dotSize",
                        type: "number",
                        defaultValue: "3",
                        description: "Base dot size in pixels",
                    },
                    {
                        name: "gap",
                        type: "number",
                        defaultValue: "2.5",
                        description: "Gap between dots in rem",
                    },
                    {
                        name: "hoverScale",
                        type: "number",
                        defaultValue: "10",
                        description: "Size multiplier for hover effect",
                    },
                    {
                        name: "gradientStart",
                        type: "string",
                        defaultValue: "#0a0a0a",
                        description: "Background gradient start color",
                    },
                    {
                        name: "gradientEnd",
                        type: "string",
                        defaultValue: "#0a0a0a",
                        description: "Background gradient end color",
                    },
                    {
                        name: "showVignette",
                        type: "boolean",
                        defaultValue: "true",
                        description: "Show corner shadow/vignette effect",
                    },
                    {
                        name: "children",
                        type: "React.ReactNode",
                        defaultValue: "undefined",
                        description: "Content to display over the grid",
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
    );
}
