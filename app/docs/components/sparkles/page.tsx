import { SparklesCore } from "@/registry/ui/sparkles";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export default function SparklesDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Sparkles"
                description="Animated particle sparkle effect using tsparticles. Creates a magical, twinkling background perfect for hero sections."
            />

            {/* Preview */}
            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="relative h-[300px] w-full rounded-lg bg-black overflow-hidden flex flex-col items-center justify-center">
                        <div className="w-full absolute inset-0 h-full">
                            <SparklesCore
                                id="sparkles-demo"
                                background="transparent"
                                minSize={0.6}
                                maxSize={1.4}
                                particleDensity={100}
                                className="w-full h-full"
                                particleColor="#FFFFFF"
                            />
                        </div>
                        <h2 className="relative z-10 text-3xl font-bold text-white">Magical Sparkles</h2>
                    </div>
                }
                code={`<div className="relative h-[300px] w-full bg-black">
  <SparklesCore
    id="sparkles-demo"
    background="transparent"
    minSize={0.6}
    maxSize={1.4}
    particleDensity={100}
    particleColor="#FFFFFF"
  />
  <h2 className="relative z-10 text-white">Magical Sparkles</h2>
</div>`}
            />

            {/* Installation */}
            <DocsInstallation name="sparkles" />
            {/* Usage */}
            <CodeBlockWrapper
                title="Usage"
                code={`import { SparklesCore } from "@/registry/ui/sparkles"

export default function Hero() {
  return (
    <div className="relative h-screen w-full bg-black">
      <div className="w-full absolute inset-0">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          particleColor="#FFFFFF"
        />
      </div>
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
                    <h3 className="text-lg font-semibold">Colored Sparkles</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[200px] w-full rounded-lg bg-slate-900 overflow-hidden flex items-center justify-center">
                                <div className="w-full absolute inset-0">
                                    <SparklesCore
                                        id="colored-sparkles"
                                        background="transparent"
                                        minSize={1}
                                        maxSize={2}
                                        particleDensity={80}
                                        className="w-full h-full"
                                        particleColor="#FFD700"
                                    />
                                </div>
                                <h3 className="relative z-10 text-xl font-bold text-white">Golden Sparkles</h3>
                            </div>
                        }
                        code={`<SparklesCore
  id="colored-sparkles"
  background="transparent"
  minSize={1}
  maxSize={2}
  particleDensity={80}
  particleColor="#FFD700"
/>`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Dense Particles</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[200px] w-full rounded-lg bg-violet-950 overflow-hidden flex items-center justify-center">
                                <div className="w-full absolute inset-0">
                                    <SparklesCore
                                        id="dense-sparkles"
                                        background="transparent"
                                        minSize={0.4}
                                        maxSize={1}
                                        particleDensity={200}
                                        speed={2}
                                        className="w-full h-full"
                                        particleColor="#E879F9"
                                    />
                                </div>
                                <h3 className="relative z-10 text-xl font-bold text-white">Dense & Fast</h3>
                            </div>
                        }
                        code={`<SparklesCore
  id="dense-sparkles"
  background="transparent"
  minSize={0.4}
  maxSize={1}
  particleDensity={200}
  speed={2}
  particleColor="#E879F9"
/>`}
                    />
                </div>
            </section>

            {/* Props */}
            <DocsProps
                props={[
                    {
                        name: "id",
                        type: "string",
                        defaultValue: "auto-generated",
                        description: "Unique identifier for the particle container",
                    },
                    {
                        name: "background",
                        type: "string",
                        defaultValue: "#0d47a1",
                        description: "Background color of the sparkles container",
                    },
                    {
                        name: "minSize",
                        type: "number",
                        defaultValue: "1",
                        description: "Minimum size of particles in pixels",
                    },
                    {
                        name: "maxSize",
                        type: "number",
                        defaultValue: "3",
                        description: "Maximum size of particles in pixels",
                    },
                    {
                        name: "speed",
                        type: "number",
                        defaultValue: "4",
                        description: "Animation speed of the particles",
                    },
                    {
                        name: "particleColor",
                        type: "string",
                        defaultValue: "#ffffff",
                        description: "Color of the sparkle particles",
                    },
                    {
                        name: "particleDensity",
                        type: "number",
                        defaultValue: "120",
                        description: "Number of particles to render",
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
