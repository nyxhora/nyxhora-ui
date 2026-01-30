import { Metadata } from "next";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CodeBlockWrapper, DocsHeader, DocsPreview } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Textarea",
    description: "A multi-line text input component.",
};

export default function TextareaDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader title="Textarea" description="A multi-line text input component." />

            <DocsPreview
                title="Preview"
                previewCode={<Textarea placeholder="Type your message here." className="w-[350px]" />}
                code={`<Textarea placeholder="Type your message here." />`}
            />

            <CodeBlockWrapper
                title="Usage"
                code={`import { Textarea } from "@/components/ui/textarea"

export default function MyComponent() {
  return <Textarea placeholder="Enter your message..." />
}`}
                language="tsx"
            />

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                <DocsPreview
                    variant="With Label"
                    previewCode={
                        <div className="grid w-full max-w-sm gap-1.5">
                            <Label htmlFor="message">Your Message</Label>
                            <Textarea id="message" placeholder="Type here." />
                        </div>
                    }
                    code={`<Label htmlFor="message">Your Message</Label>
<Textarea id="message" placeholder="Type here." />`}
                />

                <DocsPreview
                    variant="Disabled"
                    previewCode={<Textarea disabled placeholder="Disabled" className="w-[350px]" />}
                    code={`<Textarea disabled placeholder="Disabled" />`}
                />
            </section>
        </div>
    );
}
