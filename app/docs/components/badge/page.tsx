import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Badge",
    description: "Displays a badge or a component that looks like a badge.",
};

export default function BadgeDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader title="Badge" description="Displays a badge or a component that looks like a badge." />

            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="flex flex-wrap gap-2">
                        <Badge>Badge</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="outline">Outline</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                    </div>
                }
                code={`<Badge>Badge</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`}
            />

            <CodeBlockWrapper
                title="Usage"
                code={`import { Badge } from "@/components/ui/badge"

export default function MyComponent() {
  return <Badge>Badge</Badge>
}`}
                language="tsx"
            />

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Variants</h2>

                <DocsPreview
                    variant="Default"
                    previewCode={<Badge>Default</Badge>}
                    code={`<Badge>Default</Badge>`}
                />

                <DocsPreview
                    variant="Secondary"
                    previewCode={<Badge variant="secondary">Secondary</Badge>}
                    code={`<Badge variant="secondary">Secondary</Badge>`}
                />

                <DocsPreview
                    variant="Outline"
                    previewCode={<Badge variant="outline">Outline</Badge>}
                    code={`<Badge variant="outline">Outline</Badge>`}
                />

                <DocsPreview
                    variant="Destructive"
                    previewCode={<Badge variant="destructive">Destructive</Badge>}
                    code={`<Badge variant="destructive">Destructive</Badge>`}
                />

                <DocsPreview
                    variant="Custom Colors"
                    previewCode={
                        <div className="flex flex-wrap gap-2">
                            <Badge className="bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20">Success</Badge>
                            <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 hover:bg-yellow-500/20">Warning</Badge>
                            <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 hover:bg-blue-500/20">Info</Badge>
                            <Badge className="bg-purple-500/10 text-purple-500 border-purple-500/20 hover:bg-purple-500/20">New</Badge>
                        </div>
                    }
                    code={`<Badge className="bg-green-500/10 text-green-500 border-green-500/20">Success</Badge>
<Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">Warning</Badge>
<Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">Info</Badge>
<Badge className="bg-purple-500/10 text-purple-500 border-purple-500/20">New</Badge>`}
                />
            </section>
            <CodeBlockWrapper
                title="Installation"
                code={`npx shadcn@latest add badge`}
                language="bash"
            />

            <DocsProps
                props={[
                    {
                        name: "variant",
                        type: '"default" | "secondary" | "outline" | "destructive"',
                        defaultValue: "default",
                        description: "The visual style of the badge",
                    },
                    {
                        name: "className",
                        type: "string",
                        description: "Additional CSS classes",
                    },
                ]}
            />
        </div>
    );
}
