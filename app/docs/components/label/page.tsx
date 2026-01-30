import { Metadata } from "next";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Label",
    description: "Renders an accessible label for form controls.",
};

export default function LabelDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader title="Label" description="Renders an accessible label for form controls." />

            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Email" />
                    </div>
                }
                code={`<Label htmlFor="email">Email</Label>\n<Input type="email" id="email" placeholder="Email" />`}
            />

            <CodeBlockWrapper
                title="Usage"
                code={`import { Label } from "@/components/ui/label"

export default function MyComponent() {
  return <Label htmlFor="field">Label</Label>
}`}
                language="tsx"
            />

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                <DocsPreview
                    variant="With Required Indicator"
                    previewCode={
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="name">Name <span className="text-red-500">*</span></Label>
                            <Input id="name" placeholder="Enter your name" required />
                        </div>
                    }
                    code={`<Label htmlFor="name">Name <span className="text-red-500">*</span></Label>\n<Input id="name" required />`}
                />
                <CodeBlockWrapper
                    title="Dependency"
                    code={`npm install @radix-ui/react-label`}
                    language="tsx"
                />
            </section>
        </div>
    );
}
