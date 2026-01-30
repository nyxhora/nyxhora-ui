import { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, Lock } from "lucide-react";
import { CodeBlockWrapper, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Input",
    description: "Displays a form input field or a component that looks like an input field.",
};

export default function InputDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader title="Input" description="Displays a form input field or a component that looks like an input field." />

            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="w-full max-w-sm space-y-4">
                        <Input type="email" placeholder="Email" />
                    </div>
                }
                code={`<Input type="email" placeholder="Email" />`}
            />

            <CodeBlockWrapper
                title="Installation"
                code={`npm install @radix-ui/react-slot`}
                language="bash"
            />

            <CodeBlockWrapper
                title="Usage"
                code={`import { Input } from "@/components/ui/input"

export default function MyComponent() {
  return <Input type="text" placeholder="Enter text..." />
}`}
                language="tsx"
            />

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                <DocsPreview
                    variant="Default"
                    previewCode={<Input placeholder="Default input" />}
                    code={`<Input placeholder="Default input" />`}
                />

                <DocsPreview
                    variant="With Label"
                    previewCode={
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" placeholder="Email" />
                        </div>
                    }
                    code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>`}
                />

                <DocsPreview
                    variant="Disabled"
                    previewCode={<Input disabled placeholder="Disabled input" />}
                    code={`<Input disabled placeholder="Disabled input" />`}
                />

                <DocsPreview
                    variant="With Icon"
                    previewCode={
                        <div className="relative w-full max-w-sm">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input className="pl-10" placeholder="Search..." />
                        </div>
                    }
                    code={`<div className="relative w-full max-w-sm">
  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
  <Input className="pl-10" placeholder="Search..." />
</div>`}
                />

                <DocsPreview
                    variant="Password"
                    previewCode={
                        <div className="relative w-full max-w-sm">
                            <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input type="password" className="pl-10" placeholder="Password" />
                        </div>
                    }
                    code={`<div className="relative w-full max-w-sm">
  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
  <Input type="password" className="pl-10" placeholder="Password" />
</div>`}
                />

                <DocsPreview
                    variant="File Input"
                    previewCode={
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="picture">Picture</Label>
                            <Input id="picture" type="file" />
                        </div>
                    }
                    code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="picture">Picture</Label>
  <Input id="picture" type="file" />
</div>`}
                />
            </section>

            <DocsProps
                props={[
                    { name: "type", type: "string", defaultValue: '"text"', description: "The type of input" },
                    { name: "placeholder", type: "string", description: "Placeholder text" },
                    { name: "disabled", type: "boolean", defaultValue: "false", description: "Disable the input" },
                    { name: "className", type: "string", description: "Additional CSS classes" },
                ]}
            />
        </div>
    );
}
