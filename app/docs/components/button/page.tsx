import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Button",
    description: "Displays a button or a component that looks like a button.",
};

export default function ButtonDocsPage() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <DocsHeader title="Button" description="Displays a button or a component that looks like a button." />

            {/* Preview */}
            <DocsPreview
                title="Preview"
                previewCode={<Button>Button</Button>}
                code={`<Button>Button</Button>`}
            />
            <DocsPreview variant="with variants" previewCode={<div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
            </div>} code={`<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`} />

            {/* Installation */}
            <CodeBlockWrapper
                title="Requirements"
                code={`npm install @radix-ui/react-slot class-variance-authority`}
                language="cmd"
            />

            {/* Usage */}
            <CodeBlockWrapper
                title="Usage"
                code={`import { Button } from "@/components/ui/button"

export default function MyComponent() {
  return <Button>Click me</Button>
}`}
                language="tsx"
            />

            {/* Variants */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Variants</h2>

                {/* Default */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Default</h3>
                    <ComponentPreview
                        preview={<Button>Default Button</Button>}
                        code={`<Button>Default Button</Button>`}
                    />
                </div>

                {/* Secondary */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Secondary</h3>
                    <ComponentPreview
                        preview={<Button variant="secondary">Secondary</Button>}
                        code={`<Button variant="secondary">Secondary</Button>`}
                    />
                </div>

                {/* Destructive */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Destructive</h3>
                    <ComponentPreview
                        preview={<Button variant="destructive">Destructive</Button>}
                        code={`<Button variant="destructive">Destructive</Button>`}
                    />
                </div>

                {/* Outline */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Outline</h3>
                    <ComponentPreview
                        preview={<Button variant="outline">Outline</Button>}
                        code={`<Button variant="outline">Outline</Button>`}
                    />
                </div>

                {/* Ghost */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Ghost</h3>
                    <ComponentPreview
                        preview={<Button variant="ghost">Ghost</Button>}
                        code={`<Button variant="ghost">Ghost</Button>`}
                    />
                </div>

                {/* Link */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Link</h3>
                    <ComponentPreview
                        preview={<Button variant="link">Link</Button>}
                        code={`<Button variant="link">Link</Button>`}
                    />
                </div>
            </section>

            {/* Sizes */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Sizes</h2>
                <ComponentPreview
                    preview={
                        <div className="flex flex-wrap items-center gap-4">
                            <Button size="sm">Small</Button>
                            <Button size="default">Default</Button>
                            <Button size="lg">Large</Button>
                            <Button size="icon">
                                <Code2 className="h-4 w-4" />
                            </Button>
                        </div>
                    }
                    code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">
  <Icon className="h-4 w-4" />
</Button>`}
                />
            </section>

            {/* Props */}
            <DocsProps 
            props={[
                {
                    name: "variant",
                    type: "string",
                    defaultValue: "default",
                    description: "The visual style of the button",
                },
                {
                    name: "size",
                    type: "string",
                    defaultValue: "default",
                    description: "The size of the button",
                },
                {
                    name: "asChild",
                    type: "boolean",
                    defaultValue: "false",
                    description: "Render as child element",
                },
                {
                    name: "disabled",
                    type: "boolean",
                    defaultValue: "false",
                    description: "Disable the button",
                },
            ]}
            />
        </div>
    );
}

