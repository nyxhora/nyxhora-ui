import { Metadata } from "next";
import { ComponentShowcard, ShowcardGrid } from "@/components/ui/component-showcard";
import { Button } from "@/components/ui/button";
import { CodeBlockWrapper, DocsHeader, DocsProps, ComponentPreview } from "@/components/ui/docs-documentation";
import { Sparkles, Terminal, Copy, Building } from "lucide-react";
import { ComponentSource } from "@/components/ui/component-source";

export const metadata: Metadata = {
    title: "Component Showcard",
    description: "A highly customizable card component for showcasing UI elements with gradients, badges, and interactive previews.",
};

export default function ComponentShowcardDocsPage() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <DocsHeader
                title="Component Showcard"
                description="A highly customizable card component for showcasing UI elements with gradients, badges, and interactive previews."
            />

            {/* Main Preview */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Preview</h2>
                <div className="border border-border rounded-xl p-6">
                    <ComponentShowcard
                        title="Awesome Component"
                        description="This is a beautiful component showcase card with a gradient background."
                        href="#"
                        gradient="from-blue-500/10 to-purple-500/10"
                        badge="New"
                        badgeVariant="success"
                    >
                        <Button>Interactive Button</Button>
                    </ComponentShowcard>
                </div>
            </div>

            {/* Installation */}
            <CodeBlockWrapper
                title="Installation"
                code={`npx shadcn-ui@latest add component-showcard`}
                language="bash"
            />

            <div className="text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg border border-border/50">
                Note: This is a custom component. You need to copy the source code manually if not using the CLI.
            </div>


            {/* Variants */}
            <section className="space-y-8">
                <h2 className="text-2xl font-bold">Examples</h2>

                {/* Grid Layout */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Grid Layout</h3>
                    <p className="text-sm text-muted-foreground">Use <code>ShowcardGrid</code> to arrange multiple cards neatly.</p>
                    <div className="border border-border rounded-xl p-6 bg-muted/20">
                        <ShowcardGrid columns={2} gap="md">
                            <ComponentShowcard
                                title="Card 1"
                                description="First card in the grid"
                                href="#"
                                gradient="from-red-500/10 to-orange-500/10"
                            >
                                <div className="h-20 w-20 rounded-lg bg-red-500/20" />
                            </ComponentShowcard>
                            <ComponentShowcard
                                title="Card 2"
                                description="Second card in the grid"
                                href="#"
                                gradient="from-blue-500/10 to-cyan-500/10"
                            >
                                <div className="h-20 w-20 rounded-lg bg-blue-500/20" />
                            </ComponentShowcard>
                        </ShowcardGrid>
                    </div>
                </div>

                {/* Badges */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Badges</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ComponentShowcard
                            title="Success Badge"
                            description="Using success variant"
                            href="#"
                            badge="New"
                            badgeVariant="success"
                            size="sm"
                        >
                            <Sparkles className="h-8 w-8 text-green-500" />
                        </ComponentShowcard>
                        <ComponentShowcard
                            title="Info Badge"
                            description="Using info variant"
                            href="#"
                            badge="Popular"
                            badgeVariant="info"
                            size="sm"
                        >
                            <Sparkles className="h-8 w-8 text-blue-500" />
                        </ComponentShowcard>
                    </div>
                </div>

                {/* Copy Functionality */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Copy Code Button</h3>
                    <p className="text-sm text-muted-foreground">Pass <code>copyCode</code> prop to show a copy button on hover.</p>
                    <ComponentShowcard
                        title="Copy Me"
                        description="Hover over the preview area to see the copy button"
                        href="#"
                        copyCode="npm install super-package"
                    >
                        <div className="flex items-center gap-2 text-sm font-mono bg-background/50 p-2 rounded border border-border/50">
                            <Terminal className="h-4 w-4" />
                            npm install super-package
                        </div>
                    </ComponentShowcard>
                </div>
            </section>
            <ComponentSource filePath="/components/ui/component-showcard.tsx" />

            {/* Props */}
            <DocsProps
                props={[
                    {
                        name: "title",
                        type: "string",
                        description: "The title of the card",
                        required: true,
                    },
                    {
                        name: "description",
                        type: "string",
                        description: "A short description displayed below the title",
                        required: true,
                    },
                    {
                        name: "href",
                        type: "string",
                        description: "Link destination for the card action",
                    },
                    {
                        name: "gradient",
                        type: "string",
                        defaultValue: "from-blue-500/10 to-purple-500/10",
                        description: "Tailwind gradient classes for the preview background",
                    },
                    {
                        name: "badge",
                        type: "string",
                        description: "Text to display in the badge",
                    },
                    {
                        name: "badgeVariant",
                        type: "'default' | 'success' | 'warning' | 'info'",
                        defaultValue: "default",
                        description: "Visual style of the badge",
                    },
                    {
                        name: "copyCode",
                        type: "string",
                        description: "Text content to be copied when copy button is clicked",
                    },
                    {
                        name: "animate",
                        type: "boolean",
                        defaultValue: "true",
                        description: "Enable entrance animations",
                    },
                    {
                        name: "animationDelay",
                        type: "number",
                        defaultValue: "0",
                        description: "Delay in seconds for the entrance animation",
                    },
                ]}
            />
        </div>
    );
}
