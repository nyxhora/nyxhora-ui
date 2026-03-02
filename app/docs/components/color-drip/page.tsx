import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { ColorDrip } from "@/registry/ui/color-drip";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata = generateComponentMetadata({
    name: "Color Drip",
    description: "Animated vertical lines with colorful dripping effects. Perfect for creating dynamic backgrounds with a matrix-like or rain-inspired aesthetic.",
    category: "Effects",
});


export default function ColorDripDocsPage() {
    const faqSchema = generateComponentFAQSchema("Color Drip", getDefaultComponentFAQs("Color Drip"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Color Drip", url: "https://ui.nyxhora.com/docs/components/color-drip" },
    ]);

    
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
            <DocsHeader
                title="Color Drip"
                description="Animated vertical lines with colorful dripping effects. Perfect for creating dynamic backgrounds with a matrix-like or rain-inspired aesthetic."
            />

            {/* Preview */}
            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                        <ColorDrip
                            colorScheme="rainbow"
                            lineCount={10}
                            speed={1}
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <h2 className="text-3xl font-bold text-white">Color Drip</h2>
                        </div>
                    </div>
                }
                code={`<div className="relative h-[400px] w-full">
  <ColorDrip colorScheme="rainbow" lineCount={10} />
  <div className="relative z-10 flex items-center justify-center h-full">
    <h2 className="text-white">Your Content</h2>
  </div>
</div>`}
            />

            {/* Installation */}
            <DocsInstallation name="color-drip" />

            {/* Usage */}
            <CodeBlockWrapper
                title="Usage"
                code={`import { ColorDrip } from "@/registry/ui/color-drip"

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <ColorDrip 
        colorScheme="neon"
        lineCount={12}
        speed={1.5}
        showStaticLines={true}
      />
      <div className="relative z-10 flex items-center justify-center h-full">
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

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Rainbow</h3>
                        <div className="relative h-[150px] w-full rounded-lg overflow-hidden">
                            <ColorDrip colorScheme="rainbow" lineCount={8} />
                            <span className="absolute inset-0 flex items-center justify-center z-10 text-white font-medium">Rainbow</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Neon</h3>
                        <div className="relative h-[150px] w-full rounded-lg overflow-hidden">
                            <ColorDrip colorScheme="neon" lineCount={8} />
                            <span className="absolute inset-0 flex items-center justify-center z-10 text-white font-medium">Neon</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Pastel</h3>
                        <div className="relative h-[150px] w-full rounded-lg overflow-hidden">
                            <ColorDrip colorScheme="pastel" lineCount={8} />
                            <span className="absolute inset-0 flex items-center justify-center z-10 text-white font-medium">Pastel</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Fire</h3>
                        <div className="relative h-[150px] w-full rounded-lg overflow-hidden">
                            <ColorDrip colorScheme="fire" lineCount={8} />
                            <span className="absolute inset-0 flex items-center justify-center z-10 text-white font-medium">Fire</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Ocean</h3>
                        <div className="relative h-[150px] w-full rounded-lg overflow-hidden">
                            <ColorDrip colorScheme="ocean" lineCount={8} />
                            <span className="absolute inset-0 flex items-center justify-center z-10 text-white font-medium">Ocean</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Mono</h3>
                        <div className="relative h-[150px] w-full rounded-lg overflow-hidden">
                            <ColorDrip colorScheme="mono" lineCount={8} />
                            <span className="absolute inset-0 flex items-center justify-center z-10 text-white font-medium">Mono</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Animation Options */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Animation Options</h2>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Fast Animation (2x speed)</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[150px] w-full rounded-lg overflow-hidden">
                                <ColorDrip speed={2} colorScheme="neon" lineCount={10} />
                                <span className="absolute inset-0 flex items-center justify-center z-10 text-white font-medium">2x Speed</span>
                            </div>
                        }
                        code={`<ColorDrip speed={2} colorScheme="neon" />`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Upward Direction</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[150px] w-full rounded-lg overflow-hidden">
                                <ColorDrip direction="up" colorScheme="rainbow" lineCount={10} />
                                <span className="absolute inset-0 flex items-center justify-center z-10 text-white font-medium">Rising Effect</span>
                            </div>
                        }
                        code={`<ColorDrip direction="up" colorScheme="rainbow" />`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">With Static Lines</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[150px] w-full rounded-lg overflow-hidden">
                                <ColorDrip showStaticLines={true} staticLineColor="rgba(255,255,255,0.1)" colorScheme="rainbow" lineCount={10} />
                                <span className="absolute inset-0 flex items-center justify-center z-10 text-white font-medium">Static Lines Visible</span>
                            </div>
                        }
                        code={`<ColorDrip 
  showStaticLines={true} 
  staticLineColor="rgba(255,255,255,0.1)" 
/>`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">High Density Lines</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[150px] w-full rounded-lg overflow-hidden">
                                <ColorDrip lineCount={20} staggerDelay={0.25} colorScheme="neon" />
                                <span className="absolute inset-0 flex items-center justify-center z-10 text-white font-medium">20 Lines</span>
                            </div>
                        }
                        code={`<ColorDrip lineCount={20} staggerDelay={0.25} />`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Tall Drip Effect</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[150px] w-full rounded-lg overflow-hidden">
                                <ColorDrip dripHeight={25} colorScheme="fire" lineCount={10} />
                                <span className="absolute inset-0 flex items-center justify-center z-10 text-white font-medium">Tall Drips</span>
                            </div>
                        }
                        code={`<ColorDrip dripHeight={25} colorScheme="fire" />`}
                    />
                </div>
            </section>

            {/* Custom Colors Example */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Custom Colors</h2>

                <ComponentPreview
                    preview={
                        <div className="relative h-[150px] w-full rounded-lg overflow-hidden">
                            <ColorDrip
                                colorScheme="custom"
                                customColors={["#FF0080", "#7928CA", "#0070F3", "#00DFD8", "#FF4D4D"]}
                                lineCount={10}
                            />
                            <span className="absolute inset-0 flex items-center justify-center z-10 text-white font-medium">Custom Gradient</span>
                        </div>
                    }
                    code={`<ColorDrip 
  colorScheme="custom" 
  customColors={["#FF0080", "#7928CA", "#0070F3", "#00DFD8", "#FF4D4D"]}
/>`}
                />
            </section>

            {/* Props */}
            <DocsProps
                props={[
                    {
                        name: "lineCount",
                        type: "number",
                        defaultValue: "10",
                        description: "Number of drip lines",
                    },
                    {
                        name: "colorScheme",
                        type: "'rainbow' | 'neon' | 'pastel' | 'fire' | 'ocean' | 'mono' | 'custom'",
                        defaultValue: "rainbow",
                        description: "Color theme preset for the drip effect",
                    },
                    {
                        name: "customColors",
                        type: "string[]",
                        defaultValue: "undefined",
                        description: "Array of custom colors (used when colorScheme is 'custom')",
                    },
                    {
                        name: "speed",
                        type: "number",
                        defaultValue: "1",
                        description: "Animation speed multiplier",
                    },
                    {
                        name: "dripHeight",
                        type: "number",
                        defaultValue: "15",
                        description: "Height of the drip trail in viewport height units",
                    },
                    {
                        name: "lineWidth",
                        type: "number",
                        defaultValue: "1",
                        description: "Width of each line in pixels",
                    },
                    {
                        name: "backgroundColor",
                        type: "string",
                        defaultValue: "#111111",
                        description: "Background color",
                    },
                    {
                        name: "containerWidth",
                        type: "string",
                        defaultValue: "90vw",
                        description: "Width of the container",
                    },
                    {
                        name: "showStaticLines",
                        type: "boolean",
                        defaultValue: "false",
                        description: "Show static line behind the drip",
                    },
                    {
                        name: "staticLineColor",
                        type: "string",
                        defaultValue: "rgba(255, 255, 255, 0.05)",
                        description: "Color of static lines",
                    },
                    {
                        name: "direction",
                        type: "'down' | 'up'",
                        defaultValue: "down",
                        description: "Direction of the drip animation",
                    },
                    {
                        name: "staggerDelay",
                        type: "number",
                        defaultValue: "0.5",
                        description: "Delay between each line animation (seconds)",
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
        </>
    );
}
