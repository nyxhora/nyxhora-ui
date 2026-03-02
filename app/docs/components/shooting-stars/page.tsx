import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { ShootingStars } from "@/registry/ui/shooting-stars";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata = generateComponentMetadata({
    name: "Shooting Stars",
    description: "A beautiful animated starfield background with shooting stars effect. Perfect for hero sections, landing pages, and space-themed designs.",
    category: "Effects",
});


export default function ShootingStarsDocsPage() {
    const faqSchema = generateComponentFAQSchema("Shooting Stars", getDefaultComponentFAQs("Shooting Stars"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Shooting Stars", url: "https://ui.nyxhora.com/docs/components/shooting-stars" },
    ]);

    
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
            <DocsHeader
                title="Shooting Stars"
                description="A beautiful animated starfield background with shooting stars effect. Perfect for hero sections, landing pages, and space-themed designs."
            />

            {/* Preview */}
            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                        <ShootingStars
                            colorScheme="cyan"
                            speed={1}
                            shootingStarCount={5}
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <h2 className="text-3xl font-bold text-white">Shooting Stars</h2>
                        </div>
                    </div>
                }
                code={`<div className="relative h-[400px] w-full">
  <ShootingStars colorScheme="cyan" />
  <div className="relative z-10 flex items-center justify-center h-full">
    <h2 className="text-white">Your Content</h2>
  </div>
</div>`}
            />

            {/* Installation */}
            <DocsInstallation name="shooting-stars" />

            {/* Usage */}
            <CodeBlockWrapper
                title="Usage"
                code={`import { ShootingStars } from "@/registry/ui/shooting-stars"

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <ShootingStars 
        colorScheme="purple"
        speed={1.5}
        shootingStarCount={7}
        starCount={80}
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

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">White (Default)</h3>
                        <div className="relative h-[150px] w-full rounded-lg overflow-hidden">
                            <ShootingStars colorScheme="white" />
                            <span className="absolute inset-0 flex items-center justify-center z-10 text-white font-medium">White Stars</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Cyan</h3>
                        <div className="relative h-[150px] w-full rounded-lg overflow-hidden">
                            <ShootingStars colorScheme="cyan" />
                            <span className="absolute inset-0 flex items-center justify-center z-10 text-white font-medium">Cyan Stars</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Purple</h3>
                        <div className="relative h-[150px] w-full rounded-lg overflow-hidden">
                            <ShootingStars colorScheme="purple" />
                            <span className="absolute inset-0 flex items-center justify-center z-10 text-white font-medium">Purple Stars</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Rainbow</h3>
                        <div className="relative h-[150px] w-full rounded-lg overflow-hidden">
                            <ShootingStars colorScheme="rainbow" />
                            <span className="absolute inset-0 flex items-center justify-center z-10 text-white font-medium">Rainbow Stars</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Background Variations */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Background Options</h2>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Midnight Background</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[150px] w-full rounded-lg overflow-hidden">
                                <ShootingStars background="midnight" colorScheme="cyan" />
                                <span className="absolute inset-0 flex items-center justify-center z-10 text-white font-medium">Midnight Theme</span>
                            </div>
                        }
                        code={`<ShootingStars background="midnight" colorScheme="cyan" />`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Transparent Background (Overlay Mode)</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[150px] w-full rounded-lg overflow-hidden bg-gradient-to-br from-purple-900 to-blue-900">
                                <ShootingStars background="none" colorScheme="white" />
                                <span className="absolute inset-0 flex items-center justify-center z-10 text-white font-medium">Overlay on Gradient</span>
                            </div>
                        }
                        code={`<div className="bg-gradient-to-br from-purple-900 to-blue-900">
  <ShootingStars background="none" colorScheme="white" />
</div>`}
                    />
                </div>
            </section>

            {/* Animation Examples */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Animation Options</h2>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Fast Animation (2x speed)</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[150px] w-full rounded-lg overflow-hidden">
                                <ShootingStars speed={2} shootingStarCount={8} colorScheme="purple" />
                                <span className="absolute inset-0 flex items-center justify-center z-10 text-white font-medium">2x Speed</span>
                            </div>
                        }
                        code={`<ShootingStars speed={2} shootingStarCount={8} />`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">High Density Stars</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[150px] w-full rounded-lg overflow-hidden">
                                <ShootingStars starCount={120} shootingStarCount={10} colorScheme="rainbow" />
                                <span className="absolute inset-0 flex items-center justify-center z-10 text-white font-medium">High Density</span>
                            </div>
                        }
                        code={`<ShootingStars starCount={120} shootingStarCount={10} />`}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Long Trail Effect</h3>
                    <ComponentPreview
                        preview={
                            <div className="relative h-[150px] w-full rounded-lg overflow-hidden">
                                <ShootingStars trailLength={200} colorScheme="cyan" />
                                <span className="absolute inset-0 flex items-center justify-center z-10 text-white font-medium">Long Trails</span>
                            </div>
                        }
                        code={`<ShootingStars trailLength={200} colorScheme="cyan" />`}
                    />
                </div>
            </section>

            {/* Props */}
            <DocsProps
                props={[
                    {
                        name: "starCount",
                        type: "number",
                        defaultValue: "50",
                        description: "Number of twinkling background stars",
                    },
                    {
                        name: "shootingStarCount",
                        type: "number",
                        defaultValue: "5",
                        description: "Number of shooting stars",
                    },
                    {
                        name: "colorScheme",
                        type: "'white' | 'cyan' | 'purple' | 'rainbow' | 'custom'",
                        defaultValue: "white",
                        description: "Color theme preset for shooting stars",
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
                        name: "starSize",
                        type: "number",
                        defaultValue: "1",
                        description: "Size of twinkling stars in pixels",
                    },
                    {
                        name: "trailLength",
                        type: "number",
                        defaultValue: "100",
                        description: "Length of shooting star trail in pixels",
                    },
                    {
                        name: "background",
                        type: "'default' | 'dark' | 'midnight' | 'none' | string",
                        defaultValue: "default",
                        description: "Background gradient preset or custom CSS value",
                    },
                    {
                        name: "showStars",
                        type: "boolean",
                        defaultValue: "true",
                        description: "Whether to show twinkling background stars",
                    },
                    {
                        name: "minDelay",
                        type: "number",
                        defaultValue: "0",
                        description: "Minimum delay between shooting star animations (seconds)",
                    },
                    {
                        name: "maxDelay",
                        type: "number",
                        defaultValue: "5",
                        description: "Maximum delay between shooting star animations (seconds)",
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
